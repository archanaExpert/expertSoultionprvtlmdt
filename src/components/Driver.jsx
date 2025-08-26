import { motion } from "framer-motion";
import {
  FaUserTie,
  FaCar,
  FaClipboardList,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";
import { MdHistory, MdCheckCircle } from "react-icons/md";
import { BiMoney } from "react-icons/bi";
import { HiOutlineChartBar } from "react-icons/hi";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Driver Records Management",
    description:
      "Store and manage driver details, certifications, and performance metrics securely in one place.",
    icon: <FaUserTie className="text-orange-400 text-5xl" />,
  },
  {
    title: "Vehicle Maintenance Scheduling",
    description:
      "Never miss a service date with automated reminders for routine checks and repairs.",
    icon: <FaCar className="text-blue-400 text-5xl" />,
  },
  {
    title: "Driver Behavior Tracking",
    description:
      "Monitor driving habits, reduce risks, and improve safety through telematics and reporting.",
    icon: <FaClipboardList className="text-green-400 text-5xl" />,
  },
  {
    title: "Vehicle History Logs",
    description:
      "Keep detailed records of every vehicle’s usage, mileage, and maintenance history.",
    icon: <MdHistory className="text-red-400 text-5xl" />,
  },
];

const benefits = [
  {
    title: "Reduce Operational Costs",
    description: "Save time and money with automated processes and insights.",
    icon: <BiMoney className="text-green-400 text-5xl" />,
  },
  {
    title: "Enhance Fleet Safety",
    description: "Identify risky behaviors and maintain safer operations.",
    icon: <FaShieldAlt className="text-blue-400 text-5xl" />,
  },
  {
    title: "Optimize Resource Usage",
    description: "Ensure every driver and vehicle performs at their best.",
    icon: <HiOutlineChartBar className="text-orange-400 text-5xl" />,
  },
  {
    title: "Stay Compliant",
    description: "Avoid fines with up-to-date compliance tracking.",
    icon: <MdCheckCircle className="text-gray-400 text-5xl" />,
  },
];

const testimonials = [
  {
    text: "Managing 50+ vehicles was chaos until we found this app. It's been a lifesaver!",
    author: "Rajesh K., Logistics Head",
  },
  {
    text: "Driver communication is now instant and effortless. We've seen a 30% productivity boost.",
    author: "Priya M., Fleet Supervisor",
  },
  {
    text: "Tracking vehicle performance has never been easier. Highly recommended!",
    author: "Ankit P., Operations Manager",
  },
  {
    text: "Real-time updates and analytics are game-changers for our fleet management.",
    author: "Sunita R., Logistics Coordinator",
  },
];

export default function Driver() {
  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-800  to-blue-900 text-white py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center  gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight">
              Seamlessly Manage Drivers & Vehicles with Our All-in-One Solution
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto text-center">
              Simplify fleet operations, improve driver management, and track
              vehicles in real-time with our powerful, intuitive, and scalable
              platform.
            </p>
          </motion.div>
        </div>
      </section>
      <div className="bg-blue-950 text-white min-h-screen p-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-white mb-6"
        >
          Our All-in-One Solution
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-2xl mx-auto text-gray-300"
        >
          Optimize your fleet performance with our comprehensive fleet
          management software.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 bg-blue-100 p-5 gap-8 mt-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-blue-500 transition duration-300"
            >
              {feature.icon}
              <h2 className="text-xl font-semibold mt-4 mb-2">
                {feature.title}
              </h2>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center text-orange-400 mt-12">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 bg-orange-100 p-4 gap-8 mt-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-orange-500 transition duration-300"
            >
              {benefit.icon}
              <h2 className="text-xl font-semibold mt-4 mb-2">
                {benefit.title}
              </h2>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center text-orange-400 mt-12">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-blue-50 p-6 rounded-lg shadow-lg text-center hover:shadow-blue-700 transition duration-300"
            >
              <p className="text-black italic">"{testimonial.text}"</p>
              <h3 className="text-orange-400 font-semibold mt-4">
                - {testimonial.author}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
