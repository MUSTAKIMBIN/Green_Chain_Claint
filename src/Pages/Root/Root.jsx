import React from "react";
import { Outlet } from "react-router";
import Navber from "../../Components/Navber/Navber";
import Footer from "../../Components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
