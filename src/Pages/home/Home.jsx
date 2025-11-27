import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const navigation = [
    { name: "Home", path: "/", current: true },
    { name: "Cart", path: "/cart", current: false },
    { name: "About", path: "/about", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="w-full bg-gray-900 shadow-md">
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
  );
}
