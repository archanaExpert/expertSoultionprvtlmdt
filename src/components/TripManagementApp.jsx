import {
  FaRoute,
  FaMobileAlt,
  FaUsers,
  FaBell,
  FaMoneyBillWave,
  FaStar,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function TripManagementApp() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen text-gray-900">
      <section className="text-center py-16 bg-blue-900 text-white">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-5xl font-extrabold tracking-wide"
        >
          Seamless Trip Management in Your Pocket
        </motion.h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Manage your fleet, drivers, and trips effortlessly with our powerful
          mobile app. Your command center for success!
        </p>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-white text-blue-800 py-3 px-8 rounded-full shadow-lg text-lg font-semibold hover:bg-gray-200 transition"
        >
          Download Now
        </motion.button>
      </section>

      <div className="max-w-5xl mx-auto px-4 text-center m-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          Powerful <span className="text-blue-900">Features</span> for Your
          Fleet
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Discover the tools that make managing your fleet simple, efficient,
          and cost-effective.
        </motion.p>
      </div>
      <section className="p-8 m-4 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: <FaMobileAlt className="text-blue-800 text-6xl" />,
            title: "Built for Speed",
            desc: "Real-time tracking, instant trip scheduling, and seamless operations.",
          },
          {
            icon: <FaUsers className="text-blue-800 text-6xl" />,
            title: "Tailored for You",
            desc: "Customizable features for any fleet size, large or small.",
          },
          {
            icon: <FaRoute className="text-blue-800 text-6xl" />,
            title: "AI-Powered Routes",
            desc: "Smart algorithms ensure efficient and optimized trip planning.",
          },
          {
            icon: <FaBell className="text-blue-800 text-6xl" />,
            title: "Push Notifications",
            desc: "Stay updated with real-time alerts and important trip updates.",
          },
          {
            icon: <FaMoneyBillWave className="text-blue-800 text-6xl" />,
            title: "Expense Snapshots",
            desc: "Monitor and control fleet expenses with detailed breakdowns.",
          },
          {
            icon: <FaStar className="text-blue-800 text-6xl" />,
            title: "Driver Leaderboard",
            desc: "Track performance and reward top-performing drivers.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-xl text-center hover:shadow-2xl transition"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-bold mt-4">{feature.title}</h3>
            <p className="text-gray-700 mt-2">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      <section className="p-8 bg-blue-50">
        <h2 className="text-center text-4xl font-bold text-blue-900">
          {" "}
          What Our Users Say
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              name: "Rajesh K.",
              role: "Logistics Head",
              review:
                "Managing 50+ vehicles was chaos until we found this app. It's been a lifesaver!",
            },
            {
              name: "Priya M.",
              role: "Fleet Supervisor",
              review:
                "Driver communication is now instant and effortless. We've seen a 30% productivity boost.",
            },
            {
              name: "Ankit P.",
              role: "Operations Manager",
              review:
                "Tracking vehicle performance has never been easier. Highly recommended!",
            },
            {
              name: "Sunita R.",
              role: "Logistics Coordinator",
              review:
                "Real-time updates and analytics are game-changers for our fleet management.",
            },
            {
              name: "Akash J.",
              role: "Financial Analyst",
              review:
                "Cost tracking is so much more transparent now. A must-have tool for logistics!",
            },
            {
              name: "Neha S.",
              role: "Operations Manager",
              review:
                "The platform has streamlined our workflow tremendously. Real-time insights make decision-making effortless!",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition"
            >
              <p className="text-lg italic text-gray-700">
                “{testimonial.review}”
              </p>
              <h4 className="text-xl font-semibold mt-4">{testimonial.name}</h4>
              <p className="text-gray-600">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
