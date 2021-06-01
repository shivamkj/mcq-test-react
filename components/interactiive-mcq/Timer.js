import { useState, useEffect, useRef } from "react";

const Timer = ({ TIME_LIMIT, isFinished, onFinish }) => {
  const [timeLeft, setTimeLeft] = useState(100); // in percentage
  const timeInterval = useRef(null);
  const onePercent = useRef(parseInt((1 / TIME_LIMIT) * 100));

  useEffect(() => {
    if (timeLeft == 0) {
      clearInterval(timeInterval.current);
      setTimeout(() => {
        if (isFinished != true) onFinish();
      }, 1000);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (isFinished == true) clearInterval(timeInterval.current);
    else {
      setTimeLeft(100);
      timeInterval.current = setInterval(
        () => setTimeLeft((timeLeft) => timeLeft - onePercent.current),
        1000
      );
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
    ></div>
  );
};

export default Timer;
