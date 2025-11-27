import React, { useContext } from "react";
import Login from "../login/Login";
import SignUp from "../signup/SignUp";
import { AuthContext } from "../../Services/AuthContext";

export default function Logging() {

  const {isUserAvailable} = useContext(AuthContext);

  return (
    <div>
      {isUserAvailable ? <Login /> : <SignUp />}
    </div>
  );
}
