import { useRef, useState } from "react";
import Head from "next/head";
import Loader from "../../components/Loader";
import { Input } from "../../components/admin/InputComponents";
import Table from "../../components/admin/Table";
import showToast from "../../utils/toast";

const Result = () => {
  const [submitStatus, setSubmitStatus] = useState(false);
  const input = useRef({});

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus("UPLOADING");
    fetch(`http://localhost:8080/get-result?testId=${input.current.id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setSubmitStatus(res);
      });
  };

  if (submitStatus == "UPLOADING") return <Loader message="Loading" />;

  return (
    <>
      <Head>
        <title>Result</title>
      </Head>

      <div className="container flex justify-center items-center flex-col p-2">
        {submitStatus ? (
          <div className="text-left sm:text-center">
            <div className="p-2 mb-4 bg-indigo-50 text-indigo-800 border border-indigo-800 rounded">
              TARGET WITH SK SIR
            </div>

            <div className="font-semibold">
              <span className="text-gray-500 pr-3">TEST NAME: </span>
              <span>{submitStatus.testName}</span>
            </div>

            <div className="font-semibold">
              <span className="text-gray-500 pr-3">
                TIME LIMIT PER QUESTION:
              </span>
              <span>{submitStatus.timeLimit}</span>
            </div>

            <div className="font-semibold">
              <span className="text-gray-500 pr-3">TOTAL QUESTIONS: </span>
              <span>{submitStatus.totalQuestions}</span>
            </div>

            <div className="font-semibold">
              <span className="text-gray-500 pr-3">NEGATIVE MARKING: </span>
              <span>{submitStatus.negitiveMarking ? "-1" : "0"}</span>
            </div>

            <div className="font-semibold">
              <span className="text-gray-500 pr-3">CATEGORY NAME: </span>
              <span>{submitStatus.category}</span>
            </div>

            <Table rows={submitStatus.userResponse} />
          </div>
        ) : (
          <form className="flex flex-col mt-8 m-2" onSubmit={onSubmit}>
            <Input
              name="is"
              placeholder="Test ID"
              type="text"
              required
              onChange={(v) => (input.current.id = v.target.value)}
            />
            <Input
              name="key"
              placeholder="Key"
              type="password"
              required
              onChange={(v) => (input.current.key = v.target.value)}
            />
            <button
              className="mt-4 py-2 px-6 bg-indigo-600 rounded text-white"
              type="submit"
            >
              Get Result
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default Result;
