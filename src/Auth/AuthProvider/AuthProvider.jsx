import React from "react";
import AuthContext from "../AuthContext/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebaseConfig/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // Googel LogIn
  const googelLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const authInfo = {
    googelLogIn,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
