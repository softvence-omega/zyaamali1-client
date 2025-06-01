// src/components/ContentLibrary/Sidebar.tsx
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Assuming react-icons

const Sidebar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [templateType, setTemplateType] = useState<string>('Image');
    const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

    const platforms = ['Facebook', 'Google', 'Amazon', 'Linkedin', 'Tik Tok', 'You Tube'];

    const handlePlatformChange = (platform: string) => {
        setSelectedPlatforms((prev) =>
            prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]
        );
    };

    return (
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full md:w-64 lg:w-72 flex-shrink-0">
            {/* Search Template */}
            <div className="mb-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search template"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
            </div>

            {/* Template Type Filter */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Template Type</h3>
                <div className="space-y-2">
                    <label className="flex items-center text-gray-700">
                        <input
                            type="radio"
                            name="templateType"
                            value="Image"
                            checked={templateType === 'Image'}
                            onChange={() => setTemplateType('Image')}
                            className="form-radio h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2">Image</span>
                    </label>
                    <label className="flex items-center text-gray-700">
                        <input
                            type="radio"
                            name="templateType"
                            value="Video"
                            checked={templateType === 'Video'}
                            onChange={() => setTemplateType('Video')}
                            className="form-radio h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2">Video</span>
                    </label>
                </div>
            </div>

            {/* Platform Filter */}
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Platform</h3>
                <div className="space-y-2">
                    {platforms.map((platform) => (
                        <label key={platform} className="flex items-center text-gray-700">
                            <input
                                type="checkbox"
                                checked={selectedPlatforms.includes(platform)}
                                onChange={() => handlePlatformChange(platform)}
                                className="form-checkbox h-4 w-4 text-blue-600 rounded"
                            />
                            <span className="ml-2">{platform}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;