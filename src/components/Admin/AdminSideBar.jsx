import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: "Dashboard", to: "/admin" },
  { name: "Flagged Reports", to: "/admin/reports" },
  { name: "Toxic Comments", to: "/admin/comments" },
  { name: "Settings", to: "/admin/settings" },
];

function AdminSideBar({ onClose }) {
  return (
    <aside className="w-64 h-screen bg-white shadow-lg p-6">
      {/* Close button on mobile */}
      <button onClick={onClose} className="block md:hidden mb-4 text-gray-500">
        ✕ Close
      </button>

      <h2 className="text-lg font-semibold mb-6">Admin Portal</h2>
      <ul className="space-y-3">
        {navItems.map(item => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md hover:bg-gray-200 ${
                  isActive ? "bg-gray-200 font-semibold" : ""
                }`
              }
              onClick={onClose}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default AdminSideBar;
