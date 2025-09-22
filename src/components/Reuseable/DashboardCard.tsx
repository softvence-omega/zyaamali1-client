import { DashboardCardProps } from "@/types/Dashboard/DashboardCardProps";
import React from "react";

const DashboardCard: React.FC<DashboardCardProps> = ({
  icon,
  iconBgColor = "bg-gray-100",
  iconColor,
  cardTitle,
  stats,
  description,
  textColor = "text-gray-700",
  borderColor = "border-gray-300",
}) => {
  return (
    <div className="bg-white flex flex-col gap-5  p-2 md:p-10  rounded-2xl shadow-2xl">
      <div className="flex items-center justify-center gap-4">
        <div className={`p-2 rounded-full text-xl ${iconBgColor} ${iconColor}`}>
          {React.isValidElement(icon)
            ? icon
            : icon && React.createElement(icon)}
        </div>
        <div>
          {cardTitle && <h3 className="text-2xl text-gray-800">{cardTitle}</h3>}
        </div>
      </div>

      <div className="text-5xl text-center bg-gradient-to-b from-[#3B82F6] to-[#000000] bg-clip-text text-transparent">
        {stats}
      </div>

      <div
        className={`text-sm border w-[40%] mx-auto text-center rounded-4xl ${textColor} ${borderColor}`}
      >
        {description}
      </div>
    </div>
  );
};

export default DashboardCard;
