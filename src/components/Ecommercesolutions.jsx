import { FaTruck, FaShoppingCart, FaCogs, FaLaptopCode, FaWindows, FaLinux, FaApple, FaProjectDiagram, FaFileCode, FaRoute } from "react-icons/fa";
import { SiMariadb, SiMongodb, SiMysql, SiGit } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function EcommerceSolutions() {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-50 min-h-screen text-gray-900">
      
      <section className="text-center py-16 px-6 bg-gradient-to-r from-orange-400 to-blue-950 text-white">
     
      <motion.h1
        whileHover={{ scale: 1.05 }}
        className="flex flex-wrap items-center justify-center gap-3 text-3xl md:text-5xl font-extrabold tracking-wide text-center drop-shadow-lg"
      >
        Reliable Trucking & E-commerce Solutions{" "}
        <FaTruck className="text-white text-5xl md:text-6xl drop-shadow-lg" />
      </motion.h1>

  
      <p className="text-base md:text-lg mt-6 max-w-3xl mx-auto leading-relaxed px-3">
        Simplify your <span className="font-semibold">logistics</span>,{" "}
        <span className="font-semibold">fleet management</span>, and{" "}
        <span className="font-semibold">online business operations</span> with our
        integrated solutions. Track shipments, manage inventory, and optimize
        deliveries seamlessly.
      </p>

      

      
      <Link to="/contact">
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="mt-10 bg-white text-blue-600 py-3 px-10 rounded-full shadow-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
      >
         Get Started
      </motion.button>
      </Link>
    </section>

    
      <section className="p-6 md:p-12">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-blue-900 p-6 md:p-10 rounded-2xl shadow-lg text-center transition duration-300 hover:shadow-xl"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-100">
            Reliable Trucking and Transportation Services
          </h2>
          <p className="text-base md:text-lg text-gray-200 mt-4 leading-relaxed">
            Dedicated to offering seamless and trustworthy logistics solutions for
            businesses of all sizes. With a fleet of well-maintained vehicles and a
            team of experienced drivers, we ensure your cargo reaches its destination
            safely and on time.
          </p>

     
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              {
                icon: <FaTruck className="text-white text-5xl mb-3" />,
                title: "Fleet Management",
                desc: "Track, monitor, and manage your entire fleet in real-time.",
              },
              {
                icon: <FaShoppingCart className="text-white text-5xl mb-3" />,
                title: "E-commerce Solutions",
                desc: "Manage your online store, inventory, and customer orders effortlessly.",
              },
              {
                icon: <FaRoute className="text-white text-5xl mb-3" />,
                title: "Smart Delivery Routing",
                desc: "Optimize delivery routes and save time with intelligent planning.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-6 w-full sm:w-72 shadow-lg border border-white/20"
              >
                {item.icon}
                <h3 className="text-lg md:text-xl text-amber-400 font-semibold">{item.title}</h3>
                <p className="text-sm md:text-base mt-2 text-gray-200">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

     
      <section className="p-6 md:p-12">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 md:p-12 rounded-2xl shadow-lg text-center transition duration-300 hover:shadow-xl"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-blue-950">
            Reliable E-commerce Website Development Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 mt-4 mb-4 leading-relaxed">
            The secret to winning the e-commerce game lies in having an online
            presence that matches your audience’s expectations and compels them to
            convert. Our expertise ensures visually stunning and conversion-focused
            e-commerce solutions.
          </p>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "15+ Years in Market",
              "250+ Ecommerce Specialists",
              "90% Customer NPS",
              "50+ Projects Launched",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-blue-50 p-4 rounded-lg shadow-md text-base md:text-lg font-bold"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

     
      <section className="p-6 md:p-12">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 md:p-10 rounded-2xl shadow-lg text-center transition duration-300 hover:shadow-xl"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
            Technical Expertise for E-commerce Development
          </h2>
          <p className="text-base md:text-lg text-gray-600 mt-4">
            We employ the most advanced technical skills for the best e-commerce
            solutions.
          </p>

         
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="border border-gray-300 py-3 px-4">Technology</th>
                  <th className="border border-gray-300 py-3 px-4">Icon</th>
                  <th className="border border-gray-300 py-3 px-4">Description</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {[
                  { name: "MySQL", icon: <SiMysql className="text-blue-700 text-3xl" />, desc: "Relational Database Management System" },
                  { name: "MariaDB", icon: <SiMariadb className="text-blue-700 text-3xl" />, desc: "Open-source Database" },
                  { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-3xl" />, desc: "NoSQL Database for scalability" },
                  { name: "OOPs", icon: <FaCogs className="text-gray-700 text-3xl" />, desc: "Object-Oriented Programming Principles" },
                  { name: "MVC", icon: <FaCogs className="text-gray-700 text-3xl" />, desc: "Model-View-Controller Architecture" },
                  { name: "Agile", icon: <FaProjectDiagram className="text-purple-700 text-3xl" />, desc: "Agile Development Methodology" },
                  { name: "VS Code", icon: <FaLaptopCode className="text-gray-700 text-3xl" />, desc: "Popular Code Editor" },
                  { name: "PhpStorm", icon: <FaFileCode className="text-gray-700 text-3xl" />, desc: "IDE for PHP Development" },
                  { name: "Git", icon: <SiGit className="text-orange-600 text-3xl" />, desc: "Version Control System" },
                  { name: "Windows", icon: <FaWindows className="text-blue-600 text-3xl" />, desc: "Operating System" },
                  { name: "Linux", icon: <FaLinux className="text-gray-600 text-3xl" />, desc: "Open-source OS for developers" },
                  { name: "Mac", icon: <FaApple className="text-gray-600 text-3xl" />, desc: "Apple's Operating System" },
                ].map((tech, index) => (
                  <tr key={index} className="hover:bg-gray-100 transition">
                    <td className="border border-gray-300 py-3 px-4">{tech.name}</td>
                    <td className="border border-gray-300 py-3 px-4 flex justify-center">{tech.icon}</td>
                    <td className="border border-gray-300 py-3 px-4">{tech.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
