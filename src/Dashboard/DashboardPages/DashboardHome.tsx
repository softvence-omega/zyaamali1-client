import { FaWandMagicSparkles } from "react-icons/fa6";
import OutlineButton from "@/components/ui/OutlineButton";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { FaPlus } from "react-icons/fa6";
import DashboardCard from "@/components/Reuseable/DashboardCard";
import { usersCards } from "@/lib/Dashboard/DashboardCard";

function DashboardHome() {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-5xl mb-5 bg-gradient-to-r from-[#000000] to-[#8E6EFF] bg-clip-text text-transparent">
            Welcome Ramsey
          </h1>
          <p className="text-gray-text">
            Manage your campaign and accelerate your marketing with ai tools
          </p>
        </div>
        <div className="flex gap-4 items-end">
          <PrimaryButton icon={<FaPlus />}>Create New Campaign</PrimaryButton>
          <OutlineButton icon={<FaWandMagicSparkles />}>
            Generate Marketing Content
          </OutlineButton>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
        {usersCards.map((card, idx) => (
          <DashboardCard key={idx} {...card} />
        ))}
      </div>
    </div>
  );
}

export default DashboardHome;
