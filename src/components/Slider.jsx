import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "https://www.dispatchtrack.com/hubfs/multi%20stop%20route%20planning%20software.webp",
  "https://solutionexpert.net/wp-content/uploads/2020/06/Fleet-Management-System.jpg",
  "https://www.matellio.com/blog/wp-content/uploads/2020/07/fleet-management-software.jpg",
  "https://fleetgo.com/wp-content/uploads/2022/11/Vehicle-Management-System.webp",
];

const texts = [
  "Innovative Business Solutions. Empower your company with cutting-edge digital strategies for growth and sustainability.",
  "Technology That Drives Success. Implement modern IT solutions to enhance efficiency and maximize productivity.",
  "Corporate Excellence in Every Step. Drive impactful decisions with expert guidance and data-driven insights.",
  "Leadership & Financial Growth. Take your business to the next level with expert consultation and strategic planning.",
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[index]})` }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 w-screen bg-gradient-to-b from-black/50 via-black/40 to-black/70 flex flex-col items-center justify-center text-center p-3">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 1 }}
          className="w-full max-w-6xl mx-auto text-white p-8 bg-black/40 backdrop-blur-md rounded-2xl shadow-xl border border-white/20"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg tracking-wide">
            {texts[index].split(".")[0]}
          </h1>
          <p className="text-lg md:text-2xl opacity-90 leading-relaxed">
            {texts[index].split(".")[1]}
          </p>
        </motion.div>
      </div>

      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-black/40 hover:bg-white/30 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-black/40 hover:bg-white/30 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`transition-all duration-300 rounded-full ${
              index === i
                ? "bg-blue-500 w-6 h-3"
                : "bg-gray-300 w-3 h-3 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
