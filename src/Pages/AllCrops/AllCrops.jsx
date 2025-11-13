import React, { useState, useEffect } from "react";
import SingleCrops from "../../Components/SingleCrop/SingleCrops";

const AllCrops = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [crops, setCrops] = useState([]);

  // data fetching
  useEffect(() => {
    fetch(`http://localhost:3000/crops`)
      .then((res) => res.json())
      .then((data) => setCrops(data))
      .catch((err) => console.error("Error fetching crops:", err));
  }, []);

  // Filter crops based on search
  const filteredCrops = crops.filter((crop) =>
    crop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-100 to-green-200 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-emerald-700 text-center mb-8">
          🌾 All Crops
        </h1>

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search crops..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-emerald-400 focus:outline-none"
          />
        </div>

        {/* Crop Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCrops.length > 0 ? (
            filteredCrops.map((crop) => (
              <SingleCrops key={crop._id} crop={crop}></SingleCrops>
            ))
          ) : (
            <p className="text-center text-gray-600 text-lg font-medium col-span-full">
              No crops found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCrops;
