const ProgressBar = ({ step, totalSteps = 4 }) => {
  const progressPercentage = (step / totalSteps) * 100;

  return (
    <div className="w-full space-y-3">
      {/* Progress Info */}
      <div className="flex justify-between items-center text-sm">
        <span className="font-medium text-gray-700 dark:text-gray-300">
          Step {step} of {totalSteps}
        </span>
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          {Math.round(progressPercentage)}% Complete
        </span>
      </div>

      {/* Progress Bar */}
      <div className="relative">
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-700 ease-out shadow-inner"
            style={{ width: `${progressPercentage}%` }}
          >
            <div className="w-1/2 h-full bg-white/30 animate-pulse rounded-full transform rotate-12 origin-left"></div>
          </div>
        </div>
        
        {/* Step Dots */}
        <div className="flex justify-between mt-1">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`
                w-3 h-3 rounded-full border-2 transition-all duration-300
                ${index < step 
                  ? "bg-green-500 border-green-500 scale-125" 
                  : index === step 
                  ? "bg-blue-500 border-blue-500 animate-pulse ring-2 ring-blue-200" 
                  : "bg-gray-300 border-gray-300"
                }
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;