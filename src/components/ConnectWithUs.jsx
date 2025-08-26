import React from "react";
import { motion } from "framer-motion";
import social1 from "../assets/social1.png";
import social2 from "../assets/social2.png";
import social3 from "../assets/social3.png";
import social4 from "../assets/social4.png";
import social5 from "../assets/social5.png";
import social7 from "../assets/social7.png";

const socialData = [
  {
    image: social1,
    title: "Fleet Management and Transforming Supply Chain",
    description:
      "Efficiently monitor and control your transportation assets with our Fleet Management solutions. Track vehicle locations in real-time, optimize routes, reduce fuel costs, and ensure timely maintenance to maximize fleet productivity.",
  },
  {
    image: social2,
    title: "GPS Tracking and Route Optimization",
    description:
      "Optimize delivery routes to reduce travel time and fuel costs, enhancing efficiency and ensuring timely deliveries for increased customer satisfaction.",
  },
  {
    image: social3,
    title: "User-Friendly Controlled With Mobile App",
    description:
      "User-Friendly Controlled with Mobile App refers to a system or device that can be easily operated and managed through a mobile application.",
  },
  {
    image: social4,
    title: "Trusted By the Client",
    description:
      "Trusted by the Client signifies a strong reputation or reliability established through positive relationships and consistent performance in delivering products or services.",
  },
  {
    image: social5,
    title: "Warranty and Safety Product",
    description:
      "Warranty and Safety Product refers to items that come with a guarantee from the manufacturer, ensuring that they will function as intended for a specified period.",
  },
  {
    image: social7,
    title: "24/7 Services with High Security",
    description:
      "24/7 Services with High Security ensures that customers can access support or assistance at any time, day or night, while also safeguarding their information and assets from potential threats.",
  },
];

const ConnectWithUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-center">
     
      <motion.h2
        className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Connect with Us
      </motion.h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        🌍 Stay Updated | 💡 Get Inspired | 🗣️ Join the Conversation
      </p>

      <p className="text-md text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
        Follow us on social media to stay connected and learn more about how we’re transforming the world of trip and logistics management. We share updates, tips, industry insights, and success stories to keep our community informed and inspired.
      </p>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {socialData.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
           
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-50 object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

          
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>

         
            <motion.div
              className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-10"
              whileHover={{ opacity: 0.1 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ConnectWithUs;
