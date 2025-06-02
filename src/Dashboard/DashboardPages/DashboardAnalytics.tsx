import React from "react";
import img from "../../assets/giminy.png"
import light from "../../assets/light.png";
import frame from "../../assets/Frame-1.png"
import frame1 from "../../assets/Frame-2.png"
import frame2 from "../../assets/Frame-3.png"
import face from "../../assets/face.png"
import instra from "../../assets/instra.png"
import google from "../../assets/google.png"
import tiktok from "../../assets/tiktok.png"
import facebook from "../../assets/f1.png"
import instragram from "../../assets/in1.png"
import google1 from "../../assets/g1.png"
import linkdine from "../../assets/li1.png"




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


import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,

} from 'recharts';

const data = [
  { date: 'April 1', spend: 400, click: 1600 },
  { date: 'April 5', spend: 480, click: 1700 },
  { date: 'April 10', spend: 500, click: 1800 },
  { date: 'April 15', spend: 550, click: 1900 },
  { date: 'April 20', spend: 600, click: 2100 },
  { date: 'April 25', spend: 680, click: 2300 },
  { date: 'April 30', spend: 700, click: 2600 },
];


type Platform = {
  name: string;
  campaigns: string;
  impression: string;
  clicks: string;
  spend: string;
  roas: string;
  roasColor: string;
  icon: string;
};

const platforms: Platform[] = [
  {
    name: "Facebook",
    campaigns: "3 Active Campaigns",
    impression: "452k",
    clicks: "452k",
    spend: "$3,456",
    roas: "4.2x",
    roasColor: "text-green-500",
    icon: facebook,
  },
  {
    name: "Instagram",
    campaigns: "5 Active Campaigns",
    impression: "500k",
    clicks: "300k",
    spend: "$2,789",
    roas: "3.8x",
    roasColor: "text-green-500",
    icon: instragram
  },
  {
    name: "Google",
    campaigns: "2 Active Campaigns",
    impression: "200k",
    clicks: "150k",
    spend: "$1,200",
    roas: "2.5x",
    roasColor: "text-green-500",
    icon: google1,
  },
  {
    name: "LinkedIn",
    campaigns: "4 Active Campaigns",
    impression: "300k",
    clicks: "180k",
    spend: "$4,000",
    roas: "5.0x",
    roasColor: "text-green-500",
    icon: linkdine,
  },
  {
    name: "Instagram",
    campaigns: "5 Active Campaigns",
    impression: "500k",
    clicks: "300k",
    spend: "$2,789",
    roas: "3.8x",
    roasColor: "text-green-500",
    icon: instragram,
  },

];



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
  platform: string;
  status: string;
  budget: number;
  impressions: number;
  clicks: number;
  conversions: number;
  roas: number;
  name: string;
}

