import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_9fc7jab", // Replace with your Service ID
        "template_izffdq7", // Replace with your Template ID
        form.current,
        "VHlTlEVqwZfXHUUqH" // Replace with your Public Key
      )
      .then(
        () => {
          setLoading(false);
          setMessageSent(true);
          setTimeout(() => setMessageSent(false), 5000);
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          console.error("Error sending email:", error);
        }
      );
  };

  return (
    <section
      className="font-caveat text-xl relative flex flex-col items-center justify-center min-h-screen px-6 text-white overflow-hidden"
      style={{
        background: "conic-gradient(#ffcc80, #e0e0e0, #cfcfcf, #ffcc80)",


      }}
      onMouseMove={handleMouseMove}
    >
      {/* Glowing Hover Bubble */}
      <motion.div
        className="absolute w-60 h-60 bg-orange-600 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{
          top: mousePosition.y - 120, 
          left: mousePosition.x - 120,
        }}
        animate={{
          top: mousePosition.y - 120,
          left: mousePosition.x - 120,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 15 }}
      />

      <motion.h2
        className="font-wallpoet text-4xl font-bold mb-6 text-black z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-2xl text-black mb-6 text-center max-w-xl z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Have any questions or want to work together? Send me a message and I'll get back to you soon!
      </motion.p>

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="relative bg-gradient-to-t from-orange-700 to-black bg-opacity-40 shadow-lg rounded-2xl p-6 w-full max-w-lg z-10">

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-orange-400 font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="w-full px-4 py-2 bg-blue-200 text-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 transition duration-300 hover:shadow-orange-500"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-orange-400 font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-blue-200 text-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 transition duration-300 hover:shadow-orange-500"
          />
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label className="block text-orange-400 font-semibold mb-2">Message</label>
          <textarea
            name="message"
            required
            placeholder="Enter your message"
            className="w-full px-4 py-2 bg-blue-200 text-black border border-gray-600 rounded-lg h-32 resize-none focus:ring-2 focus:ring-orange-500 transition duration-300 hover:shadow-orange-500"
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>

        {/* Success Message */}
        {messageSent && (
          <motion.p
            className="text-green-400 text-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            ✅ Message Sent! I'll get back to you soon.
          </motion.p>
        )}
      </form>
    </section>
  );
};

export default Contact;
