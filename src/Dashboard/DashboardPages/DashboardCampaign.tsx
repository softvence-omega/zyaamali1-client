import FunnelIcon from "@/assets/CustomIcon/FunnelIcon";
import CampaignPerformanceTable from "@/components/Dashboard/CampaignPerformance/CampaignPerformanceTable";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { FaPlus } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const DashboardCampaign = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5 gap-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
          <span className="bg-gradient-to-r from-black to-[#8e6eff] bg-clip-text text-transparent">
            Campaign Performance
          </span>
        </h1>
        <Link to={"/dashboard/campaign/create"}>
          <PrimaryButton icon={<FaPlus />}>Create New Campaign</PrimaryButton>
        </Link>
      </div>

      {/* Search Section */}
      <div className="mt-6 sm:mt-10 relative">
        <div className="relative max-w-3xl mx-auto">
          <input
            type="text"
            className="w-full px-10 sm:px-12 border-1 border-Foundation-text-T-75 rounded-3xl py-2 sm:py-3 focus:outline-none focus:ring-0 focus:border-Foundation-gray-bg"
            placeholder="Search Ads"
          />
          <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-xl sm:text-2xl text-Foundation-text-T-75">
            <IoMdSearch />
          </div>
          <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-xl sm:text-2xl bg-blue-200/30 rounded-full p-1 sm:p-2 flex items-center justify-center">
            <FunnelIcon />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-5 overflow-x-auto">
        <CampaignPerformanceTable />
      </div>
    </div>
  );
};

export default DashboardCampaign;
