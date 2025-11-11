import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/greenChainLOGO.png";
import AuthContext from "../../Auth/AuthContext/AuthContext";

const Navber = () => {
  const { user } = use(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allCrops"}>All Crops</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
          <li>
            <NavLink to={"/addCrops"}>Add Crops</NavLink>
          </li>
          <li>
            <NavLink to={"/myPosts"}>My Posts</NavLink>
          </li>
          <li>
            <NavLink to={"/myInterests"}>My Interests</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div>
          <Link to={"/"}>
            <img className="w-5/6 md:w-4/6" src={logo} alt="GreenChainLOgo" />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-1.5">
        {user ? (
          <button className="btn bg-secondary border-none">Log Out</button>
        ) : (
          <>
            <Link to={"/register"}>
              <button className="btn bg-secondary  border-none">
                Register
              </button>
            </Link>
            <Link to={"/logIn"}>
              <button className="btn bg-accent  border-none">LogIN</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navber;
