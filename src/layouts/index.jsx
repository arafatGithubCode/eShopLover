import { ToastContainer } from "react-toastify";
import Header from "./header/Header";
import HeaderBottom from "./header/HeaderBottom";
import SpecialCase from "./specialCase/SpecialCase";
import Footer from "./footer/Footer";
import FooterBottom from "./footer/FooterBottom";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <Outlet />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default Layout;
