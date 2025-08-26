import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import Img from "../assets/logoexp.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const dropdownRefs = useRef({});

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  const handleLinkClick = () => {
    setTimeout(() => setDropdown(null), 100);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdown && !dropdownRefs.current[dropdown]?.contains(event.target)) {
        setDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdown]);

  return (
    <nav className="bg-gradient-to-r from-gray-50 to-white shadow-md w-full fixed top-0 z-50 pr-10 pl-10 p-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="w-25 rounded" onClick={handleLinkClick}>
          <img src={Img} alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 relative text-gray-950 font-medium">
          <Link
            to="/home"
            className="hover:text-yellow-300 transition duration-300"
            onClick={handleLinkClick}
          >
            Home
          </Link>

          {["Company", "Technology", "Industries", "Solutions", "Services"].map(
            (item, index) => (
              <div
                key={index}
                className="relative"
                ref={(el) => (dropdownRefs.current[item] = el)}
              >
                <button
                  onClick={() => toggleDropdown(item)}
                  className="flex items-center hover:text-yellow-300 transition duration-300"
                >
                  {item} <ChevronDown size={16} className="ml-1" />
                </button>

                {dropdown === item && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute bg-white text-gray-800 shadow-lg rounded-md mt-2 w-56 py-1"
                  >
                    {item === "Company" &&
                      ["About Us", "Client", "Social Media"].map((sub) => (
                        <Link
                          key={sub}
                          to={`/${sub.toLowerCase().replace(/ /g, "-")}`}
                          className="block px-4 py-2 hover:bg-gray-200 transition"
                          onClick={handleLinkClick}
                        >
                          {sub}
                        </Link>
                      ))}
                    {item === "Technology" &&
                      [
                        {
                          name: "JavaScript",
                          icon: (
                            <FaJs className="inline mr-2 text-yellow-500" />
                          ),
                        },
                        {
                          name: "HTML/CSS",
                          icon: (
                            <FaHtml5 className="inline mr-2 text-orange-500" />
                          ),
                          extraIcon: (
                            <FaCss3Alt className="inline ml-2 text-blue-500" />
                          ),
                        },
                        {
                          name: "Tailwind CSS",
                          icon: (
                            <FaCss3Alt className="inline mr-2 text-blue-400" />
                          ),
                        },
                        {
                          name: "React.js",
                          icon: (
                            <FaReact className="inline mr-2 text-blue-500" />
                          ),
                        },
                        {
                          name: "Node.js",
                          icon: (
                            <FaNodeJs className="inline mr-2 text-green-500" />
                          ),
                        },
                        {
                          name: "Express.js",
                          icon: (
                            <SiExpress className="inline mr-2 text-gray-500" />
                          ),
                        },
                        {
                          name: "SQL",
                          icon: (
                            <FaDatabase className="inline mr-2 text-gray-600" />
                          ),
                        },
                        {
                          name: "MongoDB",
                          icon: (
                            <SiMongodb className="inline mr-2 text-green-500" />
                          ),
                        },
                      ].map((tech) => (
                        <div
                          key={tech.name}
                          className="block px-4 py-2 hover:bg-gray-200 cursor-pointer items-center"
                          onClick={() => console.log(`Clicked on ${tech.name}`)} // You can add custom functionality here
                        >
                          {tech.icon} {tech.name} {tech.extraIcon || ""}
                        </div>
                      ))}

                    {item === "Industries" &&
                      [
                        "Retail",
                        "Technology",
                        "Transportation",
                        "Manufacture",
                      ].map((industry) => (
                        <Link
                          key={industry}
                          to={`/${industry.toLowerCase().replace(/ /g, "-")}`}
                          className="block px-4 py-2 hover:bg-gray-200 transition"
                          onClick={handleLinkClick}
                        >
                          {industry}
                        </Link>
                      ))}

                    {item === "Solutions" &&
                      [
                        "E-commerce Solutions",
                        "Mobile App solution",
                        "Web and CMS solution",
                        "Fleet Management solution",
                        "Driver & Vehicle Management solution",
                        "Load and Cargo Management solution",
                        "Expense & Billing Management solution",
                        "Analytics & Reporting solution",
                        "Group Management solution",
                      ].map((solution) => (
                        <Link
                          key={solution}
                          to={`/${solution.toLowerCase().replace(/ /g, "-")}`}
                          className="block px-4 py-2 hover:bg-gray-200 transition"
                          onClick={handleLinkClick}
                        >
                          {solution}
                        </Link>
                      ))}

                    {item === "Services" &&
                      [
                        "Fleet Management",
                        "Driver & Vehicle Management",
                        "Load and Cargo Management",
                        "Expense & Billing Management",
                        "Analytics & Reporting",
                        "Group Management",
                        "Smart QR Seal & Tracking",
                      ].map((service) => (
                        <Link
                          key={service}
                          to={`/${service.toLowerCase().replace(/ /g, "-")}`}
                          className="block px-4 py-2 hover:bg-gray-200 transition"
                          onClick={handleLinkClick}
                        >
                          {service}
                        </Link>
                      ))}
                  </motion.div>
                )}
              </div>
            )
          )}
        </div>

        {/* Authentication Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/signin"
            className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition duration-300"
            onClick={handleLinkClick}
          >
            Sign In
          </Link>
          <Link
            to="/contact"
            className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
