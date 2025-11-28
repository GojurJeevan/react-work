import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductList from "../../Components/Products/ProductList";
import Footer from "../../Components/Footers/Footer";

export default function Home() {
  let navigate = useNavigate();
  const navigation = [
    { name: "Home", path: "/", current: true },
    { name: "Cart", path: "/cart", current: false },
    { name: "Products", path: "/productlist", current: false },
    { name: "About", path: "/about", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="w-full bg-gray-900 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={classNames(
                item.current
                  ? "text-white bg-blue-600"
                  : "text-gray-300 hover:text-white hover:bg-gray-700",
                "px-4 py-2 rounded-lg font-medium transition duration-200"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 drop-shadow-md">
          Welcome to the Home Page
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          Explore the best products, add items to your cart, and learn more
          about us!
        </p>

        <button
          className="mt-10 bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-md"
          onClick={()=> navigate("/productlist")}
        >
          Get Started
        </button>
      </div>
      <Footer />
    </div>
  );
}
