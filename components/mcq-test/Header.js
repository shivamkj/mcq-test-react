import { useState, useEffect, useRef } from "react";

const Header = ({ TIME_LIMIT, isFinished, onFinish }) => {
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const timeInterval = useRef(null);

  useEffect(() => {
    timeInterval.current = setInterval(
      () => setTimeLeft((timeLeft) => timeLeft - 1),
      1000
    );
    return () => clearInterval(timeInterval.current);
  }, []);

  useEffect(() => {
    if (timeLeft == 0) {
      clearInterval(timeInterval.current);
      if (isFinished != true) onFinish();
    }
  }, [timeLeft]);

  useEffect(() => {
    if (isFinished == true) {
      clearInterval(timeInterval.current);
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [isFinished]);

  return (
    <div className="fixed top-0 w-full h-16 flex justify-between px-4 shadow-md z-10 bg-white">
      <div className="pt-3">
        <img src="logo.png" className="inline h-10 w-10 mr-2" alt="logo" />
        <span className="text-lg font-semibold">Target With Sk Sir</span>
      </div>
      <div id="timer" className="p-1 pt-4 font-semibold text-xl align-middle">
        {Math.floor(timeLeft / 60)} : {timeLeft % 60}
      </div>
    </div>
  );
};

export default Header;
