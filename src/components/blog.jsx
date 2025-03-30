import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl font-wallpoet font-bold mb-4">My Blog</h1>
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
