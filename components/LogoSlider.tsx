import React from "react";

const logos = [
  {
    id: 1,
    src: "https://cdn.builder.io/api/v1/image/assets%2F31d5afdeba874f8ba7cd8be7aac0e386%2F452e950927fc4b77a31b35ac542300b2?format=webp&width=800",
    alt: "Lifestyle Estates",
  },
  {
    id: 3,
    src: "https://cdn.builder.io/api/v1/image/assets%2Fc77d5990ce0e4641969fde02309b04b0%2F69afff09a1fc4c6483d3090b62688664?format=webp&width=800",
    alt: "Vir Bike",
  },
  {
    id: 4,
    src: "https://cdn.builder.io/api/v1/image/assets%2Fc77d5990ce0e4641969fde02309b04b0%2F05a02754361a4bee95d13d8e63d93dd1?format=webp&width=800",
    alt: "Riyasat Properties",
  },
  {
    id: 5,
    src: "https://cdn.builder.io/api/v1/image/assets%2Fc77d5990ce0e4641969fde02309b04b0%2Fa81a2cfe517b4a3cbbd96dcf5acb93a0?format=webp&width=800",
    alt: "Jalanta Stays",
  },
  {
    id: 6,
    src: "https://cdn.builder.io/api/v1/image/assets%2Fc77d5990ce0e4641969fde02309b04b0%2Fb3b127512a4f43a7a3e5560fc9bfcf7b?format=webp&width=800",
    alt: "The Dream Homes",
  },
  {
    id: 7,
    src: "https://cdn.builder.io/api/v1/image/assets%2Fc77d5990ce0e4641969fde02309b04b0%2F68f1f0fc2c1f44cba38b50c2b4d79cc0?format=webp&width=800",
    alt: "9Midas Consulting",
  },
  {
    id: 8,
    src: "https://cdn.builder.io/api/v1/image/assets%2Fc77d5990ce0e4641969fde02309b04b0%2F7f0521650d8b433793cae43b70520fdf?format=webp&width=800",
    alt: "Bikedost",
  },
  {
    id: 9,
    src: "https://cdn.builder.io/api/v1/image/assets%2Fc77d5990ce0e4641969fde02309b04b0%2Fb18c82eb022144c392156d773e6c9aa8?format=webp&width=800",
    alt: "Racold",
  },
  {
    id: 10,
    src: "https://cdn.builder.io/api/v1/image/assets%2Fc77d5990ce0e4641969fde02309b04b0%2F333b111b4a114ad095295a05878b948a?format=webp&width=800",
    alt: "Youhonk",
  },
  {
    id: 11,
    src: "https://cdn.builder.io/api/v1/image/assets%2Fc77d5990ce0e4641969fde02309b04b0%2F0f513489058242228e8be960d8380457?format=webp&width=800",
    alt: "Pune Property Guide",
  },
];

const LogoSlider: React.FC = () => {
  return (
    <section className="py-12 sm:py-14 md:py-20 px-4 sm:px-6 bg-[#FEFDEB] overflow-hidden">
      {/* 🌈 Gradient animation for “a tailored solution.” */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        .animated-tailored {
          background: linear-gradient(90deg, #16a085, #27ae60, #2ecc71, #16a085);
          background-size: 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 3s ease infinite, bounceSlow 3s ease-in-out infinite;
          display: inline-block;
          font-weight: 800;
        }

        @media (max-width: 640px) {
          .break-mobile {
            display: block;
          }
        }
      `}</style>

      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 animate-fade-in-down">
          Our <span className="text-[#f97316]">Trusted Partners</span>
        </h2>
        <p className="text-center text-sm sm:text-base md:text-lg text-gray-600 mb-12 animate-fade-in-up animate-delay-200">
          Trusted by leading businesses across India
        </p>

        {/* Logos Scrolling Section */}
        <div className="logo-slider-container overflow-hidden">
          <div className="logo-slider-track flex gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {logos.concat(logos).map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="logo-card flex-shrink-0 h-20 sm:h-24 md:h-28 flex items-center justify-center bg-white rounded-lg border border-gray-200 px-6 sm:px-8 hover-lift smooth-transition shadow-sm hover:shadow-md"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-16 sm:max-h-20 md:max-h-24 max-w-40 sm:max-w-48 md:max-w-56 object-contain hover:scale-110 smooth-transition"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 flex justify-center">
          <div className="cta-card max-w-4xl w-full rounded-2xl p-6 flex flex-col items-center gap-4 transform transition-all text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#042f2e] leading-snug">
              Empower your business with{" "}
              {/* ✅ Moves to next line in mobile + animation */}
              <span className="break-mobile animated-tailored">
                a tailored solution.
              </span>
            </h3>

            <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">
              Get a Custom Enterprise Quote Now!
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=919156373983&text=I%20want%20Custom%20Quote"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white font-semibold px-5 py-3 rounded-md shadow-lg hover:scale-105 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M21 12.79A9 9 0 1111.21 3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 22l-4.35-4.35"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Get a Custom Quote
            </a>
          </div>
        </div>

        {/* ✅ Logo Scroll Animation */}
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-100% / 2)); }
          }
          .logo-slider-container { width: 100%; max-width: 100%; }
          .logo-slider-track {
            animation: scroll-left 40s linear infinite;
            width: max-content;
          }
          .logo-slider-container:hover .logo-slider-track {
            animation-play-state: paused;
          }
          .logo-card { transition: all 0.3s ease; }
          .logo-slider-container:hover .logo-card { transform: scale(1.05); }
          @media (max-width: 768px) {
            .logo-slider-track { animation: scroll-left 30s linear infinite; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default LogoSlider;
