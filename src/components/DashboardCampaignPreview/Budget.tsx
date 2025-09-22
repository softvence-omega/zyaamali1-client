import { RiErrorWarningFill } from "react-icons/ri"

const Budget = () => {
    return (
        <div className="rounded-xl font-sans bg-white mt-6">
            <div className="flex justify-between items-start flex-wrap bg-[#0085F71A] py-5 px-4 rounded-xl">
                <div>
                    <h2 className="text-2xl font-semibold text-[#1A1A1A] m-0">
                        Budget Allocation
                    </h2>
                    <p className="text-sm text-gray-500 mt-2">
                        We recommend increasing the budget to maximize reach during peak hours.
                    </p>
                </div>
                <div className="text-sm font-medium bg-[#3B82F633] text-[#3B82F6] p-2 rounded-full mt-2">
                    Medium Impact
                </div>
            </div>

            <div className="flex items-start mt-6 px-4">
                <RiErrorWarningFill className="text-[#00CCFF] w-6 h-6 me-2" />
                <p className="text-base text-[#1A1A1A] m-0">
                    Our analysis shows that your target audience is most active between 7-9 PM. Increasing your budget during these hours could improve your ads performance.
                </p>
            </div>

            <div className="p-4">
                <div className="mt-5 bg-gray-100 rounded-lg p-4 flex flex-col gap-2">
                    <p className="text-sm text-gray-500 m-0">
                        Current : <span className="text-gray-900 font-medium">$20/day, even distribution</span>
                    </p>
                    <div className="flex justify-between items-center flex-wrap gap-2">
                        <p className="text-sm text-gray-500 m-0">
                            Suggested : <span className="text-[#7453FC] font-medium">$25/day, with 60% allocated to 7-9 PM</span>
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

export default Budget