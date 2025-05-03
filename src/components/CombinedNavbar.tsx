import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Home, Settings, Folder, Info, Mail, SunMoon } from "lucide-react";
import { clsx } from "clsx";
import { InputSwitch } from "primereact/inputswitch";

interface NavbarProps {
  darkmode: boolean;
  setDarkmode: (darkmode: boolean) => void;
}

export default function CombinedNavbar({ darkmode, setDarkmode }: NavbarProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Überwacht das Scrollen, um die Sticky-Navbar zu aktivieren
  useEffect(() => {
    const handleScroll = () => {
      const navbarPosition = 20;
      setIsSticky(window.scrollY > navbarPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effekt für Hash-basierte Navigation nach dem Laden der Home-Seite
  useEffect(() => {
    // Wenn ein Hash in der URL ist und wir uns auf der Home-Seite befinden
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Leichter Timeout, damit der DOM Zeit hat, sich zu aktualisieren
        setTimeout(() => {
          const yOffset = -70; // Offset für die Navbar-Höhe
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  // Funktion zum Navigieren zu einer Sektion, auch von anderen Seiten aus
  const navigateToSection = (sectionId: string) => {
    // Wenn wir bereits auf der Home-Seite sind, nur zu Sektion scrollen
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -70; // Offset für die Navbar-Höhe
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      // Wenn wir auf einer anderen Seite sind, erst zur Home navigieren mit dem Hash
      navigate(`/#${sectionId}`);
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { to: "start", label: "Start", icon: <Home size={18} />, isSection: true },
    {
      to: "skills",
      label: "Skills",
      icon: <Settings size={18} />,
      isSection: true,
    },
    {
      to: "about",
      label: "Über mich",
      icon: <Info size={18} />,
      isSection: true,
    },
    {
      to: "/projects",
      label: "Projekte",
      icon: <Folder size={18} />,
      isSection: false,
    },
    {
      to: "/contact",
      label: "Kontakt",
      icon: <Mail size={18} />,
      isSection: false,
    },
  ];

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 bg-gray-50 dark:bg-gray-950 ${
        isSticky
          ? "fixed top-0 left-0 right-0 shadow-md dark:shadow-lg dark:shadow-white/15 py-4"
          : "relative bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink
          to="/"
          className="text-xl font-bold text-blue-500 dark:text-blue-400"
        >
          Benjamin Koller
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) =>
            item.isSection ? (
              <button
                key={item.to}
                onClick={() => navigateToSection(item.to)}
                className={clsx(
                  "flex items-center gap-2 font-medium transition-colors hover:text-blue-500 dark:hover:text-blue-400",
                  location.pathname === "/" && location.hash === `#${item.to}`
                    ? "text-blue-600 dark:text-blue-300  border-b-2 border-blue-600 dark:border-blue-300 pb-1"
                    : isSticky
                    ? "text-gray-800 dark:text-gray-200"
                    : "text-gray-800 dark:text-gray-200"
                )}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  clsx(
                    "flex items-center gap-2 font-medium transition-colors hover:text-blue-500 dark:hover:text-blue-400",
                    isActive
                      ? "text-blue-600 dark:text-blue-300 border-b-2 border-blue-600 dark:border-blue-300 pb-1"
                      : isSticky
                      ? "text-gray-800 dark:text-gray-200"
                      : "text-gray-800 dark:text-gray-200"
                  )
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            )
          )}
          <label
            htmlFor="Darkmode"
            className={"flex flex-row items-center gap-2 select-none"}
          >
            <InputSwitch
              name="Darkmode"
              checked={darkmode}
              onChange={(e) => setDarkmode(e.value)}
              key="Darkmode"
            />
            <span
              className={clsx(
                "flex items-center gap-2 font-medium transition-colors hover:text-blue-500 dark:hover:text-blue-400",
                darkmode
                  ? "text-blue-600 dark:text-blue-300"
                  : isSticky
                  ? "text-gray-800 dark:text-gray-200"
                  : "text-gray-800 dark:text-gray-200"
              )}
            >
              Darkmode
            </span>
          </label>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-200"
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
        <div className="md:hidden bg-gray-50 dark:bg-gray-950 shadow-lg dark:shadow-none ">
          <div className="container mx-auto px-4 py-3">
            {navItems.map((item) =>
              item.isSection ? (
                <button
                  key={item.to}
                  onClick={() => navigateToSection(item.to)}
                  className={clsx(
                    "flex items-center gap-2 w-full text-left py-2 hover:text-blue-500 dark:hover:text-blue-400",
                    location.pathname === "/" && location.hash === `#${item.to}`
                      ? "text-blue-600 font-medium dark:text-blue-300"
                      : "text-gray-800 dark:text-gray-200"
                  )}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    clsx(
                      "flex items-center gap-2 w-full text-left py-2 hover:text-blue-500 dark:hover:text-blue-400",
                      isActive
                        ? "text-blue-600 font-medium dark:text-blue-300"
                        : "text-gray-800 dark:text-gray-200"
                    )
                  }
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              )
            )}
            <label
              htmlFor="Darkmode"
              className={"flex flex-row items-center gap-2 select-none"}
            >
              <InputSwitch
                name="Darkmode"
                checked={darkmode}
                onChange={(e) => setDarkmode(e.value)}
                key="Darkmode"
              />
              <span
                className={clsx(
                  "flex items-center gap-2 font-medium transition-colors hover:text-blue-500 dark:hover:text-blue-400",
                  darkmode
                    ? "text-blue-600 dark:text-blue-300"
                    : isSticky
                    ? "text-gray-800 dark:text-gray-200"
                    : "text-gray-800 dark:text-gray-200"
                )}
              >
                {<SunMoon size={18} />}
              </span>
            </label>
          </div>
        </div>
      )}
    </nav>
  );
}
