import React, { useEffect, useState } from "react";
import AuthContext from "../AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
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

  // create user with email and password
  const createUserWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user logIN with email
  const userLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // get current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUsr) => {
      setUser(currentUsr);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);

  // Sign Out user
  const signOutUser = () => {
    return signOut(auth);
  };
  const authInfo = {
    googelLogIn,
    createUserWithEmail,
    userLogIn,
    signOutUser,
    user,
    setUser,
    loading,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
