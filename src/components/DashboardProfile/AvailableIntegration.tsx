/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/DashboardProfile/AvailableIntegration.tsx
import { fetchSocialAccounts } from "@/utils/FetchSocialAccount";
import React, { useCallback, useEffect, useState } from "react";

interface AdAccount {
  _id: string;
  name: string;
  company: string;
  icon: string;
  isSynced: boolean;
}

const AvailableIntegration: React.FC = () => {
  const [socialAccounts, setSocialAccounts] = useState<AdAccount[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Wrap in useCallback so dependency stays stable
  const loadAccounts = useCallback(() => {
    fetchSocialAccounts(setLoading, setSocialAccounts);
  }, []);

  useEffect(() => {
    loadAccounts();
  }, [loadAccounts, loading]);

  const integrationApis: Record<string, string> = {
    "Meta Ads": "http://localhost:5000/api/v1/connect/facebook-auth",
    "TikTok Ads": "http://localhost:5000/api/v1/connect/tiktok-auth",
    "LinkedIn Ads": "http://localhost:5000/api/v1/connect/linkedin-auth",
    "Google Ads": "http://localhost:5000/api/v1/connect/google-auth",
  };

  const handleConnect = (name: string) => {
    try {
      const apiUrl = integrationApis[name]; // 👈 your map of integration URLs
      console.log("🌐 Starting OAuth for:", name, apiUrl);

      if (!apiUrl) {
        console.warn(`❌ No API configured for integration: ${name}`);
        return;
      }

      // ✅ Open OAuth in new window (recommended for integrations)
      const result = window.open(apiUrl, "_blank", "width=600,height=700");
      console.log(result);

      // ⚠️ Don't use fetch for OAuth flows, CORS will block it
      // ✅ For non-OAuth APIs (like a direct REST call), you can still use fetch
    } catch (error) {
      console.error(`❌ Error connecting to ${name}:`, error);
    }
  };

  return (
    <div className="pt-4 sm:pt-6">
      {" "}
      {/* Adjusted padding */}
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
        Available Integration
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {" "}
        {/* Adjusted grid for more columns on larger screens */}
        {socialAccounts
          .filter((integration) => !integration.isSynced) // ✅ only not-synced
          .map((integration) => (
            <div
              key={integration._id}
              className="flex items-center p-3 sm:p-4 border border-gray-200 rounded-lg bg-white shadow-sm space-x-2 sm:space-x-3" // Adjusted padding and spacing
            >
              <img
                src={integration.icon}
                alt={integration.name}
                className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0"
              />{" "}
              {/* Adjusted size and flex-shrink */}
              <p className="font-medium text-sm sm:text-base text-gray-800 flex-grow truncate">
                {" "}
                {/* Adjusted text size, truncate */}
                {integration.name}
              </p>
              <button
                onClick={() => handleConnect(integration.name)}
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
