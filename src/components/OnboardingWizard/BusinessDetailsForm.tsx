/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller } from "react-hook-form";

import { Control, FieldErrors } from "react-hook-form";

interface BrandProfileFormProps {
  control: Control<any>;
  errors: FieldErrors<any>;
}

const BusinessDetailsForm = ({ control, errors }: BrandProfileFormProps) => {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center mb-2">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Business Details
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Tell us about your business to personalize your experience
        </p>
      </div>

      {/* Business Name Field */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Business Name
            <span className="text-red-500 ml-1">*</span>
          </label>
          {/* {errors.businessName && (
            <span className="text-sm text-red-500 font-medium">
              {errors?.businessName.message}
            </span>
          )} */}
        </div>
        
        <Controller
          name="businessName"
          control={control}
          rules={{
            required: "Business name is required",
            minLength: {
              value: 2,
              message: "Business name must be at least 2 characters"
            },
            maxLength: {
              value: 100,
              message: "Business name must be less than 100 characters"
            }
          }}
          render={({ field }) => (
            <div className="relative">
              <input
                type="text"
                {...field}
                placeholder="Enter your business name"
                className={`
                  w-full px-4 py-3.5 
                  border rounded-xl
                  text-gray-900 dark:text-white
                  placeholder-gray-500 dark:placeholder-gray-400
                  bg-white dark:bg-gray-800
                  border-gray-300 dark:border-gray-600
                  focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  transition-all duration-200
                  ${errors.businessName 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'focus:ring-blue-500'
                  }
                `}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
          )}
        />
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          This will be displayed to your customers
        </p>
      </div>

      {/* Industry Field */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Industry
            <span className="text-red-500 ml-1">*</span>
          </label>
          {/* {errors.industry && (
            <span className="text-sm text-red-500 font-medium">
              {errors.industry.message}
            </span>
          )} */}
        </div>
        
        <Controller
          name="industry"
          control={control}
          rules={{
            required: "Please select your industry",
            validate: value => value !== "" || "Industry selection is required"
          }}
          render={({ field }) => (
            <div className="relative">
              <select
                {...field}
                className={`
                  w-full px-4 py-3.5 pr-10
                  border rounded-xl appearance-none
                  text-gray-900 dark:text-white
                  bg-white dark:bg-gray-800
                  border-gray-300 dark:border-gray-600
                  focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  transition-all duration-200
                  cursor-pointer
                  ${errors.industry 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'focus:ring-blue-500'
                  }
                `}
              >
                <option value="" className="text-gray-500 dark:text-gray-400">Select your industry</option>
                <option value="fashion" className="text-gray-900 dark:text-white">Fashion & Apparel</option>
                <option value="tech" className="text-gray-900 dark:text-white">Technology</option>
                <option value="food" className="text-gray-900 dark:text-white">Food & Beverage</option>
                <option value="health" className="text-gray-900 dark:text-white">Health & Wellness</option>
                <option value="education" className="text-gray-900 dark:text-white">Education</option>
                <option value="retail" className="text-gray-900 dark:text-white">Retail</option>
                <option value="finance" className="text-gray-900 dark:text-white">Finance & Banking</option>
                <option value="real-estate" className="text-gray-900 dark:text-white">Real Estate</option>
                <option value="entertainment" className="text-gray-900 dark:text-white">Entertainment</option>
                <option value="automotive" className="text-gray-900 dark:text-white">Automotive</option>
                <option value="beauty" className="text-gray-900 dark:text-white">Beauty & Cosmetics</option>
                <option value="travel" className="text-gray-900 dark:text-white">Travel & Hospitality</option>
                <option value="other" className="text-gray-900 dark:text-white">Other</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          )}
        />
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          Choose the industry that best describes your business
        </p>
      </div>

      {/* Business Size Field */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Business Size
            <span className="text-gray-400 text-xs font-normal ml-1">(Optional)</span>
          </label>
          {/* {errors.businessSize && (
            <span className="text-sm text-red-500 font-medium">
              {errors.businessSize.message}
            </span>
          )} */}
        </div>
        
        <Controller
          name="businessSize"
          control={control}
          render={({ field }) => (
            <div className="relative">
              <select
                {...field}
                className="w-full px-4 py-3.5 pr-10 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 cursor-pointer"
              >
                <option value="" className="text-gray-500 dark:text-gray-400">Select business size</option>
                <option value="1-10" className="text-gray-900 dark:text-white">1-10 employees</option>
                <option value="11-50" className="text-gray-900 dark:text-white">11-50 employees</option>
                <option value="51-200" className="text-gray-900 dark:text-white">51-200 employees</option>
                <option value="201-500" className="text-gray-900 dark:text-white">201-500 employees</option>
                <option value="501-1000" className="text-gray-900 dark:text-white">501-1000 employees</option>
                <option value="1000+" className="text-gray-900 dark:text-white">1000+ employees</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          )}
        />
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          Helps us tailor features to your business needs
        </p>
      </div>

      {/* Business Description (Optional) */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
          Business Description <span className="text-gray-400 text-xs font-normal">(Optional)</span>
        </label>
        <Controller
          name="description"
          control={control}
          rules={{
            maxLength: {
              value: 500,
              message: "Description must be less than 500 characters"
            }
          }}
          render={({ field }) => (
            <div className="relative">
              <textarea
                {...field}
                rows={4}
                placeholder="Briefly describe your business, products, services, mission, or unique value proposition..."
                className={`
                  w-full px-4 py-3
                  border rounded-xl
                  text-gray-900 dark:text-white
                  placeholder-gray-500 dark:placeholder-gray-400
                  bg-white dark:bg-gray-800
                  border-gray-300 dark:border-gray-600
                  focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  resize-none transition-all duration-200
                  ${errors.description 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'focus:ring-blue-500'
                  }
                `}
              />
              <div className="absolute bottom-2 right-3 text-xs text-gray-400">
                {field.value?.length || 0}/500
              </div>
            </div>
          )}
        />
        {/* {errors.description && (
          <span className="text-sm text-red-500 font-medium">
            {errors.description.message}
          </span>
        )} */}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          This helps us provide more relevant content suggestions and personalized recommendations
        </p>
      </div>
    </div>
  );
};

export default BusinessDetailsForm