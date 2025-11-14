import React, { use } from "react";
import { useEffect, useState } from "react";
import AuthContext from "../../Auth/AuthContext/AuthContext";

const MyInterestes = () => {
  const [interests, setInterests] = useState([]);
  const { user } = use(AuthContext);
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(true);
  console.log(interests);

  // Fetch user interests from API
  useEffect(() => {
    const fetchInterests = async () => {
      try {
        const res = await fetch(
          `https://green-chain-server.vercel.app/myInterests?email=${user.email}`
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

  // Sorting function
  const handleSort = (field) => {
    let order = "asc";
    if (sortField === field && sortOrder === "asc") order = "desc";

    const sorted = [...interests].sort((a, b) => {
      if (field === "quantity") {
        return order === "asc"
          ? a.quantity - b.quantity
          : b.quantity - a.quantity;
      } else {
        const valA = a[field].toLowerCase();
        const valB = b[field].toLowerCase();
        if (valA < valB) return order === "asc" ? -1 : 1;
        if (valA > valB) return order === "asc" ? 1 : -1;
        return 0;
      }
    });

    setInterests(sorted);
    setSortField(field);
    setSortOrder(order);
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Interests</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th
                onClick={() => handleSort("cropName")}
                className="cursor-pointer"
              >
                Crop Name{" "}
                {sortField === "cropName"
                  ? sortOrder === "asc"
                    ? "↑"
                    : "↓"
                  : ""}
              </th>
              <th
                onClick={() => handleSort("ownerName")}
                className="cursor-pointer"
              >
                Owner{" "}
                {sortField === "ownerName"
                  ? sortOrder === "asc"
                    ? "↑"
                    : "↓"
                  : ""}
              </th>
              <th
                onClick={() => handleSort("quantity")}
                className="cursor-pointer"
              >
                Quantity{" "}
                {sortField === "quantity"
                  ? sortOrder === "asc"
                    ? "↑"
                    : "↓"
                  : ""}
              </th>
              <th>Message</th>
              <th
                onClick={() => handleSort("status")}
                className="cursor-pointer"
              >
                Status{" "}
                {sortField === "status"
                  ? sortOrder === "asc"
                    ? "↑"
                    : "↓"
                  : ""}
              </th>
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
                  <td>{interest?.oner?.name || "Farhad"}</td>
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
