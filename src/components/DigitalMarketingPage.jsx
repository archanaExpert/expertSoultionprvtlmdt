import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaSearch, FaChartLine, FaBullhorn,
  FaPenNib, FaShieldAlt, FaChartBar, FaEnvelope,
  FaChartPie, FaAd, FaFacebook
} from "react-icons/fa";

export default function DigitalMarketingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
      address: "",
    });
  };

  const services = [
    {
      title: "Search Engine Optimization",
      description: "Increase your website traffic & improve ranking on search engines.",
      icon: <FaSearch className="text-orange-400 text-5xl" />,
    },
    {
      title: "Social Media Marketing",
      description: "Enhance engagement & brand reach with targeted social media strategies.",
      icon: <FaFacebook className="text-orange-400 text-5xl" />,
    },
    {
      title: "Paid Marketing Campaigns",
      description: "Maximize visibility & conversions through targeted paid ads.",
      icon: <FaBullhorn className="text-orange-400 text-5xl" />,
    },
    {
      title: "Content Marketing",
      description: "Create valuable content to engage and educate your audience.",
      icon: <FaPenNib className="text-orange-400 text-5xl" />,
    },
    {
      title: "Online Reputation Management",
      description: "Protect & enhance your brand’s online image with expert monitoring.",
      icon: <FaShieldAlt className="text-orange-400 text-5xl" />,
    },
    {
      title: "Conversion Rate Optimization",
      description: "Optimize your site to turn visitors into loyal customers.",
      icon: <FaChartLine className="text-orange-400 text-5xl" />,
    },
  ];

  return (
    <>
     <section className="relative bg-gradient-to-r from-blue-900  to-indigo-900 text-white py-24 px-6 lg:px-20 text-center overflow-hidden">
     
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>

     
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight"
        >
          Boost Your Business with Digital Marketing Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-6 text-lg md:text-xl text-gray-200"
        >
          Elevate your brand visibility, engage your audience, and maximize ROI with our 
          result-driven marketing strategies.
        </motion.p>

     
      </motion.div>
    </section>
    
    <div className="bg-gray-100 min-h-screen p-6">
      
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto mt-8 p-8 bg-white shadow-xl rounded-xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        
        <div>
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-extrabold text-orange-400 leading-snug"
          >
            Elevate Your Brand with <br /> Expert Digital Marketing Solutions
          </motion.h1>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Attain a top brand position with strategic & best digital marketing services in India from industry leaders.
          </p>

          
          <div className="mt-6 grid grid-cols-2 gap-4 text-gray-700">
            <div className="flex items-center gap-2 text-blue-900"><FaSearch /> SEO</div>
            <div className="flex items-center gap-2 text-blue-900"><FaAd /> PPC</div>
            <div className="flex items-center gap-2 text-blue-900"><FaChartPie /> SMO</div>
            <div className="flex items-center gap-2 text-blue-900"><FaShieldAlt /> ORM</div>
            <div className="flex items-center gap-2 text-blue-900"><FaEnvelope /> Email Marketing</div>
            <div className="flex items-center gap-2 text-blue-900"><FaChartBar /> Google Analytics</div>
          </div>
        </div>

       
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-5 text-center">
            Get a Free Consultation 
          </h3>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name*"
            value={formData.fullName}  
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Business Email*"
            value={formData.email}  
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number*"
            value={formData.phone} 
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="message"
            placeholder="Message*"
            value={formData.message}  
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
          <input
            type="text"
            name="address"
            placeholder="Address*"
            value={formData.address}  
            onChange={handleChange}
            className="w-full p-3 mb-5 border rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white p-3 rounded-lg font-bold"
          >
            Submit
          </motion.button>
        </form>
      </motion.section>

     
      <div className="bg-gray-900 text-white py-16 px-6 mt-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
           360-Degree Digital Marketing Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition duration-300 cursor-pointer"
              whileHover={{ scale: 1.08 }}
            >
             <div  className="flex justify-center mb-4"> {service.icon}</div>
              <h3 className="text-xl font-semibold mt-5">{service.title}</h3>
              <p className="text-gray-300 mt-3 text-lg">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
