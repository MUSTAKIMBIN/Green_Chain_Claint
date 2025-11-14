import React, { use, useEffect, useState } from "react";
import AuthContext from "../../Auth/AuthContext/AuthContext";

const MyPosts = () => {
  const { user } = use(AuthContext);
  const [crops, setCrops] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`https://green-chain-server.vercel.app/myCrops?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setCrops(data);
        });
    }
  }, []);
  return (
    <div>
      <h3 className="text-4xl text-center my-10 text-green-700 font-bold">
        All My Crops here
      </h3>
      {/* my crops table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Oner</th>
              <th>Estimated Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {crops?.map((crop, idx) => (
              <tr key={idx}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                {console.log(crop.name)}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={crop.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{crop.name}</div>
                      <div className="text-sm opacity-50">{crop.type}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {crop.oner.name}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {crop.location}
                  </span>
                </td>
                <td>{crop.estimatedQuantity}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPosts;
