import React from "react";

const WhatIsTWP = () => {
  return (
    <section className="bg-[#fffef4] text-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* 🌈 Internal CSS for Shine + Wavy Animation */}
      <style>
        {`
          @keyframes shine {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
          }

          @keyframes wavy {
            0% { transform: translateX(0) rotate(0deg); }
            25% { transform: translateX(6px) rotate(1deg); }
            50% { transform: translateX(-6px) rotate(-1deg); }
            75% { transform: translateX(6px) rotate(1deg); }
            100% { transform: translateX(0) rotate(0deg); }
          }

          .shine-wavy {
            background-image: linear-gradient(to right, #f97316, #ff3b3b, #f97316);
            background-size: 200% auto;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            animation:
              shine 2.5s linear infinite,
              wavy 3s ease-in-out infinite;
            display: inline-block;
          }
        `}
      </style>

      {/* ✅ Heading stays in ONE line on all devices */}
      <h2
        className="text-lg sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 animate-fade-in-down whitespace-nowrap overflow-hidden text-ellipsis"
        style={{ letterSpacing: "-0.5px" }}
      >
        WHAT IS {" "}
        <span className="text-[#f97316] hover:text-[#042f2e] transition-colors duration-500">
          THE WISE PARROT GROWTH OS?
        </span>
      </h2>

      {/* ✅ Subtext */}
      <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-8 sm:mb-10 animate-fade-in-up animate-delay-200 px-2">
        The Wise Parrot doesn't just chat — <br />
        <span className="font-semibold text-[#f97316] transition-colors duration-500 hover:text-green-600">
          It thinks, Remembers, Responds & Converts.
        </span>
      </p>

      {/* ✅ List Section */}
      <ul className="text-left max-w-sm sm:max-w-md md:max-w-lg mx-auto space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl text-[#042f2e] px-2 leading-snug">
        {[
          "✅ Chats with 1000+ users at once",
          "✅ Instantly shares brochures & videos",
          "✅ Follows up like your best salesperson",
          "✅ Integrates with Zoho, CRMs, & Ad Campaigns",
          "✅ Learns and improves every month",
        ].map((item, index) => (
          <li
            key={index}
            className="animate-fade-in-left smooth-transition hover:translate-x-2 hover:text-[#f97316]"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* ✅ Image + Slogan Section */}
      <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col items-center animate-fade-in-up animate-delay-500">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F31d5afdeba874f8ba7cd8be7aac0e386%2Fbb75b02a8c554d1bb5b80906e85b00e5?format=webp&width=800"
          alt="Parrot Sitting"
          className="w-40 sm:w-56 md:w-80 animate-float"
        />
        <p className="mt-3 sm:mt-4 text-center">
          <span className="text-base sm:text-lg text-[#f97316] font-medium block">
            Baatein karta hai....
          </span>
          <span className="shine-wavy text-xl sm:text-2xl md:text-3xl font-bold block">
            par Intelligently!
          </span>
        </p>
      </div>
    </section>
  );
};

export default WhatIsTWP;
