import {
  FaMapMarkerAlt,
  FaRoute,
  FaUserShield,
  FaTools,
  FaMoneyBillWave,
  FaChartLine,
  FaShieldAlt,
  FaSmile,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function FleetManagementPage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <section className="text-center py-16 bg-blue-800 text-white">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-5xl font-extrabold tracking-wide"
        >
          Simplify Your Fleet Operations
        </motion.h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Optimize your fleet performance with our comprehensive management
          software. Monitor vehicles, streamline logistics, and reduce costs—all
          from a single platform.
        </p>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-white text-blue-800 py-3 px-8 rounded-full shadow-lg text-lg font-semibold hover:bg-gray-200 transition"
        >
          Start Free Trial
        </motion.button>
      </section>

      <section className="p-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <FaMapMarkerAlt className="text-blue-800 text-5xl" />,
            title: "Real-Time Tracking",
            desc: "Get precise vehicle locations and ensure timely deliveries with live GPS tracking.",
          },
          {
            icon: <FaRoute className="text-blue-800 text-5xl" />,
            title: "Route Optimization",
            desc: "Reduce fuel costs and enhance productivity with intelligent route planning.",
          },
          {
            icon: <FaUserShield className="text-blue-800 text-5xl" />,
            title: "Driver Monitoring",
            desc: "Track driver behavior, ensure safety, and improve accountability.",
          },
          {
            icon: <FaTools className="text-blue-800 text-5xl" />,
            title: "Maintenance Alerts",
            desc: "Schedule preventive maintenance to avoid unexpected downtimes.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-xl text-center hover:shadow-2xl transition"
          >
            {feature.icon}
            <h3 className="text-2xl font-bold mt-4">{feature.title}</h3>
            <p className="text-gray-700 mt-2">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      <section className="p-8 bg-blue-100">
        <h2 className="text-center text-4xl font-bold text-blue-800">
          {" "}
          Why Choose Our Fleet Management Solution?
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: <FaMoneyBillWave className="text-blue-800 text-5xl" />,
              title: "Save Cost",
              desc: "Cut operational expenses with data-driven insights.",
            },
            {
              icon: <FaChartLine className="text-blue-800 text-5xl" />,
              title: "Boost Productivity",
              desc: "Minimize idle time and maximize resource utilization.",
            },
            {
              icon: <FaShieldAlt className="text-blue-800 text-5xl" />,
              title: "Ensure Safety",
              desc: "Keep drivers safe with alerts and compliance tracking.",
            },
            {
              icon: <FaSmile className="text-blue-800 text-5xl" />,
              title: "Enhance Satisfaction",
              desc: "Ensure on-time deliveries with seamless planning.",
            },
          ].map((reason, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-xl text-center hover:shadow-2xl transition"
            >
              {reason.icon}
              <h3 className="text-2xl font-bold mt-4">{reason.title}</h3>
              <p className="text-gray-700 mt-2">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-center text-4xl font-bold text-blue-800">
          {" "}
          What Our Users Say
        </h2>
        <div className="mt-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              quote:
                "Managing 50+ vehicles was chaos until we found this app. It's been a lifesaver!",
              name: "Rajesh K.",
              role: "Logistics Head",
            },
            {
              quote:
                "Driver communication is now instant and effortless. We've seen a 30% productivity boost.",
              name: "Priya M.",
              role: "Fleet Supervisor",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition"
            >
              <p className="italic text-gray-800">"{testimonial.quote}"</p>
              <h4 className="font-bold text-blue-800 mt-4">
                {testimonial.name}
              </h4>
              <p className="text-gray-600">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
