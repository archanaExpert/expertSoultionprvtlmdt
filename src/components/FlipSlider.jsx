import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Innovative Business Solutions",
    description: "Empower your company with cutting-edge digital strategies for growth and sustainability.",
    image: "https://www.dispatchtrack.com/hubfs/multi%20stop%20route%20planning%20software.webp",
  },
  {
    title: "Technology That Drives Success",
    description: "Implement modern IT solutions to enhance efficiency and maximize productivity.",
    image: "https://solutionexpert.net/wp-content/uploads/2020/06/Fleet-Management-System.jpg",
  },
  {
    title: "Corporate Excellence in Every Step",
    description: "Drive impactful decisions with expert guidance and data-driven insights.",
    image: "https://www.matellio.com/blog/wp-content/uploads/2020/07/fleet-management-software.jpg",
  },
  {
    title: "Leadership & Financial Growth",
    description: "Take your business to the next level with expert consultation and strategic planning.",
    image: "https://fleetgo.com/wp-content/uploads/2022/11/Vehicle-Management-System.webp",
  },
];

const FlipSlider = () => {
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      triggerFlip(() => (index + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const triggerFlip = (updateIndex) => {
    setFlip(true);
    setTimeout(() => {
      setIndex(updateIndex);
      setFlip(false);
    }, 700);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-900">
    
      <motion.div
        key={index}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: flip ? 180 : 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-6xl flex items-center gap-8 p-6 perspective-1000"
      >
       
        <div className="relative w-full flex gap-8 transform-style-3d">
         
          <div className="w-1/2">
            <motion.img
              key={index}
              src={slides[index].image}
              alt={slides[index].title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-[400px] object-cover rounded-xl shadow-lg backface-hidden"
            />
          </div>

       
          <div
            className="w-1/2 bg-white text-gray-900 rounded-xl shadow-lg flex flex-col items-center justify-center p-8 backface-hidden"
          >
            <motion.h2
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center"
            >
              {slides[index].title}
            </motion.h2>
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg text-center mt-4"
            >
              {slides[index].description}
            </motion.p>
          </div>
        </div>
      </motion.div>

      
      
      <button
        onClick={() => triggerFlip(() => (index === 0 ? slides.length - 1 : index - 1))}
        className="absolute left-8 bg-white/30 text-white p-4 rounded-full hover:bg-white/50 transition duration-300"
      >
        <FaChevronLeft size={30} />
      </button>
      <button
        onClick={() => triggerFlip(() => (index + 1) % slides.length)}
        className="absolute right-8 bg-white/30 text-white p-4 rounded-full hover:bg-white/50 transition duration-300"
      >
        <FaChevronRight size={30} />
      </button>

     
      <div className="absolute bottom-6 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => triggerFlip(() => i)}
            className={`w-4 h-4 rounded-full transition ${index === i ? "bg-white scale-125" : "bg-gray-500"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FlipSlider;
