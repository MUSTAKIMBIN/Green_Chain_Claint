import React from "react";
import { FcGoogle } from "react-icons/fc";
import logInImg from "../../assets/loginImg.jpg";
import { Link } from "react-router";

const LogIn = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${logInImg})`,
      }}
    >
      {/* Blurred overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Login Card */}
      <div className="relative z-10 bg-transparent backdrop-blur-2xl shadow-2xl rounded-2xl w-96 p-8">
        <h2 className="text-2xl font-bold text-center text-secondary mb-2 ">
          Login
        </h2>
        <p className="text-center text-accent mb-6">Hi, Welcome back 👋</p>

        {/* Google Login */}
        <button className="btn w-full mb-4 bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 flex items-center justify-center gap-2">
          <FcGoogle className="text-xl" /> Login with Google
        </button>

        <div className="divider text-gray-400">or Login with Email</div>

        {/* Email */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="E.g. johndoe@email.com"
            className="input input-bordered w-full"
          />
        </div>

        {/* Password */}
        <div className="form-control mb-2">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full"
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <a href="#" className="text-sm text-secondary hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button className="btn btn-secondary w-full mb-3">Login</button>

        <p className="text-center text-sm text-accent">
          Not registered yet?{" "}
          <Link to={"/register"}>
            <span
              href="#"
              className="text-secondary font-semibold hover:underline"
            >
              Create an account
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
