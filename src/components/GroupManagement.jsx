import {
  FaUsers,
  FaTasks,
  FaBell,
  FaChartLine,
  FaComments,
  FaClipboardList,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function GroupManagement() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <section className="text-center py-16 bg-blue-700 text-white">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-5xl font-extrabold tracking-wide"
        >
          Efficiently Organize and Empower Your Teams
        </motion.h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Streamline team collaboration, task allocation, and communication with
          our all-in-one Group Management System.
        </p>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-white text-blue-700 py-3 px-8 rounded-full shadow-lg text-lg font-semibold hover:bg-gray-200 transition"
        >
          Connect Now
        </motion.button>
      </section>

      <section className="p-8 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-400">
          {" "}
          Group Management System Overview
        </h2>
        <p className="mt-4 text-gray-700">
          Our platform simplifies team organization, enhances collaboration, and
          ensures efficient project completion. Assign tasks, track progress,
          and ensure seamless communication in one unified system.
        </p>
      </section>

      <section className="p-8 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900"> Key Features</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <FaUsers className="text-blue-700 text-5xl" />,
              title: "Group Creation & Structure",
              desc: "Create groups, assign hierarchy, and define team roles.",
            },
            {
              icon: <FaTasks className="text-blue-700 text-5xl" />,
              title: "Task Assignment & Tracking",
              desc: "Assign tasks, track progress, and monitor deadlines.",
            },
            {
              icon: <FaBell className="text-blue-700 text-5xl" />,
              title: "Automated Notifications",
              desc: "Get reminders for meetings, deadlines, and updates.",
            },
            {
              icon: <FaComments className="text-blue-700 text-5xl" />,
              title: "Real-Time Communication",
              desc: "Utilize group messaging, video calls, and instant chat.",
            },
            {
              icon: <FaChartLine className="text-blue-700 text-5xl" />,
              title: "Group Analytics & Reports",
              desc: "View productivity metrics, member performance, and task completion rates.",
            },
            {
              icon: <FaClipboardList className="text-blue-700 text-5xl" />,
              title: "User Roles & Permissions",
              desc: "Admins can set up groups, assign roles, and outline objectives.",
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
        </div>
      </section>

      <section className="p-8 bg-blue-100 text-center">
        <h2 className="text-4xl font-bold text-blue-900">
          {" "}
          Learn More About Our System
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Group Setup & User Roles",
              desc: "Admins can configure groups, assign roles, and define objectives.",
            },
            {
              title: "Task Assignment & Workflow",
              desc: "Assign and track tasks within teams to ensure smooth workflows.",
            },
            {
              title: "Collaborative Workspace",
              desc: "Utilize real-time messaging, video calls, and resource sharing.",
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-xl text-center hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold mt-4 text-blue-700">
                {section.title}
              </h3>
              <p className="text-gray-700 mt-2">{section.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
