// src/components/DashboardProfile/ChangePassword.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface PasswordFormInputs {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

const ChangePassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<PasswordFormInputs>();

  const newPassword = watch("newPassword");

  const onSubmit: SubmitHandler<PasswordFormInputs> = (data) => {
    console.log("Password Change Data:", data);
    alert("Password change initiated. Check console for data.");
    reset();
  };

  return (
    <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md mb-4 sm:mb-8 flex-1 md:w-2/4 w-full">
      {" "}
      {/* Adjusted padding, removed fixed width, added flex-1 */}
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
        Change Password
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-3 sm:space-y-4"
      >
        {" "}
        {/* Adjusted spacing */}
        <div>
          <label
            htmlFor="currentPassword"
            className="block text-xs sm:text-sm font-medium text-gray-700"
          >
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            className={`mt-1 block w-full px-2 py-1.5 sm:px-3 sm:py-2 border bg-white ${
              errors.currentPassword ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm`}
            {...register("currentPassword", {
              required: "Current password is required",
            })}
          />
          {errors.currentPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.currentPassword.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="newPassword"
            className="block text-xs sm:text-sm font-medium text-gray-700"
          >
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            className={`mt-1 block w-full px-2 py-1.5 sm:px-3 sm:py-2 border bg-white ${
              errors.newPassword ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm`}
            {...register("newPassword", {
              required: "New password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.newPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.newPassword.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="confirmNewPassword"
            className="block text-xs sm:text-sm font-medium text-gray-700"
          >
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmNewPassword"
            className={`mt-1 block w-full px-2 py-1.5 sm:px-3 sm:py-2 border bg-white ${
              errors.confirmNewPassword ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm`}
            {...register("confirmNewPassword", {
              required: "Please confirm your new password",
              validate: (value) =>
                value === newPassword || "Passwords do not match",
            })}
          />
          {errors.confirmNewPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmNewPassword.message}
            </p>
          )}
        </div>
        <div className="flex justify-start">
          <button
            type="submit"
            className="cursor-pointer px-4 py-1.5 sm:px-6 sm:py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200 text-sm sm:text-base"
          >
            Change password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
