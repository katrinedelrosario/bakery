import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/home/home";
import Products from "../components/pages/products/products";
import Contact from "../components/pages/contact/contact";
import Login from "../components/pages/login/login";


const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/products" element={<Products />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default AppRouter;