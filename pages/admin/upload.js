import { useRef, useState } from "react";
import Head from "next/head";
import UploadInputBox from "../../components/admin/UploadInputBox";
import Loader from "../../components/Loader";
import parser from "../../utils/parser";
import showToast from "../../utils/toast";
import postData from "../../utils/postData";

const Upload = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);
  const textareaRef = useRef();

  const onSubmit = () => {
    try {
      const parsered = parser(textareaRef.current.value);
      textareaRef.current = parsered;
      setSubmitted(true);
    } catch (err) {
      showToast(err, "ERROR");
    }
  };

  const onUpload = async (res, key) => {
    setUploadStatus("UPLOADING");
    const submitData = {
      questions: textareaRef.current.questions,
      examInfo: {
        ...res,
        totalQuestions: textareaRef.current.questions.length,
      },
    };
    const data = await postData(
      "https://asia-south1-theta-outrider-310911.cloudfunctions.net/upload-test",
      submitData,
      key
    );
    if (data == null) {
      showToast("Error while Uploading data", "ERROR");
      setUploadStatus("ERROR");
    } else {
      setUploadStatus(data);
    }
  };

  const lower = () => {
    if (isSubmitted == false)
      return (
        <button
          className="mt-4 py-2 px-6 bg-indigo-600 rounded text-white"
          onClick={onSubmit}
        >
          Submit
        </button>
      );
    else if (isSubmitted == true && uploadStatus == null)
      return <UploadInputBox onUpload={onUpload} />;
    else if (uploadStatus == "UPLOADING") return <Loader message="Uploading" />;
    else if (typeof uploadStatus == "object")
      return (
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-2xl font-semibold mt-8 text-center p-2 mb-3">
            UPLOADED SUCCESSFULLY
          </h1>
          <a
            href={`/interactive-mcq?id=${uploadStatus.id}`}
            target="_blank"
            className="text-xl text-center text-indigo-600"
          >
            Go Test Page
          </a>
        </div>
      );
    else if (uploadStatus == "ERROR")
      return (
        <div className="text-2xl font-semibold mt-8 text-center p-2">
          ERROR OCCURED WHILE UPLOADING
        </div>
      );
  };

  return (
    <>
      <Head>
        <title>Upload Test</title>
      </Head>

      <div className="container flex justify-center items-center flex-col">
        <h6 className="my-3 text-sm font-semibold">
          Paste your content in the below box.
        </h6>
        <textarea
          className="w-full m-1 bg-gray-800 text-white rounded"
          style={{ height: isSubmitted ? "60vh" : "80vh" }}
          ref={textareaRef}
          disabled={isSubmitted}
          rows="4"
          cols="50"
        />
        {lower()}
      </div>
    </>
  );
};

export default Upload;
