import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">ShoppingHub</h2>
          <p className="text-gray-400">
            Your one-stop destination for the latest and most affordable
            products. Shop smart. Shop easy.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-white transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="hover:text-white transition"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-white transition"
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-600 transition"
            >
              <i className="fa-brands fa-facebook text-white"></i>
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-pink-500 transition"
            >
              <i className="fa-brands fa-instagram text-white"></i>
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-400 transition"
            >
              <i className="fa-brands fa-twitter text-white"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} ShoppingHub. All rights reserved.
      </div>
    </footer>
  );
}
