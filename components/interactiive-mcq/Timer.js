import { useState, useEffect, useRef } from "react";

let onePercent, timeInterval;

// const clear

const Timer = ({ TIME_LIMIT, isFinished, onFinish, noteTimeTaken }) => {
  const [timeLeft, setTimeLeft] = useState(100); // in percentage
  // const timeInterval = useRef(null);
  // const onePercent = useRef(parseInt((1 / TIME_LIMIT) * 100));

  useEffect(() => {
    onePercent = parseInt((1 / TIME_LIMIT) * 100);
  }, []);

  // useEffect(() => {
  //   if (timeLeft == 0)
  //     setTimeout(() => {
  //       clearInterval(timeInterval.current);
  //       if (isFinished != true) onFinish();
  //     }, 1000);
  // }, [timeLeft]);

  useEffect(() => {
    if (isFinished == true) {
      noteTimeTaken(TIME_LIMIT * (timeLeft / 100) || TIME_LIMIT);
      clearInterval(timeInterval);
    } else {
      setTimeLeft(100);
      const intervalFun = () =>
        setTimeLeft((timeLeft) => {
          if (timeLeft == 0) {
            clearInterval(timeInterval);
            if (isFinished != true) onFinish();
            return 0;
          }
          return timeLeft - onePercent;
        });
      timeInterval = setInterval(intervalFun, 1000);
    }
    return () => clearInterval(timeInterval.current);
  }, [isFinished]);

  return (
    <div
      className="h-6 z-10 bg-indigo-500"
      style={{
        transform: `translateX(-${timeLeft}%)`,
        transition: "transform 1s linear",
        backgroundColor: timeLeft < 10 ? "red" : "",
      }}
    >
      {timeLeft}
    </div>
  );
};

export default Timer;
