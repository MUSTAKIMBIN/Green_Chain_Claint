import React, { useEffect, useState } from "react";
import SingleCrops from "../SingleCrop/SingleCrops";
import { Link } from "react-router";

const LatestCrops = () => {
  const [crops, setCrops] = useState([]);

  // data fetching
  useEffect(() => {
    fetch(`http://localhost:3000/crops`)
      .then((res) => res.json())
      .then((data) => setCrops(data))
      .catch((err) => console.error("Error fetching crops:", err));
  }, []);
  return (
    <div className="my-20">
      <h3 className="text-4xl font-bold mb-4 text-green-700 text-center my-10">
        Latest crop
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
        {[...crops]
          .reverse()
          .slice(0, 6)
          .map((crop) => (
            <SingleCrops key={crop._id} crop={crop} />
          ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link to="/allCrops">
          <button className="btn bg-[#009966] text-white">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default LatestCrops;
