import { useState, useEffect } from "react";
import { FaArrowUp, FaShoppingCart, FaMobileAlt, FaGlobe, FaTruck, FaUsers, FaChartBar, FaFileInvoiceDollar, FaBoxes } from "react-icons/fa";
import { motion } from "framer-motion";

const sections = [
  { id: "ecommerce", title: "E-Commerce Solutions", icon: <FaShoppingCart /> },
  { id: "mobile", title: "Mobile App Solutions", icon: <FaMobileAlt /> },
  { id: "web", title: "Web & CMS Solutions", icon: <FaGlobe /> },
  { id: "fleet", title: "Fleet Management Solutions", icon: <FaTruck /> },
  { id: "driver", title: "Driver & Vehicle Management", icon: <FaUsers /> },
  { id: "cargo", title: "Load & Cargo Management", icon: <FaBoxes /> },
  { id: "billing", title: "Expense & Billing Management", icon: <FaFileInvoiceDollar /> },
  { id: "analytics", title: "Analytics & Reporting", icon: <FaChartBar /> },
  { id: "group", title: "Group Management", icon: <FaUsers /> },
];

export default function SolutionsPage() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-blue-100 min-h-screen">
     
      {/* <nav className="fixed w-full bg-gray-800 p-4 shadow-lg z-50">
        <ul className="flex justify-center gap-6">
          {sections.map((sec) => (
            <li key={sec.id}>
              <a href={`#${sec.id}`} className="hover:text-blue-400 transition duration-300">
                {sec.title}
              </a>
            </li>
          ))}
        </ul>
      </nav> */}

     <div className="pt-20 px-6 md:px-16 lg:px-28 space-y-16 bg-blue-100 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-950">
        Empower Your <span className="text-blue-500">Business</span>
      </h1>
      <p className="text-gray-800 text-center max-w-2xl mx-auto text-lg">
        We provide cutting-edge solutions that transform your business,
        streamline operations, and boost productivity.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {sections.map((sec, index) => (
          <motion.section
            key={sec.id}
            id={sec.id}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <span className="text-blue-500 text-5xl">{sec.icon}</span>
              <h2 className="text-2xl font-bold text-white">{sec.title}</h2>
            </div>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Discover how our {sec.title.toLowerCase()} can enhance your
              business operations and deliver exceptional results.
            </p>
            <a
              href={`/${sec.id}`}
              className="mt-6 inline-block bg-blue-600 px-6 py-3 rounded-lg text-white font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300"
            >
              Learn More →
            </a>
          </motion.section>
        ))}
      </div>
    </div>

    
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className=" bg-blue-500 p-3 rounded-full text-white shadow-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center animate-bounce  "
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </div>
  );
}
