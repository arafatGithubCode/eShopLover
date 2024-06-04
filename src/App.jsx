import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//layout
import Header from "./layouts/header/Header";
import HeaderBottom from "./layouts/header/HeaderBottom";
//pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Journal from "./pages/Journal";
import SpecialCase from "./layouts/specialCase/SpecialCase";
import Footer from "./layouts/footer/Footer";
import FooterBottom from "./layouts/footer/FooterBottom";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <>
      <Router>
        <Header />
        <HeaderBottom />
        <SpecialCase />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/product/:productPath" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
        <FooterBottom />
      </Router>
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
    </>
  );
}

export default App;
