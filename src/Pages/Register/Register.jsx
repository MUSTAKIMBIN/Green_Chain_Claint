import React from "react";
import { FcGoogle } from "react-icons/fc";
import registerBg from "../../assets/registerBg.jpg";
import { Link } from "react-router";

const Register = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${registerBg})`,
      }}
    >
      {/* Blurred overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Register Card */}
      <div className="relative z-10 bg-transparent backdrop-blur-2xl shadow-2xl rounded-2xl w-96 p-8">
        <h2 className="text-2xl text-secondary font-bold text-center mb-2">
          Create an Account
        </h2>
        <p className="text-center text-xs text-accent mb-6">
          Join now to streamline your experience from day one.
        </p>

        {/* Name */}
        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
        </div>

        {/* Email */}
        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="E.g. johndoe@email.com"
            className="input input-bordered w-full"
          />
        </div>

        {/* Photo URL */}
        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Paste your photo link"
            className="input input-bordered w-full"
          />
        </div>

        {/* Password */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full"
          />
        </div>

        {/* Register Button */}
        <button className="btn btn-secondary w-full mb-4">Register</button>

        <div className="divider text-gray-400">Or Register With</div>

        {/* Google Login */}
        <button className="btn w-full bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 flex items-center justify-center gap-2">
          <FcGoogle className="text-xl" /> Google
        </button>

        <p className="text-center text-sm mt-5">
          Already Have An Account?{" "}
          <Link to={"/logIn"}>
            <span
              href="#"
              className="text-secondary font-semibold hover:underline"
            >
              Log In.
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
