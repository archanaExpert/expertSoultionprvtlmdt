import {
  FaShieldAlt,
  FaQrcode,
  FaMapMarkerAlt,
  FaBell,
  FaCloud,
  FaIndustry,
  FaTruckMoving,
  FaPills,
  FaShoppingCart,
  FaTools,
  FaMicrochip,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SmartQRSeals() {

  const steps = [
    {
      icon: <FaShieldAlt className="text-blue-600 text-5xl" />,
      title: "Seal the Cargo",
      desc: "Apply the Smart QR Seal to secure the shipment.",
    },
    {
      icon: <FaQrcode className="text-green-600 text-5xl" />,
      title: "Scan & Register",
      desc: "Register the QR code to start real-time tracking.",
    },
    {
      icon: <FaMapMarkerAlt className="text-orange-600 text-5xl" />,
      title: "Monitor Shipment",
      desc: "Track location and condition in real time.",
    },
    {
      icon: <FaBell className="text-red-600 text-5xl" />,
      title: "Tamper Alerts",
      desc: "Receive instant notifications on any breach.",
    },
    {
      icon: <FaCloud className="text-purple-600 text-5xl" />,
      title: "Verify at Delivery",
      desc: "Scan the QR code to confirm security status.",
    },
  ];
  const features = [
    {
      icon: <FaShieldAlt className="text-indigo-500 text-5xl" />,
      title: "Tamper-Proof Technology",
      desc: "Prevents unauthorized access with next-gen security.",
    },
    {
      icon: <FaQrcode className="text-green-500 text-5xl" />,
      title: "Unique QR Codes",
      desc: "Each seal has a secure, encrypted QR code.",
    },
    {
      icon: <FaMapMarkerAlt className="text-red-500 text-5xl" />,
      title: "Real-Time GPS Tracking",
      desc: "Track shipments live with seamless GPS integration.",
    },
    {
      icon: <FaBell className="text-yellow-500 text-5xl" />,
      title: "Instant Alerts",
      desc: "Receive instant notifications for security breaches.",
    },
    {
      icon: <FaCloud className="text-blue-500 text-5xl" />,
      title: "Cloud-Based Storage",
      desc: "Access shipment data anywhere, anytime.",
    },
    {
      icon: <FaCheckCircle className="text-purple-500 text-5xl" />,
      title: "Easy Seal Verification",
      desc: "Quick QR scanning for instant authentication.",
    },
  ];
  const industries = [
    {
      icon: <FaTruckMoving className="text-5xl text-blue-900" />,
      title: "Logistics & Supply Chain",
    },
    {
      icon: <FaIndustry className="text-5xl text-blue-900" />,
      title: "Fleet & Cargo Transportation",
    },
    {
      icon: <FaPills className="text-5xl text-blue-900" />,
      title: "Pharmaceuticals & Healthcare",
    },
    {
      icon: <FaShoppingCart className="text-5xl text-blue-900" />,
      title: "E-commerce & Retail",
    },
    {
      icon: <FaTools className="text-5xl text-blue-900" />,
      title: "Construction & Heavy Equipment",
    },
    {
      icon: <FaMicrochip className="text-5xl text-blue-900" />,
      title: "Technology & Electronics",
    },
  ];
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
     
      <section className="text-center py-16 bg-blue-900 text-white">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-5xl font-extrabold tracking-wide"
        >
          Advanced Cargo Security with Smart QR Seals & Tracking
        </motion.h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Ensure tamper-proof cargo security with real-time tracking solutions.
        </p>
        <Link to="/contact">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-white text-blue-700 py-3 px-8 rounded-full shadow-lg text-lg font-semibold hover:bg-gray-200 transition"
        >
          Get Started
        </motion.button>
        </Link>
      </section>

     
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto text-center">
      
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ">
            Key Features
          </h2>

          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Experience advanced security and next-gen tracking with our Smart QR
            Seals.
          </motion.p>

        
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 transition-all duration-300"
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-2xl font-bold mt-5 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mt-3">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="p-12 bg-gradient-to-b from-blue-50 via-white to-blue-100 text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-800 mb-10"
        >
          How It Works?
        </motion.h2>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-white/80 backdrop-blur-xl border border-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-orange-400 text-white flex items-center justify-center font-bold text-xl shadow-md mb-4">
                  {index + 1}
                </div>

                <div className="flex justify-center mb-4">{item.icon}</div>

                <h3 className="text-2xl font-semibold text-blue-800">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </section>

      <section className="relative py-16 bg-gradient-to-b from-blue-50 to-blue-100 overflow-hidden">
       
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-30 -z-10"></div>

        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-blue-900"
          >
            Industries We Serve
          </motion.h2>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Empowering businesses across multiple sectors with innovative
            solutions.
          </p>

          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.08 }}
                className="bg-white/30 backdrop-blur-xl border border-white/40 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div className="flex justify-center  mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-orange-400 transition">
                  {industry.title}
                </h3>
                <div className="mt-3 h-1 w-12 bg-blue-900 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-all"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
