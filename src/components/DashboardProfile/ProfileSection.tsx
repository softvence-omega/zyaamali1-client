import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import axios from "axios";
import { useSelector } from "react-redux";

const ProfileSection: React.FC = () => {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  const [editMode, setEditMode] = useState<{ [key: string]: boolean }>({});
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    country: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updating, setUpdating] = useState(false);

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "India",
    "Brazil",
    "South Africa",
  ];

  // Fetch profile data
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:5000/api/v1/user/get-single-user/${user.userId}`,
          { withCredentials: true }
        );

        setFormData({
          fullName: response.data.data.fullName || "",
          email: response.data.data.email || "",
          companyName: response.data.data.companyName || "",
          country: response.data.data.country || "",
        });
      } catch (err: any) {
        console.error(err);
        setError("Failed to fetch profile data");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [user.userId]);

  const handleUpdateProfile = async () => {
    try {
      setUpdating(true);

      const response = await axios.put(
        `http://localhost:5000/api/v1/user/update-profile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true, // if your backend uses cookies
        }
      );

      alert("Profile updated successfully!");
      setEditMode({});
    } catch (err: any) {
      console.error(err);
      alert("Failed to update profile. Please try again.");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <p className="text-gray-600">Loading profile...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="py-6 px-6 border-b bg-gray-100 rounded-3xl border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Personal Information
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
          <img
            src="https://via.placeholder.com/96"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {/* Full Name */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <FaEdit
                onClick={() =>
                  setEditMode((prev) => ({ ...prev, fullName: !prev.fullName }))
                }
                className="w-4 h-4 text-gray-500 cursor-pointer"
              />
            </div>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              readOnly={!editMode.fullName}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, fullName: e.target.value }))
              }
              className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                editMode.fullName ? "bg-white" : "bg-gray-50"
              }`}
            />
          </div>

          {/* Email - not editable */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <FaEdit className="w-4 h-4 text-gray-300 cursor-not-allowed" />
            </div>
            <input
              type="email"
              id="email"
              value={formData.email}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm bg-black/40 text-white cursor-not-allowed"
            />
          </div>

          {/* Company Name */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company Name
              </label>
              <FaEdit
                onClick={() =>
                  setEditMode((prev) => ({
                    ...prev,
                    companyName: !prev.companyName,
                  }))
                }
                className="w-4 h-4 text-gray-500 cursor-pointer"
              />
            </div>
            <input
              type="text"
              id="companyName"
              value={formData.companyName}
              readOnly={!editMode.companyName}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  companyName: e.target.value,
                }))
              }
              className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                editMode.companyName ? "bg-white" : "bg-gray-50"
              }`}
            />
          </div>

          {/* Country */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Country
              </label>
              <FaEdit
                onClick={() =>
                  setEditMode((prev) => ({ ...prev, country: !prev.country }))
                }
                className="w-4 h-4 text-gray-500 cursor-pointer"
              />
            </div>
            {editMode.country ? (
              <Select
                value={formData.country}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, country: value }))
                }
              >
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <input
                type="text"
                id="country"
                value={formData.country}
                readOnly
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm bg-gray-50"
              />
            )}
          </div>
        </div>
      </div>

      {/* Update Button */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleUpdateProfile}
          disabled={updating}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-70"
        >
          {updating ? "Updating..." : "Update Profile"}
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;
