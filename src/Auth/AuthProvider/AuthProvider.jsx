import React from "react";
import AuthContext from "../AuthContext/AuthContext";

const AuthProvider = ({ children }) => {
  const authInfo = {
    name: "mustakim",
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
