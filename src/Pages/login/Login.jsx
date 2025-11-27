import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    mobileNumber: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const formValidate = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};

    // Mobile Number Validation
    if (!/^[6-9][0-9]{9}$/.test(formData.mobileNumber)) {
      errors.mobileError = "Enter a valid 10-digit mobile number";
    }

    // Password Validation
    if (formData.password.trim().length < 6) {
      errors.passwordError = "Password must be at least 6 characters";
    }

    return errors;
  };

  const submitForm = (e) => {
    e.preventDefault();
    const validateErrors = validateForm();
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      console.log("Login Success", formData);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      console.log("Errors", validateErrors);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8 space-y-5 border border-gray-200"
        onSubmit={submitForm}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>

        {/* Mobile Number */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Mobile Number
          </label>
          <input
            type="text"
            name="mobileNumber"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="Enter your mobile number"
            value={formData.mobileNumber}
            onChange={formValidate}
          />
          {errors.mobileError && (
            <p className="text-red-500 text-sm mt-1">{errors.mobileError}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="Enter password"
            value={formData.password}
            onChange={formValidate}
          />
          {errors.passwordError && (
            <p className="text-red-500 text-sm mt-1">{errors.passwordError}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
        >
          Login
        </button>
      </form>
    </div>
  );
}
