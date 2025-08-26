import React, { useState } from "react";
import { motion } from "framer-motion";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    branchName: "",
    companyLogo: null,
    address: "",
    phoneNumber: "",
    email: "",
    fullName: "",
    companyName: "",
    countryCode: "+91",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    let newErrors = {};

    if (!formData.branchName.trim())
      newErrors.branchName = "Branch name is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required";
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (
      !formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.phoneNumber.match(/^\d{10,15}$/)) {
      newErrors.phoneNumber = "Enter a valid phone number (10-15 digits)";
    }
    if (!formData.companyLogo)
      newErrors.companyLogo = "Company logo is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleWebsiteSelection = (selectedWebsite) => {
    if (!validateForm()) return;

    setSuccessMessage(
      "🎉 Registration successful! Redirecting in 3 seconds... 🚀"
    );

    setTimeout(() => {
      const fullContactNo = `${formData.countryCode}${formData.phoneNumber}`;
      const websiteURL =
        selectedWebsite === "tripChallanBook"
          ? "https://tripchallanbooks.tripchallanbook.in/"
          : "https://tms.tripchallanbook.in/login";

      const message = `Hello, I would like to create a user ID and password.\n\nSelected Website: ${
        selectedWebsite === "tripChallanBook"
          ? "Trip Challan Book"
          : "Trip Management System"
      }\nBranch Name: ${formData.branchName}\nCompany Name: ${
        formData.companyName
      }\nFull Name: ${formData.fullName}\nEmail: ${formData.email}\nAddress: ${
        formData.address
      }\nPhone Number: ${fullContactNo}\n\nThank you for your support! Looking forward to using your services.`;

      const whatsappURL = `https://wa.me/8707003659?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappURL, "_blank");
      window.location.href = websiteURL;
    }, 3000);
  };

  return (
    <motion.div
      className="max-w-lg mx-auto p-8 rounded-3xl bg-gradient-to-r from-black to-blue-500 text-white shadow-xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-extrabold text-center mb-4">
        🚀 Register on TMS Today!
      </h2>
      <p className="text-center mb-6">
        Provide the following details to get started:
      </p>

      {successMessage && (
        <div className="p-4 bg-green-600 text-white rounded-lg text-center mb-4 shadow-md">
          {successMessage}
        </div>
      )}

      <form className="space-y-4">
        <div>
          <input
            type="text"
            name="branchName"
            placeholder="📍 Branch Name"
            value={formData.branchName}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white text-black"
          />
          {errors.branchName && (
            <p className="text-red-300 text-sm mt-1">{errors.branchName}</p>
          )}
        </div>

        <div>
          <input
            type="file"
            name="companyLogo"
            accept="image/*"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white text-black"
          />
          {errors.companyLogo && (
            <p className="text-red-300 text-sm mt-1">{errors.companyLogo}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="companyName"
            placeholder="🏢 Company Name"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white text-black"
          />
          {errors.companyName && (
            <p className="text-red-300 text-sm mt-1">{errors.companyName}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="address"
            placeholder="📍 Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white text-black"
          />
          {errors.address && (
            <p className="text-red-300 text-sm mt-1">{errors.address}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="phoneNumber"
            placeholder="📞 Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white text-black"
          />
          {errors.phoneNumber && (
            <p className="text-red-300 text-sm mt-1">{errors.phoneNumber}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="📧 Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white text-black"
          />
          {errors.email && (
            <p className="text-red-300 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="fullName"
            placeholder="🧑‍💼 Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white text-black"
          />
          {errors.fullName && (
            <p className="text-red-300 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        <h3 className="text-lg font-bold text-center mt-6">
          🌐 Select Your Website
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
          <motion.div
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg bg-white"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleWebsiteSelection("tripChallanBook")}
          >
            <img
              src="/assets/trip challan book.png"
              alt="Trip Challan Book"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
              <p className="text-white text-lg font-semibold">
                Trip Challan Book
              </p>
            </div>
          </motion.div>
          <motion.div
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg bg-white"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleWebsiteSelection("tripManagementSystem")}
          >
            <img
              src="/assets/trip management system.png"
              alt="Trip Management System"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
              <p className="text-white text-lg font-semibold">
                Trip Management System
              </p>
            </div>
          </motion.div>
        </div>
      </form>
    </motion.div>
  );
};

export default SignInForm;
