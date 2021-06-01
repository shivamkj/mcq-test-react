const Loader = ({ message }) => {
  return (
    <div id="loader-wrapper">
      <div id="loader">
        <div id="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1 id="message">{message || "UPLOADING"}</h1>
      </div>
    </div>
  );
};

export default Loader;
