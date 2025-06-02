import { RiErrorWarningFill } from "react-icons/ri";

const CallToAction = () => {
  return (
    <div className="rounded-xl font-sans bg-white mb-6">
      {/* Header */}
      <div className="flex justify-between items-start flex-wrap bg-[#0085F71A] py-5 px-4 rounded-xl">
        <div>
          <h2 className="text-2xl font-semibold text-[#1A1A1A] m-0">
            Call To Action (CTA) Optimization
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Change your CTA to a more action-driven message.
          </p>
        </div>
        <div className="text-sm font-medium bg-[#FFA92933] text-[#F29000] p-2 rounded-full mt-2">
          High Impact
        </div>
      </div>

      {/* Analysis Message */}
      <div className="flex items-start mt-6 px-4">
        <RiErrorWarningFill className="text-[#00CCFF] w-6 h-6 me-2" />
        <p className="text-base text-[#1A1A1A] m-0">
          Urgent CTAs often result in a higher CTR. Our analysis shows that using more specific
          action words can increase engagement by up to 24%
        </p>
      </div>

      {/* Suggestion Box */}
       <div className="mt-5 bg-gray-100 rounded-lg p-4 flex flex-col lg:flex-row lg:items-center gap-4">
        <div className="flex-1 flex flex-col gap-2">
          <p className="text-sm text-gray-500 m-0">
            Current : <span className="text-gray-900 font-medium">Shop Now</span>
          </p>
          <p className="text-sm text-gray-500 m-0">
            Suggested : <span className="text-[#7453FC] font-medium">Get 20% Off Today</span>
          </p>
        </div>
        <div className="w-full lg:w-auto">
          <button
            className="w-full lg:w-auto px-4 py-2 text-sm text-white rounded-full"
            style={{ background: "linear-gradient(90deg, #A67EFF 0%, #5B5BE5 100%)" }}
          >
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;