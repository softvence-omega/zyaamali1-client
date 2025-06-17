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

import FacebookLogo from "@/assets/SocialIcon/facebook.svg";
import GoogleAdsLogo from "@/assets/SocialIcon/google.svg";
import InstagramLogo from "@/assets/SocialIcon/instagram.svg";
import LinkedinLogo from "@/assets/SocialIcon/linkedin.svg";
import TikTokLogo from "@/assets/SocialIcon/tiktok.svg";

const CampaignPerformanceTable = () => {
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
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [campaignToDelete, setCampaignToDelete] = useState<number | null>(null);

  const handleDeleteClick = (id: number) => {
    setCampaignToDelete(id);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (campaignToDelete) {
      setCampaigns(
        campaigns.filter((campaign) => campaign.id !== campaignToDelete)
      );
      setDeleteModalOpen(false);
      setCampaignToDelete(null);
    }
  };

  const cancelDelete = () => {
    setDeleteModalOpen(false);
    setCampaignToDelete(null);
  };

  return (
    <div className="border border-Foundation-text-T-75/30 rounded-lg p-4 bg-white">
      {deleteModalOpen && (
        <>
          <div className="fixed inset-0 bg-black/60 z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
              <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
              <p className="mb-6">
                Are you sure you want to delete this campaign? This action
                cannot be undone.
              </p>
              <div className="flex justify-end space-x-3">
                <Button
                  variant="outline"
                  onClick={cancelDelete}
                  className="px-4 py-2"
                >
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={confirmDelete}
                  className="px-4 py-2 bg-red-500 hover:bg-red-700"
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Campaign Performance</h2>
        <div className="space-x-2">
          <Button variant="outline" onClick={() => setCampaigns(initialData)}>
            Reset
          </Button>
        </div>
      </div>

      {/* Desktop Table (lg and above) */}
      <div className="hidden lg:block w-full overflow-x-auto">
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
                    onClick={() => handleDeleteClick(campaign.id)}
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile/Tablet View (lg below) */}
      <div className="lg:hidden space-y-4">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{campaign.campaignName}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Budget: {campaign.budget}
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-500 text-sm underline">
                  Details
                </button>
                <button
                  className="text-red-500 text-sm underline"
                  onClick={() => handleDeleteClick(campaign.id)}
                >
                  Delete
                </button>
              </div>
            </div>

            {/* Additional info that can be shown on medium devices */}
            <div className="md:flex md:justify-between md:items-center mt-3 space-y-2 md:space-y-0">
              <div className="flex items-center gap-2">
                <img
                  src={platformLogos[campaign.platform]}
                  alt={campaign.platform}
                  className="w-4 h-4 object-contain"
                />
                <span className="text-sm">{campaign.platform}</span>
              </div>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignPerformanceTable;
