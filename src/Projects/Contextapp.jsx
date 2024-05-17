import React from "react";
import UserContextProvider from "../Context/UserContextProvider";
import Login from "./Login";

import UserProfile from "./UserProfile";

function Contextapp() {
  

  return (
    <UserContextProvider>
      <h2>Login</h2>
      <Login />
      <UserProfile />
    </UserContextProvider>
  );
}

export default Contextapp;
