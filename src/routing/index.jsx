import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layouts";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Journal from "../pages/Journal";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/cart/Cart";
import Payment from "../pages/Payment";
import Signin from "../pages/account/Signin";
import SignUp from "../pages/account/SignUp";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        {/* ========== Header Navlink Start here ========= */}
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/journal" element={<Journal />} />
        {/* ========== Header Navlink End here ========= */}
        <Route path="/product/:productPath" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/paymentgateway" element={<Payment />} />
      </Route>
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
);
