import { useRef, useState } from "react";
import Head from "next/head";
import UploadInputBox from "../../components/admin/UploadInputBox";
import parser from "../../utils/parser";
import showToast from "../../utils/toast";
import postData from "../../utils/postData";

const Upload = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(false);
  const textareaRef = useRef();

  const onSubmit = () => {
    try {
      const parsered = parser(textareaRef.current.value);
      console.log(parsered);
      setSubmitted(true);
    } catch (err) {
      showToast(err, "ERROR");
    }
  };

  const onUpload = async (res, key) => {
    setUploadStatus("UPLOADING");
    const submitData = {
      questions: textareaRef.current.value.questions,
      examInfo: { res },
    };
    const data = await postData(
      "https://asia-south1-theta-outrider-310911.cloudfunctions.net/upload-test",
      submitData,
      key
    );
    if (data == null) {
      showToast("Error while Uploading data", "ERROR");
      setUploadStatus("ERROR");
      return;
    } else {
      setUploadStatus("SUCCESS");
    }
  };

  if (uploadStatus == "UPLOADING") return <Loader message="Uploading" />;
  else if (uploadStatus == "SUCCESS")
    return (
      <div className="flex justify-center items-center flex-col">
        <h1 id="message">UPLOADED SUCCESSFULLY</h1>
        <button class="btn">
          <a id="test-link" href="#" target="_blank">
            Test Page Link
          </a>
        </button>

        <button className="mt-2 py-2 px-6 bg-indigo-600 rounded text-white">
          Print with answer
        </button>
        <button id="print" class="mt-2 py-2 px-6 rounded text-indigo-600">
          Print without answer
        </button>
      </div>
    );

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
        {isSubmitted ? (
          <UploadInputBox onUpload={onUpload} />
        ) : (
          <button
            className="mt-4 py-2 px-6 bg-indigo-600 rounded text-white"
            onClick={onSubmit}
          >
            Submit
          </button>
        )}
      </div>
    </>
  );
};

export default Upload;
