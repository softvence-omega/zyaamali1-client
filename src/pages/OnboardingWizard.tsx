/* eslint-disable @typescript-eslint/no-explicit-any */
import AccountConnectionsForm from "@/components/OnboardingWizard/AccountConnectionsForm";
import BusinessDetailsForm from "@/components/OnboardingWizard/BusinessDetailsForm";
import MarketingGoalsForm from "@/components/OnboardingWizard/MarketingGoalsForm";
import { RootState } from "@/store/store";

import axios from "axios";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OnboardingWizard = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      brandName: "",
      businessInfoMethod: "website",
      websiteUrl: "",
      businessDescription: "",
      useMultipleBrands: false,
      businessName: "",
      industry: "",
      businessSize: "",
      description: "",
      marketingGoals: [],
    },
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const skipSurvey = () => {
    console.log("Survey skipped");
    setStep(4);
  };

  const onSubmit = async (data: any) => {
    if (step < 4) {
      nextStep();
    } else {
      try {
        console.log("✅ Final Onboarding Data:", data);

        const response = await axios.post(
          `https://zyaamali1-backend.onrender.com/api/v1/onboarding/create`,
          {
            userId: user?.userId,
            brandName: data.brandName,
            marketingGoals: data.marketingGoals,
            businessInfo: {
              method: data.businessInfoMethod,
              websiteUrl: data.websiteUrl,
              businessName: data.businessName,
              industry: data.industry,
              businessSize: data.businessSize,
              description: data.description,
              buniessGoal: "nothings",
            },
          },
          { withCredentials: true }
        );

        console.log("🎯 API Response:", response.data);
        navigate("/dashboard");
      } catch (error: any) {
        console.error(
          "❌ Failed to submit onboarding data:",
          error.response?.data || error.message
        );
      }
    }
  };

  const steps = [
    {
      number: 1,
      title: "Brand Info",
      subtitle: "Performance",
      active: step === 1,
    },
    {
      number: 2,
      title: "Content Preferences",
      subtitle: "Business Details",
      active: step === 2,
    },
    { number: 3, title: "Audience", subtitle: "Targeting", active: step === 3 },
    { number: 4, title: "Complete", subtitle: "Accounts", active: step === 4 },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-screen p-8 transition-colors duration-200">
          <div className="mb-12">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-200">
              Setup Your Account
            </h1>
          </div>

          <nav className="space-y-8">
            {steps.map((stepItem) => (
              <div key={stepItem.number} className="space-y-4">
                <div
                  className={`flex items-center gap-3 transition-colors duration-200 ${
                    stepItem.active
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-200 ${
                      stepItem.active
                        ? "bg-blue-600 dark:bg-blue-500 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    {stepItem.number}
                  </div>
                  <div>
                    <div className="font-medium">{stepItem.title}</div>
                    <div className="text-sm opacity-75">
                      {stepItem.subtitle}
                    </div>
                  </div>
                </div>
                {stepItem.number < steps.length && (
                  <div className="h-4 border-l-2 border-gray-200 dark:border-gray-600 ml-4 transition-colors duration-200"></div>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200">
            <button
              onClick={() => navigate("/dashboard")}
              className="w-full py-3 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 font-medium text-sm"
            >
              Skip Survey
            </button>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center transition-colors duration-200">
              You can complete this later in settings
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-12">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2 transition-colors duration-200">
                <span>Step {step} of 4</span>
                <span>{Math.round((step / 4) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 transition-colors duration-200">
                <div
                  className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-200">
                  {step === 1 && "Tell us about your brand"}
                  {step === 2 && "Business Details"}
                  {step === 3 && "Marketing Goals"}
                  {step === 4 && "Connect Accounts"}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-200">
                  {step === 1 && "Help us personalize your Bugpie experience"}
                  {step === 2 &&
                    "Tell us about your business to personalize your experience"}
                  {step === 3 && "What are your primary marketing objectives?"}
                  {step === 4 &&
                    "Link your accounts for comprehensive insights"}
                </p>
              </div>

              <div className="h-px bg-gray-200 dark:bg-gray-700 my-8 transition-colors duration-200"></div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {step === 1 && (
                  <div className="space-y-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
                        Brand Name <span className="text-red-500">*</span>
                      </label>
                      <Controller
                        name="brandName"
                        control={control}
                        rules={{ required: "Brand name is required" }}
                        render={({ field }) => (
                          <input
                            {...field}
                            type="text"
                            placeholder="Enter your brand name"
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                          />
                        )}
                      />
                      {errors.brandName && (
                        <span className="text-sm text-red-500 font-medium">
                          {errors.brandName.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-200">
                        How would you like to share your business information?{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <Controller
                        name="businessInfoMethod"
                        control={control}
                        rules={{ required: "Please select an option" }}
                        render={({ field }) => (
                          <div className="space-y-3">
                            {[
                              {
                                value: "website",
                                label: "Website",
                                description: "Share your website URL",
                              },
                              {
                                value: "description",
                                label: "Description",
                                description: "Tell us about your business",
                              },
                              {
                                value: "skip",
                                label: "Skip",
                                description: "Don't share info",
                              },
                            ].map((option) => (
                              <label
                                key={option.value}
                                className="flex items-start gap-3 p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200 bg-white dark:bg-gray-800"
                              >
                                <input
                                  type="radio"
                                  {...field}
                                  value={option.value}
                                  checked={field.value === option.value}
                                  className="mt-1 text-blue-600 dark:text-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400"
                                />
                                <div>
                                  <div className="font-medium text-gray-900 dark:text-white transition-colors duration-200">
                                    {option.label}
                                  </div>
                                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 transition-colors duration-200">
                                    {option.description}
                                  </div>
                                </div>
                              </label>
                            ))}
                          </div>
                        )}
                      />
                      {errors.businessInfoMethod && (
                        <span className="text-sm text-red-500 font-medium">
                          {errors.businessInfoMethod.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
                        Website Url <span className="text-red-500">*</span>
                      </label>
                      <Controller
                        name="websiteUrl"
                        control={control}
                        rules={{ required: "website Url  is required" }}
                        render={({ field }) => (
                          <input
                            {...field}
                            type="text"
                            placeholder="Enter your website Url"
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                          />
                        )}
                      />
                      {errors.brandName && (
                        <span className="text-sm text-red-500 font-medium">
                          {errors.brandName.message}
                        </span>
                      )}
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mt-8 transition-colors duration-200">
                      <h3 className="font-semibold text-blue-900 dark:text-blue-400 mb-2 transition-colors duration-200">
                        Let's get your brand set up for success
                      </h3>
                      <p className="text-blue-800 dark:text-blue-300 transition-colors duration-200">
                        We'll help you create amazing content that resonates
                        with your audience.
                      </p>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <BusinessDetailsForm control={control} errors={errors} />
                )}

                {step === 3 && (
                  <MarketingGoalsForm control={control} errors={errors} />
                )}

                {step === 4 && <AccountConnectionsForm />}

                <div className="flex justify-between items-center pt-8">
                  <div className="flex gap-3">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-8 py-3 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 font-medium bg-white dark:bg-gray-800"
                      >
                        Back
                      </button>
                    ) : (
                      <div></div>
                    )}

                    {step < 4 && (
                      <button
                        type="button"
                        onClick={skipSurvey}
                        className="px-6 py-3 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 font-medium bg-white dark:bg-gray-800"
                      >
                        Skip for now
                      </button>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="px-8 py-3 cursor-pointer bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 font-medium"
                  >
                    {step < 4 ? "Next" : "Complete Setup"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingWizard;
