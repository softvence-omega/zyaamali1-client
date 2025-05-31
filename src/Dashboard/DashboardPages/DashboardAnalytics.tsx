import React from "react";
import HeaderSection from "@/components/Reuseable/headerSection";
import img from "../../assets/giminy.png"
import light from "../../assets/light.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  DollarSign,
  BarChart,
  MousePointer,
  TrendingUp,
  CheckCircle,
  ArrowUpRight,
  ArrowUp,
  ArrowDown,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";


// Type for stat items
export type StatItem = {
  title: string;
  icon: React.ReactNode;
  amount: string;
  percentage: string;
};

const statItems: StatItem[] = [
  {
    title: "Total Spend",
    icon: <DollarSign />,
    amount: "$5,000",
    percentage: "+10%",
  },
  {
    title: "Impressions",
    icon: <BarChart />,
    amount: "1,200,000",
    percentage: "+15%",
  },
  {
    title: "Clicks",
    icon: <MousePointer />,
    amount: "50,000",
    percentage: "+20%",
  },
  {
    title: "CTR",
    icon: <TrendingUp />,
    amount: "4.2%",
    percentage: "+5%",
  },
  {
    title: "Conversions",
    icon: <CheckCircle />,
    amount: "1,200",
    percentage: "+0.8%",
  },
  {
    title: "ROAS",
    icon: <ArrowUpRight />,
    amount: "4.5x",
    percentage: "+12%",
  },
];

const platformIcons = {
  Facebook: Facebook,
  Instagram: Instagram,
  YouTube: Youtube,
  LinkedIn: Linkedin,
  Google: FcGoogle,
};
interface Campaign {
  campaignName: string;
  platform: "Facebook" | "Instagram" | "YouTube" | "LinkedIn" | "Google";
  status: string;
  budget: number;
  impressions: number;
  clicks: number;
  conversions: number;
  roas: number;
}

const campaignData: Campaign[] = [
  {
    campaignName: "Summer Blast",
    platform: "Facebook",
    status: "Active",
    budget: 1000,
    impressions: 25000,
    clicks: 1500,
    conversions: 120,
    roas: 3.5
  },
  {
    campaignName: "Winter Sale",
    platform: "Google",
    status: "Inactive",
    budget: 2000,
    impressions: 40000,
    clicks: 3000,
    conversions: 250,
    roas: 4.2
  },
  {
    campaignName: "Spring Launch",
    platform: "Instagram",
    status: "Active",
    budget: 1500,
    impressions: 30000,
    clicks: 2200,
    conversions: 180,
    roas: 3.0
  },
  {
    campaignName: "Black Friday",
    platform: "YouTube",
    status: "Active",
    budget: 5000,
    impressions: 100000,
    clicks: 8000,
    conversions: 700,
    roas: 5.1
  },
  {
    campaignName: "New Year Boost",
    platform: "LinkedIn",
    status: "Active",
    budget: 1200,
    impressions: 18000,
    clicks: 900,
    conversions: 80,
    roas: 2.8
  }
];

const items = [
  {
    icon: light,
    title: "Optimize Your Google Ads Campaign",
    description: "Lorem ipsum dolor sit amet consectetur. Senectus augue rhoncus molestie egestas dignissim blandit posuere. Etiam tortor semper dignissim faucibus. Metus amet viverra diam lorem velit. Sed id ultricies aliquam vitae dui mauris mi integer."
  },
  {
    icon: light,
    title: "Maximize Your Social Media Engagement",
    description: "Engaging with your audience on social media is crucial for brand loyalty. Create compelling content that resonates with your followers. Utilize insights and analytics to tailor your strategy and foster a vibrant online community."
  },
  {
    icon: light,
    title: "Enhance Your Email Marketing Strategy",
    description: "Email marketing remains one of the most effective channels for reaching customers. Personalization and segmentation can dramatically improve open rates. Consider A/B testing subject lines and content formats to optimize performance."
  },
  {
    icon: light,
    title: "Leverage Influencer Partnerships",
    description: "Influencer marketing can amplify your brand's visibility. Collaborate with influencers who align with your values and audience. Authentic partnerships can lead to increased trust and greater conversion rates."
  }
];




