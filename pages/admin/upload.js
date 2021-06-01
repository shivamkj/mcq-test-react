import { useRef, useState } from "react";
import Head from "next/head";
import Loader from "../../components/Loader";
import parser from "../../utils/parser";
import showToast from "../../utils/toast";

const UploadBox = () => {
  const [uploadStatus, setUploadStatus] = useState(null);

  const onUpload = () => {
    setUploadStatus("UPLOADING");
    setTimeout(() => {
      setUploadStatus("SUCCESS");
    }, 3000);
  };

  if (uploadStatus == null)
    return (
      <div className="flex flex-col mt-8">
        <label htmlFor="name">Test name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="mb-3 border border-gray-600 rounded"
        />
        <label htmlFor="key">Key:</label>
        <input
          type="password"
          id="key"
          name="key"
          className="mb-3 border border-gray-600 rounded"
        />
        <button
          className="mt-4 py-2 px-6 bg-indigo-600 rounded text-white"
          onClick={onUpload}
        >
          Upload
        </button>
      </div>
    );
  else if (uploadStatus == "UPLOADING") return <Loader message="Uploading" />;
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
  else throw Error("Unknown Upload status");
};

const Upload = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const textareaRef = useRef();

  const onSubmit = () => {
    // console.log()
    try {
      const parsered = parser(textareaRef.current.value);
      console.log(parsered);
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
          <UploadBox />
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
