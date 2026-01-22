import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { AnimatePresence } from "motion/react";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#050505] text-white selection:bg-[#4770FF] selection:text-white">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#4770FF]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#8b5cf6]/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-[1100px] mx-auto p-4 md:p-8 space-y-8">
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<div className="flex items-center justify-center h-[50vh] text-2xl font-bold">404 | Page Not Found</div>} />
            </Routes>
          </AnimatePresence>
        </main>
        
        <footer className="py-12 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} CodeKage. All Rights Reserved.</p>
            <p className="font-bold">Built for Startups & Businesses</p>
        </footer>
      </div>
    </div>
  )
}

export default App