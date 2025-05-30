"use client";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import {
  FiTrendingUp,
  FiSmartphone,
  FiTablet,
  FiMonitor,
  FiBarChart2,
  FiDollarSign,
  FiArrowUpRight,
} from "react-icons/fi";
import React from "react";
import userpic from "../../assets/userpic.png";
import { FaFacebook } from "react-icons/fa";
import group from "../../assets/Group.png";
import group1 from "../../assets/Vector.png";

interface DataPoint {
  month: string;
  value: number;
}

interface AgeData {
  age: string;
  value: number;
}

interface GenderData {
  name: string;
  value: number;
  color: string;
}

const DashboardCampaignPerformance: React.FC = () => {
  const performanceData: DataPoint[] = [
    { month: "Apr 1", value: 45 },
    { month: "Apr 15", value: 52 },
    { month: "May 1", value: 48 },
    { month: "May 15", value: 65 },
    { month: "Jun 1", value: 58 },
    { month: "Jun 15", value: 72 },
    { month: "Jul 1", value: 68 },
    { month: "Jul 15", value: 75 },
    { month: "Aug 1", value: 70 },
  ];

  const ageData: AgeData[] = [
    { age: "18-24", value: 15 },
    { age: "25-34", value: 85 },
    { age: "35-44", value: 75 },
    { age: "45-54", value: 65 },
    { age: "55+", value: 45 },
  ];

  const genderData: GenderData[] = [
    { name: "Male", value: 45, color: "#8B5CF6" },
    { name: "Female", value: 35, color: "#EC4899" },
    { name: "Other", value: 20, color: "#10B981" },
  ];

  const cards = [
    { title: "REACH", value: "1.2M", change: "+1.8%" },
    { title: "IMPRESSIONS", value: "48,271", change: "+15.8%" },
    { title: "CTR", value: "4.02%", change: "+0.8%" },
    { title: "CPC", value: "$4.5", change: "+1.4%" },
    { title: "CONVERSION RATE", value: "8.00%", change: "+1.8%" },
    { title: "ROAS", value: "0.74", change: "+4.3%" },
    { title: "FREQUENCY", value: "9.25", change: "+12.8%" },
    { title: "CPM", value: "4.02x", change: "+0.8%" },
  ];

  const getIcon = (title: string) => {
    switch (title) {
      case "REACH":
      case "IMPRESSIONS":
        return <FiBarChart2 className="w-5 h-5 text-blue-500" />;
      case "CTR":
      case "CONVERSION RATE":
        return <FiTrendingUp className="w-5 h-5 text-green-500" />;
      case "CPC":
      case "ROAS":
      case "CPM":
        return <FiDollarSign className="w-5 h-5 text-purple-500" />;
      case "FREQUENCY":
        return <FiArrowUpRight className="w-5 h-5 text-red-500" />;
      default:
        return <FiBarChart2 className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen  ">
      <div className="  w-full">
        {/* Header */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-1">
            Ad Campaign: Campaign Details
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Ad Performance
          </h1>
        </div>

        {/* Campaign Card */}
        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 items-start gap-6">
            <img
              src={userpic}
              alt="Campaign"
              className="w-full max-w-[280px] object-contain rounded-md mx-auto sm:mx-0"
            />
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Summer Collection Launch
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm sm:text-base">
                <div className="flex flex-col gap-4">
                  <div>
                    <h1 className="text-gray-500 uppercase tracking-wide font-semibold">
                      Campaign
                    </h1>
                    <p className="text-gray-900">Summer Sale 2025</p>
                  </div>
                  <div>
                    <h1 className="text-gray-500 uppercase tracking-wide font-semibold">
                      Ad Type
                    </h1>
                    <p className="text-gray-900">Carousel</p>
                  </div>
                  <div>
                    <h1 className="text-gray-500 uppercase tracking-wide font-semibold">
                      Start Date
                    </h1>
                    <p className="text-gray-900">22/05/2025</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <h1 className="text-gray-500 uppercase tracking-wide font-semibold">
                      Platform
                    </h1>
                    <p className="text-gray-900 flex items-center gap-2">
                      <FaFacebook className="text-blue-600" /> Facebook
                    </p>
                  </div>
                  <div>
                    <h1 className="text-gray-500 uppercase tracking-wide font-semibold">
                      Budget
                    </h1>
                    <p className="text-gray-900">1000$+</p>
                  </div>
                  <div>
                    <h1 className="text-gray-500 uppercase tracking-wide font-semibold">
                      End Date
                    </h1>
                    <p className="text-gray-900">22/05/2025</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-6 flex-wrap">
                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition duration-200">
                  📊 Edit
                </button>
                <button className="bg-gray-100 text-gray-700 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition duration-200">
                  📤 Pause
                </button>
              </div>
            </div>
            <div className="flex flex-col items-end justify-start">
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                ● Active
              </span>
            </div>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-6">
          {cards.map(({ title, value, change }) => (
            <div
              key={title}
              className="bg-white rounded-lg p-5 shadow-md border border-gray-200 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-sm font-medium text-gray-700">{title}</h1>
                {getIcon(title)}
              </div>
              <p className="text-3xl font-extrabold text-gray-900">{value}</p>
              <p
                className={`text-sm font-semibold ${
                  change.startsWith("+") ? "text-green-600" : "text-red-600"
                }`}
              >
                {change}
              </p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2 bg-white rounded-lg p-6 shadow-md border border-gray-200 flex flex-col">
            <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
              <h3 className="text-lg font-semibold text-gray-900">
                Ad Performance
              </h3>
              <div className="flex gap-2 flex-wrap">
                <button className="bg-purple-100 text-purple-700 px-4 py-1 rounded-lg text-sm font-medium whitespace-nowrap">
                  Impressions
                </button>
                <button className="text-gray-500 px-4 py-1 rounded-lg text-sm whitespace-nowrap">
                  Clicks
                </button>
                <button className="text-gray-500 px-4 py-1 rounded-lg text-sm whitespace-nowrap">
                  Conversions
                </button>
              </div>
            </div>
            <div className="flex-grow min-h-[250px] sm:min-h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ADB7F9" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#B1B9F800"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6b7280" }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6b7280" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#8B5CF6"
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-5 flex items-center gap-2">
              <img src={group1} alt="AI Insights Icon" className="w-6 h-6" />
              AI Insights
            </h3>
            <div className="space-y-6 flex-grow overflow-auto">
              <div className="p-4 bg-[#10B9811A] rounded-md">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Improve Ad Copy Clarity
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  Simplify the headline to focus on your main value proposition.
                </p>
                <p className="text-sm text-gray-600">
                  • Add a clear call-to-action (CTA) like "Shop Now" or "Learn
                  More"
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-md">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Enhance Visual Appeal
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  • Consider using brighter or higher-contrast images to make
                  them more effective
                </p>
                <p className="text-sm text-gray-600">
                  • Try adding your brand logo to boost recall
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <button className="bg-gradient-to-r from-[#654FAE] via-[#A891FB] to-[#654FAE] text-white px-6 py-3 rounded-2xl font-semibold hover:opacity-90 transition duration-300 flex items-center gap-2">
                Get All Optimize Suggestions{" "}
                <img src={group} alt="Group icon" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Audience Breakdown */}
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Audience Breakdown
            </h3>
            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-4">
                Age Distribution
              </h4>
              <div className="h-56 sm:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ageData}>
                    <XAxis
                      dataKey="age"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#6b7280" }}
                    />
                    <Bar dataKey="value" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-4">
                Gender Distribution
              </h4>
              <div className="h-40 sm:h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={genderData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={60}
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                      labelLine={false}
                    >
                      {genderData.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {/* Device Breakdown */}
            <div className="  p-6  flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Device Breakdown
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center gap-2 w-auto p-4 bg-blue-50 rounded-2xl">
                  <FiSmartphone className="w-10 h-10 text-T-800" />
                  <p className="text-gray-700 font-semibold">Mobile</p>
                  <p className="text-gray-500 text-sm">60%</p>
                </div>
                <div className="flex flex-col items-center gap-2 w-auto p-4 bg-blue-50 rounded-2xl">
                  <FiTablet className="w-10 h-10 text-T-800" />
                  <p className="text-gray-700 font-semibold">Tablet</p>
                  <p className="text-gray-500 text-sm">25%</p>
                </div>
                <div className="flex flex-col items-center gap-2 w-auto p-4 bg-blue-50 rounded-2xl">
                  <FiMonitor className="w-10 h-10 text-T-800" />
                  <p className="text-gray-700 font-semibold">Desktop</p>
                  <p className="text-gray-500 text-sm">15%</p>
                </div>
              </div>
            </div>
            {/* Notes */}
            <div className=" p-6 ">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Notes</h3>
                <button className="text-purple-600 text-sm font-medium">
                  Add Note +
                </button>
              </div>
              <div className="space-y-3 text-sm">
                {[
                  [
                    "Increased budget on May 25+ due to strong performance",
                    "Aug 15, 2024",
                  ],
                  [
                    "Added New Creative image for the weekend promotion",
                    "Aug 12, 2024",
                  ],
                  [
                    "Launched new social media campaign to drive traffic",
                    "Aug 10, 2024",
                  ],
                  [
                    "Updated website layout for better user experience",
                    "Aug 8, 2024",
                  ],
                  [
                    "Implemented feedback system for customer reviews",
                    "Aug 5, 2024",
                  ],
                ].map(([note, date], i) => {
                  const borderColors = [
                    "border-purple-500",
                    "border-blue-500",
                    "border-green-500",
                    "border-pink-500",
                    "border-yellow-500",
                  ];
                  const borderColor = borderColors[i % borderColors.length];

                  return (
                    <div key={i} className={`border-l-4 ${borderColor} pl-3 mb-5`}>
                      <p className="text-gray-700">{note}</p>
                      <p className="text-gray-500 text-xs">{date}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCampaignPerformance;
