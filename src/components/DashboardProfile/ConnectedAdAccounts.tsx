import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaEdit } from "react-icons/fa";

interface AdAccount {
  _id: string;
  name: string;
  company: string;
  icon: string;
  isSynced: boolean;
}

// const adAccounts: AdAccount[] = [
//   {
//     id: "1",
//     name: "Facebook Ads",
//     company: "ABC Company",
//     icon: "https://img.icons8.com/color/48/000000/facebook--v1.png",
//     isSynced: true,
//   },
//   {
//     id: "2",
//     name: "Google Ads",
//     company: "ABC Company",
//     icon: "https://img.icons8.com/color/48/000000/google-ads.png",
//     isSynced: true,
//   },
//   {
//     id: "3",
//     name: "TikTok Ads",
//     company: "ABC Company",
//     icon: "https://img.icons8.com/fluency/48/000000/tiktok.png",
//     isSynced: true,
//   },
// ];

const ConnectedAdAccounts: React.FC = () => {
  const [socialAccounts, setSocialAccounts] = useState<AdAccount[]>([]);
  const [loading, setLoading] = useState(true);
  console.log(socialAccounts);

  useEffect(() => {
    const fetchSocialAccounts = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/v1/connect/get-All-Data"
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();

        setSocialAccounts(data?.data);

        // 🔹 Map your backend response into AdAccount[] format
        // const mappedAccounts: AdAccount[] = data.map((acc: any) => ({
        //   id: acc._id, // MongoDB ID or replace with acc.id
        //   name: acc.name,
        //   company: "ABC Company", // or acc.company if backend sends it
        //   icon: acc.icon,
        //   isSynced: !!acc.accessToken, // mark synced if accessToken exists
        // }));

        // setSocialAccounts(mappedAccounts);
      } catch (error) {
        console.error("❌ Error fetching social accounts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSocialAccounts();
  }, []);

  const handleEdit = (id: string) => {
    console.log(`Edit ad account with ID: ${id}`);
  };

  return (
    <div className="py-4 sm:py-6 border-b border-gray-200">
      {" "}
      {/* Adjusted padding */}
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
        Connected Ad Accounts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {" "}
        {socialAccounts.length > 0 ? (
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
                      {account?.name || "No Ad Account Name"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                  <span className="flex items-center text-green-600 text-xs sm:text-sm whitespace-nowrap pl-[34px]">
                    <FaCheckCircle className="mr-0.5 sm:mr-1 text-xs sm:text-sm" />
                    Synced
                  </span>
                  <button
                    onClick={() => handleEdit(account._id)}
                    className="p-1.5 sm:p-2 text-gray-500 hover:text-blue-600 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    aria-label="Edit"
                  >
                    <FaEdit className="text-sm sm:text-base" />
                  </button>
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
