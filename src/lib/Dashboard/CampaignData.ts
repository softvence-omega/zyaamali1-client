import { CampaignData } from "@/types/Dashboard/CampaignData";

// Mock data - in a real app, this would likely come from an API
export const campaignData: CampaignData[] = [
  {
    platform: "Google Ads",
    impressions: "23.6k",
    ctr: "3.2",
    budget: "$1200",
    conversions: "323",
  },
  {
    platform: "Facebook Ads",
    impressions: "18.2k",
    ctr: "2.8",
    budget: "$950",
    conversions: "245",
  },
  {
    platform: "LinkedIn Ads",
    impressions: "12.1k",
    ctr: "1.9",
    budget: "$750",
    conversions: "187",
  },
  {
    platform: "Twitter Ads",
    impressions: "8.5k",
    ctr: "1.5",
    budget: "$500",
    conversions: "132",
  },
];
