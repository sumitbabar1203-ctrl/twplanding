import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const TestimonialCard: React.FC<{ name: string, company: string, text: string, index: number }> = ({ name, company, text, index }) => (
    <div className={`bg-white p-6 rounded-2xl shadow-lg w-full max-w-md relative border-t-4 border-blue-400 hover-lift smooth-transition animate-fade-in-up animate-delay-${(index + 1) * 200}`}>
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center border-4 border-white smooth-transition hover:bg-blue-400">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500 smooth-transition group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        </div>
        <p className="mt-6 text-gray-600 italic smooth-transition hover:text-[#042f2e]">"{text}"</p>
        <div className="mt-4 text-right">
            <p className="font-bold text-[#042f2e] smooth-transition hover:text-[#f97316]">{name}</p>
            <p className="text-sm text-blue-600 font-semibold smooth-transition hover:text-green-600">{company}</p>
        </div>
        <div className="flex justify-end mt-2 hover:gap-1 transition-all">
            {[...Array(5)].map((_, i) => <StarIcon key={i} className="text-yellow-400 smooth-transition hover:text-orange-400" />)}
        </div>
    </div>
);

const WhyBusinessesLoveIt: React.FC = () => {
    return (
        <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-[#FEFDEB]">
            <div className="container mx-auto text-center">
                 <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-8 sm:mb-10 md:mb-12 animate-fade-in-down">
                    <img src="https://cdn.builder.io/api/v1/image/assets%2Fc77d5990ce0e4641969fde02309b04b0%2F1d0a06b265874f3685573537b8a41955?format=webp&width=800" alt="Parrot giving thumbs up" className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full object-cover hover-scale animate-float flex-shrink-0"/>
                    <h2 className="text-lg sm:text-2xl md:text-3xl font-bold smooth-transition hover:text-[#f97316]">WHY BUSINESSES <span className="text-red-500 smooth-transition hover:text-green-600">LOVE</span> IT?</h2>
                </div>

                <div className="max-w-3xl mx-auto bg-[#042f2e] text-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-xl mb-8 sm:mb-10 md:mb-12 hover-lift animate-fade-in-up animate-delay-200 smooth-transition">
                    <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg md:text-xl lg:text-2xl">
                        <li className="smooth-transition hover:translate-x-2 hover:text-green-300">Always on - <span className="text-[#f97316] font-bold">24x7 digital business buddy</span></li>
                        <li className="smooth-transition hover:translate-x-2 hover:text-green-300">Speaks human – <span className="text-[#f97316] font-bold">Replies like you would</span></li>
                        <li className="smooth-transition hover:translate-x-2 hover:text-green-300">Follows up smartly – <span className="text-[#f97316] font-bold">No leads left cold</span></li>
                        <li className="smooth-transition hover:translate-x-2 hover:text-green-300">Improves monthly – <span className="text-[#f97316] font-bold">Gets wiser with use</span></li>
                    </ul>
                </div>

                <div className="bg-yellow-200 text-[#f97316] font-bold py-2 px-4 sm:px-6 inline-block text-sm sm:text-base md:text-xl mb-8 sm:mb-10 md:mb-12 hover-lift animate-fade-in-up animate-delay-300 smooth-transition text-center">
                    It's not a tool, It's your most <span className="text-[#042f2e] smooth-transition hover:text-orange-500">Loyal Team Member</span>
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-6 sm:gap-8 md:gap-8">
                    <TestimonialCard index={0} name="Rahul" company="Real Estate Agency" text="We reduced human effort by 70% and doubled conversions." />
                    <TestimonialCard index={1} name="Sagar" company="Pune" text="Now we only talk to hot leads. Everything else is handled by The Wise Parrot." />
                </div>
            </div>
        </section>
    );
};

export default WhyBusinessesLoveIt;
