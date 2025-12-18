
import React from 'react';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const Features: React.FC = () => {
    const featuresList = [
        "Chats with 1000+ users at once",
        "Sends brochures, videos, & reminders automatically",
        "Follows up like your best salesperson",
        "Integrates with Zoho, CRMs, & Ad Campaigns",
        "Learns and improves every month",
    ];

    return (
        <section className="py-16 px-6 bg-[#FEFDEB]">
            <div className="container mx-auto text-center">
                <div className="inline-block bg-yellow-200 text-[#042f2e] font-bold py-2 px-6 text-xl mb-8">
                    WHAT IS <span className="text-[#f97316]">THE WISE PARROT</span> GROWTH OS?
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">The Wise Parrot doesn't just chat</h2>
                <div className="inline-block bg-[#f97316] text-white py-2 px-6 text-2xl font-bold rounded-md shadow-lg">
                    It thinks, Remembers - Responds - Converts.
                </div>
                
                <div className="mt-12 max-w-2xl mx-auto">
                    <ul className="space-y-6 text-left">
                        {featuresList.map((feature, index) => (
                            <li key={index} className="flex items-center text-xl md:text-2xl font-semibold">
                                <CheckIcon />
                                <span className="ml-4">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
                    <img src="https://i.ibb.co/JphgKdc/parrot-sitting.png" alt="Wise Parrot sitting in a chair" className="max-w-xs" />
                    <p className="text-3xl md:text-5xl font-extrabold italic">
                        Baatein karta hai, <br/> par <span className="text-[#f97316]">Intelligently!</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features;