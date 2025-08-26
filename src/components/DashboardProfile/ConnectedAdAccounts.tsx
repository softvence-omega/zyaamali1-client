// src/components/DashboardProfile/ConnectedAdAccounts.tsx
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdRemoveCircle } from "react-icons/md";

interface AdAccount {
  _id: string;
  name: string;
  company: string;
  icon: string;
  isSynced: boolean;
}

interface ConnectedAdAccountsProps {
  socialAccounts: AdAccount[];
  loading: boolean;
  onAccountDisconnected: (accountName: string) => void;
  onReloadAccounts: () => void;
}

const ConnectedAdAccounts: React.FC<ConnectedAdAccountsProps> = ({
  socialAccounts,
  
  onAccountDisconnected,
  onReloadAccounts
}) => {
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string, name: string) => {
    setDeletingId(id);
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/connect/update-Data?name=${name}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to update: ${response.status} ${response.statusText}`
        );
      }

      const result = await response.json();
      console.log("✅ Updated successfully:", result);
      
      // Notify parent component that account was disconnected
      onAccountDisconnected(name);
      
      // Reload accounts to ensure we have the latest data
      onReloadAccounts();
    } catch (error) {
      console.error("❌ Error updating account:", error);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="py-4 sm:py-6 border-b border-gray-200">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
        Connected Ad Accounts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {socialAccounts.filter((account) => account.isSynced).length > 0 ? (
          socialAccounts
            .filter((account) => account.isSynced)
            .map((account) => (
              <div
                key={account._id}
                className="border border-gray-200 rounded-lg p-3 sm:p-4 flex flex-col lg:flex-row lg:items-center justify-center lg:justify-between bg-white shadow-sm"
              >
                <div className="flex items-center min-w-0">
                  <img
                    src={account.icon}
                    alt={account.name}
                    className="w-7 h-7 sm:w-8 sm:h-8 mr-2 sm:mr-3 flex-shrink-0"
                  />
                  <div>
                    <p className="font-medium text-sm sm:text-base text-gray-800 truncate">
                      {account.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 truncate">
                      {account?.name || "No Ad Account Company"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                  <span className="flex items-center text-green-600 text-xs sm:text-sm whitespace-nowrap pl-[34px]">
                    <FaCheckCircle className="mr-0.5 sm:mr-1 text-xs sm:text-sm" />
                    Synced
                  </span>

                  {deletingId === account._id ? (
                    <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
                  ) : (
                    <button
                      onClick={() => handleDelete(account._id, account.name)}
                      className="p-1.5 sm:p-2 text-gray-500 hover:text-blue-600 rounded-full hover:bg-gray-100 transition-colors duration-200"
                      aria-label="Delete"
                    >
                      <MdRemoveCircle
                        size={20}
                        className="text-sm cursor-pointer sm:text-base"
                      />
                    </button>
                  )}
                </div>
              </div>
            ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-sm sm:text-base">
            No ad accounts connected yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default ConnectedAdAccounts;