const campaignData: Campaign[] = [
  {
    campaignName: "Summer Blast",
    name: "Facebook",
    platform: face,
    status: "Active",
    budget: 1000,
    impressions: 25000,
    clicks: 1500,
    conversions: 120,
    roas: 3.5
  },
  {
    campaignName: "Winter Sale",
    name: "Google Ads",
    platform: google,
    status: "Inactive",
    budget: 2000,
    impressions: 40000,
    clicks: 3000,
    conversions: 250,
    roas: 4.2
  },
  {
    campaignName: "Spring Launch",
    name: "Instragram",
    platform: instra,
    status: "Active",
    budget: 1500,
    impressions: 30000,
    clicks: 2200,
    conversions: 180,
    roas: 3.0
  },
  {
    campaignName: "Black Friday",
    name: "Tiktok",
    platform: tiktok,
    status: "Active",
    budget: 5000,
    impressions: 100000,
    clicks: 8000,
    conversions: 700,
    roas: 5.1
  },
  {
    campaignName: "New Year Boost",
    name: "Facebook",
    platform: face,
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
      {/* title */}

      <h2 className=" text-4xl font-bold">Report & <span className="bg-gradient-to-r from-[#000000] via-[#4F3FBF] to-[#8E6EFF] bg-clip-text text-transparent   text-4xl font-bold ">Analytics</span></h2>

      <p className="text-T-400 mt-3 ">Monitor & Analyse your marketing performence </p>




      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-6">
        {statItems.map(({ title, icon, amount, percentage }, index) => {
          const numericValue = parseFloat(percentage.replace(/[+ - %]/g, ""));
          const isTrulyPositive = percentage.startsWith("+") && numericValue >= 1;

          const TrendIcon = isTrulyPositive ? ArrowUp : ArrowDown;
          const colorClass = isTrulyPositive ? "text-green-400" : "text-red-400";

          return (
            <div key={index} className="bg-T-200 rounded-xl p-5">
              <div className="flex justify-between items-center mb-2">
                <h4 className="capitalize  text-T-400">{title}</h4>
                <div className="text-blue-400">{icon}</div>
              </div>
              <h1 className="text-2xl bg-[linear-gradient(to_right,_#000000_10%,_#4F3FBF_20%,_#8E6EFF_80%)] bg-clip-text text-transparent mb-2">{amount}</h1>
              <div className={`flex items-center gap-1 text-sm font-semibold ${colorClass}`}>
                <TrendIcon size={14} />
                <span>{percentage}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filtering */}

      <div className="  flex flex-col md:flex-row gap-5 mt-5">
        <div className="flex-1 min-w-[200px] text-T-400 ">
          <h1 className="text-T-500">Business</h1>
          <Select >
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

        <div className="flex-1 min-w-[200px] text-T-400">
          <h1 className="text-T-500">Platform</h1>
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

        <div className="flex-1 min-w-[200px] text-T-400">
          <h1 className="text-T-500">Champign</h1>
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

        <div className="flex-1 min-w-[200px] text-T-400">
          <h1 className="text-T-500">Date Range</h1>
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



      <div className="flex flex-col md:flex-row justify-between mt-10 gap-5">
        <div className="w-1/2">

        {/* rechart */}
          <div>
            <div className="w-full mb-5  bg-T-200 rounded-xl shadow-sm  ">
              <div className="flex justify-between items-center mb-2 p-4">
                <h2 className="text-xl text-black">Spend & Clicks</h2>
                <div className="flex items-center space-x-3 text-xs">
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-red-300" />
                    <span className="text-T-400 text-sm">Spend</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-purple-300" />
                    <span className="text-T-400 text-sm">Click</span>
                  </div>
                </div>
              </div>

              <ResponsiveContainer className="" width="100%" height={250}>
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#fca5a5" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#fca5a5" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorClick" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#c4b5fd" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#c4b5fd" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date" fontSize={12} />
                  <YAxis yAxisId="left" domain={[400, 750]} fontSize={12} />
                  <YAxis yAxisId="right" orientation="right" domain={[1600, 2700]} fontSize={12} />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <Tooltip />
                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="spend"
                    stroke="#f87171"
                    fill="url(#colorSpend)"
                    name="Spend"
                  />
                  <Area
                    yAxisId="right"
                    type="monotone"
                    dataKey="click"
                    stroke="#a78bfa"
                    fill="url(#colorClick)"
                    name="Click"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Conversion Funnel */}
          <div className="bg-T-200 rounded-md pb-2">
            <h1 className="mx-3 pt-3 mb-5 text-xl text-black">Conversion Funnel</h1>
            <div className=" flex bg-blue-50 items-center justify-between mx-4 px-4 py-3 rounded-md mb-4">
              <div className="flex items-center gap-3">
                <img className="h-8 w-8" src={frame} alt="" />
                <div>
                  <h1 className="text-xl">Impressions</h1>
                  <p className="text-sm">Total views on your ads</p>
                </div>
              </div>
              <h1> $3,456</h1>
            </div>
            <div className=" flex bg-green-100 items-center justify-between mx-4 px-4 py-3 rounded-md mb-4">
              <div className="flex items-center gap-3">
                <img className="h-8 w-8" src={frame1} alt="" />
                <div>
                  <h1 className="text-xl">Clicks</h1>
                  <p className="text-sm">User who clicked ads</p>
                </div>
              </div>
              <h1> $3,456</h1>
            </div>
            <div className=" flex bg-blue-100 items-center justify-between mx-4 px-4 py-3 rounded-md mb-4 ">
              <div className="flex items-center gap-3">
                <img className="h-8 w-8" src={frame2} alt="" />
                <div>
                  <h1 className="text-xl">Conversions</h1>
                  <p className="text-sm">Completed desired actions</p>
                </div>
              </div>
              <h1> $3,456</h1>
            </div>

          </div>

        </div>

        {/* Platform Breakdown */}
        <div className="w-full md:w-1/2 bg-T-300 rounded-md">
          <div className="rounded-xl shadow-sm mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center p-3">
              <h2 className="text-xl text-black ">Platform Breakdown</h2>
              <a href="#" className="text-sm text-violet-600 font-medium">View All</a>
            </div>


            <div className="px-2 rounded-xl space-y-4">
              {platforms.map((p, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm">

                  <div className="flex justify-between items-center p-2">

                    <div className="flex items-center space-x-3">
                      <div className="h-5 w-5"><img src={p.icon} alt="" /></div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{p.name}</h3>
                        <p className="text-sm text-gray-500">{p.campaigns}</p>
                      </div>
                    </div>


                    <div className="text-right">
                      <p className="text-sm text-gray-500">Spend</p>
                      <p className="">{p.spend}</p>
                    </div>
                  </div>


                  <div className="flex justify-between md:px-10 pb-2 text-sm text-gray-500">
                    <div>
                      <p>Impression</p>
                      <p className="text-gray-700">{p.impression}</p>
                    </div>
                    <div>
                      <p>Clicks</p>
                      <p className="text-gray-700">{p.clicks}</p>
                    </div>
                    <div>
                      <p>ROAS</p>
                      <p className={`font-semibold ${p.roasColor}`}>{p.roas}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* table  Campaign Performance */}
      <div className="mt-5 bg-T-200 pb-5 rounded-md">
        <div className="flex justify-between my-5 mx-5 pt-4">
          <h1 className="text-xl text-black ">Campaign Performance</h1>
          <h3 className="text-primary text-sm">View All </h3>
        </div>

        <div className="bg-white mx-5 rounded-md ">
          <Table>

            <TableHeader>
              <TableRow className="text-T-400 text-sm">
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

                return (
                  <TableRow key={index} className="text-[18px] ">
                    <TableCell >{campaign.campaignName}</TableCell>
                    <TableCell>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div><img src={campaign.platform} alt="" /></div>
                        <h1>{campaign.name}</h1>
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
                    <TableCell className="text-green-300">{campaign.roas}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Ai Insights */}
      
      <div className="mt-5 pb-3 bg-T-200 rounded-md">
        <div className="flex items-center justify-between my-5 mx-5 pt-2">
          <div className="flex gap-2 items-center">
            <img src={img} alt="giminy" />
            <h1 className="text-xl ">Ai Insights</h1>

          </div>
          <h3 className="text-primary text-sm">View All </h3>
        </div>

        <div className=" ">
          {items.map((item, index) => (
            <div key={index} className="flex  gap-4 rounded-md my-5 p-3 mx-5 bg-blue-300 ">
              <div>
                <img src={item.icon} alt={item.title} className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-[20px] text-white">{item.title}</h1>
                <p className="text-white text-[14px] text-sm w-2/3">{item.description}</p>
              </div>
            </div>
          ))}
        </div>


      </div>


    </div>
  );
};

export default DashboardAnalytics;
