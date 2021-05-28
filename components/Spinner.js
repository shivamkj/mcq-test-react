import React from "react";

const Spinner = () => {
  const preloader = {
    height: "100vh",
    width: "100%",
    background: "rgba(0, 0, 0, 0.4)",
    position: "fixed",
    left: 0,
    top: 0,
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 6,
  };

  return (
    <div id="preloader" style={preloader}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          margin: "auto",
          background: "rgba(255, 255, 255, 0)",
          display: "block",
          shapeRendering: "auto",
        }}
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle cx="84" cy="50" r="10" fill="#0051a2">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="0.3125s"
            calcMode="spline"
            keyTimes="0;1"
            values="12;0"
            keySplines="0 0.5 0.5 1"
            begin="0s"
          ></animate>
          <animate
            attributeName="fill"
            repeatCount="indefinite"
            dur="1.25s"
            calcMode="discrete"
            keyTimes="0;0.25;0.5;0.75;1"
            values="#0051a2;#89bff8;#408ee0;#1b75be;#0051a2"
            begin="0s"
          ></animate>
        </circle>
        <circle cx="16" cy="50" r="10" fill="#0051a2">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.25s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;12;12;12"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="0s"
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.25s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="0s"
          ></animate>
        </circle>
        <circle cx="50" cy="50" r="10" fill="#1b75be">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.25s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;12;12;12"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.3125s"
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.25s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.3125s"
          ></animate>
        </circle>
        <circle cx="84" cy="50" r="10" fill="#408ee0">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.25s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;12;12;12"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.625s"
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.25s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.625s"
          ></animate>
        </circle>
        <circle cx="16" cy="50" r="10" fill="#89bff8">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.25s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;12;12;12"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.9375s"
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.25s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.9375s"
          ></animate>
        </circle>
      </svg>
    </div>
  );
};

export default Spinner;
