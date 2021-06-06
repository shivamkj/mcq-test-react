import Loader from "../Loader";
import { useState } from "react";
import { reset } from "canvas-confetti";

const exams = [
  { id: 1, name: "NET/SET" },
  { id: 2, name: "UP PGT" },
  { id: 3, name: "UP GIC" },
  { id: 4, name: "UP Junior Asst, Teacher" },
  { id: 5, name: "UP TGT" },
  { id: 6, name: "KVS/NVS PGT/TGT" },
  { id: 7, name: "DSSB PGT/TGT" },
  { id: 8, name: "Uttrakhand L.T Grade" },
  { id: 9, name: "UP GIC L.T Grade" },
  { id: 10, name: "Uttrakhand PGT" },
  { id: 11, name: "UPHESC (Asst. Prof.)" },
];

const categories = [
  { id: 1, name: "Shakespeare" },
  { id: 2, name: "Milton" },
  { id: 3, name: "WordsWorth" },
  { id: 4, name: "Robert Frost" },
  { id: 5, name: "John Keats" },
  { id: 6, name: "Walt Whitman" },
  { id: 7, name: "P.B Shelley" },
  { id: 8, name: "A.L Tennyson" },
  { id: 9, name: "Matthew Arnold" },
  { id: 10, name: "T.S Eliot" },
  { id: 11, name: "W.B Yeats" },
  { id: 12, name: "Pope" },
  { id: 13, name: "Dry den" },
];

const timeLimit = [10, 15, 20, 30, 40, 45, 50, 60];

const CheckBox = ({ id, name, onChange }) => (
  <>
    <input
      type="checkbox"
      id={id}
      name={id}
      className="mr-1"
      value={name}
      onChange={onChange}
    />
    <label htmlFor={id} className="mr-4">
      {name}
    </label>
  </>
);

const Input = ({ name, placeholder, ...restProps }) => (
  <>
    <label htmlFor={name}>{placeholder}</label>
    <input
      name={name}
      id={name}
      className="mb-3 px-2 border border-indigo-800 rounded"
      {...restProps}
    />
  </>
);

const UploadInputBox = () => {
  const [uploadStatus, setUploadStatus] = useState(null);

  const onUpload = () => {
    setUploadStatus("UPLOADING");
    setTimeout(() => {
      setUploadStatus("SUCCESS");
    }, 3000);
  };

  if (uploadStatus == null)
    return (
      <div className="flex flex-col mt-8 m-2">
        <Input
          name="name"
          placeholder="Test Name"
          type="text"
          onChange={(e) => console.log(e.target.value)}
        />
        <Input
          name="key"
          placeholder="Key"
          type="password"
          onChange={(e) => console.log(e.target.value)}
        />
        <div>
          <h4 className="font-bold mt-4">Exams</h4>
          {exams.map((exam) => (
            <CheckBox
              name={exam.name}
              id={"e" + exam.id}
              onChange={(e) => console.log(e.target.value, e.target.id)}
            />
          ))}
        </div>
        <div>
          <h4 className="mt-3 font-bold">Category</h4>
          <select
            name="category"
            className="bg-white p-2 border border-indigo-800 rounded"
            onChange={(e) => console.log(e.target.value)}
          >
            {categories.map((category) => (
              <option value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
        <div>
          <h4 className="inline-block font-bold mr-2 mt-3">Time Limit</h4>
          <select
            name="time-limit"
            className="bg-white p-2 border border-indigo-800 rounded"
            onChange={(e) => console.log(e.target.value)}
          >
            {timeLimit.map((time) => (
              <option value={time}>{time}</option>
            ))}
          </select>
        </div>
        <div>
          <h4 className="inline-block mr-3 mt-4 font-bold">Negative Marking</h4>
          <CheckBox
            id="negative-marking"
            onChange={(e) => console.log(e.target.value, e.target.id)}
          />
        </div>
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

export default UploadInputBox;
