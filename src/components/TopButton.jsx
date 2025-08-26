
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
const TopButton = () => {
  
  const [showScroll, setShowScroll] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
      <>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-32 right-10 bg-blue-900 p-3 rounded-full text-white shadow-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center animate-bounce"
        >
          <FaArrowUp size={22} />
        </button>
      )}
    </>
  )
}

export default TopButton