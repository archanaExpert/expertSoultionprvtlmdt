import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaBoxes,
  FaWarehouse,
  FaCalendarAlt,
  FaChartLine,
  FaUsers,
  FaMobileAlt,
} from "react-icons/fa";

const RetailManagement = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <div className="relative text-center py-20 px-6 bg-gradient-to-r from-blue-950 to-orange-600 text-white shadow-lg">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold drop-shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Retail Management Software Solutions
        </motion.h1>
        <motion.p
          className="text-lg mt-4 max-w-2xl mx-auto opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Empowering Retail Excellence, Every Step of the Way
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link to="/contact">
            <button className="mt-6 px-8 py-3 bg-white text-blue-950 font-bold rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300">
              Request A Quote
            </button>
          </Link>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-xl text-3xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                {feature.title}
              </h3>
            </div>
            <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const features = [
  {
    title: "Inventory Management",
    description:
      "Effectively oversee and regulate your stock with accuracy, ensuring real-time visibility.",
    icon: <FaBoxes />,
  },
  {
    title: "Warehouse Management",
    description:
      "Optimize efficiency by streamlining warehouse operations with planning and monitoring tools.",
    icon: <FaWarehouse />,
  },
  {
    title: "Production Scheduling",
    description:
      "Streamline your manufacturing procedures for the best use of resources.",
    icon: <FaCalendarAlt />,
  },
  {
    title: "Demand Forecasting",
    description:
      "Accurately predict market demand and utilize data analytics for trend analysis.",
    icon: <FaChartLine />,
  },
  {
    title: "Digital Customer Engagement",
    description:
      "Enhance customer interactions with personalized experiences and loyalty programs.",
    icon: <FaUsers />,
  },
  {
    title: "Retail Mobile Apps",
    description:
      "Stay connected with consumers on the go, offering seamless shopping experiences.",
    icon: <FaMobileAlt />,
  },
];

export default RetailManagement;
