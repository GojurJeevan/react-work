import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      {/* Container */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 border border-gray-200">

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
          About Us
        </h1>

        {/* Paragraph */}
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          Welcome to our React-based product platform! We are dedicated to
          providing high-quality products with a seamless shopping experience.
          Our mission is to build user-friendly interfaces, modern UI designs,
          and well-structured components using the latest technologies like
          React and Tailwind CSS.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          We focus on clean code, reusable components, responsive layouts, and
          fast performance. Our goal is to ensure that users have a smooth
          browsing and purchasing experience across all devices.
        </p>

        {/* Highlights */}
        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3">
          What We Offer
        </h2>

        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>Modern and responsive React UI design</li>
          <li>Organized project structure with reusable components</li>
          <li>API integrations for dynamic data</li>
          <li>Clean and scalable code using best practices</li>
          <li>Professional Tailwind CSS styling</li>
        </ul>

        {/* Vision Section */}
        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-3">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          To deliver the best digital experience through modern web development
          and intuitive interfaces. We aim to constantly improve our platform
          using new technologies and user feedback.
        </p>

        {/* Closing */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-lg">
            Thank you for visiting our page!  
            <br /> We hope you enjoy exploring our products.
          </p>
        </div>
      </div>
    </div>
  );
}
