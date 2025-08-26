import React from "react";
import { motion } from "framer-motion";
import {
  FaChartBar,
  FaFileInvoiceDollar,
  FaMoneyBillWave,
  FaReceipt,
  FaClipboardList,
  FaSearchDollar,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const features = [
  {
    icon: <FaChartBar size={40} className="text-blue-500" />,
    title: "Expense Tracking",
    description:
      "Real-time tracking of expenses including fuel, maintenance, and other costs.",
  },
  {
    icon: <FaFileInvoiceDollar size={40} className="text-green-500" />,
    title: "Automated Billing",
    description:
      "Generate invoices automatically and send payment reminders effortlessly.",
  },
  {
    icon: <FaMoneyBillWave size={40} className="text-yellow-500" />,
    title: "Multi-Currency & Tax Support",
    description:
      "Manage international transactions with multi-currency and tax automation.",
  },
  {
    icon: <FaReceipt size={40} className="text-red-500" />,
    title: "Receipt Uploads & Documentation",
    description:
      "Store receipts and documents for quick reference and compliance.",
  },
  {
    icon: <FaClipboardList size={40} className="text-purple-500" />,
    title: "Expense Categorization",
    description:
      "Categorize expenses for better financial insights and tax reporting.",
  },
  {
    icon: <FaSearchDollar size={40} className="text-orange-500" />,
    title: "Reports & Analytics",
    description:
      "Generate financial reports to analyze spending trends and make informed decisions.",
  },
];

export default function Management() {
  const reasons = [
    {
      title: "Reduces Manual Workload",
      desc: "Save hours on repetitive billing and tracking tasks by automating processes with ease.",
    },
    {
      title: "Prevents Financial Leakages",
      desc: "Identify and resolve unaccounted expenses before they affect your business profits.",
    },
    {
      title: "Improves Cash Flow",
      desc: "Ensure timely payments and generate accurate reports to maintain financial stability.",
    },
    {
      title: "Enhances Transparency",
      desc: "Maintain clear financial records for audits and compliance effortlessly.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen  font-sans">
      <section className="relative bg-gradient-to-r bg-blue-900  text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight"
          >
            Streamline Your Finances
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl mt-4 text-gray-200 max-w-2xl mx-auto"
          >
            Optimize your expenses, automate billing, and manage your finances
            with ease.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Link to="/contact">
              <button className="bg-orange-400 hover:bg-orange-500 text-gray-100 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300">
                Connect Now
              </button>
            </Link>
          </motion.div>
        </div>

        <div className="absolute inset-0 -z-10">
          <div className="w-72 h-72 bg-white/10 rounded-full blur-3xl absolute top-10 left-10 animate-pulse"></div>
          <div className="w-96 h-96 bg-pink-400/20 rounded-full blur-3xl absolute bottom-10 right-10 animate-pulse"></div>
        </div>
      </section>

      <div className=" text-center m-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Key Features
        </h2>
        <p className="text-gray-600 text-lg mt-2 max-w-2xl mx-auto">
          Explore powerful features designed to simplify your workflow and boost
          productivity.
        </p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4"
            >
              {feature.icon}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="m-16">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          How It Works
        </h2>

        <div className="mt-8 space-y-6">
          {[
            {
              title: "Tracking Expenses",
              desc: "Easily monitor all expenses related to your operations, including fuel costs, driver allowances, and maintenance charges, through a centralized dashboard.",
            },
            {
              title: "Billing Process",
              desc: "Automate your billing workflow by generating accurate invoices instantly, minimizing manual errors, and ensuring smooth client communication.",
            },
            {
              title: "Payment Tracking",
              desc: "Stay on top of pending and completed payments with real-time status updates, reminders, and seamless integration with multiple payment gateways.",
            },
            {
              title: "Generating Reports",
              desc: "Get detailed analytical reports on expenses, revenue, and profitability to make data-driven decisions and improve overall efficiency.",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex justify-between items-start gap-4"
            >
              <div className="flex-1 text-left">
                <h3 className="text-xl font-semibold text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 mt-2">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          We help you simplify your financial processes with smart automation
          and accurate insights. Here’s why businesses love working with us:
        </p>

        <div className="mt-10 pb-10 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4 hover:shadow-xl transition"
            >
              <FaCheckCircle className="text-blue-500 text-2xl flex-shrink-0" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
