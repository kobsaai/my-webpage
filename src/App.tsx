import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Projects from "./pages/Projects";
import { useEffect } from "react";
import CombinedNavbar from "./components/CombinedNavbar";

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Wenn die URL einen Hash enthält, zu dieser Sektion scrollen
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => {
        scrollToSection(id);
      }, 300);
    }
  });

  return (
    <div className="App">
      <div className="p-[2rem] border-[10px] mb-[1rem]">
        <CombinedNavbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
