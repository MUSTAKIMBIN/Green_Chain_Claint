import React, { use } from "react";
import AuthContext from "../../Auth/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to={"/logIn"}></Navigate>;
};

export default PrivateRoutes;
