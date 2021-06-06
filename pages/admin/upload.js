import { useRef, useState } from "react";
import Head from "next/head";
import UploadInputBox from "../../components/admin/UploadInputBox";
import parser from "../../utils/parser";
import showToast from "../../utils/toast";

const Upload = () => {
  const [isSubmitted, setSubmitted] = useState(false);
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
          <UploadInputBox />
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
