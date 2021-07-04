import React, { useState, useRef } from "react";
import Head from "next/head";
import { Input } from "../../components/admin/InputComponents";
import Loader from "../../components/Loader";
import { print } from "../../utils/print/print";

const STATES = {
  LOADING: 0,
  FINISHED: 1,
  INPUT: 2,
};

const Print = () => {
  const input = useRef({});
  const [state, setState] = useState(STATES.INPUT);
  const [testData, setTestData] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    if (input.current.key != "test#print") return;
    setState(STATES.LOADING);
    const id = input.current.id;
    fetch("https://storage.googleapis.com/mcq-test/" + id + ".json")
      .then((response) => response.json())
      .then((response) => {
        setTestData(response);
        setState(STATES.FINISHED);
      });
  };

  if (state == STATES.LOADING) return <Loader message="Loading" />;

  return (
    <>
      <Head>
        <title>Print Test PDF</title>
        <script
          src="https://github.com/mde/ejs/releases/download/v3.0.2/ejs.min.js"
          async
        ></script>
      </Head>

      <div className="container flex justify-center items-center flex-col p-2">
        {state == STATES.INPUT ? (
          <form className="flex flex-col mt-8 m-2" onSubmit={onSubmit}>
            <Input
              name="id"
              placeholder="Test ID"
              type="text"
              required
              onChange={(v) => (input.current.id = v.target.value)}
            />
            <Input
              name="password"
              placeholder="Key"
              type="password"
              required
              onChange={(v) => (input.current.key = v.target.value)}
            />
            <button
              className="mt-4 py-2 px-6 bg-indigo-600 rounded text-white"
              type="submit"
            >
              Print
            </button>
          </form>
        ) : (
          <>
            <div className="font-semibold">
              <span className="text-gray-500 pr-3">TEST NAME: </span>
              <span>{testData.examInfo.testName}</span>
            </div>

            <div className="font-semibold">
              <span className="text-gray-500 pr-3">TOTAL QUESTIONS: </span>
              <span>{testData.examInfo.totalQuestions}</span>
            </div>

            <button
              className="mt-4 py-2 px-6 bg-indigo-600 rounded text-white"
              onClick={() => print(testData, true)}
            >
              Print with answer
            </button>
            <button
              className="mt-2 py-2 px-6 rounded text-indigo-600"
              onClick={() => print(testData, false)}
            >
              Print without answer
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Print;
