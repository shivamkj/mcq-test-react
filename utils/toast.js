import { toast, Flip } from "react-toastify";

const toastConfig = {
  position: "bottom-left",
  autoClose: 800,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  transition: Flip,
};

const showToast = (message, type) => {
  if (type == "INFO") toast.info(message, toastConfig);
  else if (type == "SUCCESS") toast.success(message, toastConfig);
  else if (type == "ERROR") toast.error(message, toastConfig);
  else throw Error("Unkonown type of toast passed");
};

export default showToast;
