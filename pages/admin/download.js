import { useRef, useState } from "react";
import Head from "next/head";
import Loader from "../../components/Loader";
import showToast from "../../utils/toast";
import { getUrl } from "../../utils/useFetch";
import { downloadTestContent } from "../../utils/parser/toDoc";

const Download = () => {
  const [loading, setLoading] = useState(null);
  const textareaRef = useRef();

  const onSubmit = async () => {
    try {
      setLoading(true);
      textareaRef.current.disabled = true;
      const testId = textareaRef.current.value;
      const res = await fetch(getUrl(testId));
      const testData = await res.json();
      console.log(testData);
      downloadTestContent(testData, testId);
    } catch (err) {
      console.log(err);
      showToast("Error fetching test, check ID & retry", "ERROR");
    } finally {
      setLoading(false);
      textareaRef.current.disabled = false;
    }
  };

  return (
    <>
      <Head>
        <title>Upload Test</title>
      </Head>

      {loading && <Loader />}

      <div className="container flex justify-center items-center flex-col">
        <h6 className="my-3 text-sm font-semibold">Enter Test ID</h6>
        <input className="w-full m-1 bg-gray-800 text-white rounded p-4" ref={textareaRef} />
        <button className="mt-4 py-2 px-6 bg-indigo-600 rounded text-white" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Download;
