import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="w-full min-h-screen bg-gray-100 flex items-center justify-center px-6 md:px-12 py-16">
      <div className="max-w-7xl w-full flex flex-col items-center">
   
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-6"
        >
          About Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-2xl text-center mb-12"
        >
          Empowering businesses with innovative solutions, cutting-edge technology,
          and a passion for excellence. We turn your ideas into impactful digital
          experiences.
        </motion.p>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We are a forward-thinking company dedicated to providing innovative
              solutions that drive business success. With a passion for technology
              and excellence, we craft experiences that empower brands and
              businesses worldwide.
            </p>
            <p className="text-lg text-sky-950 font-semibold leading-relaxed">
              Our mission is to transform ideas into reality by leveraging
              cutting-edge technologies and strategic insights.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex gap-4">
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Our Services
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="https://www.simform.com/wp-content/uploads/2021/01/Functions-of-fleet-management-system.png"
              alt="About Us"
              className="w-full max-w-md h-[350px] rounded-xl shadow-2xl shadow-blue-600"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
