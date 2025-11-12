import React from "react";
import { motion } from "framer-motion";
import farmer1 from "../../assets/farmer01.jpg";
import farmer2 from "../../assets/farmer02.jpg";
import farmer3 from "../../assets/farmer03.jpg";

const SuccesFarmers = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-green-700 mb-10"
      >
        Real Stories from Our Farmers 🌾
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {[farmer1, farmer2, farmer3].map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={img}
              alt={`farmer ${i}`}
              className="w-full h-52 object-cover"
            />
            <div className="p-5 text-left">
              <h3 className="font-semibold text-lg text-green-700 mb-2">
                {i === 0
                  ? "Abdul Karim (Rajshahi)"
                  : i === 1
                  ? "Rina Begum (Khulna)"
                  : "Jamal Uddin (Sylhet)"}
              </h3>
              <p className="text-gray-600">
                {i === 0
                  ? "Sold 300kg of organic rice directly to buyers within a week."
                  : i === 1
                  ? "Found loyal customers for her home-grown vegetables."
                  : "Exports fresh fruits directly to Dhaka markets now."}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SuccesFarmers;
