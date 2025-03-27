import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";  // Home page (with photo)
import About from "./components/About";  // New About section
import Projects from "./components/P&E";
import PE from "./components/P&E";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Blog from "./components/blog";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1500);  // Simulate loading for 1.5 seconds
    }, []);

    return loading ? <Loader /> : (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Hero />} />  {/* Home Page */}
                <Route path="/about" element={<About />} />  {/* About Page */}
                <Route path="/projects" element={<Projects />} />
                {/* <Route path="/experience" element={<Experience />} /> */}
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/experience" element={<PE />} />
                <Route path="/p&e" element={<PE />} />

            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
