import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Img from "../assets/logoexp.svg";

const Footer = () => {
  const linkVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    hover: { scale: 1.1, x: 5, color: "#fff" },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
 const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
    <section className="text-center bg-amber-500 py-20 px-4">
  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-4xl md:text-4xl font-bold text-black"
  >
    Transform Your Tech Business
  </motion.h2>

  <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-800">
    Let’s discuss how our technology solutions can fuel your success.
  </p>

 <div className="flex justify-center mt-8">
     <Link to="/contact"> <motion.button
        onClick={handleScrollUp}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-900 px-8 py-3 rounded-full text-white font-semibold text-lg shadow-lg 
                   hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
      >
        Get Started →
      </motion.button>
      </Link>
    </div>
</section>
    <footer className="bg-white text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
       
        <div>
          <motion.img
            src={Img}
            alt="Company Logo"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-36 mb-3"
          />
          <p className="text-sm text-blue-950 opacity-80 leading-relaxed">
            At Expert Solutions, we provide customized solutions across various
            domains, helping businesses optimize their processes efficiently.
          </p>
          <div className="flex gap-3 mt-3">
            {[
              { Icon: FaFacebookF, link: "https://www.facebook.com/" },
              { Icon: FaTwitter, link: "https://twitter.com/login" },
              { Icon: FaLinkedinIn, link: "https://www.linkedin.com/login" },
              {
                Icon: FaInstagram,
                link: "https://www.instagram.com/accounts/login/",
              },
            ].map(({ Icon, link }, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.2 }}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-amber-300 transition text-lg"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

   
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-950">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-blue-950 opacity-80">
            {["Home", "Company", "Services", "Solutions", "Contact Us"].map(
              (item, i) => {
                const path =
                  item === "Contact Us" ? "/contact" : `/${item.toLowerCase()}`;
                return (
                  <motion.li
                    key={i}
                    variants={linkVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    transition={{ duration: 0.3 }}
                    className="cursor-pointer transition"
                  >
                    <Link
                      to={path}
                      className="hover:text-blue-400"
                      onClick={scrollToTop}
                    >
                      {item}
                    </Link>
                  </motion.li>
                );
              }
            )}
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-3 text-black">Services</h3>
          <ul className="space-y-2 text-sm text-blue-950 opacity-80">
            {[
              "E-commerce",
              "Mobile App",
              "UI/UX",
              "Digital Marketing",
              "Fleet Management",
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={linkVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                transition={{ duration: 0.3 }}
                className="cursor-pointer transition"
              >
                <Link
                  to={`/services/${item.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-blue-400"
                  onClick={scrollToTop}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3 text-black">Solutions</h3>
          <ul className="space-y-2 text-sm text-blue-950 opacity-80">
            {[
              "Analytics & Report",
              "Expense & Billing",
              "Load & Cargo",
              "Driver & Vehicle",
              "Group Management",
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={linkVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                transition={{ duration: 0.3 }}
                className="cursor-pointer transition"
              >
                <Link
                  to={`/solutions/${item
                    .toLowerCase()
                    .replace(/ & /g, "-")
                    .replace(" ", "-")}`}
                  className="hover:text-blue-400"
                  onClick={scrollToTop}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold mb-3 text-black">Legal</h3>
          <ul className="space-y-2 text-sm text-blue-950 opacity-80">
            {["Privacy Policy", "Terms and Condition"].map((item, i) => (
              <motion.li
                key={i}
                variants={linkVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                transition={{ duration: 0.3 }}
                className="cursor-pointer transition"
              >
                <Link
                  to={`/legal/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-blue-400"
                  onClick={scrollToTop}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

     
      <div className="mt-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      
        <div className="bg-gray-800 p-3 rounded-lg shadow-md">
          <iframe
            title="Google Map Raipur"
            src="https://www.google.com/maps/embed?..."
            className="w-full h-40 rounded-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <p className="mt-2 text-sm text-white">
            📍 C,25, RAMKUND VIHAR, Samta Colony, Raipur, Chhattisgarh 492001
          </p>
          <p className="text-yellow-400 text-sm font-bold">
            ⭐ 4.4 | 16 Reviews
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Expert+Solutions+Raipur+Chhattisgarh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-sm font-semibold"
          >
            🔗 View on Google Maps
          </a>
        </div>

       
        <div className="bg-gray-800 p-3 rounded-lg shadow-md">
          <iframe
            title="Google Map Bhubaneswar"
            src="https://www.google.com/maps/embed?..."
            className="w-full h-40 rounded-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <p className="mt-2 text-sm text-white">
            📍 Back side of Utkal, Kanika Galeria, Plot No 78, Gautam Nagar,
            Bhubaneswar, Odisha 751014
          </p>
          <p className="text-yellow-400 text-sm font-bold">
            ⭐ 5.0 | 11 Reviews
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Expert+Solutions+Bhubaneswar+Odisha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-sm font-semibold"
          >
            🔗 View on Google Maps
          </a>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
