import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Import logos (you'll need to add these to your project)
import FacebookLogo from "@/assets/SocialIcon/facebook.svg";
import GoogleAdsLogo from "@/assets/SocialIcon/google.svg";
import InstagramLogo from "@/assets/SocialIcon/instagram.svg";
import LinkedinLogo from "@/assets/SocialIcon/linkedin.svg";
import TikTokLogo from "@/assets/SocialIcon/tiktok.svg";

const CampaignPerformanceTable = () => {
  // Platform logo mapping
  const platformLogos: Record<string, string> = {
    Facebook: FacebookLogo,
    "Google Ads": GoogleAdsLogo,
    Instagram: InstagramLogo,
    Linkedin: LinkedinLogo,
    TikTok: TikTokLogo,
  };

  const initialData = [
    {
      id: 1,
      campaignName: "Summer Collection Launch",
      platform: "Facebook",
      status: "Active",
      budget: "$2500",
      impressions: "4,56,464",
      clicks: "4565",
      conversions: "234",
      roas: "4.5x",
    },
    {
      id: 2,
      campaignName: "Holiday Special",
      platform: "Google Ads",
      status: "Inactive",
      budget: "$4830",
      impressions: "56,464",
      clicks: "4565",
      conversions: "354",
      roas: "3.4x",
    },
    {
      id: 3,
      campaignName: "Back to School",
      platform: "Instagram",
      status: "Active",
      budget: "$3200",
      impressions: "3,21,456",
      clicks: "3210",
      conversions: "189",
      roas: "3.8x",
    },
    {
      id: 4,
      campaignName: "Winter Clearance",
      platform: "Facebook",
      status: "Pending",
      budget: "$4100",
      impressions: "2,89,123",
      clicks: "3892",
      conversions: "276",
      roas: "4.2x",
    },
    {
      id: 5,
      campaignName: "New Year Sale",
      platform: "Google Ads",
      status: "Active",
      budget: "$5500",
      impressions: "5,67,890",
      clicks: "5123",
      conversions: "421",
      roas: "5.1x",
    },
    {
      id: 6,
      campaignName: "Valentine's Day",
      platform: "Linkedin",
      status: "Draft",
      budget: "$1800",
      impressions: "1,23,456",
      clicks: "2345",
      conversions: "156",
      roas: "2.9x",
    },
    {
      id: 7,
      campaignName: "Spring Refresh",
      platform: "TikTok",
      status: "Active",
      budget: "$3700",
      impressions: "4,12,345",
      clicks: "4123",
      conversions: "298",
      roas: "4.7x",
    },
    {
      id: 8,
      campaignName: "Black Friday",
      platform: "Facebook",
      status: "Completed",
      budget: "$8500",
      impressions: "8,76,543",
      clicks: "8765",
      conversions: "654",
      roas: "6.2x",
    },
  ];

  const [campaigns, setCampaigns] = useState(initialData);

  const handleDeleteCampaign = (id: number) => {
    setCampaigns(campaigns.filter((campaign) => campaign.id !== id));
  };

  return (
    <div className="border border-Foundation-text-T-75/30 rounded-lg p-4 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Campaign Performance</h2>
        <div className="space-x-2">
          <Button variant="outline" onClick={() => setCampaigns(initialData)}>
            Reset
          </Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px]">Campaign Name</TableHead>
            <TableHead>Platform</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Budget</TableHead>
            <TableHead>Impressions</TableHead>
            <TableHead>Clicks</TableHead>
            <TableHead>Conversions</TableHead>
            <TableHead>ROAS</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaigns.map((campaign) => (
            <TableRow key={campaign.id}>
              <TableCell className="font-medium">
                {campaign.campaignName}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <img
                    src={platformLogos[campaign.platform]}
                    alt={campaign.platform}
                    className="w-5 h-5 object-contain"
                  />
                  <span>{campaign.platform}</span>
                </div>
              </TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    campaign.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : campaign.status === "Inactive"
                      ? "bg-red-100 text-red-800"
                      : campaign.status === "Draft"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {campaign.status}
                </span>
              </TableCell>
              <TableCell>{campaign.budget}</TableCell>
              <TableCell>{campaign.impressions}</TableCell>
              <TableCell>{campaign.clicks}</TableCell>
              <TableCell>{campaign.conversions}</TableCell>
              <TableCell>{campaign.roas}</TableCell>
              <TableCell className="flex space-x-2">
                <button className="text-blue-500 underline">Details</button>
                <button
                  className="text-red-500 underline"
                  onClick={() => handleDeleteCampaign(campaign.id)}
                >
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CampaignPerformanceTable;
