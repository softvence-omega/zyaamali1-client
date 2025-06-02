// src/components/DashboardProfile/AvailableIntegration.tsx
import React from 'react';

interface Integration {
    id: string;
    name: string;
    icon: string;
}

const integrations: Integration[] = [
    {
        id: '1',
        name: 'Instagram Ads',
        icon: 'https://img.icons8.com/color/48/000000/instagram-new--v1.png',
    },
    {
        id: '2',
        name: 'LinkedIn Ads',
        icon: 'https://img.icons8.com/color/48/000000/linkedin.png',
    },
    {
        id: '3',
        name: 'Google Ads',
        icon: 'https://img.icons8.com/color/48/000000/google-ads.png',
    },
    {
        id: '4',
        name: 'Meta Ads',
        icon: 'https://img.icons8.com/color/48/000000/facebook-new.png',
    },
];

const AvailableIntegration: React.FC = () => {
    const handleConnect = (id: string) => {
        console.log(`Connect to integration with ID: ${id}`);
    };

    return (
        <div className="pt-4 sm:pt-6"> {/* Adjusted padding */}
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Available Integration</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"> {/* Adjusted grid for more columns on larger screens */}
                {integrations.map((integration) => (
                    <div
                        key={integration.id}
                        className="flex items-center p-3 sm:p-4 border border-gray-200 rounded-lg bg-white shadow-sm space-x-2 sm:space-x-3" // Adjusted padding and spacing
                    >
                        <img src={integration.icon} alt={integration.name} className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" /> {/* Adjusted size and flex-shrink */}
                        <p className="font-medium text-sm sm:text-base text-gray-800 flex-grow truncate"> {/* Adjusted text size, truncate */}
                            {integration.name}
                        </p>
                        <button
                            onClick={() => handleConnect(integration.id)}
                            className="cursor-pointer px-2.5 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 flex-shrink-0 whitespace-nowrap" // Adjusted padding/font size for button, whitespace-nowrap
                        >
                            Connect
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvailableIntegration;