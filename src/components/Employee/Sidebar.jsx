import React, { useState, useEffect } from 'react';
import {
  Home,
  Info,
  MessageCircle,
  Clapperboard,
  Menu,
  X,
} from 'lucide-react';

function Sidebar() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    handleResize(); // run once on mount
    window.addEventListener('resize', handleResize); // update on resize
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setOpen(!open);

  return (
    <>
      {/* Mobile toggle button */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="p-2 m-2 text-gray-800 fixed top-0 left-0 z-50"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      )}

      {/* Sidebar */}
      <aside
         className={`
          bg-blue-50 shadow-md w-60 pl-4 pt-4 fixed z-40 top-0 transition-transform duration-300 ease-in-out
          ${isMobile ? 'h-screen' : 'h-full'} 
          ${isMobile ? (open ? 'translate-x-0' : '-translate-x-full') : 'relative'}
        `}
      >
        <ul className="list-none space-y-4">
          <li>
            <a href="#" className="flex items-center space-x-2 text-gray-950">
              <Home className="w-5 h-5" />
              <span className="font-medium text-md">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 text-gray-950">
              <Info className="w-5 h-5" />
              <span className="font-medium text-md">Report</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 text-gray-950">
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium text-md">Empathy Wall</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 text-gray-950">
              <Clapperboard className="w-5 h-5" />
              <span className="font-medium text-md">Videos</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
