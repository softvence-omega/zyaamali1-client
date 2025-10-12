/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller } from "react-hook-form";

import { Control, FieldErrors } from "react-hook-form";

interface BrandProfileFormProps {
  control: Control<any>;
  errors: FieldErrors<any>;
}
const MarketingGoalsForm = ({ control }: BrandProfileFormProps) => {
  const goals = [
    { id: "brand-awareness", label: "Brand Awareness", description: "Increase visibility and recognition" },
    { id: "lead-generation", label: "Lead Generation", description: "Generate more qualified leads" },
    { id: "sales-conversion", label: "Sales Conversion", description: "Drive more sales and revenue" },
    { id: "customer-retention", label: "Customer Retention", description: "Keep existing customers engaged" },
    { id: "community-building", label: "Community Building", description: "Build a loyal community" },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-2">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Marketing Goals
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          What are your primary marketing objectives?
        </p>
      </div>

      <Controller
        name="marketingGoals"
        control={control}
        rules={{ required: "Please select at least one marketing goal" }}
        render={({ field }) => (
          <div className="space-y-4">
            {goals.map((goal) => (
              <label
                key={goal.id}
                className="flex items-start gap-3 p-4 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200 bg-white dark:bg-gray-800"
              >
                <input
                  type="checkbox"
                  checked={field.value?.includes(goal.id) || false}
                  onChange={(e) => {
                    const updatedGoals = field.value || [];
                    if (e.target.checked) {
                      field.onChange([...updatedGoals, goal.id]);
                    } else {
                      field.onChange(updatedGoals.filter((g: string) => g !== goal.id));
                    }
                  }}
                  className="mt-1 text-blue-600 dark:text-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400 rounded"
                />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {goal.label}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {goal.description}
                  </div>
                </div>
              </label>
            ))}
          </div>
        )}
      />
      {/* {errors.marketingGoals && (
        <span className="text-sm text-red-500 font-medium">
          {errors.marketingGoals.message}
        </span>
      )} */}
    </div>
  );
};


export default MarketingGoalsForm