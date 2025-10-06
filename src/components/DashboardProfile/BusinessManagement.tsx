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
          `http://localhost:5000/api/v1/onboarding/get-single/${user?.userId}`,
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Business Information</h2>

      {businessData ? (
        <div className="space-y-3 text-gray-700">
          <p>
            <strong>Business Name:</strong> {businessData.businessName}
          </p>
          <p>
            <strong>Description:</strong> {businessData.description}
          </p>
          <p>
            <strong>Business Goal:</strong> {businessData.buniessGoal}
          </p>
        </div>
      ) : (
        <p>No business data found.</p>
      )}
    </div>
  );
};

export default BusinessManagement;
