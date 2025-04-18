import { useState, useEffect } from "react";

interface NavbarProps {
  scrollToSection: (sectionId: string) => void;
}

function NavbarNew({ scrollToSection }: NavbarProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Überwacht das Scrollen, um die Sticky-Navbar zu aktivieren
  useEffect(() => {
    const handleScroll = () => {
      // Hier wird die Position bestimmt, ab wann die Navbar sticky werden soll
      // Du kannst diesen Wert anpassen (z.B. const navbarPosition = 100)
      const navbarPosition = 20;
      setIsSticky(window.scrollY > navbarPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "Über mich" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projekte" },
    { id: "experience", label: "Erfahrung" },
    { id: "contact", label: "Kontakt" },
  ];

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${
        isSticky
          ? "fixed top-0 left-0 right-0 bg-white shadow-md py-2"
          : "relative bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-blue-500">
          Benjamin Koller
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-medium hover:text-blue-500 transition-colors ${
                isSticky ? "text-gray-800" : "text-gray-800"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-gray-800 hover:text-blue-500"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavbarNew;
