import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import registerBg from "../../assets/registerBg.jpg";
import { Link, useNavigate } from "react-router";
import AuthContext from "../../Auth/AuthContext/AuthContext";
import toast from "react-hot-toast";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(" ");
  const [showPass, setShowPass] = useState(false);
  const { googelLogIn, setUser, createUserWithEmail, updateUserProfile } =
    use(AuthContext);
  const handleGoogleLogIn = () => {
    googelLogIn()
      .then((res) => {
        // console.log(res.user);
        setUser(res.user);
        toast.success("User LogIN Successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    console.log(name, email, password, photoURL);

    // chaecked password validation
    if (!/[A-Z]/.test(password)) {
      return setError("Password must contain an uppercase letter.");
    }

    if (!/[a-z]/.test(password)) {
      return setError("Password must contain a lowercase letter.");
    }

    if (password.length < 6) {
      return setError("Password must be at least 6 characters long.");
    }

    // register User
    createUserWithEmail(email, password)
      .then((res) => {
        // console.log(res.user);
        setUser(res.user);
        updateUserProfile(name, photoURL);
        toast.success("User Created Successfully");
        form.reset();
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
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

        {/* Register From */}
        <form onSubmit={handleRegister}>
          {/* Name */}
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
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
              name="email"
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
              name="photoURL"
              placeholder="Paste your photo link"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password */}
          <div className="form-control mb-4 relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-12 transform -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {showPass ? (
                <FaRegEyeSlash className="text-2xl" />
              ) : (
                <FaEye className="text-2xl" />
              )}
            </span>
          </div>

          {/* Register Button */}
          <button className="btn btn-secondary w-full mb-4">Register</button>
          {error && (
            <p className="text-red-700 text-sm font-medium rounded-md border border-red-700 py-2 px-1.5 my-1.5 bg-red-200 ">
              {error}
            </p>
          )}
        </form>

        <div className="divider text-gray-400">Or Register With</div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogIn}
          className="btn w-full bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 flex items-center justify-center gap-2"
        >
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
