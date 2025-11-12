import React from "react";
import { FaSeedling, FaHandshake, FaShoppingBasket } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-4 text-green-700">How It Works</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover how our platform connects farmers and consumers directly —
          making fresh, healthy food accessible and profitable for everyone.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="card bg-white shadow-lg rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-center mb-4 text-green-600 text-5xl">
              <FaSeedling />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              1. Farmers Post Crops
            </h3>
            <p className="text-gray-600">
              Farmers share details of their fresh produce with pictures,
              quantity, and price directly on our platform.
            </p>
          </div>

          {/* Step 2 */}
          <div className="card bg-white shadow-lg rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-center mb-4 text-green-600 text-5xl">
              <FaHandshake />
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Consumers Connect</h3>
            <p className="text-gray-600">
              Buyers can explore nearby farms, check details, and connect with
              farmers directly through the platform.
            </p>
          </div>

          {/* Step 3 */}
          <div className="card bg-white shadow-lg rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-center mb-4 text-green-600 text-5xl">
              <FaShoppingBasket />
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Place an Order</h3>
            <p className="text-gray-600">
              Consumers order fresh crops or vegetables directly — no middlemen,
              no extra cost.
            </p>
          </div>

          {/* Step 4 */}
          <div className="card bg-white shadow-lg rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-center mb-4 text-green-600 text-5xl">
              <MdOutlineLocalShipping />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              4. Delivery or Pickup
            </h3>
            <p className="text-gray-600">
              Farmers deliver or buyers pick up from the farm — ensuring fresh
              and sustainable food for every home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
