const Modal = ({ handleSubmit, show }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-container">
        <h5>Welcome to Target With SK Sir</h5>
        <form id="form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="number"
              className="form-control"
              name="mobile"
              placeholder="9993254000"
              required
            />
            <small className="form-text text-muted">
              We'll never share your email and mobile with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              placeholder="abc@mail.com"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="send-result"
            />
            <label className="form-check-label" htmlFor="send-result">
              Send my Result via sms and email.
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            id="submitForm"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
