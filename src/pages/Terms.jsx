import React from "react";
import b1 from "../assets/images/b1.jpg";

const Terms = () => {
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
              width: `${20 + Math.random() * 50}px`,
              height: `${20 + Math.random() * 50}px`,
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
        <h1 className="text-3xl font-bold mb-4 text-center">Terms & Conditions</h1>
        
        <p className="mb-4">
          Welcome to Sheshraman Shrestha’s portfolio. By accessing or using this website, you agree to comply with the following terms and conditions. If you do not agree with any part of these terms, please refrain from using the site.
        </p>

        <h2 className="text-xl font-semibold mb-2">1. Intellectual Property</h2>
        <p className="mb-4">
          All content, including but not limited to text, images, graphics, and logos, is the intellectual property of Sheshraman Shrestha unless otherwise stated. Unauthorized use, reproduction, or distribution of this content is strictly prohibited.
        </p>

        <h2 className="text-xl font-semibold mb-2">2. Use of Website</h2>
        <p className="mb-4">
          This website is intended for informational and portfolio purposes only. Any misuse of the content, including unauthorized downloads or alterations, is not allowed.
        </p>

        <h2 className="text-xl font-semibold mb-2">3. External Links</h2>
        <p className="mb-4">
          This website may contain links to third-party websites for reference. We do not take responsibility for the accuracy, security, or content of external sites.
        </p>

        <h2 className="text-xl font-semibold mb-2">4. Limitation of Liability</h2>
        <p className="mb-4">
          While we strive to keep the information on this website accurate and up-to-date, we make no guarantees regarding its completeness or reliability. We are not responsible for any direct, indirect, or incidental damages resulting from the use of this site.
        </p>

        <h2 className="text-xl font-semibold mb-2">5. Privacy Policy</h2>
        <p className="mb-4">
          Any personal data collected via this site (such as contact form submissions) will be handled with confidentiality. We do not sell or share personal data with third parties.
        </p>

        <h2 className="text-xl font-semibold mb-2">6. Changes to Terms</h2>
        <p className="mb-4">
          These Terms & Conditions may be updated from time to time without prior notice. It is your responsibility to review them periodically.
        </p>

        <h2 className="text-xl font-semibold mb-2">7. Governing Law</h2>
        <p className="mb-4">
          These Terms & Conditions shall be governed by and interpreted in accordance with the laws of Nepal. Any disputes arising from the use of this website will be subject to the jurisdiction of the courts in Nepal.
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

export default Terms;
