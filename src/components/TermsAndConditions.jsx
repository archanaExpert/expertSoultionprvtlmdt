import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Terms & Conditions</h1>
        <p className="text-sm text-gray-500 text-center mb-4">Last Updated: July 19</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Introduction</h2>
          <p className="text-gray-600">
            Welcome to <span className="font-semibold">Expert Solution</span>. These Terms & Conditions govern your use of our application and services. By using our app, you agree to comply with these terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">User Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>You must be at least 18 years old to use our services.</li>
            <li>Provide accurate and complete registration information.</li>
            <li>Maintain the confidentiality of your account credentials.</li>
            <li>Do not use our services for illegal or unauthorized purposes.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Payment & Refund Policy</h2>
          <p className="text-gray-600">
            All payments are securely processed. Refunds are issued only under exceptional circumstances as per our refund policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Intellectual Property</h2>
          <p className="text-gray-600">
            All content, trademarks, and data on our platform belong to Expert Solution. Unauthorized use or reproduction is strictly prohibited.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Limitation of Liability</h2>
          <p className="text-gray-600">
            We are not responsible for any indirect, incidental, or consequential damages arising from your use of our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Termination of Services</h2>
          <p className="text-gray-600">
            We reserve the right to terminate or suspend your access to our services at any time if you violate these terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Changes to Terms</h2>
          <p className="text-gray-600">
            We may update these Terms & Conditions from time to time. Any changes will be communicated via email or app notifications.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Contact Us</h2>
          <p className="text-gray-600">For any questions or concerns regarding these terms, contact us:</p>
          <ul className="mt-3 text-gray-600">
            <li><strong>Email:</strong> <a href="mailto:expertsolutionsbbsr@gmail.com" className="text-blue-600 hover:underline">expertsolutionsbbsr@gmail.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+917509617777" className="text-blue-600 hover:underline">+91 7509617777</a></li>
            <li><strong>Address (Raipur):</strong> C-25, RAMKUND VIHAR, Samta Colony, Raipur, Chhattisgarh 492001</li>
            <li><strong>Address (Bhubaneswar):</strong> 78, Gautam Nagar, Bhubaneswar, Odisha 751014</li>
          </ul>
        </section>

        <footer className="text-center text-gray-500 text-sm mt-6 border-t pt-4">
          &copy; 2025 Expert Solutions, Inc. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default TermsAndConditions;
