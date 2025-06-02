import { RiErrorWarningFill } from "react-icons/ri"
import previw1 from '../../assets/dashboard-preview-1.png'
import previw2 from '../../assets/dashboard-preview-2.png'


const Image = () => {
  return (
    <div className="bg-white rounded-xl p-6 font-sans mt-6">
      <div className="flex justify-between items-start flex-wrap bg-[#0085F71A] py-5 px-4 rounded-xl">
        <div>
          <h2 className="text-2xl font-semibold text-[#1A1A1A] m-0">
           Image Enhancement
          </h2>
          <p className="text-sm text-gray-500 mt-2">
           Add a lifestyle image showing the product in use. 
          </p>
        </div>
        <div className="text-sm font-medium bg-[#3B82F633] text-[#3B82F6] p-2 rounded-full mt-2">
          Medium Impact
        </div>
      </div>

      <div className="flex items-start mt-6">
        <RiErrorWarningFill className="text-[#00CCFF] w-6 h-6 me-2" />
        <p className="text-base text-[#1A1A1A] m-0">
          Lifestyle images showing products in use typically incrase conversion rate by 30%. Our AI suggests using images that show people actively use your product 
        </p>
      </div>
      <div className="mt-5 bg-white rounded-lg p-4 flex flex-col">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="flex flex-col items-start w-full sm:w-1/2">
            <p className="text-sm text-gray-500 mb-3">Current:</p>
            <img src={previw1} alt="Current" className="w-full max-w-xs rounded shadow" />
          </div>

          <div className="flex flex-col items-start sm:items-end w-full sm:w-1/2">
            <p className="text-sm text-gray-500 mb-3">Suggested:</p>
            <img src={previw2} alt="Suggested" className="w-full max-w-xs rounded shadow" />
          </div>
        </div>

        <div className="flex flex-col mt-5">
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

export default Image
