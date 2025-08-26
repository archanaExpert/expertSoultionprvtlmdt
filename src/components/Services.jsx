import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Innovative Business Solutions",
    description:
      "Empower your company with cutting-edge digital strategies for growth and sustainability.",
    image:
      "https://www.dispatchtrack.com/hubfs/multi%20stop%20route%20planning%20software.webp",
  },
  {
    title: "Technology That Drives Success",
    description:
      "Implement modern IT solutions to enhance efficiency and maximize productivity.",
    image:
      "https://solutionexpert.net/wp-content/uploads/2020/06/Fleet-Management-System.jpg",
  },
  {
    title: "Corporate Excellence in Every Step",
    description:
      "Drive impactful decisions with expert guidance and data-driven insights.",
    image:
      "https://www.matellio.com/blog/wp-content/uploads/2020/07/fleet-management-software.jpg",
  },
  {
    title: "Leadership & Financial Growth",
    description:
      "Take your business to the next level with expert consultation and strategic planning.",
    image:
      "https://fleetgo.com/wp-content/uploads/2022/11/Vehicle-Management-System.webp",
  },
];

const FlipSlider = () => {
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlip(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setFlip(false);
      }, 700);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setFlip(true);
    setTimeout(() => {
      setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setFlip(false);
    }, 700);
  };

  const nextSlide = () => {
    setFlip(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setFlip(false);
    }, 700);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <motion.div
        key={index}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: flip ? 180 : 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full h-full max-w-5xl p-6"
      >
        <div
          className={` w-full h-full ${
            flip ? "hidden" : "block"
          } backface-hidden`}
        >
          <img
            src={slides[index].image}
            alt={slides[index].title}
            className=" object-cover rounded-xl shadow-lg"
          />
        </div>

        <div
          className={` w-full h-full flex flex-col items-center justify-center p-8 bg-white text-gray-900 rounded-xl shadow-lg transform rotateY-180 ${
            flip ? "block" : "hidden"
          }`}
        >
          <h2 className="text-3xl font-bold text-center">
            {slides[index].title}
          </h2>
          <p className="text-lg text-center mt-4">
            {slides[index].description}
          </p>
        </div>
      </motion.div>

      <button
        onClick={prevSlide}
        className="absolute left-8 bg-white/30 text-white p-4 rounded-full hover:bg-white/50 transition duration-300"
      >
        <FaChevronLeft size={30} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 bg-white/30 text-white p-4 rounded-full hover:bg-white/50 transition duration-300"
      >
        <FaChevronRight size={30} />
      </button>

      <div className="absolute bottom-6 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setFlip(true);
              setTimeout(() => {
                setIndex(i);
                setFlip(false);
              }, 700);
            }}
            className={`w-4 h-4 rounded-full transition ${
              index === i ? "bg-white scale-125" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FlipSlider;
