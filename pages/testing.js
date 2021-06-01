import { useEffect } from "react";
import showToast from "../utils/toast";

function Test() {
  return (
    <div>
      <div>Hello React</div>
      <button
        className="p-4 bg-indigo-600"
        onClick={() => showToast("gg", "SUCCESS")}
      >
        Show Toast
      </button>
    </div>
  );
}

export default Test;
