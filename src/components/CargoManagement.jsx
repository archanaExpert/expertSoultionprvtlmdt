import { motion } from "framer-motion";

import {

  FaTruck,
  FaBox,
  FaUsers,
  FaFileAlt,
  FaClipboardList,
  FaCogs,
  FaMapMarkedAlt,
  FaTruckLoading,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-black/50"></div>

      <div className="absolute top-40 left-1/2 transform -translate-x-1/2  bg-orange-400 opacity-20 blur-3xl rounded-full"></div>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-4xl md:text-6xl font-extrabold text-orange-400 drop-shadow-lg leading-tight"
      >
        Efficient, Safe & Trackable Cargo Solutions
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative max-w-2xl mt-6 text-gray-300 text-lg leading-relaxed"
      >
        Streamline logistics with our Load & Cargo Management system — ensuring
        seamless planning, tracking, and delivery efficiency.
      </motion.p>

      <Link to="/contact">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative mt-8 px-8 py-3 bg-orange-400 text-gray-900 font-bold rounded-full shadow-xl hover:bg-orange-500 transition-all duration-300"
        >
          Connect Now
        </motion.button>
      </Link>
    </section>
  );
};

const OverviewSection = () => {
  return (
     <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-6 overflow-hidden">
      
     
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-orange-500 opacity-25 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-16 right-1/4 w-96 h-96 bg-yellow-500 opacity-25 blur-3xl rounded-full animate-pulse"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center p-2 text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent drop-shadow-[0_4px_15px_rgba(255,150,0,0.5)]"
      >
        Smarter Cargo & Load Management
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative mt-4 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed text-center"
      >
        Our advanced Load & Cargo Management system streamlines logistics
        operations, optimizes planning, improves real-time tracking, and ensures
        better compliance.
      </motion.p>

      {/* Feature Cards */}
      <div className="mt-14 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="group bg-gray-800/60 backdrop-blur-xl border border-gray-700 p-7 rounded-2xl shadow-xl hover:shadow-orange-400/30 transition-all duration-300 text-center"
        >
          <FaTruckLoading className="text-orange-400 text-6xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
            Faster Operations
          </h3>
          <p className="mt-2 text-gray-400">
            Manage cargo with automation to reduce delays and improve efficiency.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="group bg-gray-800/60 backdrop-blur-xl border border-gray-700 p-7 rounded-2xl shadow-xl hover:shadow-yellow-400/30 transition-all duration-300 text-center"
        >
          <FaMapMarkedAlt className="text-yellow-400 text-6xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-xl font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300">
            Real-Time Tracking
          </h3>
          <p className="mt-2 text-gray-400">
            Monitor cargo movement live and ensure timely deliveries.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          className="group bg-gray-800/60 backdrop-blur-xl border border-gray-700 p-7 rounded-2xl shadow-xl hover:shadow-orange-400/30 transition-all duration-300 text-center"
        >
          <FaCogs className="text-orange-400 text-6xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
            Smart Planning
          </h3>
          <p className="mt-2 text-gray-400">
            Optimize resources, routes, and scheduling with intelligent insights.
          </p>
        </motion.div>
      </div>
    </section>
  );
};


const features = [
  {
    icon: <FaTruck />,
    title: "Real-Time Load Tracking",
    desc: "Monitor cargo movement at every stage.",
  },
  {
    icon: <FaBox />,
    title: "Cargo Categorization",
    desc: "Optimize vehicle capacity & ensure compliance.",
  },
  {
    icon: <FaUsers />,
    title: "Driver & Vehicle Assignment",
    desc: "Assign vehicles intelligently for efficiency.",
  },
  {
    icon: <FaClipboardList />,
    title: "Loading & Unloading",
    desc: "Reduce turnaround time with better scheduling.",
  },
  {
    icon: <FaFileAlt />,
    title: "Document Management",
    desc: "Securely store & manage essential documents.",
  },
  {
    icon: <FaTruck />,
    title: "Route Optimization",
    desc: "Plan the fastest and safest delivery routes.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-blue-900 py-16 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-orange-400"
      >
        Key Features
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-orange-500/60 transition-all duration-300 border border-gray-700 group"
          >
            <div className="text-4xl text-orange-400 group-hover:scale-125 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mt-4 text-white">
              {feature.title}
            </h3>
            <p className="text-gray-300 mt-2">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const benefits = [
  "Improved Operational Efficiency",
  "Enhanced Cargo Safety",
  "Reduced Logistics Costs",
  "Better Regulatory Compliance",
  "Higher Customer Satisfaction",
  "Seamless Real-Time Tracking",
];

const BenefitsSection = () => {
  return (
    <section className="bg-gray-900 py-16 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-orange-400"
      >
        Why Choose Our System?
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-orange-500/60 transition duration-300"
          >
            <h3 className="text-lg font-semibold text-white">{benefit}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


export default function Management() {
  return (
    <div>
      <HeroSection />
      <OverviewSection />
      <FeaturesSection />
      <BenefitsSection />
     
    </div>
  );
}
