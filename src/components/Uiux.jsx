import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPalette } from "react-icons/fa";

export default function WebPageUIDesign() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
  
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
       
        <div className="flex-1 text-center md:text-left">
         
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-start mb-6"
          >
            <FaPalette className="text-6xl text-white drop-shadow-lg" />
          </motion.div>

        
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-extrabold leading-tight"
          >
            Web Page UI/UX Design
          </motion.h1>

        
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-base md:text-lg text-gray-200 max-w-xl"
          >
            Design engaging and intuitive digital experiences that convert visitors into customers.
          </motion.p>

          {/* CTA Button */}
          <Link to="/services/ui-ux-design">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition"
            >
              Learn More
            </motion.button>
          </Link>
        </div>

        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-full max-w-md">
            <img
              src="https://cdn.dribbble.com/userupload/11902519/file/original-3e8dbb29b7b1ef38e4b54756e37f5f47.png?resize=1024x768"
              alt="UI/UX Design"
              className="rounded-2xl shadow-2xl border border-white/10"
            />

           
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-400 blur-3xl opacity-30"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-400 blur-3xl opacity-30"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
