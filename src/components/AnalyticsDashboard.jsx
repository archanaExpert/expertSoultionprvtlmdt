import {
  FaChartLine,
  FaClock,
  FaFileAlt,
  FaDatabase,
  FaChartPie,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AnalyticsDashboard() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <section className="text-center py-16 bg-indigo-900 text-white">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-5xl font-extrabold tracking-wide"
        >
          Transform Data Into Actionable Insights
        </motion.h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Unlock the power of analytics with real-time reporting, intuitive
          dashboards, and AI-driven insights.
        </p>
        <Link to="/contact">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-white text-indigo-700 py-3 px-8 rounded-full shadow-lg text-lg font-semibold hover:bg-gray-200 transition"
        >
          Start Free Trial
        </motion.button></Link>
      </section>

      <section className="p-8 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-400">
          {" "}
          Powerful Features To Drive Success
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
  icon: <FaChartLine className="text-orange-400 text-5xl" />,
  title: "Customizable Dashboards",
  desc: "Create dashboards tailored to your needs, focusing on the most relevant metrics.",
},
{
  icon: <FaClock className="text-orange-400 text-5xl" />,
  title: "Real-Time Analytics",
  desc: "Live data updates ensure you stay ahead with immediate insights.",
},
{
  icon: <FaFileAlt className="text-orange-400 text-5xl" />,
  title: "Automated Reports",
  desc: "Save time with scheduled reports sent directly to your inbox or dashboard.",
},
{
  icon: <FaDatabase className="text-orange-400 text-5xl" />,
  title: "Advanced Data Visualization",
  desc: "Use charts, graphs, and heatmaps to make complex data easy to understand.",
},
{
  icon: <FaChartPie className="text-orange-400 text-5xl" />,
  title: "Predictive Analytics",
  desc: "Use AI-driven insights to forecast trends and optimize strategies.",
},
{
  icon: <FaShieldAlt className="text-orange-400 text-5xl" />,
  title: "Data Security & Compliance",
  desc: "Ensure your analytics and reports are protected with enterprise-grade security and compliance standards.",
},

          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-xl text-center hover:shadow-2xl transition"
            >
              <div className="flex justify-center mb-4"> {feature.icon}</div>
              <h3 className="text-2xl font-bold mt-4">{feature.title}</h3>
              <p className="text-gray-700 mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="p-8 bg-indigo-50 text-center">
        <h2 className="text-4xl font-bold text-indigo-900">
          {" "}
          Why Choose Our Analytics & Reporting Solution?
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: <FaCheckCircle className="text-indigo-900 text-5xl" />,
              title: "Informed Decision-Making",
              desc: "Access reliable, data-driven insights to guide decisions and reduce risks.",
            },
            {
              icon: <FaCheckCircle className="text-indigo-900 text-5xl" />,
              title: "Increased Efficiency",
              desc: "Streamline workflows with automated data collection and reporting.",
            },
            {
              icon: <FaCheckCircle className="text-indigo-900 text-5xl" />,
              title: "Enhanced Collaboration",
              desc: "Teams can work together effectively with shared report access.",
            },
            {
              icon: <FaCheckCircle className="text-indigo-900 text-5xl" />,
              title: "Actionable Insights",
              desc: "Go beyond raw data and translate it into meaningful actions.",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-xl text-center hover:shadow-2xl transition"
            >
              <div className="flex justify-center mb-4"> {benefit.icon}</div>
              <h3 className="text-2xl font-bold mt-4">{benefit.title}</h3>
              <p className="text-gray-700 mt-2">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="p-8 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-900">
          {" "}
          Industry-Specific Insights
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            {
              title: "E-commerce & Retail",
              desc: "Track customer behavior, sales performance, and inventory levels to optimize supply chains.",
            },
            {
              title: "Healthcare",
              desc: "Analyze patient data, clinical performance, and operational metrics to enhance care quality.",
            },
            {
              title: "Finance",
              desc: "Monitor key financial metrics, forecast trends, and ensure compliance.",
            },
            {
              title: "Manufacturing",
              desc: "Leverage operational data to improve production processes and ensure quality control.",
            },
            {
              title: "Marketing",
              desc: "Measure campaign performance, customer engagement, and ROI for data-driven strategies.",
            },
            {
              title: "Education",
              desc: "Enhance learning outcomes by tracking student performance, attendance, and institutional growth.",
            },
          ].map((industry, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-xl text-center hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold mt-4 text-orange-500">
                {industry.title}
              </h3>
              <p className="text-gray-700 mt-2">{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
