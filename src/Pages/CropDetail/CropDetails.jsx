import React, { useContext, useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router";
import AuthContext from "../../Auth/AuthContext/AuthContext";
import toast from "react-hot-toast";

// CropDetails.jsx
// - Shows full crop information
// - If logged-in user is NOT the owner: shows interest form
// - If logged-in user IS the owner: shows received interests table
// - Uses Tailwind / DaisyUI classes for styling (adjust to your project's design system)

const CropDetails = () => {
  const { id } = useParams(); // assume route: /crops/:id
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [crop, setCrop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // form state (for non-owner)
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // owner actions
  const [updatingInterest, setUpdatingInterest] = useState(false);

  // console.log(id);

  // fetch crop data
  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`http://localhost:3000/crops/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch crop");
        return res.json();
      })
      .then((data) => {
        setCrop(data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  // derived values
  let isOwner = false;

  if (crop && user) {
    const ownerEmail = crop.oner?.email;
    isOwner = ownerEmail === user.email;
  }
  // console.log(isOwner);

  const userAlreadySent = useMemo(() => {
    if (!crop || !user) return false;
    return (
      Array.isArray(crop.interests) &&
      crop.interests.some((i) => i.userEmail === user.email)
    );
  }, [crop, user]);

  const totalPrice = useMemo(() => {
    const price = Number(crop?.pricePerUnit ?? 0);
    const q = Number(quantity ?? 0);
    if (Number.isNaN(price) || Number.isNaN(q)) return 0;
    return price * q;
  }, [crop, quantity]);

  // handle interest submit (non-owner)
  async function handleSubmitInterest(e) {
    e.preventDefault();
    if (!user) return navigate("/login");
    if (quantity < 1) return toast("Quantity must be at least 1");
    if (!crop) return;
    if (isOwner) return toast("Owners cannot send interest to their own crop");
    if (userAlreadySent)
      return toast("You've already sent an interest for this crop.");

    setConfirmOpen(false);
    setSubmitting(true);

    try {
      // construct interest payload according to your server expectations
      const payload = {
        cropId: crop._id,
        userEmail: user.email,
        userName: user.displayName || user.name || user.email,
        quantity: Number(quantity),
        message: message || "",
        status: "pending",
      };

      // POST interest to server (server should create an _id and push into crop.interests)
      const res = await fetch(
        `http://localhost:3000/crops/${crop._id}/interests`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error("Failed to submit interest");

      const updatedCrop = await res.json();

      // server returns updated crop — update local state
      setCrop(updatedCrop);
      setMessage("");
      setQuantity(1);
      toast.success("Interest submitted successfully.");
    } catch (err) {
      console.error(err);
      toast("Error submitting interest: " + err.message);
    } finally {
      setSubmitting(false);
    }
  }

  // owner accept/reject interest
  async function updateInterestStatus(interestId, newStatus) {
    if (!crop) return;
    setUpdatingInterest(true);
    try {
      const res = await fetch(
        `http://localhost:3000/crops/${crop._id}/interests/${interestId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (!res.ok) throw new Error("Failed to update interest status");
      const updatedCrop = await res.json();
      setCrop(updatedCrop);
    } catch (err) {
      console.error(err);
      alert("Error updating interest: " + err.message);
    } finally {
      setUpdatingInterest(false);
    }
  }

  if (loading) return <div className="p-6">Loading crop...</div>;
  if (error) return <div className="p-6 text-red-500">Error: {error}</div>;
  if (!crop) return <div className="p-6">No crop found.</div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header / Crop info */}
      <div className="grid md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2 bg-white shadow rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={crop.image}
              alt={crop.name}
              className="w-full md:w-72 h-64 object-cover rounded-lg shadow-sm"
            />

            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">{crop.name}</h1>
              <div className="text-sm text-gray-500 mb-4">
                {crop.type} • {crop.unit}
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-xs text-gray-400">Price per unit</div>
                  <div className="font-semibold">
                    {crop.pricePerUnit} / {crop.unit}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">
                    Estimated quantity
                  </div>
                  <div className="font-semibold">
                    {crop.estimatedQuantity ?? crop.quantity ?? "-"}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Location</div>
                  <div className="font-semibold">{crop.location}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Owner</div>
                  <div className="font-semibold">
                    {crop.oner?.name || "Farhad"}
                  </div>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-700">
                {crop.description}
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Interest form (if not owner) or Received interests (if owner) */}
        <aside className="space-y-4">
          Interest card *
          {!isOwner && (
            <div className="bg-white shadow rounded-lg p-5">
              <h3 className="font-bold text-lg mb-2">Send Interest</h3>

              {user ? (
                userAlreadySent ? (
                  <div className="text-sm text-gray-600">
                    You have already sent an interest for this crop.
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setConfirmOpen(true);
                    }}
                  >
                    <label className="block text-sm">
                      <span>Quantity ({crop.unit})</span>
                      <input
                        type="number"
                        min={1}
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="input input-bordered w-full mt-1"
                        required
                      />
                    </label>

                    <label className="block text-sm mt-3">
                      <span>Message (optional)</span>
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="input input-bordered w-full mt-1"
                        placeholder="Add a note for the owner"
                      />
                    </label>

                    <div className="mt-3 text-sm">
                      <div>
                        Total price: <strong>{totalPrice}</strong>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={submitting}
                      >
                        {submitting ? "Submitting..." : "Submit Interest"}
                      </button>
                      <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="btn btn-ghost"
                      >
                        Back
                      </button>
                    </div>

                    {/* Confirmation modal substitute - simple  */}
                    {confirmOpen && (
                      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
                          <h4 className="font-bold mb-2">Confirm Interest</h4>
                          <p className="text-sm mb-4">
                            You are about to send an interest for{" "}
                            <strong>
                              {quantity} {crop.unit}
                            </strong>{" "}
                            (Total: <strong>{totalPrice}</strong>). Continue?
                          </p>
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => setConfirmOpen(false)}
                              className="btn btn-ghost"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={handleSubmitInterest}
                              className="btn btn-primary"
                              disabled={submitting}
                            >
                              {submitting ? "Submitting..." : "Confirm"}
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </form>
                )
              ) : (
                <div className="text-sm">
                  Please{" "}
                  <button className="link" onClick={() => navigate("/login")}>
                    log in
                  </button>{" "}
                  to send interest.
                </div>
              )}
            </div>
          )}
          Received interests for owner
          {isOwner && (
            <div className="bg-white shadow rounded-lg p-5">
              <h3 className="font-bold text-lg mb-2">Received Interests</h3>

              {Array.isArray(crop.interests) && crop.interests.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="table w-full">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Buyer</th>
                        <th>Quantity</th>
                        <th>Message</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {crop.interests.map((intr, idx) => (
                        <tr key={intr._id || idx}>
                          <td>{idx + 1}</td>
                          <td>{intr.userName || intr.userEmail}</td>
                          <td>{intr.quantity}</td>
                          <td className="max-w-xs truncate">{intr.message}</td>
                          <td>
                            <span
                              className={`badge ${
                                intr.status === "pending"
                                  ? "badge-warning"
                                  : intr.status === "accepted"
                                  ? "badge-success"
                                  : "badge-error"
                              }`}
                            >
                              {intr.status}
                            </span>
                          </td>
                          <td>
                            <div className="flex gap-2">
                              <button
                                className="btn btn-xs btn-success"
                                disabled={
                                  updatingInterest || intr.status === "accepted"
                                }
                                onClick={() =>
                                  updateInterestStatus(intr._id, "accepted")
                                }
                              >
                                Accept
                              </button>
                              <button
                                className="btn btn-xs btn-danger"
                                disabled={
                                  updatingInterest || intr.status === "rejected"
                                }
                                onClick={() =>
                                  updateInterestStatus(intr._id, "rejected")
                                }
                              >
                                Reject
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-sm text-gray-600">
                  No interests yet for this crop.
                </div>
              )}
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};
export default CropDetails;
