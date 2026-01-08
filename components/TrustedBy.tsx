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
        <div className="mb-8 pb-2 border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-4">
                    <h3 className="text-md font-semibold text-slate-500 dark:text-gray-400">
                        Trusted by these companies
                    </h3>
                </div>
                <InfiniteSlider
                    duration={30}
                    gap={48}
                    className="py-2"
                >
                    {sliderItems.map((item, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <img
                                src={item.logo}
                                alt={item.name}
                                className="h-16 md:h-12 w-auto object-contain"
                            />
                        </div>
                    ))}
                </InfiniteSlider>
            </div>
        </div>
    );
};
