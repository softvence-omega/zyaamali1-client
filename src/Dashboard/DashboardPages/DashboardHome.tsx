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
import toast from "react-hot-toast";

function DashboardHome() {
  const navigate = useNavigate();
  const handleclick = () => {
    toast("🚧 Coming Soon!");
    // navigate("/dashboard/campaign/create");
  };

  return (
    <div className="px-4 md:px-6 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* heading  */}
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-5 bg-gradient-to-r from-[#000000] to-[#8E6EFF] dark:from-white dark:to-[#A78BFA] bg-clip-text text-transparent">
            Welcome Ramsey
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base transition-colors duration-300">
            Manage your campaign and accelerate your marketing with ai tools
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-start md:items-end ">
          <PrimaryButton onClick={handleclick} icon={<FaPlus />}>
            Create New Campaign
          </PrimaryButton>

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
      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-4 my-8 md:my-16">
        {usersCards.map((card, idx) => (
          <DashboardCard key={idx} {...card} />
        ))}
      </div>

      {/* Active Campaign  */}
      <div>
        <ActiveCampaign />
      </div>

      {/* AI Suggestion  */}
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 my-8 md:my-16">
        <div className="lg:col-span-2">
          <AiSuggestion />
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden p-5 mt-5 lg:mt-0 bg-white dark:bg-gray-800 transition-colors duration-300">
          <Sale />
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
