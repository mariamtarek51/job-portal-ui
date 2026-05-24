import { useTheme } from '../context/ThemeContext';

const PrivacyPolicy = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-black bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent mb-3">
            Privacy Policy
          </h1>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Last updated: May 2026</p>
        </div>

        <div className={`space-y-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          <section>
            <h2 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>1. Information We Collect</h2>
            <p className="leading-relaxed">
              We collect information you provide directly to us when you create an account, post a job, or apply for a position.
              This includes your name, email address, resume, work history, and any other information you choose to share.
            </p>
          </section>

          <section>
            <h2 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>2. How We Use Your Information</h2>
            <p className="leading-relaxed mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Match job seekers with relevant job opportunities</li>
              <li>Send you notifications about applications and job matches</li>
              <li>Communicate with you about our services and updates</li>
              <li>Protect against fraudulent or unauthorized activity</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>3. Information Sharing</h2>
            <p className="leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information
              with employers when you apply for a job, or with service providers who assist in our operations under strict
              confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>4. Data Security</h2>
            <p className="leading-relaxed">
              We implement industry-standard security measures to protect your personal information. However, no method
              of transmission over the internet is 100% secure. We encourage you to use strong passwords and keep your
              account credentials confidential.
            </p>
          </section>

          <section>
            <h2 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>5. Cookies</h2>
            <p className="leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience on our platform. You can control
              cookie settings through your browser preferences. Disabling cookies may affect some features of the site.
            </p>
          </section>

          <section>
            <h2 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>6. Your Rights</h2>
            <p className="leading-relaxed mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your account and associated data</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>7. Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions about this Privacy Policy or how we handle your data, please contact us through our{' '}
              <a href="/contact" className="text-primary-500 hover:underline">contact page</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
