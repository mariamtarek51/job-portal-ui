import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const CookiePolicy = () => {
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
          Cookie Policy
        </h1>
        <p className={`text-sm mb-10 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
          Last updated: January 1, 2026
        </p>

        <div className={`space-y-10 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
          <section>
            <h2 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              1. What Are Cookies
            </h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and improve your experience across visits.
            </p>
          </section>

          <section>
            <h2 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              2. How We Use Cookies
            </h2>
            <p className="mb-3">JobPortal uses the following types of storage:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Essential storage</strong> — required for the platform to function, such as keeping you logged in and remembering your session.
              </li>
              <li>
                <strong>Preference storage</strong> — remembers your settings such as dark mode preference.
              </li>
              <li>
                <strong>Analytics</strong> — helps us understand how visitors interact with the platform so we can improve it.
              </li>
            </ul>
          </section>

          <section>
            <h2 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              3. Local Storage
            </h2>
            <p>
              In addition to cookies, we use browser localStorage to persist your session, saved jobs, and application data. This data stays on your device and is not transmitted to third parties.
            </p>
          </section>

          <section>
            <h2 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              4. Managing Cookies
            </h2>
            <p>
              You can control and delete cookies through your browser settings. Note that disabling essential cookies may affect platform functionality, such as the ability to stay logged in.
            </p>
          </section>

          <section>
            <h2 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              5. Third-Party Cookies
            </h2>
            <p>
              We do not currently use third-party advertising cookies. If this changes, we will update this policy and notify users.
            </p>
          </section>

          <section>
            <h2 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              6. Contact
            </h2>
            <p>
              If you have questions about our use of cookies, please{" "}
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

export default CookiePolicy;
