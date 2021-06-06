import { createPortal } from "react-dom";

const Modal = ({ children, closeModel, isOpen }) => {
  if (!process.browser) return null;
  const modalDiv = document.getElementById("modal");
  return createPortal(
    <div
      className="fixed z-30 top-0 left-0 h-full w-full flex justify-center items-center"
      style={{
        visibility: isOpen ? "visible" : "hidden",
      }}
    >
      <div
        className="relative h-full w-full z-20 sm:p-6 bg-white md:rounded-md"
        id="modal-container"
      >
        {children}
      </div>
      <div
        onClick={closeModel}
        className="absolute h-full w-full top-0 left-0 bg-black opacity-50"
      />
    </div>,
    modalDiv
  );
};

export default Modal;
