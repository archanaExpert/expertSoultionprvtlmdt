import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaMobileAlt,
  FaBrain,
  FaShieldAlt,
  FaCloud,
  FaChartLine,
  FaCogs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";

export default function Technology() {
  const toolbox = [
    {
      title: "Frontend",
      items: [
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-200" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-white-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "SQL Databases", icon: <FaDatabase className="text-purple-400" /> },
      ],
    },
    {
      title: "Tools & Others",
      items: [
        { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
        { name: "Database Management", icon: <FaDatabase className="text-green-400" /> },
      ],
    },
  ];

  const expertise = [
    {
      title: "Custom Software Development",
      description:
        "We build tailored technology solutions to align with your business needs and objectives.",
      icon: <FaCogs className="text-yellow-400" />,
    },
    {
      title: "Web & Mobile App Development",
      description:
        "Our visually stunning and functional websites and mobile apps drive engagement and conversions.",
      icon: <FaMobileAlt className="text-white-400" />,
    },
    {
      title: "Data Analytics & Business Intelligence",
      description:
        "Transform raw data into actionable insights for efficiency and optimization.",
      icon: <FaChartLine className="text-green-400" />,
    },
    {
      title: "IoT & Smart Solutions",
      description:
        "Cutting-edge IoT solutions that enhance connectivity and business operations.",
      icon: <FaCloud className="text-blue-400" />,
    },
    {
      title: "Cybersecurity & Compliance",
      description:
        "End-to-end security solutions that protect your data and ensure regulatory compliance.",
      icon: <FaShieldAlt className="text-red-400" />,
    },
    {
      title: "AI & Machine Learning",
      description:
        "Leverage AI-driven automation and predictive analytics for intelligent decision-making.",
      icon: <FaBrain className="text-purple-400" />,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 text-white min-h-screen">
   
      <header className="relative text-center p-8">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg"
        >
          Leading the Technology Revolution
        </motion.h1>
        <motion.p
          className="mt-4 text-lg max-w-2xl mx-auto opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Scalability on Demand | Seamless Integration | Connect Now
        </motion.p>
      </header>

      <section className="mb-10 p-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-white-400">
          Our Technology Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-white-500/30 hover:-translate-y-3 transition-all duration-300 border border-gray-700"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="text-xl font-bold text-white-300">{item.title}</h3>
              </div>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

    
      <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-black py-16 px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white-400">
          Our Technology Toolbox
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {toolbox.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-white-500/40 hover:-translate-y-2 transition-transform duration-300 border border-gray-700"
            >
              <h3 className="text-2xl font-semibold text-white-300 mb-5 border-b border-gray-700 pb-2">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-4 text-gray-300 hover:text-white-300 transition"
                  >
                    <span className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full shadow-md">
                      {item.icon}
                    </span>
                    <span className="text-lg">{item.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
