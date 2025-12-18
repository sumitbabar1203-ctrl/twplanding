import React from 'react';

const steps = [
    { number: '01', text: 'We implement it for you', highlight: '(no tech headache)', bgColor: 'bg-red-50', borderColor: 'border-red-400', textColor: 'text-red-700' },
    { number: '02', text: 'You run your Ads', highlight: '', bgColor: 'bg-blue-50', borderColor: 'border-blue-400', textColor: 'text-blue-700' },
    { number: '03', text: 'The Wise Parrot chats & converts on autopilot', highlight: '', bgColor: 'bg-pink-50', borderColor: 'border-pink-400', textColor: 'text-pink-700' },
    { number: '04', text: 'You watch conversions rise', highlight: '— wisely', bgColor: 'bg-green-50', borderColor: 'border-green-400', textColor: 'text-green-700' }
];

const HowItWorks: React.FC = () => {
    return (
        <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-[#FEFDEB]">
            <div className="container mx-auto">
                <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in-down">
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
                         <div className="relative flex-shrink-0">
                            <img src="https://cdn.builder.io/api/v1/image/assets%2Fc77d5990ce0e4641969fde02309b04b0%2F1d0a06b265874f3685573537b8a41955?format=webp&width=800" alt="Thinking Parrot" className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full border-4 border-[#16a085] hover-scale animate-float"/>
                            <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 text-2xl sm:text-3xl font-bold text-yellow-500 animate-bounce-slow">?</span>
                            <span className="absolute -top-3 left-0 text-xl sm:text-2xl font-bold text-yellow-500 animate-pulse-slow">?</span>
                             <span className="absolute top-0 -left-3 sm:-left-4 text-2xl sm:text-3xl font-bold text-orange-500 animate-bounce-slow animate-delay-200">?</span>
                        </div>
                        <div className="bg-[#16a085] text-white font-bold py-2 sm:py-3 px-4 sm:px-8 text-lg sm:text-2xl rounded-full sm:rounded-r-full smooth-transition hover:bg-green-700 whitespace-nowrap">
                            HOW IT WORKS?
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className={`${step.bgColor} border-l-4 ${step.borderColor} ${step.textColor} p-4 sm:p-6 rounded-lg hover-lift smooth-transition shadow-md animate-fade-in-up`}
                            style={{
                                animationDelay: `${index * 0.15}s`
                            }}
                        >
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className={`flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14 rounded-lg bg-white border-2 ${step.borderColor} flex items-center justify-center font-bold text-xl sm:text-2xl smooth-transition hover:scale-110`}>
                                    {step.number}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-base sm:text-lg md:text-xl font-bold smooth-transition hover:scale-105 origin-left">
                                        {step.text}
                                    </p>
                                    {step.highlight && <p className="font-semibold text-xs sm:text-sm mt-1">{step.highlight}</p>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 sm:p-6 max-w-full mx-auto rounded-lg hover-lift animate-fade-in-up smooth-transition shadow-md text-center" style={{ animationDelay: '0.6s' }}>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold">
                        Bonus: Every month: 1 free training + 1 free system adjustment.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg mt-1">(your AI improves each month)</p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
