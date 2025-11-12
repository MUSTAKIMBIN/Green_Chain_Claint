import React from "react";
import { motion } from "framer-motion";
import bgFarm from "../../assets/bgFarms.jpg";

const JoinCommunity = () => {
  return (
    <section
      className="relative py-20 text-white text-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgFarm})`,
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6">
          Join the GreenChain Movement 🌱
        </h2>
        <p className="text-lg mb-10 text-gray-100">
          Thousands of farmers and conscious consumers are connecting directly —
          reducing waste and building a sustainable future.
        </p>

        <div className="flex justify-center gap-6">
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full text-white font-semibold shadow-lg transition">
            Register as Farmer
          </button>
          <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 rounded-full text-white font-semibold shadow-lg transition">
            Join as Consumer
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default JoinCommunity;
