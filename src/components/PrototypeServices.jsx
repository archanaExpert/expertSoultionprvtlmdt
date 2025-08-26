import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaClipboardList,
  FaSmile,
  FaGlobe,
  FaChartLine,
  FaUsers,
  FaPalette,
  FaLightbulb,
  FaCode,
  FaRobot,
  FaChartPie,
  FaComments,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
export default function PrototypeServices() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
    alert("Your message has been submitted!");
  };

  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white py-10 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 bg-orange-400 bg-opacity-30"></div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <FaPalette className="text-6xl text-white drop-shadow-lg" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            UI/UX Design That Converts
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-5 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            We craft engaging and intuitive digital experiences that transform
            visitors into loyal customers.
          </motion.p>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition"
            >
              Contact us
            </motion.button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-purple-400 rounded-full blur-3xl"
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
          className="absolute bottom-10 right-10 w-40 h-40 bg-blue-900 rounded-full blur-3xl"
        ></motion.div>
      </section>
      <div className="min-h-screen bg-blue-900 text-white flex flex-col items-center px-6 gap-12 py-12">
        <motion.div
          className="text-center max-w-3xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold flex items-center justify-center gap-3 mb-6">
            <FaClipboardList className="text-blue-50" /> Top-Notch Website
            Prototype Services
          </h1>
          <p className="text-xl mb-6 leading-relaxed">
            <strong>EXPERT SOLUTIONS</strong> is committed to helping you
            achieve your business goals by providing cutting-edge website
            prototype design tailored to your project needs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {[
            {
              icon: <FaSmile className="text-yellow-400 text-5xl" />,
              text: "100+ Happy Clients",
            },
            {
              icon: <FaGlobe className="text-blue-400 text-5xl" />,
              text: "250+ Global Top Brands & Enterprises Served",
            },
            {
              icon: <FaChartLine className="text-green-400 text-5xl" />,
              text: "90% Customers NPS",
            },
            {
              icon: <FaUsers className="text-purple-400 text-5xl" />,
              text: "400+ Industry-best Tech Professionals",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
            >
              {item.icon}
              <p className="mt-4 text-xl font-semibold">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="max-w-6xl w-full mt-12 grid grid-cols-1 md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {[
            {
              icon: <FaLightbulb className="text-yellow-400 text-4xl" />,
              title: "User Experience Design",
              desc: "Building intuitive interfaces.",
            },
            {
              icon: <FaCode className="text-blue-400 text-4xl" />,
              title: "Agile Development",
              desc: "Rapidly iterating prototypes based on user feedback.",
            },
            {
              icon: <FaRobot className="text-green-400 text-4xl" />,
              title: "Emerging Technologies",
              desc: "Integrating AI and real-time tracking features.",
            },
            {
              icon: <FaChartPie className="text-purple-400 text-4xl" />,
              title: "Data Analytics",
              desc: "Offering insights for personalized travel experiences.",
            },
            {
              icon: <FaComments className="text-red-400 text-4xl" />,
              title: "Collaboration Tools",
              desc: "Enabling shared itineraries and communication among travelers.",
            },
            {
              icon: <FaCheckCircle className="text-teal-400 text-4xl" />,
              title: "Testing and Validation",
              desc: "Ensuring usability and functionality through user testing.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-start text-left"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-4">
                <div> {service.icon}</div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
              </div>
              <p className="mt-2 text-lg">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
