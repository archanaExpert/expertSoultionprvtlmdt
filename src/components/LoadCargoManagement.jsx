import {
  FaBoxes,
  FaRoute,
  FaMapMarkerAlt,
  FaTruckLoading,
  FaClipboardCheck,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LoadCargoManagement() {
  const testimonials = [
    {
      name: "Rajesh K.",
      role: "Logistics Head",
      feedback:
        "Managing 50+ vehicles was chaos until we found this app. It's been a lifesaver!",
    },
    {
      name: "Priya M.",
      role: "Fleet Supervisor",
      feedback:
        "Driver communication is now instant and effortless. We've seen a 30% productivity boost.",
    },
    {
      name: "Ankit P.",
      role: "Operations Manager",
      feedback:
        "Tracking vehicle performance has never been easier. Highly recommended!",
    },
  ];
  const features = [
    {
      icon: <FaBoxes className="text-5xl text-white" />,
      title: "Load Optimization",
      desc: "Maximize vehicle capacity by intelligently planning how goods are packed and loaded.",
      color: "from-blue-600 to-blue-900",
    },
    {
      icon: <FaMapMarkerAlt className="text-5xl text-white" />,
      title: "Cargo Tracking",
      desc: "Stay informed with live tracking of every shipment from origin to destination.",
      color: "from-blue-600 to-blue-900",
    },
    {
      icon: <FaRoute className="text-5xl text-white" />,
      title: "Route Planning Integration",
      desc: "Combine load management with route optimization for the fastest and safest deliveries.",
      color: "from-blue-600 to-blue-900",
    },
    {
      icon: <FaTruckLoading className="text-5xl text-white" />,
      title: "Damage Prevention Insights",
      desc: "Identify risky packing methods and avoid cargo damage with advanced analytics.",
      color: "from-blue-600 to-blue-900",
    },
  ];
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <section className="text-center py-16 bg-blue-900 text-white">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-5xl font-extrabold tracking-wide"
        >
          Transform Your Logistics with Intelligent Load & Cargo Management
        </motion.h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Optimize shipping operations with smart tools for efficiency, load
          optimization, and real-time tracking.
        </p>
        <Link to="/contact">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-white text-blue-900 py-3 px-8 rounded-full shadow-lg text-lg font-semibold hover:bg-gray-200 transition"
          >
            Start Free Trial
          </motion.button>
        </Link>
      </section>

      <section className="p-8 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-4xl font-bold text-orange-400"
        >
          Powerful Features for{" "}
          <span className="">Load & Cargo Efficiency</span>
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.07, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`relative p-6 rounded-2xl shadow-lg bg-gradient-to-r ${feature.color} hover:shadow-2xl cursor-pointer`}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>

              <h3 className="text-xl font-bold text-white">{feature.title}</h3>

              <p className="text-gray-100 mt-3 leading-relaxed">
                {feature.desc}
              </p>

              <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-20 rounded-2xl transition"></div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="p-8 bg-blue-50 text-center">
        <h2 className="text-4xl font-bold text-blue-900">
          {" "}
          How It Works: From Planning to Delivery
        </h2>
        <p className="mt-4 text-gray-700 max-w-4xl mx-auto">
          Streamline your cargo operations in four easy steps.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: <FaClipboardCheck className="text-blue-900 text-5xl" />,
              title: "Phase 1",
              desc: "Input Cargo Details - Upload shipment details, including weight, dimensions, and destination.",
            },
            {
              icon: <FaBoxes className="text-blue-900 text-5xl" />,
              title: "Phase 2",
              desc: "Plan Load Distribution - The system generates the most efficient loading plan.",
            },
            {
              icon: <FaMapMarkerAlt className="text-blue-900 text-5xl" />,
              title: "Phase 3",
              desc: "Track Cargo in Transit - Get real-time updates on cargo location and status.",
            },
            {
              icon: <FaRocket className="text-blue-900 text-5xl" />,
              title: "Phase 4",
              desc: "Analyze Performance - Access post-delivery reports to improve future operations.",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-xl text-center hover:shadow-2xl transition"
            >
              <div className="flex justify-center mb-4"> {step.icon}</div>
              <h3 className="text-2xl font-bold mt-4">{step.title}</h3>
              <p className="text-gray-700 mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="p-8 bg-gray-50">
        <h2 className="text-center text-4xl font-bold text-orange-400">
          What Our Users Say
        </h2>

        <div className="mt-8 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                {" "}
                <FaCheckCircle className="text-blue-900 text-4xl" />
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "{testimonial.feedback}"
              </p>
              <h4 className="text-lg font-bold mt-4">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
