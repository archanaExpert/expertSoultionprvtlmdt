import {
  FaCheckCircle,
  FaCode,
  FaGlobe,
  FaShoppingCart,
  FaCloud,
  FaHeadset,
  FaUserCheck,
  FaBolt,
  FaCogs,
  FaRocket,
  FaLightbulb,
  FaChartLine,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function WebAppDevelopmentCompany() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <section className="text-center py-16 bg-blue-800 text-white">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-5xl font-extrabold tracking-wide"
        >
          Web App Development Company
        </motion.h1>

        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Custom mobile and web app solutions tailored for businesses in India &
          USA. Transform your online presence with scalable, market-ready web
          applications.
        </p>

        <div className="flex justify-center mt-6">
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-r from-blue-900 to-blue-500 text-white py-3 px-8 rounded-full shadow-lg text-lg font-semibold flex items-center gap-3 hover:from-blue-800 hover:to-blue-600 hover:shadow-xl transition-all duration-300"
            >
              <FaLightbulb className="text-blue-50 text-xl" />
              Hire Experts Now
            </motion.button>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">
            Our Expertise & Impact
          </h2>
          <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Delivering top-notch web and e-commerce solutions with a proven
            track record in technology and customer satisfaction.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-0 flex flex-col lg:flex-row gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1">
            {[
              { number: "21+", label: "Years of Experience" },
              { number: "150+", label: "Industry Experts" },
              { number: "95%", label: "User Retention" },
              { number: "200+", label: "Global Clients" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform text-center flex flex-col items-center justify-center"
              >
                <h3 className="text-5xl font-extrabold text-blue-800">
                  {stat.number}
                </h3>
                <p className="text-gray-600 mt-2 text-lg font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1">
            {[
              {
                icon: <FaCode className="text-orange-400 text-6xl" />,
                title: "Custom Web App Development",
                desc: "Tailored solutions for unique business needs ensuring scalability and performance.",
              },
              {
                icon: <FaGlobe className="text-orange-400 text-6xl" />,
                title: "Open-Source Web App Development",
                desc: "Feature-rich and fully functional web apps without extra licensing fees.",
              },
              {
                icon: <FaShoppingCart className="text-orange-400 text-6xl" />,
                title: "E-commerce Web App Development",
                desc: "Streamline your eCommerce web presence with dynamic marketplace solutions.",
              },
              {
                icon: <FaCloud className="text-orange-400 text-6xl" />,
                title: "SaaS Development",
                desc: "Cloud-based solutions for optimized costs and maximum efficiency.",
              },
              {
                icon: <FaHeadset className="text-orange-400 text-6xl" />,
                title: "Support & Maintenance",
                desc: "24/7 availability to address queries and keep your app updated.",
              },
              {
                icon: <FaCheckCircle className="text-orange-400 text-6xl" />,
                title: "Web Portal Development",
                desc: "Seamless connections between businesses and customers with the latest tech stack.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 sm:p-8 rounded-3xl shadow-md hover:shadow-2xl transition transform text-center flex flex-col items-center"
              >
                <div className="flex justify-center mb-5">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <h2 className="text-center text-4xl font-extrabold text-blue-900 mb-12">
          Why Choose Expert Solutions?
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaUserCheck className="text-blue-900 text-5xl mb-4" />,
              title: "Certified Web Experts",
              desc: "Experienced professionals ensuring high-quality development.",
            },
            {
              icon: <FaBolt className="text-blue-900 text-5xl mb-4" />,
              title: "Agile Approach",
              desc: "Quick iterations and fast deployments for market-ready solutions.",
            },
            {
              icon: <FaCogs className="text-blue-900 text-5xl mb-4" />,
              title: "Purpose-Built Solutions",
              desc: "Customized to match your business requirements.",
            },
            {
              icon: <FaHeadset className="text-blue-900 text-5xl mb-4" />,
              title: "24/7 Support",
              desc: "Reliable customer support anytime you need assistance.",
            },
            {
              icon: <FaRocket className="text-blue-900 text-5xl mb-4" />,
              title: "Hassle-Free Development",
              desc: "Smooth, streamlined processes with minimal friction.",
            },
            {
              icon: <FaChartLine className="text-blue-900 text-5xl mb-4" />,
              title: "Scalable Architecture",
              desc: "Future-proof solutions built to handle growth effortlessly.",
            },
          ].map((reason, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition transform text-center flex flex-col items-center
         `}
            >
              <div className="flex justify-center mb-4">{reason.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mt-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 mt-2 text-base">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
