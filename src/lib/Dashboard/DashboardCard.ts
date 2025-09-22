// lib/dashboard-cards/users-cards.ts
import { DashboardCardProps } from "@/types/Dashboard/DashboardCardProps";
import BarIcon from "@/assets/CustomIcon/BarIcon";
import EngagementIcon from "@/assets/CustomIcon/EngagementIcon";
import BudgetIcon from "@/assets/CustomIcon/BudgetIcon";
import TargetIcon from "@/assets/CustomIcon/TargetIcon";

export const usersCards: DashboardCardProps[] = [
  {
    icon: TargetIcon,
    iconBgColor: "bg-[#3B82F6]/20",
    iconColor: "text-[#3B82F6]",
    cardTitle: "Active Campaigns",
    stats: "7",
    description: "ROI 212%",
    textColor: "text-[#3B82F6]",
    borderColor: "border-[#3B82F6]",
  },
  {
    icon: BarIcon,
    iconBgColor: "bg-[#A855F7]/20",
    iconColor: "text-[#A855F7]",
    cardTitle: "Impressions & Reach",
    stats: "245k",
    description: "ROI 212%",
    textColor: "text-[#A855F7]",
    borderColor: "border-[#A855F7]",
  },
  {
    icon: EngagementIcon,
    iconBgColor: "bg-[#F59E42]/20",
    iconColor: "text-[#F59E42]",
    cardTitle: "Engagement",
    stats: "4.8%",
    description: "CTR 6.2%",
    textColor: "text-[#F59E42]",
    borderColor: "border-[#F59E42]",
  },
  {
    icon: BudgetIcon,
    iconBgColor: "bg-[#10B981]/20",
    iconColor: "text-[#10B981]",
    cardTitle: "Budget & Spend",
    stats: "4.8%",
    description: "Daily Spend:$55",
    textColor: "text-[#10B981]",
    borderColor: "border-[#10B981]",
  },
];
