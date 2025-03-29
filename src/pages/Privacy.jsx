import React from "react";
import b1 from "../assets/images/b1.jpg";

const Privacy = () => {
  return (
    <div 
      className="min-h-screen p-6 text-white relative bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${b1})` }}
    >
      {/* Bubble Effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-30 animate-floating"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: `${0.3 + Math.random() * 0.5}`,
              animationDuration: `${6 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="font-sirin relative z-10 bg-black bg-opacity-60 p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
        
        <p className="mb-4">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your data when you visit this website. By using this site, you agree to the terms outlined below.
        </p>

        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          When you use this website, we may collect the following types of data:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Personal Information:</strong> Name, email address (if you contact us).</li>
          <li><strong>Usage Data:</strong> Browser type, IP address, device information, and pages visited.</li>
          <li><strong>Cookies:</strong> Small data files stored on your device to enhance your experience.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Data</h2>
        <p className="mb-4">
          The collected data is used for:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Improving website functionality and content.</li>
          <li>Responding to inquiries or feedback.</li>
          <li>Analyzing site traffic and user interactions.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">3. Data Security</h2>
        <p className="mb-4">
          We take appropriate measures to protect your personal information. However, no online platform is completely secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-xl font-semibold mb-2">4. Third-Party Links</h2>
        <p className="mb-4">
          This site may contain links to external websites. We are not responsible for their privacy policies or data handling practices.
        </p>

        <h2 className="text-xl font-semibold mb-2">5. Use of Cookies</h2>
        <p className="mb-4">
          We use cookies to improve user experience. You can disable cookies in your browser settings, but some site features may not function properly.
        </p>

        <h2 className="text-xl font-semibold mb-2">6. Changes to This Policy</h2>
        <p className="mb-4">
          This Privacy Policy may be updated periodically. Users are encouraged to review it regularly.
        </p>

        <h2 className="text-xl font-semibold mb-2">7. Contact Information</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, you can contact us at <a href="mailto:sheshraman.official@gmail.com" className="text-blue-400 hover:underline">sheshraman.official@gmail.com</a>.
        </p>

        <p className="text-sm text-gray-300 mt-6">Last Updated: March 2025</p>
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes floating {
            0% { transform: translateY(0px) scale(1); opacity: 0.3; }
            50% { transform: translateY(-50px) scale(1.2); opacity: 0.7; }
            100% { transform: translateY(0px) scale(1); opacity: 0.3; }
          }

          .animate-floating {
            animation: floating infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Privacy;
