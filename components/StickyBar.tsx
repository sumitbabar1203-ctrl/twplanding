
import React from 'react';

const StickyBarIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#f97316] shadow-lg hover:bg-gray-200 transition-colors">
        {children}
    </button>
);

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
);


const StickyBar: React.FC = () => {
    return (
        <div className="sticky bottom-0 left-0 right-0 bg-[#f97316] py-3 z-50 shadow-2xl">
            <div className="container mx-auto flex justify-center items-center space-x-8">
                <StickyBarIcon>
                    <ChatIcon />
                </StickyBarIcon>
                <StickyBarIcon>
                    <PhoneIcon />
                </StickyBarIcon>
            </div>
        </div>
    );
};

export default StickyBar;
