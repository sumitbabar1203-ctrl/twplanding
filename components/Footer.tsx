import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#042f2e] text-center text-white py-10 sm:py-12 md:py-16 px-4 sm:px-6 overflow-hidden">
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2Fc77d5990ce0e4641969fde02309b04b0%2Fcc248a89e42d4e5cbf589ed5f0523016?format=webp&width=800"
        alt="Wise Parrot Footer Banner"
        className="w-40 sm:w-56 md:w-80 mx-auto mb-4 sm:mb-6 animate-fade-in-down hover-scale animate-float"
      />
      <p className="text-base sm:text-lg text-[#fefce8] font-semibold mb-2 animate-fade-in-up animate-delay-200 smooth-transition hover:text-green-400 px-2">
        The Wise Parrot - Your most loyal digital business buddy
      </p>
      <div className="mt-4 animate-fade-in-up animate-delay-300">
        <div className="flex items-center justify-center gap-4 mb-3">
          <a href="https://www.facebook.com/profile.php?id=61554979870831" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 rounded-full bg-[#1877F2] hover:bg-[#155dbb] transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.96 0 1.97.17 1.97.17v2.2h-1.12c-1.1 0-1.44.68-1.44 1.38V12h2.46l-.39 2.9h-2.07v7A10 10 0 0022 12z"/>
            </svg>
          </a>

          <a href="https://www.instagram.com/thewiseparrot.ai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-full bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:opacity-90 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm5 3.5A4.5 4.5 0 107 12a4.5 4.5 0 005-4.5zm0 2A2.5 2.5 0 1110 12a2.5 2.5 0 012-2.5zM17.5 6a.5.5 0 100 1 .5.5 0 000-1z"/>
            </svg>
          </a>

          <a href="https://www.linkedin.com/company/the-wise-parrot/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-full bg-[#0A66C2] hover:bg-[#085aab] transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v13H0V8zm7.5 0h4.8v1.8h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V21H18v-6.3c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V21H7.5V8z"/>
            </svg>
          </a>
        </div>

        <p className="text-xs sm:text-sm text-gray-400 smooth-transition hover:text-yellow-300">
          © 2025 The Wise Parrot. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
