import { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
    address: "",
  });

  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Send OTP (Mock)
  const handleSendOtp = () => {
    if (!formData.phone || formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    const otpCode = Math.floor(100000 + Math.random() * 900000);
    setGeneratedOtp(otpCode);
    setOtpSent(true);
    alert(`Your OTP is: ${otpCode}`); // Replace with SMS API later
  };

  // Validate Form
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.firstName.trim()) tempErrors.firstName = "First Name is required.";
    if (!formData.email.trim()) tempErrors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Enter a valid email.";
    if (!formData.phone.trim()) tempErrors.phone = "Phone number is required.";
    if (formData.phone.length !== 10) tempErrors.phone = "Enter a valid 10-digit phone number.";
    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty.";
    if (!formData.businessType) tempErrors.businessType = "Please select a business type.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    alert("Form Submitted Successfully ✅");
    console.log("Form Data:", formData);

    // Clear form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      businessType: "",
      message: "",
      address: "",
    });
    setOtp("");
    setOtpSent(false);
    setGeneratedOtp(null);
  };

  // Reset Form
  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      businessType: "",
      message: "",
      address: "",
    });
    setOtp("");
    setOtpSent(false);
    setGeneratedOtp(null);
    setErrors({});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-blue-500 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/10 backdrop-blur-lg shadow-xl rounded-xl overflow-hidden p-8"
      >
      
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-white p-8 flex flex-col justify-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-center">Get In Touch</h2>
          <p className="text-gray-300 mb-4 text-center">
            Expert Solutions provides cutting-edge digital solutions for managing travel and transportation logistics.
          </p>
          <div className="space-y-4 text-lg">
            <p className="flex items-center gap-2"><FiPhone className="text-orange-400 text-xl" /><span>+91 7509617777</span></p>
            <p className="flex items-center gap-2"><FiMail className="text-orange-400 text-xl" /><span>expertsolutionsbbsr@gmail.com</span></p>
            <p className="flex items-center gap-2"><FiMapPin className="text-orange-400 text-xl" /><span>Bhubaneswar, Odisha 751014</span></p>
            <p className="flex items-center gap-2"><FaBuilding className="text-orange-400 text-xl" /><span>Raipur, Chhattisgarh 492001</span></p>
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Contact Us</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500"
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-gray-600">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

          
            <div>
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <label className="block text-gray-600">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
              <div className="flex flex-col justify-end">
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="w-full p-3 border rounded-md bg-blue-900 text-white hover:bg-blue-700"
                >
                  {otpSent ? "Resend OTP" : "Send OTP"}
                </button>
              </div>
            </div>

       
            {otpSent && (
              <div>
                <label className="block text-gray-600">Enter OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500"
                />
              </div>
            )}

           
            <div>
              <label className="block text-gray-600">Business Type</label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select Business Type</option>
                <option value="Logistics">Logistics</option>
                <option value="Transport">Transport</option>
                <option value="Software">Software</option>
              </select>
              {errors.businessType && <p className="text-red-500 text-sm">{errors.businessType}</p>}
            </div>

          
            <div>
              <label className="block text-gray-600">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500 h-28"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

          
            <div>
              <label className="block text-gray-600">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500"
              />
            </div>

        
            <div className="flex gap-4">
              <button
                type="button"
                onClick={handleReset}
                className="w-1/2 bg-orange-400 text-white px-4 py-3 rounded-md hover:bg-gray-400"
              >
                Reset
              </button>
              <button
                type="submit"
                className="w-1/2 bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-900"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
