import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/home/Home";
import Logging from "./Pages/logging/Logging";
import { AuthContext } from "./Services/AuthContext";
import ProductList from "./Components/Products/ProductList";
import ProductDetails from "./Components/Products/ProductDetails";
import Footer from "./Components/Footers/Footer";
import About from "./Components/about/About";

export default function App() {
  const { isUserAvailable } = useContext(AuthContext);

  return (
    <>
      <Routes>
        {!isUserAvailable && <Route path="/" element={<Logging />} />}

        {isUserAvailable && <Route path="/" element={<Home />} />}

        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/footer" element={<Footer />}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  );
}
