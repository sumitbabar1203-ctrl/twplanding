import React, { useEffect, useMemo, useState } from 'react';

const Header = () => {
  const rotatingPhrases = useMemo(
    () => [
      { text: 'Digital Growth Assistant', className: 'text-[#f97316]' },
      { text: 'Business Buddy', className: 'text-emerald-400' },
      { text: 'Digital Twin!!', className: 'text-sky-400' },
    ],
    []
  );

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % rotatingPhrases.length);
    }, 2500);
    return () => clearInterval(id);
  }, [rotatingPhrases.length]);

  return (
    <header className="bg-[#042f2e] text-white overflow-hidden animate-fade-in">
      {/* Navigation Bar */}
      <nav className="border-b border-gray-600 py-3 px-4 sm:px-6 animate-fade-in-down">
        <div className="container mx-auto flex justify-center gap-8 sm:gap-12">
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

      <div className="container mx-auto text-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 relative">
        {/* Logo */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fc77d5990ce0e4641969fde02309b04b0%2Fcc248a89e42d4e5cbf589ed5f0523016?format=webp&width=800"
          alt="Wise Parrot Banner"
          className="mx-auto w-44 sm:w-60 md:w-80 mb-4 sm:mb-6 md:mb-8 drop-shadow-lg animate-fade-in-down hover:animate-float"
        />

        {/* Meet Your + Rotating Text (always one row) */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-5">
          {/* Meet your */}
          <h1 className="header-title text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-xl leading-tight">
            <span className="header-badge-right text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white whitespace-nowrap drop-shadow-xl animate-fade-in-left animate-delay-150">
              Meet your
            </span>
          </h1>

          {/* Rotating Phrases */}
          <div
            className="rotating-text flex-shrink-0 h-auto flex items-center justify-center ml-1"
            role="status"
            aria-live="polite"
          >
            <span
              key={current}
              className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-xl animate-fade-in-right animate-delay-200 ${rotatingPhrases[current].className}`}
            >
              {rotatingPhrases[current].text}
            </span>
          </div>
        </div>

        {/* Subheadings */}
        <p className="mt-2 sm:mt-3 md:mt-4 text-base sm:text-xl md:text-2xl text-gray-200 animate-fade-in-up animate-delay-300 px-2">
          That Chats, Engages, Sell and Follow Up - Intelligently
        </p>
        <p className="mt-2 text-lg sm:text-2xl md:text-3xl font-bold text-green-400 animate-fade-in-up animate-delay-400">
          100% Automated, 1000% Loyal
        </p>
      </div>
    </header>
  );
};

export default Header;
