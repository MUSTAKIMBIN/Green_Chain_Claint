import React, { useState } from "react";
import AuthContext from "../AuthContext/AuthContext";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Googel LogIn
  const googelLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Sign Out user
  const signOutUser = () => {
    return signOut(auth);
  };
  const authInfo = {
    googelLogIn,
    signOutUser,
    user,
    setUser,
    loading,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
