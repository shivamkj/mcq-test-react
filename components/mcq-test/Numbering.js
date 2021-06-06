import { useState } from "react";

const Numbering = ({ total, onNumClick }) => {
  const [isVisible, setVisible] = useState(() => {
    const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    return width > 768 ? true : false;
  });

  return (
    <>
      <div
        className="invisible md:visible md:w-1/3 fixed bottom-0 right-0 md:top-1/2 md:transform md:-translate-y-1/2 bg-gray-50 md:bg-transparent shadow-md rounded z-20 p-2 overflow-y-scroll"
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        <h4 className="border-b-2 border-indigo-600 mb-2 pb-1 lg:text-2xl">
          Questions
        </h4>
        <span>
          {Array(total)
            .fill(0)
            .map((_, index) => (
              <div
                className="inline-block w-12 text-center p-2 m-2 font-semibold bg-gray-50 rounded shadow-md"
                key={`N${index}`}
                onClick={onNumClick}
              >
                {index + 1}
              </div>
            ))}
        </span>
      </div>
      <div
        className="fixed md:hidden right-4 bottom-4 z-30"
        onClick={() => setVisible(!isVisible)}
      >
        Numbering
      </div>
    </>
  );
};

export default Numbering;