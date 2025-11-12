import React from "react";
import { FaLeaf, FaRegCalendarAlt } from "react-icons/fa";

const newsData = [
  {
    id: 1,
    title: "Government Launches New Subsidy for Organic Farmers",
    date: "Nov 5, 2025",
    image: "https://i.postimg.cc/59RbfPwL/polyhouse.jpg",
    description:
      "Farmers can now apply for a new subsidy to promote eco-friendly organic farming methods and reduce chemical usage.",
  },
  {
    id: 2,
    title: "New Technology Boosts Crop Yields by 40%",
    date: "Nov 8, 2025",
    image: "https://i.postimg.cc/25R5rHN4/agro-Tech.jpg",
    description:
      "Researchers have introduced an AI-based irrigation system that adjusts water flow automatically to maximize growth.",
  },
  {
    id: 3,
    title: "Farmers’ Market Week Begins Nationwide",
    date: "Nov 10, 2025",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
    description:
      "Local farmers markets are opening across the country this week to promote direct sales between farmers and consumers.",
  },
];
const AgroBlog = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-4 text-green-700 flex justify-center items-center gap-2">
          <FaLeaf className="text-green-600" /> Agro News
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Stay updated with the latest agricultural trends, technologies, and
          opportunities from around the world.
        </p>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="relative bg-white shadow-lg rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>

              <div className="p-5 text-left relative z-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-600">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-500 flex items-center gap-2 mb-3">
                  <FaRegCalendarAlt className="text-green-600" /> {news.date}
                </p>
                <p className="text-gray-600 text-sm">{news.description}</p>

                <button className="btn btn-sm btn-outline btn-secondary mt-4">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgroBlog;
