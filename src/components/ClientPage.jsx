import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaChartBar,
  FaTruck,
  FaBullhorn,
  FaMobileAlt,
  FaShoppingCart,
  FaCogs,
  FaCamera,
} from "react-icons/fa";
import { SiWebmoney, SiGoogleanalytics } from "react-icons/si";

const services = [
  {
    name: "Analytics & Reporting",
    icon: <SiGoogleanalytics className="text-blue-500 text-5xl" />,
    description:
      "Gain valuable insights with advanced analytics and reporting tools.",
  },
  {
    name: "Fleet Management",
    icon: <FaTruck className="text-green-500 text-5xl" />,
    description:
      "Optimize vehicle tracking, fuel management, and route planning.",
  },
  {
    name: "Digital Marketing",
    icon: <FaBullhorn className="text-orange-500 text-5xl" />,
    description: "Boost online presence with SEO, social media, and paid ads.",
  },
  {
    name: "UI-UX & Mobile Development",
    icon: <FaMobileAlt className="text-pink-500 text-5xl" />,
    description: "Create stunning user experiences with mobile-first design.",
  },
  {
    name: "E-commerce Solutions",
    icon: <FaShoppingCart className="text-purple-500 text-5xl" />,
    description: "Build scalable and high-converting online stores.",
  },
  {
    name: "Mobile App Solution",
    icon: <FaMobileAlt className="text-indigo-500 text-5xl" />,
    description: "Develop responsive mobile apps for Android and iOS.",
  },
  {
    name: "Web and CMS Solution",
    icon: <SiWebmoney className="text-orange-500 text-5xl" />,
    description:
      "Custom websites and CMS platforms tailored for your business.",
  },
  {
    name: "Driver & Vehicle Management",
    icon: <FaTruck className="text-teal-500 text-5xl" />,
    description: "Efficiently manage drivers, maintenance, and assignments.",
  },
  {
    name: "Load and Cargo Management",
    icon: <FaCogs className="text-red-500 text-5xl" />,
    description: "Seamless tracking and management of cargo and shipments.",
  },
  {
    name: "Expense & Billing Management",
    icon: <FaChartBar className="text-blue-600 text-5xl" />,
    description: "Track expenses, automate invoicing, and manage billing.",
  },
  {
    name: "Group Management",
    icon: <FaCogs className="text-gray-500 text-5xl" />,
    description:
      "Organize and manage teams efficiently with role-based access.",
  },
  {
    name: "IP & HD Camera Solutions",
    icon: <FaCamera className="text-purple-600 text-5xl" />,
    description:
      "High-definition IP cameras for security monitoring and surveillance.",
  },
];

const ClientPage = () => {
  const [flipped, setFlipped] = useState(Array(services.length).fill(false));

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 bg-orange-400 bg-opacity-20"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
          className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="absolute bottom-10 right-10 w-48 h-48 bg-purple-400 rounded-full blur-3xl"
        ></motion.div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Our Esteemed Clients
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            We’re proud to work with industry leaders and innovative brands
            worldwide.
          </motion.p>

          <div className="mt-8 flex justify-center gap-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition"
                aria-label="Become a Client"
              >
                Become a Client
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
      <div className="bg-gray-900 text-white min-h-screen py-12 flex justify-center items-center">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-5xl font-bold text-orange-400 mb-6 tracking-wide">
            Our Expert Solutions
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
            We provide cutting-edge solutions to enhance business efficiency,
            streamline operations, and drive digital transformation.
          </p>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            style={{ perspective: "1200px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative w-full h-56 bg-gray-800 rounded-xl shadow-lg cursor-pointer"
                onClick={() => handleFlip(index)}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="absolute w-full h-full flex flex-col items-center justify-center rounded-xl shadow-lg bg-gray-800 p-6"
                  animate={{ rotateY: flipped[index] ? 180 : 0 }}
                  transition={{ duration: 0.7 }}
                  style={{
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-orange-300">
                    {service.name}
                  </h3>
                </motion.div>

                <motion.div
                  className="absolute w-full h-full flex flex-col items-center justify-center bg-orange-400 text-gray-900 p-4 rounded-xl shadow-lg"
                  animate={{ rotateY: flipped[index] ? 0 : -180 }}
                  transition={{ duration: 0.7 }}
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <p className="text-center text-gray-900 text-base font-medium">
                    {service.description}
                  </p>
                  <button className="mt-4 bg-gray-900 text-orange-400 px-3 py-1 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all">
                    Flip Back
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientPage;
