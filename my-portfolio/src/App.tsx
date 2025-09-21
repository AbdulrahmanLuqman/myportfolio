import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-[#11121A] to-[#4b355c] fixed overflow-auto">
      <div className="max-w-[1024px] mx-auto p-4  space-y-5">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
    </div>
  </div>
  )
}

export default App