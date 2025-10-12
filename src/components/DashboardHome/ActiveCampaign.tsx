import AnnouncementIcon from "@/assets/CustomIcon/AnnouncementIcon";
import { campaignData } from "@/lib/Dashboard/CampaignData";
import { FaArrowRight } from "react-icons/fa6";

// Reusable table cell component
const TableCell = ({ value, label }: { value: string; label: string }) => (
  <td className="p-4">
    <div className="text-center">
      <h1 className="text-xl text-gray-900 dark:text-white transition-colors duration-300">{value}</h1>
      <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">{label}</p>
    </div>
  </td>
);

const ActiveCampaign = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden p-5  bg-white dark:bg-gray-800 transition-colors duration-300">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-8">
        <div className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
          <AnnouncementIcon />
        </div>
        <h1 className="text-2xl text-gray-900 dark:text-white transition-colors duration-300">Active Campaigns</h1>
      </div>

      {/* Table Section */}
      <div>
        <table className="w-full border-collapse">
          <tbody>
            {campaignData.map((campaign, index) => (
              <tr 
                key={index}
                className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 transition-colors duration-300"
              >
                <TableCell value={campaign.platform} label="Platform" />
                <TableCell value={campaign.impressions} label="Impressions" />
                <TableCell value={campaign.ctr} label="CTR" />
                <TableCell value={campaign.budget} label="Budget" />
                <TableCell value={campaign.conversions} label="Conversions" />
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* View All Button */}
        <div className="flex items-center gap-2 md:gap-3 flex-wrap mt-6">
          <button className="text-[#8E6EFF] dark:text-purple-400 text-sm md:text-base font-medium hover:underline transition-colors duration-300 hover:text-[#7B5BE6] dark:hover:text-purple-300">
            View All Campaigns
          </button>
          <FaArrowRight className="text-[#8E6EFF] dark:text-purple-400 text-base transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};

export default ActiveCampaign;