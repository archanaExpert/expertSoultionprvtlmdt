import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaChartLine, 
  FaClipboardList, 
  FaUsers, 

  FaRegSmile, 
  FaStar, 
  FaChevronDown, 
  FaRupeeSign
} from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";

export default function Analytics() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const features = [
    { icon: <FaChartLine className="text-blue-900 text-5xl" />, title: "Gain Visibility", desc: "Track user interactions to identify strengths & areas for improvement." },
    { icon: <FaClipboardList className="text-blue-900 text-5xl" />, title: "Make Data-Driven Decisions", desc: "Use insights to optimize resources & enhance strategies." },
    { icon: <FaUsers className="text-blue-900 text-5xl" />, title: "Measure Success", desc: "Monitor KPIs & track campaign performance with ease." },
    { icon: <FaRupeeSign className="text-blue-900 text-5xl" />, title: "Identify Trends", desc: "Analyze historical data to predict future business outcomes." },
  ];

  const metrics = [
    { icon: <FaChartLine className="text-blue-900 text-5xl" />, title: "Traffic & Usage Reports", desc: "Monitor page views, sessions & engagement." },
    { icon: <FaUsers className="text-blue-900 text-5xl" />, title: "Conversion Rates", desc: "Analyze user actions and goal completion rates." },
    { icon: <MdTrendingUp className="text-blue-900 font-extrabold text-6xl" />, title: "Revenue & Sales", desc: "Breakdown of revenue trends and profitability." },
    { icon: <FaRegSmile className="text-blue-900 text-5xl" />, title: "Customer Behavior", desc: "Track bounce rates, time spent & user journeys." },
    { icon: <FaStar className="text-blue-900 text-5xl" />, title: "Customer Satisfaction (CSAT)", desc: "Gauge user satisfaction through surveys." },
   
  ];

  const faqs = [
    { question: "What are KPIs and why are they important in analytics?", answer: "KPIs (Key Performance Indicators) help track business performance and measure success against objectives." },
    { question: "How do I track customer behavior with analytics tools?", answer: "By analyzing page visits, session duration, and user interactions, you can gain insights into customer behavior." },
    { question: "How do I identify trends and patterns in my data?", answer: "Use historical data and predictive analytics to uncover patterns that help in forecasting." },
    { question: "Can I generate customized reports in analytics tools?", answer: "Yes! Our platform allows you to create fully customized reports tailored to your needs." },
    { question: "What’s the difference between traffic reports and conversion reports?", answer: "Traffic reports focus on user visits, while conversion reports analyze goal completion and success rates." },
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">

  
      <section className="text-center py-16 bg-blue-900 text-white">
        <motion.h1 whileHover={{ scale: 1.05 }} className="text-5xl font-extrabold tracking-wide">
          Empower Your Business with Data-Driven Insights
        </motion.h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Uncover key trends, track performance, and make informed decisions with our comprehensive Analytics & Reporting tools.
        </p>
        <Link to="/contact">
        <motion.button 
          whileTap={{ scale: 0.95 }} 
          className="mt-6 bg-white text-blue-900 py-3 px-8 rounded-full shadow-lg text-lg font-semibold hover:bg-gray-200 transition"
        >
          Connect Now
        </motion.button>
        </Link>
      </section>

      
      <section className="p-8 max-w-7xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold text-orange-400">Key Benefits & Metrics</h2>
        <p className="text-gray-600  max-w-2xl mx-auto">
          Understand the advantages and key performance indicators that help your group management succeed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...features, ...metrics].map((item, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.05 }} 
              className="bg-white p-6 rounded-2xl shadow-xl text-center hover:shadow-2xl transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mt-4">{item.title}</h3>
              <p className="text-gray-700 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

     
      <section className="p-8 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.02 }} 
              className="bg-white p-4 rounded-lg shadow-lg text-left cursor-pointer"
            >
              <div className="flex justify-between items-center" onClick={() => toggleFAQ(index)}>
                <h3 className="text-xl font-semibold text-blue-800">{faq.question}</h3>
                <FaChevronDown className={`text-blue-900 transition-transform ${openFAQ === index ? "rotate-180" : ""}`} />
              </div>
              {openFAQ === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
