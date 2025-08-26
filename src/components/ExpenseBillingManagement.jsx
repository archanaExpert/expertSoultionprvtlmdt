import { FaReceipt, FaFileInvoice, FaMoneyCheckAlt, FaChartBar, FaTasks, FaSyncAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ExpenseBillingManagement() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
    
      <section className="text-center py-16 bg-blue-900 text-white">
        <motion.h1 whileHover={{ scale: 1.05 }} className="text-5xl font-extrabold tracking-wide">
           Simplify Expense Management & Billing with One Solution
        </motion.h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Revolutionize your financial processes with smart tools for expense tracking, automated billing, and real-time insights.
        </p>
        <motion.button whileTap={{ scale: 0.95 }} className="mt-6 bg-white text-blue-700 py-3 px-8 rounded-full shadow-lg text-lg font-semibold hover:bg-gray-200 transition">
         Start Free Trial
        </motion.button>
      </section>

     
      <section className="p-8 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-400"> Powerful Features for Expense & Billing Efficiency</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <FaReceipt className="text-blue-700 text-5xl" />, title: "Expense Tracking", desc: "Record and categorize expenses in real-time to stay organized and in control." },
            { icon: <FaFileInvoice className="text-blue-700 text-5xl" />, title: "Automated Billing", desc: "Generate invoices effortlessly and reduce manual errors for faster billing." },
            { icon: <FaMoneyCheckAlt className="text-blue-700 text-5xl" />, title: "Multi-Currency Support", desc: "Handle transactions globally with built-in currency conversion tools." },
            { icon: <FaChartBar className="text-blue-700 text-5xl" />, title: "Customizable Reports", desc: "Gain actionable insights with detailed, exportable reports tailored to your needs." },
            { icon: <FaTasks className="text-blue-700 text-5xl" />, title: "Approval Workflows", desc: "Streamline approval processes to ensure faster and more efficient expense processing." },
            { icon: <FaSyncAlt className="text-blue-700 text-5xl" />, title: "Integration", desc: "Seamlessly integrate with accounting software and payment gateways for a unified workflow." },
          ].map((feature, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl shadow-xl text-center hover:shadow-2xl transition">
             <div  className="flex justify-center mb-4" > {feature.icon}</div>
              <h3 className="text-2xl font-bold mt-4">{feature.title}</h3>
              <p className="text-gray-700 mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

     
      <section className="p-8 bg-blue-50 text-center">
        <h2 className="text-4xl font-bold text-blue-900"> How It Works</h2>
        <p className="mt-4 text-gray-700 max-w-4xl mx-auto">
          Simplify your workflow in four easy steps.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: <FaReceipt className="text-orange-400 text-5xl" />, title: "Track Expenses", desc: "Upload receipts, categorize expenses, and log payments." },
            { icon: <FaFileInvoice className="text-orange-400 text-5xl" />, title: "Generate Bills", desc: "Automatically generate invoices and send them to clients." },
            { icon: <FaTasks className="text-orange-400 text-5xl" />, title: "Monitor & Approve", desc: "Review expenses and approvals in one dashboard." },
            { icon: <FaChartBar className="text-orange-400 text-5xl" />, title: "Get Insights", desc: "Analyze trends with customizable reports." },
          ].map((step, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl shadow-xl text-center hover:shadow-2xl transition">
           <div className="flex justify-center mb-4">   {step.icon}</div>
              <h3 className="text-2xl font-bold mt-4">{step.title}</h3>
              <p className="text-gray-700 mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

   
    </div>
  );
}
