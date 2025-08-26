import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const services = [
  {
    title: "E-commerce",
    description:
      "E-commerce continues to grow rapidly, evolving with advances in technology like mobile shopping (m-commerce), voice-activated shopping (via devices like Amazon's Alexa), and the integration of social media platforms with shopping features",
    image: "/assets/ecommerce3-1.jpg",
  },
  {
    title: "Mobile App",
    description:
      "Mobile apps continue to grow in importance as more people rely on their mobile devices for daily tasks, communication, entertainment, and business. The increasing integration of technologies like AI, machine learning, and augmented reality is expanding the potential of mobile apps even further",
    image: "/assets/mobile.jpg",
  },
  {
    title: "UI-UX",
    description:
      "UI and UX design are closely related disciplines in the field of digital product design, but they focus on different aspects of the user’s interaction with a product or service. Together, they are critical for creating successful, user-friendly applications, websites, and digital experiences",
    image: "/assets/ui.jpg",
  },
  {
    title: "Digital Marketing",
    description:
      "Digital marketing is a powerful, versatile strategy for reaching and engaging customers in the digital age. It's wide range of tools and tactics allows businesses of all sizes to build brand awareness, drive traffic, and achieve measurable results",
    image: "/assets/digital.jpg",
  },
  {
    title: "Fleet Management",
    description:
      "A fleet management system is a comprehensive tool designed to optimize the operation and oversight of vehicle fleets. It allows businesses to streamline everything from vehicle tracking and maintenance scheduling to fuel management and driver safety",
    image: "/assets/fleet.jpg",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Uncover key trends, track performance, and make informed decisions with our comprehensive Analytics & Reporting tools. Visualize real-time data, customize dashboards, and gain valuable insights to drive growth and optimize your strategies effectively",
    image: "/assets/ana.jpg",
  },
];

const ServiceSlider = () => {
  return (
    <div className="w-full py-16 bg-gray-100">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <p className="text-gray-600 mt-2">
          We offer a wide range of digital solutions to enhance your business.
          From app development to marketing strategies, we have everything
          covered.
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-6xl mx-auto"
        dir="rtl"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index} className="p-4">
            <motion.div className="relative w-full h-72 cursor-pointer rounded-xl shadow-xl bg-white perspective-1000">
              <motion.div
                className="absolute inset-0 w-full h-full"
                initial={{ rotateY: 0 }}
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="absolute inset-0 w-full h-full rounded-xl overflow-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl flex flex-col items-center justify-center text-center text-white shadow-lg"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-sm mt-2">{service.description}</p>
                </div>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;
