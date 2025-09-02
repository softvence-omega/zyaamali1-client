import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Import Business interface from the Redux slice for consistency
import { Business } from "../../store/Features/BusinessSlice/ businessSlice";

// Define the shape of the form data for editing (excluding 'id' since it's part of the 'business' prop)
interface EditBusinessFormInputs extends Omit<Business, "id"> {}

interface EditBusinessModalProps {
  isOpen: boolean;
  onClose: () => void;
  business: Business; // The business being edited (includes ID)
  onUpdate: (updatedBusiness: Business) => void; // Expects full business object with ID
}

const EditBusinessModal: React.FC<EditBusinessModalProps> = ({
  isOpen,
  onClose,
  business,
  onUpdate,
}) => {
  // Initialize react-hook-form with default values from the 'business' prop
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditBusinessFormInputs>({
    defaultValues: {
      name: business.name,
      description: business.description,
      goal: business.goal,
    },
  });

  // Use useEffect to reset the form values when the 'business' prop changes.
  // This is crucial when editing different businesses consecutively to ensure the modal
  // displays the correct data for the newly selected business.
  useEffect(() => {
    reset({
      name: business.name,
      description: business.description,
      goal: business.goal,
    });
  }, [business, reset]); // Include reset in dependency array to avoid lint warnings

  const onSubmit: SubmitHandler<EditBusinessFormInputs> = (data) => {
    // Merge the original business ID with the updated form data
    onUpdate({ ...business, ...data }); // Call the onUpdate prop, which dispatches the Redux action
    onClose(); // Close modal after successful update
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Edit Business
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="editBusinessName"
              className="block text-sm font-medium text-gray-700"
            >
              Business Name
            </label>
            <input
              type="text"
              id="editBusinessName"
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
              htmlFor="editBusinessDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="editBusinessDescription"
              rows={3}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.description ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              {...register("description", {
                required: "Description is required",
              })}
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">
                {errors.description.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="editBusinessGoal"
              className="block text-sm font-medium text-gray-700"
            >
              Goal
            </label>
            <textarea
              id="editBusinessGoal"
              rows={2}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.goal ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              {...register("goal", { required: "Goal is required" })}
            ></textarea>
            {errors.goal && (
              <p className="text-red-500 text-xs mt-1">{errors.goal.message}</p>
            )}
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => {
                reset(); // Reset form when cancelling
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBusinessModal;
