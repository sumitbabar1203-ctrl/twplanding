import React from 'react';

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
    />
  </svg>
);

const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const pricingFeatures = [
  'Complete Done-for-you setup',
  'Monthly training update',
  '$2 per 1M intelligent words',
  '50% refund guarantee',
];

const Pricing: React.FC = () => {
  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-[#FEFDEB] relative">
      {/* 🌈 Internal CSS for animations */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .animated-text {
          background: linear-gradient(90deg, #16a085, #27ae60, #2ecc71, #16a085);
          background-size: 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 3s ease infinite, bounceSlow 2.5s ease-in-out infinite;
          display: inline-block;
        }

        .animated-text-blue {
          background: linear-gradient(90deg, #3498db, #8e44ad, #6c5ce7, #3498db);
          background-size: 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 3s ease infinite, bounceSlow 2.5s ease-in-out infinite;
          display: inline-block;
        }
      `}</style>

      <div className="container mx-auto text-center">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-8 sm:mb-10 md:mb-12 animate-fade-in-down">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fc77d5990ce0e4641969fde02309b04b0%2F1d0a06b265874f3685573537b8a41955?format=webp&width=800"
            alt="Thinking Parrot"
            className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full border-4 border-[#16a085] hover-scale animate-float flex-shrink-0"
          />
          <div className="bg-[#16a085] text-white font-bold py-2 sm:py-3 px-4 sm:px-8 text-lg sm:text-2xl rounded-full sm:rounded-r-full smooth-transition hover:bg-green-700 whitespace-nowrap">
            PRICING
          </div>
        </div>

        {/* Title */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F31d5afdeba874f8ba7cd8be7aac0e386%2Fb30ad7ff5b74440eb3c9e71d661aac83?format=webp&width=800"
          alt="The Wise Parrot Growth OS - ₹50,000/year"
          className="mx-auto w-80 sm:w-96 md:w-full max-w-2xl mb-4 sm:mb-6 animate-fade-in-up animate-delay-200"
        />

        {/* Features */}
        <div className="max-w-sm sm:max-w-md mx-auto text-left mb-8 sm:mb-10 md:mb-12 animate-fade-in-up animate-delay-300">
          <ul className="space-y-3 sm:space-y-4">
            {pricingFeatures.map((feature, index) => (
              <li
                key={index}
                className="flex items-start text-sm sm:text-base md:text-lg font-semibold smooth-transition hover:translate-x-2 hover:text-[#f97316] cursor-pointer gap-2"
              >
                <PlayIcon />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quote with animated words */}
        <div className="bg-gray-200 py-3 sm:py-4 px-4 sm:px-6 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 hover-lift animate-fade-in-up animate-delay-400 smooth-transition rounded-xl shadow-md">
          <p className="text-base sm:text-lg md:text-2xl font-semibold italic">
            "You're not buying{' '}
            <span className="animated-text font-bold">Software</span>. You're buying{' '}
            <span className="animated-text-blue font-bold">Intelligence</span>."
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 animate-fade-in-up animate-delay-500">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
            <a
              href="https://wa.me/message/DVKCEGNOAQ7UK1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:gap-3 bg-purple-200 text-purple-800 font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-lg shadow-md hover:bg-purple-300 hover-lift smooth-transition-fast text-sm sm:text-base whitespace-nowrap"
            >
              <ChatIcon />
              <span>Chat Now</span>
            </a>

            <a
              href="https://wa.me/message/Q65LGTP5PUYNG1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:gap-3 bg-green-200 text-green-800 font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-lg shadow-md hover:bg-green-300 hover-lift smooth-transition-fast text-sm sm:text-base whitespace-nowrap"
            >
              <PhoneIcon />
              <span>Hire Me !!</span>
            </a>
          </div>

          <img
  src="https://cdn.builder.io/api/v1/image/assets%2F31d5afdeba874f8ba7cd8be7aac0e386%2F693cd561dc494a14a0e47762eeb60fc4?format=webp&width=800"
  alt="Wise Parrot with a client"
  className="w-48 sm:w-60 md:w-72 animate-float"
/>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
