import React from 'react';

const cards = [
  {
    title: 'Education & Edtech',
    img: 'https://cdn.builder.io/api/v1/image/assets%2F31d5afdeba874f8ba7cd8be7aac0e386%2F90805f1d426e49c5a95f8fd022375f27?format=webp&width=800',
    desc:
      'Engage students, automate inquiries, and simplify admissions. Explore how WhatsApp can revolutionize your edtech communication.',
    link: 'https://wa.me/message/3ZJZQET7QR47H1',
  },
  {
    title: 'Healthcare',
    img: 'https://cdn.builder.io/api/v1/image/assets%2F31d5afdeba874f8ba7cd8be7aac0e386%2Fcb4c5adf45564ce78d9b9c122aa68538?format=webp&width=800',
    desc:
      'Schedule appointments, share health tips, and provide personalized patient care. Explore how WhatsApp can elevate your healthcare communication.',
    link: 'https://wa.me/message/QSSC66CBNXVYM1',
  },
  {
    title: 'Real Estate',
    img: 'https://cdn.builder.io/api/v1/image/assets%2F31d5afdeba874f8ba7cd8be7aac0e386%2F8d262d3a39e544beb969928a5a99f787?format=webp&width=800',
    desc:
      'Showcase properties, schedule viewings, and close deals faster. Discover how WhatsApp can streamline your real estate communication and boost lead generation.',
    link: 'https://wa.me/message/EZFYDBD5UN4NM1',
  },
  {
    title: 'Gym & Fitness',
    img: 'https://cdn.builder.io/api/v1/image/assets%2F31d5afdeba874f8ba7cd8be7aac0e386%2Ff57bd66191644778a8e8d3bf443e4f75?format=webp&width=800',
    desc:
      'Motivate members, send class reminders, and share fitness tips instantly. Discover how WhatsApp can boost engagement and simplify communication for your gym and fitness programs.',
    link: 'https://wa.me/message/O52RRMQQIQVPH1',
  },
];

const SubscriptionCards: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#fffdf8]">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">The Wise Parrot Growth OS</h2>
        <p className="text-center text-gray-600 mb-8">Choose an industry-specific solution</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 bg-gray-50 justify-center">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="card-item w-full max-w-md mx-auto bg-white rounded-xl border border-gray-100 text-center p-8 shadow-md hover:shadow-2xl transition-transform duration-400"
              style={{
                // staggered entrance animation
                animation: `fadeInUp 600ms ease-out ${i * 90}ms both`,
                transformOrigin: 'center',
                minHeight: 380,
              }}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <img src={card.img} alt={`${card.title} Icon`} className="w-24 h-24 mb-6 object-contain" />

                <h3 className="text-xl font-semibold mb-2 text-[#042f2e]">{card.title}</h3>
                <p className="text-gray-600 mb-6 px-4">{card.desc}</p>

                <a href={card.link ?? 'https://0468e0facc3f4ad899b0411904684cce-3e7968af7c0f4ac98c8f8edc9.fly.dev/'} target="_blank" rel="noopener noreferrer" className="inline-block mt-auto border border-black text-black px-6 py-3 rounded-md font-medium hover:bg-black hover:text-white transition-transform transform hover:-translate-y-1">
                  See Live demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Card entrance - small upward slide and fade */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px) scale(.995); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Make icon images appear without opaque backgrounds when possible */
        .card-item img {
          background: transparent !important;
          mix-blend-mode: multiply; /* helps remove light/dark backgrounds depending on image */
          filter: saturate(1.05) contrast(1.02);
        }

        /* Prevent overlap on very large screens by centering grid items */
        .cards-grid { justify-items: center; }

        /* Slight hover lift and pop */
        .card-item:hover { transform: translateY(-8px) scale(1.01); }

        @media (max-width: 1024px) {
          .card-item { min-height: 420px; }
        }

        @media (max-width: 640px) {
          .card-item { min-height: unset; width: 100% !important; }
        }
      `}</style>
    </section>
  );
};

export default SubscriptionCards;
