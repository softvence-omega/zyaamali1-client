import React from "react";
import { IconType } from "react-icons";

export type DashboardCardProps = {
  icon: React.ReactElement | IconType;
  iconBgColor?: string;
  iconColor?: string;
  cardTitle?: string;
  stats: string | number;
  description: string;
  textColor?: string;
  borderColor?: string;
};
