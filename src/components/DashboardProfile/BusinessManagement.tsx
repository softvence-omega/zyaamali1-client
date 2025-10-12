/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const BusinessManagement: React.FC = () => {
  const [businessData, setBusinessData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    const fetchOnboardingData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://zyaamali1-backend.onrender.com/api/v1/onboarding/get-single/${user?.userId}`,
          { withCredentials: true }
        );

        setBusinessData(response.data.data.businessInfo);
      } catch (err: any) {
        setError(
          err.response?.data?.message || "Failed to fetch business data"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOnboardingData();
  }, [user?.userId]);

  if (loading)
    return (
      <p className="text-gray-600 dark:text-gray-300 animate-pulse">
        Loading...
      </p>
    );
  if (error)
    return <p className="text-red-500 dark:text-red-400">{error}</p>;

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
        Business Information
      </h2>

      {businessData ? (
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            <span className="font-medium">Business Name:</span>{" "}
            {businessData.businessName}
          </p>
          <p>
            <span className="font-medium">Description:</span>{" "}
            {businessData.description}
          </p>
          <p>
            <span className="font-medium">Business Goal:</span>{" "}
            {businessData.buniessGoal}
          </p>
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">No business data found.</p>
      )}
    </div>
  );
};

export default BusinessManagement;
