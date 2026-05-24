import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const TermsOfService = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}`}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors duration-200 ${isDarkMode ? "text-primary-400 hover:text-primary-300" : "text-primary-600 hover:text-primary-700"}`}
          >
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-black mb-4 bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <p className={`text-sm mb-10 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
          Last updated: January 1, 2026
        </p>

        <div className={`space-y-10 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
          <section>
            <h2 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using JobPortal, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              2. Use of the Platform
            </h2>
            <p className="mb-3">
              JobPortal provides a platform connecting job seekers and employers. You agree to use the platform only for lawful purposes and in a way that does not infringe the rights of others.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must be at least 18 years old to create an account.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You agree not to post false, misleading, or fraudulent job listings or applications.</li>
              <li>You may not use the platform to harass, abuse, or harm other users.</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              3. User Accounts
            </h2>
            <p>
              When you create an account, you must provide accurate and complete information. You are solely responsible for all activity that occurs under your account. You must notify us immediately of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              4. Intellectual Property
            </h2>
            <p>
              All content on JobPortal — including text, graphics, logos, and software — is the property of JobPortal and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              5. Limitation of Liability
            </h2>
            <p>
              JobPortal is provided on an &quot;as is&quot; basis. We make no warranties, expressed or implied, and disclaim all other warranties. We shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform.
            </p>
          </section>

          <section>
            <h2 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              6. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your account at any time for violations of these terms, without prior notice. Upon termination, your right to use the platform ceases immediately.
            </p>
          </section>

          <section>
            <h2 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              7. Changes to Terms
            </h2>
            <p>
              We may update these Terms of Service from time to time. We will notify users of significant changes by posting the new terms on this page with an updated date. Continued use of the platform after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              8. Contact
            </h2>
            <p>
              If you have questions about these Terms of Service, please{" "}
              <Link
                to="/contact"
                className={`font-medium underline transition-colors duration-200 ${isDarkMode ? "text-primary-400 hover:text-primary-300" : "text-primary-600 hover:text-primary-700"}`}
              >
                contact us
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
