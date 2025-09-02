import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Business } from "../../store/Features/BusinessSlice/ businessSlice";

interface AddBusinessFormInputs {
  name: string;
  description: string;
  goal: string;
}

interface AddBusinessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (newBusiness: Omit<Business, "id">) => void;
}

const AddBusinessModal: React.FC<AddBusinessModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<AddBusinessFormInputs>();

  const descriptionValue = watch("description") || "";
  const goalValue = watch("goal") || "";

  const maxChars = 150;

  const onSubmit: SubmitHandler<AddBusinessFormInputs> = (data) => {
    if (data.description.length > maxChars || data.goal.length > maxChars) {
      return;
    }
    onAdd(data);
    reset();
  };

  useEffect(() => {
    if (isOpen) {
      // Lock scrolling by modifying the `html` element, which represents the viewport.
      document.documentElement.style.overflow = "hidden"; // Disables scrolling
    } else {
      document.documentElement.style.overflow = "auto"; // Re-enable scrolling when modal closes
    }

    // Cleanup function to reset the overflow to auto when the modal is closed or component is unmounted
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/10 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-auto z-50">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Add New Business
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="businessName"
              className="block text-sm font-medium text-gray-700"
            >
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              {...register("name", { required: "Business Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="businessDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="businessDescription"
              rows={3}
              maxLength={maxChars}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.description ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              {...register("description", {
                required: "Description is required",
                maxLength: {
                  value: maxChars,
                  message: `Description must be under ${maxChars} characters`,
                },
              })}
            ></textarea>
            <p className="text-xs text-gray-500 mt-1">
              {maxChars - descriptionValue.length} characters left
            </p>
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="businessGoal"
              className="block text-sm font-medium text-gray-700"
            >
              Goal
            </label>
            <textarea
              id="businessGoal"
              rows={2}
              maxLength={maxChars}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.goal ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              {...register("goal", {
                required: "Goal is required",
                maxLength: {
                  value: maxChars,
                  message: `Goal must be under ${maxChars} characters`,
                },
              })}
            ></textarea>
            <p className="text-xs text-gray-500 mt-1">
              {maxChars - goalValue.length} characters left
            </p>
            {errors.goal && (
              <p className="text-red-500 text-xs mt-1">{errors.goal.message}</p>
            )}
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => {
                reset();
                onClose();
              }}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBusinessModal;
