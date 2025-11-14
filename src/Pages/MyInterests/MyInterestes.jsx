import React, { use } from "react";
import { useEffect, useState } from "react";
import AuthContext from "../../Auth/AuthContext/AuthContext";

const MyInterestes = () => {
  const [interests, setInterests] = useState([]);
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(true);
  console.log(interests);

  // Fetch user interests from API
  useEffect(() => {
    const fetchInterests = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/myInterests?email=${user.email}`
        ); // replace with your API endpoint
        const data = await res.json();
        setInterests(data);
      } catch (error) {
        console.error("Error fetching interests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInterests();
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Interests</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Crop Name</th>
              <th>Owner</th>
              <th>Quantity Requested</th>
              <th>Message</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {interests.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">
                  No interests found.
                </td>
              </tr>
            ) : (
              interests.map((interest) => (
                <tr key={interest._id}>
                  <td>{interest.cropName}</td>
                  <td>{interest?.oner?.name || "Forhad"}</td>
                  <td>{interest.quantity}</td>
                  <td>{interest.message}</td>
                  <td>
                    <span
                      className={`px-2 py-1 rounded-full font-semibold text-sm ${
                        interest.status === "accepted"
                          ? "bg-green-200 text-green-800"
                          : interest.status === "rejected"
                          ? "bg-red-200 text-red-800"
                          : "bg-yellow-200 text-yellow-800"
                      }`}
                    >
                      {interest.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyInterestes;
