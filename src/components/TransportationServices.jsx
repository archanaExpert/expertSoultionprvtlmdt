import React from "react";
import { motion } from "framer-motion";
import { FaTruck, FaRoute, FaWarehouse, FaChartLine, FaUsers, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaTruck className="text-5xl text-blue-600" />,
    title: "Fleet Management",
    description: "Optimize your transportation assets with real-time tracking, route optimization, and fuel cost reduction.",
  },
  {
    icon: <FaRoute className="text-5xl text-green-600" />,
    title: "GPS Tracking & Route Optimization",
    description: "Reduce travel time and fuel costs by utilizing advanced GPS tracking and AI-powered route planning.",
  },
  {
    icon: <FaWarehouse className="text-5xl text-orange-600" />,
    title: "Warehouse Management",
    description: "Efficiently manage warehouse operations with real-time inventory tracking and smart logistics solutions.",
  },
  {
    icon: <FaChartLine className="text-5xl text-purple-600" />,
    title: "Demand Forecasting",
    description: "Leverage AI-driven analytics to predict demand trends and optimize resource allocation for better efficiency.",
  },
  {
    icon: <FaUsers className="text-5xl text-red-600" />,
    title: "Customer Engagement",
    description: "Enhance customer experience with personalized interactions and real-time updates on transportation services.",
  },
  {
    icon: <FaMobileAlt className="text-5xl text-teal-600" />,
    title: "Mobile App Integration",
    description: "Enable users to track shipments, book services, and receive live updates via a user-friendly mobile app.",
  },
];

const TransportationServices = () => {
  return (
    <div className="max-w-7xl bg-blue-50 mx-auto w-full p-8 text-center">
      <motion.h2
        className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Leading Transportation Solutions
      </motion.h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
        Elevate Your Logistics & Transportation with Smart Technology
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4"
            whileHover={{ scale: 1.05 }}
          >
            {service.icon}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TransportationServices;
