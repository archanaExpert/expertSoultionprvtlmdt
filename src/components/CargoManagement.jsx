import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center text-center ">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-yellow-400"
      >
        Efficient, Safe, and Trackable Cargo Solutions
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto text-gray-300 "
      >
        Our Load and Cargo Management system streamlines planning, tracking, and oversight, ensuring safety and efficiency.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-6 px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition"
      >
        Connect Now
      </motion.button>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div className="bg-gray-800 text-white p-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-semibold text-yellow-400"
      >
        Overview
      </motion.h2>
      <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
        The Load and Cargo Management module optimizes logistics, ensuring efficient tracking, planning, and compliance.
      </p>
    </div>
  );
};

const features = [
  { title: "Real-Time Load Tracking", description: "Monitor cargo movement at every stage.", color: "text-blue-400" },
  { title: "Cargo Categorization", description: "Ensure compliance and optimize vehicle capacity.", color: "text-green-400" },
  { title: "Driver & Vehicle Assignment", description: "Optimize safety and efficiency.", color: "text-yellow-400" },
  { title: "Loading & Unloading Management", description: "Reduce turnaround times and ensure timely deliveries.", color: "text-red-400" },
  { title: "Document Management", description: "Store essential documents securely.", color: "text-purple-400" }
];

const FeaturesSection = () => {
  return (
    <div className="bg-gray-900 text-white p-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-semibold text-yellow-400"
      >
        Key Features
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-yellow-500 transition duration-300"
          >
            <h3 className={`text-xl font-semibold ${feature.color}`}>{feature.title}</h3>
            <p className="text-gray-300 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const BenefitsSection = () => {
  return (
    <div className="bg-gray-800 text-white p-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-semibold text-yellow-400"
      >
        Benefits of Using Our System
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {["Improved Efficiency", "Enhanced Safety", "Reduced Costs", "Better Compliance", "Enhanced Customer Satisfaction"].map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-yellow-500 transition duration-300"
          >
            <h3 className="text-lg font-semibold text-yellow-400">{benefit}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function Management() {
  return (
    <div>
      <HeroSection />
      <OverviewSection />
      <FeaturesSection />
      <BenefitsSection />
    </div>
  );
}
