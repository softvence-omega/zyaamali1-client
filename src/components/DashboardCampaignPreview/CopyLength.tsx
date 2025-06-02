import { RiErrorWarningFill } from "react-icons/ri";

const CopyLength = () => {
    return (
        <div className="bg-white rounded-xl p-6 font-sans mt-6">
      <div className="flex justify-between items-start flex-wrap bg-[#0085F71A] py-5 px-4 rounded-xl">
        <div>
          <h2 className="text-2xl font-semibold text-[#1A1A1A] m-0">
            Copy Length Optimization
          </h2>
          <p className="text-sm text-gray-500 mt-2">
           Consider adding more specific benefits in your ad copy
          </p>
        </div>
        <div className="text-sm font-medium bg-[#3B82F633] text-[#3B82F6] p-2 rounded-full mt-2">
          Medium Impact
        </div>
      </div>

      <div className="flex items-start mt-6">
       <RiErrorWarningFill className="text-[#00CCFF] w-6 h-6 me-2"/>
        <p className="text-base text-[#1A1A1A] m-0">
          Ads with specific product benefits typically see 15% higher enganement. We recommend highlighting key features that set your product apart.
        </p>
      </div>

      <div className="mt-5 bg-gray-100 rounded-lg p-4 flex flex-col lg:flex-row lg:items-center gap-4">
        <div className="flex-1 flex flex-col gap-2">
          <p className="text-sm text-gray-500 m-0">
            Current : <span className="text-gray-900 font-medium">Lorem ipsum dolor sit amet consectetur. Id feugiat magna lobortis gravida rhoncus neque vehicula. Euismod nullam tincidunt nunc faucibus viverra elit.</span>
          </p>
          <p className="text-sm text-gray-500 m-0">
            Suggested : <span className="text-[#7453FC] font-medium">Lorem ipsum dolor sit amet consectetur. Id feugiat magna lobortis gravida rhoncus neque vehicula. Euismod nullam tincidunt nunc faucibus viverra elit.</span>
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
    )
}

export default CopyLength;