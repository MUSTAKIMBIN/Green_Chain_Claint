import React from "react";
import img404 from "../../../assets/404-landing-page.svg";
import { Link } from "react-router";

const ErroPage = () => {
  return (
    <div className="flex flex-col w-[90%] mt-14 mx-auto items-center justify-center">
      <img src={img404} alt="img404" />
      <p className="text-4xl md:text-6xl font-bold text-primary my-5">
        Page Not <span className="text-secondary">Found</span>
      </p>
      <Link to={"/"}>
        <button className="btn">Home</button>
      </Link>
    </div>
  );
};

export default ErroPage;
