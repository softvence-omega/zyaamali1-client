<<<<<<< HEAD
=======

>>>>>>> 490c964340dd9f6778b11fb978af1ff9162360d0
import FunnelIcon from "@/assets/CustomIcon/FunnelIcon";
import CampaignPerformanceTable from "@/components/Dashboard/CampaignPerformance/CampaignPerformanceTable";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { FaPlus } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
<<<<<<< HEAD
=======

>>>>>>> 490c964340dd9f6778b11fb978af1ff9162360d0

const DashboardCampaign = () => {
  
  return (
    <div>
<<<<<<< HEAD
      <h1 className="text-4xl mb-5 font-medium">
        <span className="bg-gradient-to-r from-black to-[#8e6eff] bg-clip-text text-transparent">
          Campaign Performance
        </span>
      </h1>
      <PrimaryButton icon={<FaPlus />}>Create New Campaign</PrimaryButton>
      {/* search  */}
      <div className="flex mt-10 relative">
        <input
          type="text"
          className="w-[70%] mx-auto px-12 border-1 border-Foundation-text-T-75 rounded-3xl py-3 focus:outline-none focus:ring-0 focus:border-Foundation-gray-bg"
          placeholder="Search Ads"
        />
        <div className="absolute top-3 left-64 text-2xl text-Foundation-text-T-75">
          <IoMdSearch />
        </div>
        <div className="absolute top-1 right-62 text-2xl bg-blue-200/30 rounded-full p-2 flex items-center justify-center">
          <FunnelIcon />
        </div>
      </div>
      {/* table  */}
      <div className="mt-5">
        <CampaignPerformanceTable />
      </div>
    </div>
  );
};

=======

      <h1 className="text-4xl mb-5 font-medium">
        <span className="bg-gradient-to-r from-black to-[#8e6eff] bg-clip-text text-transparent">
          Campaign Performance
        </span>
      </h1>
      <PrimaryButton icon={<FaPlus />}>Create New Campaign</PrimaryButton>
      {/* search  */}
      <div className="flex mt-10 relative">
        <input
          type="text"
          className="w-[70%] mx-auto px-12 border-1 border-Foundation-text-T-75 rounded-3xl py-3 focus:outline-none focus:ring-0 focus:border-Foundation-gray-bg"
          placeholder="Search Ads"
        />
        <div className="absolute top-3 left-64 text-2xl text-Foundation-text-T-75">
          <IoMdSearch />
        </div>
        <div className="absolute top-1 right-62 text-2xl bg-blue-200/30 rounded-full p-2 flex items-center justify-center">
          <FunnelIcon />
        </div>
      </div>
      {/* table  */}
      <div className="mt-5">
        <CampaignPerformanceTable />
      </div>
    </div>
  );
};


>>>>>>> 490c964340dd9f6778b11fb978af1ff9162360d0
export default DashboardCampaign;
