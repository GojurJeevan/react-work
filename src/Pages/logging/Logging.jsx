import React from "react";
import Signupform from "../signup/SignUp";
import Login from "../login/Login";

export default function Home() {

  const isUserAvailable = false;

  return (
    <div>
      {isUserAvailable ? <Login /> : <Signupform />}
    </div>
  );
}
