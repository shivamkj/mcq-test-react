import { toast, Flip } from "react-toastify";

toast.configure();

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  transition: Flip,
};

const showToast = (message, type) => {
  if (type == "INFO") toast.info(message, toastConfig);
  else if (type == "SUCCESS") toast.success(message, toastConfig);
  else if (type == "ERROR") toast.error(message, toastConfig);
  else throw Error("Unkonown type of toast passed");
};

export default showToast;
