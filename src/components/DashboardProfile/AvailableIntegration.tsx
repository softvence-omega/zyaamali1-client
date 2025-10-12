import React from "react";

interface AdAccount {
  _id: string;
  name: string;
  company: string;
  icon: string;
  isSynced: boolean;
}

interface AvailableIntegrationProps {
  socialAccounts: AdAccount[];
  loading: boolean;
  onAccountConnected: (accountName: string) => void;
}

const AvailableIntegration: React.FC<AvailableIntegrationProps> = ({
  socialAccounts,
  onAccountConnected,
}) => {
  const integrationApis: Record<string, string> = {
    "Meta Ads":
      "https://zyaamali1-backend.onrender.com/api/v1/connect/facebook-auth",
    "TikTok Ads":
      "https://zyaamali1-backend.onrender.com/api/v1/connect/tiktok-auth",
    "LinkedIn Ads":
      "https://zyaamali1-backend.onrender.com/api/v1/connect/linkedin-auth",
    "Google Ads":
      "https://zyaamali1-backend.onrender.com/api/v1/connect/google-auth",
  };

  const handleConnect = (name: string) => {
    try {
      const apiUrl = integrationApis[name];
      console.log("🌐 Starting OAuth for:", name, apiUrl);

      if (!apiUrl) {
        console.warn(`❌ No API configured for integration: ${name}`);
        return;
      }

      const authWindow = window.open(apiUrl, "_blank", "width=600,height=700");

      const checkInterval = setInterval(() => {
        if (authWindow && authWindow.closed) {
          clearInterval(checkInterval);
          onAccountConnected(name);
        }
      }, 500);
    } catch (error) {
      console.error(`❌ Error connecting to ${name}:`, error);
    }
  };

  const availableIntegrations = socialAccounts.filter(
    (integration) => !integration.isSynced
  );

  return (
    <div className="pt-4 sm:pt-6">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 sm:mb-6">
        Available Integration
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {availableIntegrations.map((integration) => (
          <div
            key={integration._id}
            className="flex items-center p-3 sm:p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow-sm space-x-2 sm:space-x-3"
          >
            <img
              src={integration.icon}
              alt={integration.name}
              className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0"
            />
            <p className="font-medium text-sm sm:text-base text-gray-800 dark:text-gray-100 flex-grow truncate">
              {integration.name}
            </p>
            <button
              onClick={() => handleConnect(integration.name)}
              className="cursor-pointer px-2.5 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm border border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200 flex-shrink-0 whitespace-nowrap"
            >
              Connect
            </button>
          </div>
        ))}
        {availableIntegrations.length === 0 && (
          <p className="col-span-full text-center text-gray-500 dark:text-gray-400 text-sm sm:text-base">
            All integrations are connected.
          </p>
        )}
      </div>
    </div>
  );
};

export default AvailableIntegration;
