// components/Sidebar.tsx
import { clsx } from "clsx";
import { Home, Settings, Info, Folder } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/", icon: <Home size={20} /> },
  { label: "Features", to: "/features", icon: <Settings size={20} /> },
  { label: "Projects", to: "/projects", icon: <Folder size={20} /> },
  { label: "About", to: "/about", icon: <Info size={20} /> },
];

export default function VerticalNavbar() {
  return (
    <aside className="h-screen w-56 bg-white border-r border-gray-200 p-4 shadow-sm">
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              clsx(
                "flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                isActive && "bg-blue-100 text-blue-700 font-medium"
              )
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
