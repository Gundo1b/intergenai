import React from 'react';

export const HeroBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Dark Mode Background */}
            <div className="hidden dark:block absolute inset-0 bg-gray-950">
                <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950"></div>
            </div>

            {/* Light Mode Background */}
            <div className="block dark:hidden absolute inset-0 bg-white">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
            </div>
        </div>
    );
};
