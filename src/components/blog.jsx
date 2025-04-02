import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <section
      className="min-h-[150vh] flex items-center justify-center text-gray-900 px-6 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/blog-bg.jpg)`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center bg-white/70 backdrop-blur-lg p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-5xl font-wallpoet font-bold mb-4 text-blue-800">
          My Blog
        </h1>
        <motion.p
          className="text-lg text-gray-700"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          I will be writing the blog shortly, please wait...
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Blog;
