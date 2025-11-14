// import { useNavigate } from "react-router";

import { Link } from "react-router";

const SingleCrops = ({ crop }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-200 border border-emerald-100">
      <img
        src={crop.image}
        alt={crop.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-4 space-y-2 text-left">
        <h2 className="text-xl font-semibold text-emerald-700">{crop.name}</h2>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Type:</span> {crop.type}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Price:</span> ৳ {crop.pricePerUnit} /{" "}
          {crop.unit}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Quantity:</span>{" "}
          {crop.estimatedQuantity}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Location:</span> {crop.location}
        </p>

        <Link to={`/cropDetail/${crop._id}`}>
          <button className="mt-3 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-xl transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleCrops;
