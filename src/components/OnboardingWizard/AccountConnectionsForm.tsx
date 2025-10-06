/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */




const AccountConnectionsForm = () => {
    const platforms = [
    {
      id: "google-ads",
      name: "Google Ads",
      description: "Connect your Google Ads account to track campaign performance",
      icon: "https://img.icons8.com/color/48/000000/google-ads.png",
      color: "bg-red-500",
      connected: false
    },
    {
      id: "facebook-ads",
      name: "Facebook Ads",
      description: "Link your Facebook Ads account for comprehensive analytics",
      icon: "https://img.icons8.com/color/48/000000/facebook-new.png",
      color: "bg-blue-600",
      connected: false
    },
    {
      id: "linkedin",
      name: "Linkedin",
      description: "Connect linkedin for content insights and engagement metrics",
      icon: "https://img.icons8.com/color/48/000000/linkedin.png",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      connected: false
    },
    {
      id: "tiktok",
      name: "TikTok",
      description: "Connect TikTok for video performance and audience insights",
      icon: "https://img.icons8.com/color/48/000000/tiktok--v1.png",
      color: "bg-gray-900",
      connected: false
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-2">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Connect Your Accounts
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Link your advertising and social media accounts to get comprehensive insights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {platforms.map((platform) => (
          <div
            key={platform.id}
            className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-4">
               <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white `}>
                <img src={platform.icon as  string}></img>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                  {platform.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {platform.description}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${platform.connected ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <span className={`text-sm font-medium ${platform.connected ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'}`}>
                  {platform.connected ? 'Connected' : 'Not connected'}
                </span>
              </div>
            </div>

            <button
              type="button"
              className={`
                w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300
                ${platform.connected
                  ? 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                }
              `}
            >
              {platform.connected ? 'Manage Connection' : 'Connect Account'}
            </button>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Real-time performance data
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Automated reporting
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 mt-8">
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-400 mb-2">
              Why connect your accounts?
            </h4>
            <p className="text-blue-800 dark:text-blue-300 text-sm">
              Connecting your advertising accounts allows us to provide you with comprehensive analytics, 
              automated reporting, and data-driven recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountConnectionsForm;