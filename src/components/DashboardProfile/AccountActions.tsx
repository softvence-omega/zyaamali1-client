// src/components/AccountActions.tsx
import { LogOut } from "lucide-react";
import React from "react";

const AccountActions: React.FC = () => {
  const handleLogout = () => {
    console.log("User logged out");
    alert("Logging out...");
  };

  const handleDeleteAccount = () => {
    if (
      window.confirm(
        "Are you sure you want to permanently delete your account and all of your data? This action cannot be undone."
      )
    ) {
      console.log("Account deletion initiated");
      alert("Account deletion process started.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Log Out Section */}
      <div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
        onClick={handleLogout}
      >
        <LogOut className="text-red-500 text-2xl" />
        <span className="text-lg font-medium text-gray-800 dark:text-gray-100">
          Log Out
        </span>
      </div>

      {/* Delete Account Section */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
          Delete Account
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Permanently delete your account and all of your data
        </p>
        <button
          onClick={handleDeleteAccount}
          className="cursor-pointer px-6 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50 dark:hover:bg-red-900 dark:hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default AccountActions;
