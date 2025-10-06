/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller } from "react-hook-form";

import { Control, FieldErrors } from "react-hook-form";

interface BrandProfileFormProps {
  control: Control<any>;
  errors: FieldErrors<any>;
}

const BrandProfileForm = ({ control, errors }: BrandProfileFormProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Brand Profile</h2>

      <div>
        <label className="block text-lg font-medium">Brand Voice:</label>
        <Controller
          name="brandVoice"
          control={control}
          // rules={{ required: "Brand voice is required" }}
          render={({ field }) => (
            <select {...field} className="w-full p-3 border border-gray-300 rounded-lg">
              <option value="casual">Casual</option>
              <option value="professional">Professional</option>
              <option value="humorous">Humorous</option>
            </select>
          )}
        />
        {/* {errors.brandVoice && <span className="text-red-500">{errors.brandVoice.message}</span>} */}
      </div>

      <div>
        <label className="block text-lg font-medium">Logo Upload:</label>
        <Controller
          name="logo"
          control={control}
          render={({ field }) => (
            <input type="file" {...field} className="w-full p-3 border border-gray-300 rounded-lg" />
          )}
        />
      </div>

      <div>
        <label className="block text-lg font-medium">Brand Colors:</label>
        <Controller
          name="brandColor"
          control={control}
          render={({ field }) => (
            <input type="color" {...field} className="w-full p-3 border border-gray-300 rounded-lg" />
          )}
        />
      </div>
    </div>
  );
};

export default BrandProfileForm;
