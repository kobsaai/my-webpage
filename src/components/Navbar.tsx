// components/Navbar.tsx
import { clsx } from "clsx";
import { Home, Settings, Info, Folder } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/", icon: <Home size={20} /> },
  { label: "Features", to: "/features", icon: <Settings size={20} /> },
  { label: "Projects", to: "/projects", icon: <Folder size={20} /> },
  { label: "About", to: "/about", icon: <Info size={20} /> },
];

export default function Navbar() {
  return (
    <header className="w-full h-16 bg-white border-b border-gray-200 shadow-sm flex items-center px-6">
      <nav className="flex gap-6">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              clsx(
                "flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors",
                isActive &&
                  "font-semibold text-blue-700 border-b-2 border-blue-700 pb-1"
              )
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
