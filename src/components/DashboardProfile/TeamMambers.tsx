// src/components/DashboardProfile/TeamMambers.tsx (Corrected filename to TeamMembers)
import React from 'react';

interface TeamMember {
    id: string;
    name: string;
    status: 'Active' | 'Inactive';
    lastActive: string;
}

const teamMembers: TeamMember[] = [
    { id: '1', name: 'Kristin Watson', status: 'Active', lastActive: 'Just Now' },
    { id: '2', name: 'Cameron Williamson', status: 'Inactive', lastActive: '5 Min ago' },
    { id: '3', name: 'Darrell Steward', status: 'Active', lastActive: '10 Min ago' },
    { id: '4', name: 'Arlene McCoy', status: 'Active', lastActive: '1h ago' },
    { id: '5', name: 'Leslie Alexander', status: 'Active', lastActive: '2 days ago' },
];

const TeamMembers: React.FC = () => {
    const handleRemove = (id: string) => {
        console.log(`Remove member with ID: ${id}`);
    };

    return (
        <div className="bg-gray-100 p-4 sm:p-6 rounded-3xl shadow-md my-4 sm:my-8 overflow-x-auto"> {/* Adjusted padding, margins, and added overflow-x-auto */}
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Team Members</h2>
            <div className="w-full"> {/* Container for table */}
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"> {/* Adjusted padding, text size, whitespace */}
                                Name
                            </th>
                            <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                                Status
                            </th>
                            <th scope="col" className="hidden sm:table-cell px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"> {/* Hidden on extra small screens */}
                                Last Active
                            </th>
                            <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {teamMembers.map((member) => (
                            <tr key={member.id}>
                                <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap"> {/* Adjusted padding */}
                                    <div className="text-sm font-medium text-gray-900">{member.name}</div>
                                </td>
                                <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                                    <span
                                        className={`px-1.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${member.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                                            }`}
                                    >
                                        {member.status}
                                    </span>
                                </td>
                                <td className="hidden sm:table-cell px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap"> {/* Hidden on extra small screens */}
                                    <div className="text-sm text-gray-900">{member.lastActive}</div>
                                </td>
                                <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-left text-sm font-medium">
                                    <button
                                        onClick={() => handleRemove(member.id)}
                                        className="cursor-pointer text-indigo-600 hover:text-indigo-900 transition-colors duration-200 text-sm"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeamMembers;