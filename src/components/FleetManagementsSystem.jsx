import {
  FaUserTie,
  FaWrench,
  FaMapMarkerAlt,
  FaGasPump,
  FaClipboardCheck,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
  FaMoneyBillWave,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function FleetManagementsSystem() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <section className="text-center py-16 bg-blue-900 text-white">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-5xl font-extrabold tracking-wide"
        >
          Driver & Vehicle Management System
        </motion.h1>
        <p className="text-lg mt-4 text-blue-100 max-w-3xl mx-auto">
          Streamline fleet and driver operations with our all-in-one solution.
          Monitor vehicles, track drivers, and ensure compliance with ease.
        </p>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-white text-blue-800 py-3 px-8 rounded-full shadow-lg text-lg font-semibold hover:bg-gray-200 transition"
        >
          Connect Now
        </motion.button>
      </section>

      <section className="p-8 max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-orange-400"> System Overview</h2>
        <p className="text-gray-700 mt-4">
          Our system simplifies fleet management with a centralized platform,
          real-time tracking, automated maintenance reminders, and compliance
          alerts.
        </p>
      </section>

      <section className="p-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: <FaUserTie className="text-blue-800 text-5xl" />,
            title: "Driver Profile Management",
            desc: "Manage driver profiles, training records, and certifications.",
          },
          {
            icon: <FaWrench className="text-blue-800 text-5xl" />,
            title: "Vehicle Maintenance",
            desc: "Automated scheduling for preventive maintenance and repairs.",
          },
          {
            icon: <FaMapMarkerAlt className="text-blue-800 text-5xl" />,
            title: "Real-Time GPS Tracking",
            desc: "Track vehicle locations and optimize route efficiency.",
          },
          {
            icon: <FaGasPump className="text-blue-800 text-5xl" />,
            title: "Fuel & Expense Monitoring",
            desc: "Monitor fuel consumption, mileage, and expenses to control costs.",
          },
          {
            icon: <FaClipboardCheck className="text-blue-800 text-5xl" />,
            title: "Compliance & Reporting",
            desc: "Ensure regulatory compliance with license and registration tracking.",
          },
          {
            icon: <FaChartLine className="text-blue-800 text-5xl" />,
            title: "Analytics & Insights",
            desc: "Get detailed analytics and reports to improve fleet performance.",
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
      </section>

      <section className="p-8 bg-blue-50 text-center">
        <h2 className="text-4xl font-bold text-blue-900"> How It Works</h2>
        <p className="mt-4 text-gray-700 max-w-4xl mx-auto">
          Our system automates and streamlines fleet management with a seamless
          workflow.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: <FaRocket className="text-blue-900 text-5xl" />,
              title: "Step 1",
              desc: "Add vehicles and drivers to the system.",
            },
            {
              icon: <FaShieldAlt className="text-blue-900 text-5xl" />,
              title: "Step 2",
              desc: "Monitor safety, compliance, and maintenance.",
            },
            {
              icon: <FaChartLine className="text-blue-900 text-5xl" />,
              title: "Step 3",
              desc: "Analyze performance and optimize operations.",
            },
            {
              icon: <FaMoneyBillWave className="text-blue-900 text-5xl" />,
              title: "Step 4",
              desc: "Save costs and improve efficiency!",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-xl text-center hover:shadow-2xl transition"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold mt-4">{step.title}</h3>
              <p className="text-gray-700 mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-center text-4xl font-bold text-orange-400">
          {" "}
          Benefits of Using Our System
        </h2>
        <div className="mt-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <FaChartLine className="text-blue-800 text-5xl" />,
              title: "Improved Efficiency",
              desc: "Automate processes and reduce paperwork.",
            },
            {
              icon: <FaShieldAlt className="text-blue-800 text-5xl" />,
              title: "Enhanced Safety & Compliance",
              desc: "Ensure regulatory compliance and driver safety.",
            },
            {
              icon: <FaMoneyBillWave className="text-blue-800 text-5xl" />,
              title: "Reduced Operational Costs",
              desc: "Minimize maintenance and fuel expenses.",
            },
            {
              icon: <FaRocket className="text-blue-800 text-5xl" />,
              title: "Better Decision-Making",
              desc: "Use analytics for smarter fleet management.",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition"
            >
              <div className="flex justify-center mb-4"> {benefit.icon}</div>
              <h3 className="text-2xl text-center font-bold mt-4">
                {benefit.title}
              </h3>
              <p className="text-gray-700 text-center mt-2">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
