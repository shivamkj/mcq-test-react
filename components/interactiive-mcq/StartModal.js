import { useRef } from "react";
import Modal from "../Modal";

const NAME = "name";

const StartModal = ({ examInfo, onStart }) => {
  const name = useRef(localStorage.getItem(NAME));

  const onSubmit = () => {
    if (name.current == null || name.current == "") {
      alert("Please enter Name");
    } else {
      localStorage.setItem(NAME, name.current);
      onStart();
    }
  };

  return (
    <Modal isOpen={true}>
      <div className="text-left p-4 sm:p-0 sm:text-center">
        <div className="p-2 mb-4 bg-indigo-50 text-indigo-800 border border-indigo-800 rounded">
          TARGET WITH SK SIR
        </div>

        <div className="font-semibold">
          <span className="text-gray-500 pr-3">TEST NAME:-</span>
          <span>{examInfo.testName}</span>
        </div>

        <div className="font-semibold">
          <span className="text-gray-500 pr-3">TIME LIMIT PER QUESTION:-</span>
          <span>{examInfo.timeLimit}</span>
        </div>

        <div className="font-semibold">
          <span className="text-gray-500 pr-3">TOTAL QUESTIONS:-</span>
          <span>{examInfo.totalQuestions}</span>
        </div>

        <div className="font-semibold">
          <span className="text-gray-500 pr-3">NEGATIVE MARKING:-</span>
          <span>{examInfo.negitiveMarking ? "-1" : "0"}</span>
        </div>

        <div className="font-semibold">
          <span className="text-gray-500 pr-3">CATEGORY NAME:-</span>
          <span>{examInfo.category}</span>
        </div>

        <input
          name="name"
          defaultValue={name.current}
          placeholder="Your Name"
          className="w-full sm:w-1/2 mt-3 mr-2 p-2 border border-indigo-800 rounded"
          onChange={(e) => (name.current = e.target.value)}
        />

        <button
          onClick={onSubmit}
          className="px-4 py-2 mt-4 bg-indigo-600 text-white rounded"
        >
          Start
        </button>
      </div>
    </Modal>
  );
};
export default StartModal;
