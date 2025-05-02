import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Projects from "./pages/Projects";
import { useEffect, useState } from "react";
import CombinedNavbar from "./components/CombinedNavbar";
import Contact from "./pages/Contact";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => {
        scrollToSection(id);
      }, 300);
    }
  });

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkmode]);

  return (
    <div className="App bg-gray-50 dark:bg-gray-950">
      <div className="p-[2rem] border-[10px] mb-[1rem]">
        <CombinedNavbar darkmode={darkmode} setDarkmode={setDarkmode} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
