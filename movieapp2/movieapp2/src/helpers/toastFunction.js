import { toast, Bounce } from "react-toastify";
export const toastFunction = (error) => {
  toast.info(`An error has occured:  ${error}`, {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};
