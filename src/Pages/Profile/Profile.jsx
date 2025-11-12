import React, { use } from "react";
import AuthContext from "../../Auth/AuthContext/AuthContext";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, updateUserProfile } = use(AuthContext);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const imgURL = form.imgURL.value;
    updateUserProfile(name, imgURL);
    form.reset();
    toast.success("Updated Successfull");
  };
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-r from-purple-200 to-pink-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm text-center">
        {/* user name and img */}
        <div>
          <div className="flex items-center justify-center">
            <img className="rounded-full" src={user.photoURL} alt="userImage" />
          </div>
          <h3 className="text-xl font-semibold my-3">{user.displayName}</h3>
        </div>
        <h2 className="text-2xl font-bold text-emerald-600 mb-6">
          Update Profile
        </h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:outline-none"
          />
          <input
            type="url"
            name="imgURL"
            placeholder="Enter your URL"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
