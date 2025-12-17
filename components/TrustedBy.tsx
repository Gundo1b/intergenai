import React from 'react';
import { motion } from 'framer-motion';
import { InfiniteSlider } from './ui/infinite-slider';

const sliderItems = [
    { name: "Academatrix", logo: "/splogos/Academatrix.png" },
    { name: "Cybluence", logo: "/splogos/Cybluence.png" },
    { name: "Decorexy", logo: "/splogos/Decorexy.png" },
    { name: "Finance Portal", logo: "/splogos/Finance Portal.png" },
    { name: "Icycon", logo: "/splogos/Icycon.png" },
    { name: "UMetha", logo: "/splogos/UMetha.png" },
    { name: "Viralitics", logo: "/splogos/Viralitics.png" }
];

export const TrustedBy: React.FC = () => {
    return (
        <div className="mb-12 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-8">
                    <h3 className="text-lg font-semibold text-slate-600 dark:text-gray-300">
                        Trusted by these companies
                    </h3>
                </div>
                <InfiniteSlider
                    duration={30}
                    gap={32}
                    className="py-4"
                >
                    {sliderItems.map((item, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <img
                                src={item.logo}
                                alt={item.name}
                                className="h-16 w-auto object-contain"
                            />
                        </div>
                    ))}
                </InfiniteSlider>
            </div>
        </div>
    );
};
