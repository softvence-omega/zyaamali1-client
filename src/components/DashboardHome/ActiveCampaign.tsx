import AnnouncementIcon from "@/assets/CustomIcon/AnnouncementIcon";
import { campaignData } from "@/lib/Dashboard/CampaignData";
import { FaArrowRight } from "react-icons/fa6";

// Reusable table cell component
const TableCell = ({ value, label }: { value: string; label: string }) => (
  <td className="p-4">
    <div className="text-center">
      <h1 className="text-xl">{value}</h1>
      <p className="text-Foundation-text-T-75 text-sm">{label}</p>
    </div>
  </td>
);

const ActiveCampaign = () => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden p-5 m-5">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-8">
        <AnnouncementIcon />
        <h1 className="text-2xl">Active Campaigns</h1>
      </div>

      {/* Table Section */}
      <div>
        <table className="w-full border-collapse">
          <tbody>
            {campaignData.map((campaign, index) => (
              <tr key={index}>
                <TableCell value={campaign.platform} label="Platform" />
                <TableCell value={campaign.impressions} label="Impressions" />
                <TableCell value={campaign.ctr} label="CTR" />
                <TableCell value={campaign.budget} label="Budget" />
                <TableCell value={campaign.conversions} label="Conversions" />
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center gap-2 md:gap-3 flex-wrap">
          <button className="text-[#8E6EFF] text-sm md:text-base font-medium hover:underline">
            View All Campaigns
          </button>
          <FaArrowRight className="text-[#8E6EFF] text-base" />
        </div>

      </div>
    </div>
  );
};

export default ActiveCampaign;
