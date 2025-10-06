import { DashboardCardProps } from "@/types/Dashboard/DashboardCardProps";
import React from "react";

const DashboardCard: React.FC<DashboardCardProps> = ({
  icon,
  iconBgColor = "bg-gray-100 dark:bg-gray-700",
  iconColor,
  cardTitle,
  stats,
  description,
  textColor = "text-gray-700 dark:text-gray-300",
  borderColor = "border-gray-300 dark:border-gray-600",
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 flex flex-col gap-5 p-2 md:p-10 rounded-2xl shadow-2xl dark:shadow-gray-900/30 transition-all duration-300 hover:shadow-xl dark:hover:shadow-gray-900/50">
      <div className="flex items-center justify-center gap-4">
        <div className={`p-2 rounded-full text-xl ${iconBgColor} ${iconColor} transition-colors duration-300`}>
          {React.isValidElement(icon)
            ? icon
            : icon && React.createElement(icon)}
        </div>
        <div>
          {cardTitle && (
            <h3 className="text-2xl text-gray-800 dark:text-white transition-colors duration-300">
              {cardTitle}
            </h3>
          )}
        </div>
      </div>

      <div className="text-5xl text-center bg-gradient-to-b from-[#3B82F6] to-[#000000] dark:from-[#60A5FA] dark:to-white bg-clip-text text-transparent transition-all duration-300">
        {stats}
      </div>

      <div
        className={`text-sm border w-[40%] mx-auto text-center rounded-4xl py-1 px-3 ${textColor} ${borderColor} transition-colors duration-300`}
      >
        {description}
      </div>
    </div>
  );
};

export default DashboardCard;