import React from 'react';

const NavBar = () => {
  return (
    <header className="bg-[#042f2e] text-white overflow-hidden animate-fade-in">
      {/* Navigation Bar */}
      <nav className="border-b border-gray-600 py-3 px-4 sm:px-6">
        <div className="container mx-auto flex justify-center gap-8 sm:gap-12 animate-fade-in-down">
          <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium hover:scale-110 duration-300">
            Home
          </a>
          <a href="#blogs" className="text-gray-300 hover:text-white transition-colors font-medium hover:scale-110 duration-300">
            Blogs
          </a>
          <a href="#reseller" className="text-gray-300 hover:text-white transition-colors font-medium hover:scale-110 duration-300">
            Reseller
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors font-medium hover:scale-110 duration-300">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
