import { RiErrorWarningFill } from "react-icons/ri"

const AudienceTarget = () => {
  return (
     <div className="rounded-xl font-sans bg-white mt-6">
      <div className="flex justify-between items-start flex-wrap bg-[#0085F71A] py-5 px-4 rounded-xl">
        <div>
          <h2 className="text-2xl font-semibold text-[#1A1A1A] m-0">
           Audience Targeting
          </h2>
          <p className="text-sm text-gray-500 mt-2">
           Refine your audience to improve CTR by narrowing demographic targeting.
          </p>
        </div>
        <div className="text-sm font-medium bg-[#3B82F633] text-[#3B82F6] p-2 rounded-full mt-2">
          Medium Impact
        </div>
      </div>

      <div className="flex items-start mt-6 px-4">
        <RiErrorWarningFill className="text-[#00CCFF] w-6 h-6 me-2"/>
        <p className="text-base text-[#1A1A1A] m-0">
          More specific targeting can increase your conversion rate by up to 18%. We recommend narrowing your audience to focus on your most engaged demographic. 
        </p>
      </div>

    <div className="p-4">
        <div className="mt-5 bg-gray-100 rounded-lg p-4 flex flex-col gap-2">
        <p className="text-sm text-gray-500 m-0">
          Current : <span className="text-gray-900 font-medium">Adults 18-65, All genders, Interested in Food</span>
        </p>
        <div className="flex justify-between items-center flex-wrap gap-2">
          <p className="text-sm text-gray-500 m-0">
            Suggested : <span className="text-[#7453FC] font-medium">Women 25-45, interested in food </span>
          </p>
          <button
            className="px-4 py-2 text-sm text-white rounded-full"
            style={{ background: "linear-gradient(90deg, #A67EFF 0%, #5B5BE5 100%)" }}
          >
            Apply Changes
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AudienceTarget