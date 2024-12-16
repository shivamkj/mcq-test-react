import { useRef } from "react";
import { Input, CheckBox } from "./InputComponents";
import Select from "react-select";
import showToast from "../../utils/toast";
import { CATEGORIES, EXAMS } from "../../utils/options";

const TIME_LIMITS = [10, 15, 20, 30, 40, 45, 50, 60];

const UploadInputBox = ({ onUpload }) => {
  const res = useRef({
    exams: null,
    category: null,
    testName: null,
    timeLimit: null,
    negitiveMarking: false,
  });
  const key = useRef(null);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (res.current.exams == null) {
      showToast("Please select exam name", "ERROR");
      return;
    }
    onUpload(res.current, key.current);
  };

  return (
    <form className="flex flex-col mt-8 m-2" onSubmit={onFormSubmit}>
      <Input
        name="name"
        placeholder="Test Name"
        type="text"
        required
        onChange={(e) => (res.current.testName = e.target.value)}
      />
      <Input
        name="key"
        placeholder="ID"
        type="password"
        required
        onChange={(v) => (key.current = v.target.value)}
      />
      <div>
        <h4 className="font-bold mt-4">Exams</h4>
        <Select
          onChange={(selectedOptions) => {
            res.current.exams = selectedOptions.map((v) => v.value);
          }}
          options={EXAMS}
          isMulti
          isSearchable={false}
        />
      </div>
      <div>
        <h4 className="mt-3 font-bold">Category</h4>
        <select
          name="category"
          className="bg-white p-2 border border-indigo-800 rounded"
          onChange={(e) => (res.current.category = e.target.value)}
          required
        >
          <option value="">Please select</option>
          {CATEGORIES.map((category, index) => (
            <option value={category} key={index}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h4 className="inline-block font-bold mr-2 mt-3">Time Limit</h4>
        <select
          name="time-limit"
          className="bg-white p-2 border border-indigo-800 rounded"
          onChange={(e) => (res.current.timeLimit = parseInt(e.target.value))}
          required
        >
          <option value="">Please select</option>
          {TIME_LIMITS.map((time, index) => (
            <option value={time} key={index}>
              {time}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h4 className="inline-block mr-3 mt-4 font-bold">Negative Marking</h4>
        <CheckBox
          id="negative-marking"
          onChange={() =>
            (res.current.negitiveMarking = !res.current.negitiveMarking)
          }
        />
      </div>
      <button
        className="mt-4 py-2 px-6 bg-indigo-600 rounded text-white"
        type="submit"
      >
        Upload
      </button>
    </form>
  );
};

export default UploadInputBox;
