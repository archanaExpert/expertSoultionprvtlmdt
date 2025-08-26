import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaGasPump,
  FaFileInvoiceDollar,
  FaLock,
  
} from "react-icons/fa";
import Img1 from "../assets/fuel11.jpg";
import Img2 from "../assets/Tracking.jpg";
import Img3 from "../assets/Billing.png";
import Img4 from "../assets/Services2.jpg";


const features = [
  {
    title: "Fuel Sensor",
    description:
      "Real-time fuel monitoring with leak detection, consumption analysis, and theft prevention.",
    icon: <FaGasPump className="text-yellow-400 text-center text-5xl" />,
    img: Img1,
  },
  {
    title: "GPS Tracking",
    description:
      "Track vehicle locations, optimize routes, and receive security alerts with real-time monitoring.",
    icon: <FaMapMarkerAlt className="text-blue-400 text-5xl" />,
    img: Img2,
  },
  {
    title: "Billing Software",
    description:
      "Automated invoicing, expense tracking, and digital payments for seamless financial management.",
    icon: (
      <FaFileInvoiceDollar className="text-green-400 flex justify-center items-center text-5xl" />
    ),
    img: Img3,
  },
  {
    title: "Sealing & Security Services",
    description:
      "Tamper-proof smart seals with real-time security alerts for cargo safety.",
    icon: <FaLock className="text-red-400 text-5xl" />,
    img: Img4,
  },
];

export default function FleetManagement() {
  return (
    <div className="bg-blue-900 text-white h-screen p-6">
   
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-orange-400 mb-6"
      >
        Revolutionize Your Fleet Operations
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl mx-auto text-gray-300"
      >
        Optimize efficiency, ensure safety, and cut costs with our advanced
        Fleet Management System.
      </motion.p>

      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-orange-500/60 transition duration-300"
          >
          
            <motion.div
              className="flex justify-center items-center mb-4"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {feature.icon}
            </motion.div>

          
            <h2 className="text-xl font-semibold text-center mb-2">
              {feature.title}
            </h2>

            <p className="text-gray-300 text-center">{feature.description}</p>

            <motion.img
              src={feature.img}
              alt={feature.title}
              className="w-full h-44 object-contain mt-4 rounded-2xl shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>

   
    </div>
  );
}
