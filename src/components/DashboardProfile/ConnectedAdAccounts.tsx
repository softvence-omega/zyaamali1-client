// src/components/DashboardProfile/ConnectedAdAccounts.tsx
import React from 'react';
import { FaCheckCircle, FaEdit } from 'react-icons/fa';

interface AdAccount {
    id: string;
    name: string;
    company: string;
    icon: string;
    isSynced: boolean;
}

const adAccounts: AdAccount[] = [
    {
        id: '1',
        name: 'Facebook Ads',
        company: 'ABC Company',
        icon: 'https://img.icons8.com/color/48/000000/facebook--v1.png',
        isSynced: true,
    },
    {
        id: '2',
        name: 'Google Ads',
        company: 'ABC Company',
        icon: 'https://img.icons8.com/color/48/000000/google-ads.png',
        isSynced: true,
    },
    {
        id: '3',
        name: 'TikTok Ads',
        company: 'ABC Company',
        icon: 'https://img.icons8.com/fluency/48/000000/tiktok.png',
        isSynced: true,
    },
];

const ConnectedAdAccounts: React.FC = () => {
    const handleEdit = (id: string) => {
        console.log(`Edit ad account with ID: ${id}`);
    };

    return (
        <div className="py-4 sm:py-6 border-b border-gray-200"> {/* Adjusted padding */}
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Connected Ad Accounts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6"> {/* Adjusted grid and gap */}
                {adAccounts.length > 0 ? (
                    adAccounts.map((account) => (
                        <div key={account.id} className="border border-gray-200 rounded-lg p-3 sm:p-4 flex items-center justify-between bg-white shadow-sm"> {/* Adjusted padding */}
                            <div className="flex items-center min-w-0"> {/* Added min-w-0 */}
                                <img src={account.icon} alt={account.name} className="w-7 h-7 sm:w-8 sm:h-8 mr-2 sm:mr-3 flex-shrink-0" /> {/* Adjusted icon size */}
                                <div>
                                    <p className="font-medium text-sm sm:text-base text-gray-800 truncate">{account.name}</p> {/* Truncate and adjust size */}
                                    <p className="text-xs sm:text-sm text-gray-500 truncate">{account.company}</p> {/* Truncate and adjust size */}
                                </div>
                            </div>
                            <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0"> {/* Adjusted spacing */}
                                {account.isSynced && (
                                    <span className="flex items-center text-green-600 text-xs sm:text-sm whitespace-nowrap"> {/* Adjusted text size, whitespace */}
                                        <FaCheckCircle className="mr-0.5 sm:mr-1 text-xs sm:text-sm" /> Synced
                                    </span>
                                )}
                                <button
                                    onClick={() => handleEdit(account.id)}
                                    className="p-1.5 sm:p-2 text-gray-500 hover:text-blue-600 rounded-full hover:bg-gray-100 transition-colors duration-200"
                                    aria-label="Edit"
                                >
                                    <FaEdit className="text-sm sm:text-base" />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500 text-sm sm:text-base">No ad accounts connected yet.</p>
                )}
            </div>
        </div>
    );
};

export default ConnectedAdAccounts;