
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Left - Title */}
        <h1 className="text-lg font-semibold">Digital Twin 2025</h1>

        {/* Right - Links */}
        <ul className="flex space-x-6 text-gray-700">
          <li><a href="#home" className="hover:text-blue-600 cursor-pointer">Home</a></li>
          <li><a href="#topics" className="hover:text-blue-600 cursor-pointer">Topics</a></li>
          <li><a href="#speakers" className="hover:text-blue-600 cursor-pointer">Speakers</a></li>
          <li className="hover:text-blue-600 cursor-pointer">Registration</li>
          <li className="hover:text-blue-600 cursor-pointer">Venue</li>
          <li className="hover:text-blue-600 cursor-pointer">Organizers</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
