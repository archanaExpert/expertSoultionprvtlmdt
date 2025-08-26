import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";
import { FaShieldAlt, FaClock, FaUsers, FaCogs, FaCheckCircle, FaEye, FaLightbulb, FaBullseye } from "react-icons/fa";
import expertImg from "../assets/expert.svg";
import missionImg from "../assets/mission.svg";
import visionImg from "../assets/vission.svg";

export default function Company() {
   
        const values = [
          { icon: <FaShieldAlt className="text-blue-500 text-4xl" />, title: "Reliability", description: "Ensure accurate and consistent trip information to build trust and reliability for all users. Reliable data and support enable seamless trip planning and execution." },
          { icon: <FaClock className="text-green-500 text-4xl" />, title: "Efficiency", description: "Client-provider relationships that are built around transparency always yield the best results." },
          { icon: <FaUsers className="text-purple-500 text-4xl" />, title: "Safety", description: "Prioritize the safety of drivers, cargo, and passengers. Implement safety checks, compliance with regulations, and provide clear protocols to ensure safe and secure trips." },
          { icon: <FaCogs className="text-red-500 text-4xl" />, title: "Accountability", description: "Take responsibility for every aspect of the trip management process. Accountability builds credibility and ensures that any issues are resolved promptly and effectively." },
          { icon: <FaCheckCircle className="text-yellow-500 text-4xl" />, title: "Transparency", description: "Offer clear and accessible information on routes, schedules, and costs. Transparent communication fosters trust with clients, drivers, and partners, making collaboration easier." },
          { icon: <FaEye className="text-indigo-500 text-4xl" />, title: "Continuous Learning", description: "We embrace innovation and continuous improvement to enhance the travel and logistics industry." },
        ];
      
  return (
    <>
   <section className="bg-blue-900 py-16  flex items-center justify-center">
      <div className="text-center px-4">
       
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Welcome to Our Expert Solutions
        </motion.h1>

        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-base md:text-lg text-gray-200 mt-4"
        >
          ( Streamlining Your Journeys, Simplifying Your Operations )
        </motion.p>

    
        <Link to="/contact">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Let's Collaborate
          </motion.button>
        </Link>
      </div>
    </section>

    
      <motion.div 
        className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6 mt-16 mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-900">Your Trusted Partner in Expert Solutions</h2>
          <p className="mt-4  text-gray-700">
            All our solutions are customized & designed to meet the specific needs and challenges of your business.
            Our software solutions help increase productivity, improve efficiency, reduce overall cost and enhance performance & competitiveness.
            We have an installed base of 1 Lac+ Vehicles, provide service across 150 locations, 24/7 Helpline, with complete integration to SAP/Oracle/ERP systems & multiple Vendor configurations.
            Trip Challan Book is committed to driving innovation, delivering exceptional solutions, and fostering long-term partnerships with clients.
            We're ready to meet today's business needs in the digital world by focusing on customers. We provide top-notch software and hardware solutions for all your businesses.
          </p>
        </div>
        <div className="md:w-1/2">
          {/* <img src="/assets/expert.svg" alt="Trusted Partner" className="rounded-lg shadow-lg" /> */}
          <img src={expertImg} alt="Trusted Partner" className="rounded-lg shadow-lg" />
        </div>
      </motion.div>


 
    <section className="py-12 px-6 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Core Values</h2>
        <p className="text-gray-600 mb-12">Our Expert Solutions is built on a foundation of reliability, efficiency, and safety, ensuring smooth, cost-effective, and secure operations.</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
              {value.icon}
              <h3 className="text-xl font-semibold mt-4">{value.title}</h3>
              <p className="text-gray-600 mt-2 text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
 

    <div className="py-16 bg-gray-100">
    
      <motion.div 
        className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="md:w-1/2">
          {/* <img src="/assets/mission.svg" alt="Mission" className="rounded-lg shadow-lg" /> */}
          <img src={missionImg} alt="Mission" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-600 flex items-center gap-3">
            <FaBullseye /> Mission
          </h2>
          <p className="mt-4 text-gray-700">
            Our mission is to revolutionize trip management by providing a reliable, 
            comprehensive platform that simplifies logistics and enhances travel experiences.
            We empower individuals and organizations to make informed decisions, streamline 
            operations, and prioritize safety.
          </p>
        </div>
      </motion.div>

   
      <motion.div 
        className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6 mt-16"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-green-600 flex items-center gap-3">
            <FaLightbulb /> Vision
          </h2>
          <p className="mt-4 text-gray-700">
            We envision a world where every journey, whether personal or professional, is seamlessly managed 
            and optimized through technology. Our goal is to be the leading trip management platform, delivering 
            unparalleled efficiency, safety, and user satisfaction.
          </p>
        </div>
        <div className="md:w-1/2">
          {/* <img src="/assets/vission.svg" alt="Vision" className="rounded-lg shadow-lg" /> */}
          <img src={visionImg} alt="Vision" className="rounded-lg shadow-lg" />
        </div>
      </motion.div>
    </div>
    
    </>
  );
}
