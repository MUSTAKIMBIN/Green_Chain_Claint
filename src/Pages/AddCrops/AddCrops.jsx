import React, { use } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import AuthContext from "../../Auth/AuthContext/AuthContext";

const AddCrops = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const handleAddCrops = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const type = form.cropType.value;
    const pricePerUnit = form.price.value;
    const estimatedQuantity = form.quantity.value;
    const unit = form.unit.value;
    const description = form.description.value;
    const location = form.location.value;
    const image = form.imgURL.value;

    const newCrops = {
      name,
      type,
      pricePerUnit,
      estimatedQuantity,
      unit,
      description,
      location,
      image,
      oner: {
        name: user.displayName,
        email: user.email,
      },
    };
    console.log(newCrops);
    fetch(`http://localhost:3000/crops`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCrops),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Crops Added Successfully");
        }
      });

    form.reset();
    // Delay navigation by 2 seconds
    setTimeout(() => {
      navigate("/myPosts");
    }, 1500);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-200 to-red-200 p-6">
      <div className="bg-gray-50 shadow-2xl rounded-2xl p-8 w-full max-w-2xl border border-emerald-200">
        <h2 className="text-3xl font-bold text-emerald-700 mb-6 text-center">
          Add Crop Details
        </h2>
        <form onSubmit={handleAddCrops} className="space-y-5">
          {/* Crop Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Crop Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter crop name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            />
          </div>

          {/* Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Type
            </label>
            <select
              name="cropType"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            >
              <option value="">Select type</option>
              <option value="Vegetable">Vegetable</option>
              <option value="Fruit">Fruit</option>
              <option value="Grain">Grain</option>
            </select>
          </div>

          {/* Price per unit */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Price per Unit
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              />
            </div>
            {/* unit  */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Unit
              </label>
              <select
                name="unit"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              >
                <option value="">Select unit</option>
                <option value="kg">kg</option>
                <option value="ton">ton</option>
                <option value="bag">bag</option>
              </select>
            </div>
          </div>

          {/* Estimated Quantity */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Estimated Quantity
            </label>
            <input
              type="number"
              name="quantity"
              placeholder="Enter estimated quantity"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Write short details about the crop"
              rows="3"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            ></textarea>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Image
            </label>
            <input
              type="text"
              name="imgURL"
              placeholder="Enter your URL"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-200"
          >
            Submit Crop Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCrops;