const DashboardAnalytics = () => {
  return (
    <div className=" ">
      <HeaderSection
        title="Report & Analytics"
        subtitle="Monitor & Analyse your marketing performance"
      />

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-8">
        {statItems.map(({ title, icon, amount, percentage }, index) => {
          const numericValue = parseFloat(percentage.replace(/[+ - %]/g, ""));
          const isTrulyPositive = percentage.startsWith("+") && numericValue >= 1;

          const TrendIcon = isTrulyPositive ? ArrowUp : ArrowDown;
          const colorClass = isTrulyPositive ? "text-green-600" : "text-red-600";

          return (
            <div key={index} className="bg-[#F3F4F6] rounded-md p-5">
              <div className="flex justify-between items-center mb-2">
                <h4 className="capitalize  text-T-400">{title}</h4>
                <div className="text-blue-400">{icon}</div>
              </div>
              <h1 className="text-xl  mb-2">{amount}</h1>
              <div className={`flex items-center gap-1 text-sm font-semibold ${colorClass}`}>
                <TrendIcon size={16} />
                <span>{percentage}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-5 mt-5">
        <div className="flex-1 min-w-[200px] ">
          <h1>Business</h1>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Business" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Business">All Business</SelectItem>
              <SelectItem value="AI Business">AI Business</SelectItem>
              <SelectItem value="FaceBook Business">FaceBook Business</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <h1>Platform</h1>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All Platforms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Facebook">Facebook</SelectItem>
              <SelectItem value="Instragram">Instragram</SelectItem>
              <SelectItem value="Google">Google</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <h1>Champign</h1>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All Champign" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Holiday special">Holiday special</SelectItem>
              <SelectItem value="Eid Special">Eid Special</SelectItem>
              <SelectItem value="Brand Awareness">Brand Awareness</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <h1>Date Range</h1>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Last 30 days" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="LastWeek">Last Week</SelectItem>
              <SelectItem value="LastMonth">Last Month</SelectItem>
              <SelectItem value="LastYear">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>


      <div className="mt-5 bg-[#F3F4F6] pb-5 rounded-md">
        <div className="flex justify-between my-5 mx-5 pt-4">
          <h1 className="text-xl ">Campaign Performance</h1>
          <h3>View All </h3>
        </div>

        <div className="bg-white mx-5 rounded-md ">
          <Table>

            <TableHeader>
              <TableRow>
                <TableHead>Campaign Name</TableHead>
                <TableHead>Platform</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Impressions</TableHead>
                <TableHead>Clicks</TableHead>
                <TableHead>Conversions</TableHead>
                <TableHead>ROAS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {campaignData.map((campaign, index) => {
                const Icon = platformIcons[campaign.platform];
                return (
                  <TableRow key={index} className="">
                    <TableCell>{campaign.campaignName}</TableCell>
                    <TableCell>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        {Icon && <Icon size={16} />}
                        {campaign.platform}
                      </span>
                    </TableCell>

                    <TableCell>
                      <button
                        className={`px-3 py-1 rounded-full text-sm ${campaign.status === "Active"
                          ? "bg-[#10B98133] text-[#10B981]"
                          : "bg-[#F59E4233] text-[#F59E42]"
                          }`}
                      >
                        {campaign.status}
                      </button>
                    </TableCell>



                    <TableCell>${campaign.budget}</TableCell>
                    <TableCell>{campaign.impressions}</TableCell>
                    <TableCell>{campaign.clicks}</TableCell>
                    <TableCell>{campaign.conversions}</TableCell>
                    <TableCell>{campaign.roas}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="mt-5 pb-3 bg-[#F3F4F6] rounded-md">
        <div className="flex items-center justify-between my-5 mx-5 pt-2">
          <div className="flex gap-2 items-center">
            <img src={img} alt="giminy" />
            <h1 className="text-xl ">Ai Insights</h1>

          </div>
          <h3>View All </h3>
        </div>

      <div className=" ">
          {items.map((item, index) => (
          <div key={index} className="flex  gap-4 rounded-md my-5 p-3 mx-5 bg-[#B39EFF] ">
            <div>
              <img src={item.icon} alt={item.title} className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-semibold">{item.title}</h1>
              <p className="text-gray-600 text-sm w-2/3">{item.description}</p>
            </div>
          </div>
        ))}
      </div>


      </div>


    </div>
  );
};

export default DashboardAnalytics;
