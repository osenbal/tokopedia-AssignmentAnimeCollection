import { FC } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const DefaultLayout: FC = () => {
  return (
    <>
      <Outlet />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </>
  );
};

export default DefaultLayout;
