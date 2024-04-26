import { Toaster } from "react-hot-toast";

const NotifyToast = () => {
  const theme = document.querySelector("html").getAttribute("data-theme");

  return (
    <Toaster
      toastOptions={{
        style: {
          backgroundColor: `${theme === "lightMode" ? "#fff" : "#303030"}`,
          color: `${theme === "lightMode" ? "#000000" : "#fff"}`,
        },
      }}
    />
  );
};

export default NotifyToast;
