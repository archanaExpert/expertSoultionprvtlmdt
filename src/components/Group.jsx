import {
  FaUsers,
  FaTasks,
  FaComments,
  FaChartBar,
  FaCalendarAlt,
  FaLock,
  FaUsersCog,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Group() {
  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-950 to-blue-900 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-20 flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight drop-shadow-md"
          >
            Manage Your <span className="text-orange-400">Groups</span> With
            Ease & Efficiency
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-6 text-lg text-blue-100 max-w-2xl leading-relaxed"
          >
            A powerful solution to organize, manage, and collaborate within
            groups seamlessly. Track activities, manage members, and improve
            coordination with advanced tools.
          </motion.p>
        </div>

        <div className="absolute top-16 right-10 w-52 h-52 bg-blue-900 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-blue-900 opacity-10 rounded-full blur-3xl"></div>
      </section>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center text-center p-6">
        <div className="max-w-4xl w-full rounded-2xl p-10 text-gray-800">
          <h1 className="text-4xl text-blue-900 font-extrabold mb-4">
            {" "}
            Streamline Team Collaboration
          </h1>
          <p className="text-lg text-gray-600">
            Efficiently organize teams, assign tasks, track progress, and
            enhance communication with our Group Management System.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3 mb-4"
        >
          <FaUsersCog className="text-4xl text-orange-400 drop-shadow-lg" />
          <span className="uppercase text-sm font-semibold tracking-widest text-orange-400">
            Smart Group Management
          </span>
        </motion.div>

        <div className="max-w-5xl mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FaUsers size={40} className="text-blue-500" />}
            title="Create & Manage Groups"
            description="Set up teams with roles and permissions."
          />
          <FeatureCard
            icon={<FaTasks size={40} className="text-green-500" />}
            title="Task Assignment"
            description="Assign and track tasks with deadlines."
          />
          <FeatureCard
            icon={<FaComments size={40} className="text-purple-500" />}
            title="Real-Time Communication"
            description="Use chat, video calls, and messaging tools."
          />
          <FeatureCard
            icon={<FaCalendarAlt size={40} className="text-orange-500" />}
            title="Meeting Scheduling"
            description="Plan and organize meetings seamlessly."
          />
          <FeatureCard
            icon={<FaChartBar size={40} className="text-red-500" />}
            title="Analytics & Reports"
            description="Monitor performance with real-time insights."
          />
          <FeatureCard
            icon={<FaLock size={40} className="text-gray-500" />}
            title="Secure Access"
            description="Role-based permissions for data security."
          />
        </div>
      </div>
    </>
  );
}
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      <div className="flex justify-center mb-4"> {icon}</div>
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
