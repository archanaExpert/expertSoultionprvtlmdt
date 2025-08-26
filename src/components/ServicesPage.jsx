import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    title: "E-Commerce Development",
    description:
      "Transform your business with a feature-rich, user-friendly e-commerce platform designed for seamless shopping experiences.",
    link: "/e-commerce-solutions",
  },
  {
    title: "Mobile App Development",
    description:
      "Create powerful, high-performance Android & iOS apps to engage customers on the go.",
    link: "/mobile-app-solution",
  },
  {
    title: "UI/UX Design",
    description:
      "Design engaging and intuitive digital experiences that convert visitors into customers.",
    link: "/services/ui/ux",
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your brand’s visibility with targeted digital marketing strategies that deliver results.",
    link: "/services/digital-marketing",
  },
  {
    title: "Fleet Management System",
    description:
      "Enhance efficiency and reduce costs with our fleet management software for real-time tracking and automation.",
    link: "/fleet-management",
  },
  {
    title: "Driver & Vehicle Management",
    description:
      "A centralized solution to track drivers, vehicles, maintenance, and compliance efficiently.",
    link: "/driver-&-vehicle-management",
  },
  {
    title: "Load & Cargo Management",
    description:
      "Revolutionize shipping operations with intelligent load distribution & cargo tracking.",
    link: "/solutions/load-cargo",
  },
  {
    title: "Expense & Billing Management",
    description:
      "Automate financial workflows, track expenses, and ensure seamless billing.",
    link: "/expense-&-billing-management",
  },
];

const ServicesPage = () => {
  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 bg-orange-400 bg-opacity-30"></div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Our Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto"
          >
            Empower your business with cutting-edge digital solutions.
          </motion.p>

          <div className="mt-8 flex justify-center gap-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-900 transition"
              >
                Get in Touch
              </motion.button>
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl"
        ></motion.div>
      </section>
      <div className="container mx-auto px-6 py-12">
        <div
          id="#services"
          a
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 text-center transition transform hover:scale-105 hover:shadow-xl"
            >
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <Link
                to={service.link}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-block bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
