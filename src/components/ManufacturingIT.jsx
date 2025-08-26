import React from "react";
import { motion } from "framer-motion";
import {
  FaIndustry,
  FaTools,
  FaCogs,
  FaShieldAlt,
  FaChartLine,
  FaProjectDiagram,
  FaDatabase,
} from "react-icons/fa";

const expertiseData = [
  {
    icon: <FaIndustry className="text-blue-600 text-6xl" />,
    title: "Industry-leading Professionals",
    description:
      "Our team of engineers, technicians, and quality control experts drive success in the manufacturing industry.",
  },
  {
    icon: <FaTools className="text-green-600 text-6xl" />,
    title: "State-of-the-Art Facilities",
    description:
      "Equipped with cutting-edge technology, we continuously upgrade our infrastructure to ensure top-quality production.",
  },
  {
    icon: <FaCogs className="text-yellow-600 text-6xl" />,
    title: "Innovation at the Core",
    description:
      "We push boundaries, develop new products, and optimize manufacturing processes to stay ahead in the industry.",
  },
  {
    icon: <FaShieldAlt className="text-red-600 text-6xl" />,
    title: "Quality Assurance",
    description:
      "We adhere to the highest standards from sourcing materials to final inspection, ensuring premium product quality.",
  },
];

const industries = [
  {
    icon: <FaDatabase className="text-indigo-600 text-5xl" />,
    title: "Data-Driven Manufacturing",
    description:
      "Empowering manufacturing with IoT, AI, and analytics for informed decision-making.",
  },
  {
    icon: <FaProjectDiagram className="text-pink-600 text-5xl" />,
    title: "Supply Chain Management",
    description:
      "Seamlessly manage your supply chain with real-time tracking and smart inventory systems.",
  },
  {
    icon: <FaTools className="text-yellow-600 text-5xl" />,
    title: "Predictive Maintenance",
    description:
      "Use IoT sensors and AI to predict machine failures before they happen and reduce downtime.",
  },
  {
    icon: <FaChartLine className="text-red-600 text-5xl" />,
    title: "Production Analytics",
    description:
      "Monitor KPIs, production trends, and insights to maximize efficiency and output.",
  },
];

const ManufacturingIT = () => {
  return (
    <div className="max-w-7xl mx-auto m-20 mb-40 text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-950 to-blue-600 bg-clip-text text-transparent m-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Elevating Manufacturing Operations with IT Solutions
      </motion.h2>

      <p className="text-lg text-gray-700 mb-12">
        Scalable Technology Integration | Expertise With Technological
        Innovation
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {expertiseData.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-2xl transition-all duration-300 hover:shadow-2xl"
            whileHover={{ scale: 1.07 }}
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="flex justify-center mb-4"
            >
              {item.icon}
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-3 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <h3 className="text-3xl font-bold text-gray-900 mt-20 mb-10">
        Tailored IT Solutions for Manufacturing Industry
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            className="p-6 bg-blue-50 shadow-md rounded-2xl flex items-start gap-5 hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div whileHover={{ rotate: 15 }}>{industry.icon}</motion.div>
            <div>
              <h4 className="text-xl font-semibold text-blue-900">
                {industry.title}
              </h4>
              <p className="text-gray-700 mt-2 text-sm">
                {industry.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ManufacturingIT;
