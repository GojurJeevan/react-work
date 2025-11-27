import React, { useContext } from "react";
import Home from "./Pages/home/Home";
import Logging from "./Pages/logging/Logging";
import { AuthContext } from "./Services/AuthContext";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const { isUserAvaliable } = useContext(AuthContext);

  return (
    <>
      <Routes>
        {!isUserAvaliable && <Route path="/" element={<Logging />} />}
        {isUserAvaliable && <Route path="/" element={<Home />} />}
      </Routes>
    </>
  );
}
