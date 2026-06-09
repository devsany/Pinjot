import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold cursor-pointer">
            <span className="text-blue-600">Link</span>
            <span className="text-gray-900">Bio</span>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">
              Login
            </button>

            <Link
              to="/registration"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
