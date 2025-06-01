import { FaWandMagicSparkles } from "react-icons/fa6";
import OutlineButton from "@/components/ui/OutlineButton";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { FaPlus } from "react-icons/fa6";
import DashboardCard from "@/components/Reuseable/DashboardCard";
import { usersCards } from "@/lib/Dashboard/DashboardCard";
import ActiveCampaign from "@/components/DashboardHome/ActiveCampaign";
import AiSuggestion from "@/components/DashboardHome/AiSuggestion";
import Sale from "@/components/DashboardHome/Sale";
import { useNavigate } from "react-router-dom";

function DashboardHome() {
  const navigate = useNavigate();
  return (
    <div>
      {/* heading  */}
      <div className="flex justify-between">
        <div>
          <h1 className="lg:text-5xl mb-5 bg-gradient-to-r from-[#000000] to-[#8E6EFF] bg-clip-text text-transparent">
            Welcome Ramsey
          </h1>
          <p className="text-gray-text">
            Manage your campaign and accelerate your marketing with ai tools
          </p>
        </div>
        <div className="lg:flex gap-4 items-end">
          <PrimaryButton icon={<FaPlus />}>Create New Campaign</PrimaryButton>
          <OutlineButton
            icon={<FaWandMagicSparkles />}
            onClick={() => {
              navigate("generate-content");
            }}
          >
            Generate Marketing Content
          </OutlineButton>
        </div>
      </div>
      {/* cards  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-16 mx-5">
        {usersCards.map((card, idx) => (
          <DashboardCard key={idx} {...card} />
        ))}
      </div>
      {/* Active Campaign  */}
      <div>
        <ActiveCampaign />
      </div>
      {/* AI Suggestion  */}
      <div className="lg:grid grid-cols-3 gap-4 my-16">
        <div className="col-span-2">
          <AiSuggestion />
        </div>
        <div className="border border-gray-200 rounded-lg overflow-hidden p-5 m-5">
          <Sale />
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
