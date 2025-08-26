import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 text-center mb-4">
          Last Updated: July 19, 2025
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Introduction
          </h2>
          <p className="text-gray-600">
            Welcome to <span className="font-semibold">Expert Solution</span>!
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you use
            our application. By using the app, you agree to the terms outlined
            here.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Information We Collect
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, password, travel details, payment details, and{" "}
              <span className="ml-6">contact preferences.</span>
            </li>
            <li>
              <strong>Non-Personal Information:</strong> Device type, operating
              system, IP address, browser type, and location data.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            How We Use Your Information
          </h2>
          <p className="text-gray-600">
            We use your data to facilitate trip bookings, manage itineraries,
            provide customer support, send transaction updates, and improve app
            performance.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Sharing Your Information
          </h2>
          <p className="text-gray-600">
            We do not sell your data. We only share it with trusted partners
            like airlines, hotels, and service providers for payments and
            analytics.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Your Rights
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Access and update your personal data.</li>
            <li>Request data deletion where legally permissible.</li>
            <li>Opt-out of certain data uses (e.g., marketing).</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Updates to This Privacy Policy
          </h2>
          <p className="text-gray-600">
            We may update this policy periodically. Significant changes will be
            communicated through email or app notifications.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions, feel free to reach out:
          </p>
          <ul className="mt-3 text-gray-600">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:expertsolutionsbbsr@gmail.com"
                className="text-blue-600 hover:underline"
              >
                expertsolutionsbbsr@gmail.com
              </a>
            </li>
            <li>
              <strong>Address (Raipur):</strong> C-25, RAMKUND VIHAR, Samta
              Colony, Raipur, Chhattisgarh 492001
            </li>
            <li>
              <strong>Address (Bhubaneswar):</strong> 78, Gautam Nagar,
              Bhubaneswar, Odisha 751014
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+917509617777"
                className="text-blue-600 hover:underline"
              >
                +91 7509617777
              </a>
            </li>
          </ul>
        </section>

        <footer className="text-center text-gray-500 text-sm mt-6 border-t pt-4">
          &copy; 2025 Expert Solutions, Inc. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
