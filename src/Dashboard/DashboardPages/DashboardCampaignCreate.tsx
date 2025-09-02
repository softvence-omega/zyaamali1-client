/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import axios from "axios";

import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaTwitter,
  FaTiktok,
  FaImage,
  FaMousePointer,
  FaImages,
  FaCog,
  FaVideo,
  FaInstagram,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { ImBullhorn } from "react-icons/im";
import { IoMagnetSharp } from "react-icons/io5";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineLeaderboard } from "react-icons/md";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiSpotlight } from "react-icons/si";

import CampaignSubHeader from "@/components/Dashboard/campaign/CampaignSubHeader";
import PrimaryButton from "@/components/ui/PrimaryButton";
import OutlineButton from "@/components/ui/OutlineButton";
import { useNavigate } from "react-router-dom";
import { GiEngagementRing } from "react-icons/gi";
import { PiSlideshowFill } from "react-icons/pi";
import { PiTrafficConeFill } from "react-icons/pi";
import { MdOutlineInstallMobile } from "react-icons/md";
import { ImDisplay } from "react-icons/im";
import { CiSearch } from "react-icons/ci";
import { MdOutlineAppRegistration } from "react-icons/md";
import { MdLocalActivity } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";

import { Telescope } from "lucide-react";
import { MdOutlineDynamicFeed } from "react-icons/md";
import { MdViewModule } from "react-icons/md";
import { TbBrandEdge } from "react-icons/tb";
import { CiText } from "react-icons/ci";

import { GiCometSpark } from "react-icons/gi";

const objectives = [
  {
    icon: ImBullhorn,
    label: "Brand Awareness",
    value: "brand-awareness",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: IoMagnetSharp,
    label: "Lead Generation",
    value: " lead-generation",
    color: "bg-gray-100 text-gray-600",
  },
  {
    icon: BsFillBarChartLineFill,
    label: "Sales",
    value: "sales",
    color: "bg-gray-100 text-gray-600",
  },
  {
    icon: FaPeopleGroup,
    label: "Engagement",
    value: "engagement",
    color: "bg-gray-100 text-gray-600",
  },
];

const platforms = [
  { icon: FaFacebookF, color: "text-blue-600", value: "Meta Ads" },
  { icon: FaGoogle, color: "text-red-500", value: "Google Ads" },
  { icon: FaTiktok, color: "text-black", value: "TikTok Ads" },
  { icon: FaLinkedinIn, color: "text-blue-700", value: "LinkedIn Ads" },
  { icon: FaTwitter, color: "text-black", value: "Twitter Ads" },
];

const facebookAdTypes = [
  { icon: ImBullhorn, label: "Brand Awareness", value: "BRAND_AWARENESS" },
  { icon: FaMousePointer, label: "Reach", value: "REACH" },
  { icon: FaImages, label: "Carousel Ads", value: "carousel-ads" },
  { icon: PiSlideshowFill, label: "Slideshow Ads", value: "slideshow-ads" },
  { icon: GiEngagementRing, label: "Engagement", value: "ENGAGEMENT" },
  { icon: FaCog, label: "Dynamic Ads", value: "dynamic-ads" },
  { icon: FaVideo, label: "Video Ads", value: "VIDEO_VIEWS" },
  { icon: FaInstagram, label: "Story Ads", value: "story-ads" },
  { icon: FaShoppingCart, label: "Shopping Ads", value: "shopping-ads" },
  { icon: RiMessage3Fill, label: "Messages", value: "MESSAGES" },
  { icon: PiTrafficConeFill, label: "Trafic", value: "TRAFFIC" },
  { icon: RiMessage3Fill, label: "Conversions", value: "CONVERSIONS" },
  {
    icon: MdOutlineInstallMobile,
    label: "App Installs",
    value: "APP_INSTALLS",
  },
];
const googleAdsTypes = [
  { icon: ImDisplay, label: "Display Ads", value: "DISPLAY" },
  { icon: CiSearch, label: "Search Ads", value: "SEARCH" },
  { icon: FaVideo, label: "Video Ads", value: "VIDEO" },
  { icon: FaShoppingCart, label: "Shopping Ads", value: "SHOPPING" },
  {
    icon: MdOutlineAppRegistration,
    label: "App Campaigns",
    value: "APP_CAMPAIGNS",
  },
  { icon: Telescope, label: "Performance Max", value: "PERFORMANCE" },
  { icon: MdLocalActivity, label: "Local Ads", value: "LOCAL_ADS" },
];
const TiktokAdsTypes = [
  { icon: MdOutlineDynamicFeed, label: "In-Feed Ads", value: "SINGLE_VIDEO" },
  { icon: MdViewModule, label: "TopView Ads", value: "Topview" },
  {
    icon: ImBullhorn,
    label: "Branded Hashtag Challenges",
    value: "BRANDED_HASHTAG",
  },
  { icon: GiCometSpark, label: "Spark Ads", value: "SPARK_AD" },
  {
    icon: MdOutlineLeaderboard,
    label: "Lead Generation Ads",
    value: "LEAD_GENERATION",
  },
  { icon: TbBrandEdge, label: "Branded Effects", value: "BRANDED_EFFECTS" },
];
const LinkedinAdsTypes = [
  { icon: FaImage, label: "Sponsored Content", value: "SPONSORED" },
  { icon: RiMessage3Fill, label: "Message Ads", value: "MESSAGE " },
  { icon: CiText, label: "Text Ads", value: "TEXT" },
  { icon: RiMessage3Fill, label: "Conversation Ads", value: "CONVERSATION" },
  {
    icon: MdOutlineLeaderboard,
    label: " Lead Gen Forms",
    value: "LEAD_GENERATION",
  },
  { icon: SiSpotlight, label: " Spotlight & Job Ads", value: "SPOTLIGHT_JOB" },
];

const adTypesMap: Record<string, typeof facebookAdTypes> = {
  "Meta Ads": facebookAdTypes, // no trailing space here
  "Google Ads": googleAdsTypes,
  "LinkedIn Ads": LinkedinAdsTypes,
  "Twitter Ads": [],
  "TikTok Ads": TiktokAdsTypes,
};

const DashboardCampaignCreate = () => {
  const [selected, setSelected] = useState("mobile");
  const navigate = useNavigate();
  const [interests, setInterests] = useState([
    "Fitness",
    "Running",
    "Outdoor Activities",
  ]);

  const removeInterest = (interest: string) => {
    setInterests(interests.filter((i) => i !== interest));
  };

  // state for getting all the value
  const [businessInfo, setBusinessInfo] = useState("");
  const [title, setTitle] = useState("");
  const [selectedObjective, setSelectedObjective] = useState("brand-awareness");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedPlatform, setSelectedPlatform] = useState("Meta Ads");
  const [selectedAdType, setSelectedAdType] = useState("REACH");
  const [location, setLocation] = useState("");
  const [ageFrom, setAgeFrom] = useState("");
  const [ageTo, setAgeTo] = useState("");
  const [selectedGender, setSelectedGender] = useState("All");
  const [dailyBudget, setDailyBudget] = useState("");
  const [totalBudget, setTotalBudget] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedAdAccount, setSelectedAdAccount] = useState("");
  const [adsAccounts, setAdsAccounts] = useState<
    Record<string, { id: string; name: string }[]>
  >({});
  const [selectedPage, setSelectedPage] = useState("");
  const [page, setPage] = useState<
    Record<string, { pageId: string; pageAccessToken: string }[]>
  >({});
  const [platformTokens, setPlatformTokens] = useState<Record<string, string>>(
    {}
  );

  const [adsetName, setAdsetName] = useState("");
  const [campaignName, setCampaignName] = useState("");
  const [adsName, setAdsName] = useState("");
  const [adGroupName, setAdGroupName] = useState("");
  const [headline, setHeadLine] = useState(["", "", ""]); // 3 headlines

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!businessInfo)
      newErrors.businessInfo = "Business information is required";
    if (!title) newErrors.title = "Title is required";
    if (!selectedObjective)
      newErrors.selectedObjective = "Objective is required";
    if (!selectedPlatform) newErrors.selectedPlatform = "Platform is required";
    if (!selectedAdType) newErrors.selectedAdType = "Ad type is required";
    if (!location) newErrors.location = "Location is required";
    if (!ageFrom) newErrors.ageFrom = "Age from is required";
    if (!ageTo) newErrors.ageTo = "Age to is required";
    if (!selectedGender) newErrors.selectedGender = "Gender is required";
    if (interests.length === 0)
      newErrors.interests = "At least one interest is required";
    if (!dailyBudget) newErrors.dailyBudget = "Daily budget is required";
    if (!totalBudget) newErrors.totalBudget = "Total budget is required";
    if (!startDate) newErrors.startDate = "Start date is required";
    if (!endDate) newErrors.endDate = "End date is required";
    if (!selectedAdAccount)
      newErrors.selectedAdAccount = "Ad account is required";
    if (!campaignName) newErrors.campaignName = "Campaign name is required";

    if (selectedPlatform === "Meta Ads") {
      if (!adsetName) newErrors.adsetName = "adsetName is required";
      if (!adsName) newErrors.adsName = "adsName is required";
      if (!selectedPage) newErrors.selectedPage = "page is required";
    }
    if (selectedPlatform === "Google Ads") {
      if (!adGroupName) newErrors.adGroupName = "adGroupName  is required";
      if (!headline) newErrors.headline = "headline is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Fetch all social accounts from your backend
  const fetchSocialAccounts = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/connect/get-All-Data"
      );
      if (!response.ok) throw new Error("Failed to fetch social accounts");

      const data = await response.json();
      // Convert your data into platform-wise object
      const platformMap: Record<string, { id: string; name: string }[]> = {};
      const pageMap: Record<
        string,
        { pageId: string; pageAccessToken: string }[]
      > = {};
      const tokenMap: Record<string, string> = {}; // store access tokens per platform

      data?.data?.forEach((account: any) => {
        platformMap[account.name] =
          account.adAccount?.map((ad: any) => ({
            id: ad.id, // use 'id' from adAccount
            name: ad.name, // use 'name' from adAccount
          })) || [];

        pageMap[account.name] =
          account.pages?.map((page: any) => ({
            pageId: page.pageId, // use 'id' from adAccount
            pageAccessToken: page.pageAccessToken, // use 'name' from adAccount
          })) || [];

        tokenMap[account.name] = account.accessToken;
      });
      setPage(pageMap);
      setAdsAccounts(platformMap);
      setPlatformTokens(tokenMap);
    } catch (err: any) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSocialAccounts();
  }, []);

  const handlegenerate = () => {
    navigate("/dashboard/campaign/preview");
  };

  const handlePlatformChange = (platform: string) => {
    setSelectedPlatform(platform);
    setSelectedAdType(""); // reset
  };
  const socialAccoutAccessToken = platformTokens[selectedPlatform];

  const handleSubmit = async () => {
    if (!validateForm()) {
      alert("Select required field");
      return;
    }

    if (!headline || headline.length === 0) {
      alert("At least 1 Headline is required");
      throw new Error("At least 1 Headline is required");
    }

    const headlineData = headline.map((item) => ({ text: item }));

    let payload: any = {};
    let endpoint = "";

    if (selectedPlatform === "Meta Ads") {
      payload = {
        accessToken: socialAccoutAccessToken,
        adAccountId: selectedAdAccount,
        pageId: selectedPage,
        adType: selectedAdType,
        campaignName,
        adSetName: adsetName,
        adName: adsName,
        dailyBudget,
        targeting: {
          geo_locations: { countries: location ? [location] : [] },
          age_min: ageFrom,
          age_max: ageTo,
          publisher_platforms: ["facebook"],
          facebook_positions: ["feed"],
        },
        link: businessInfo?.website || "https://adelo.ai",
        message: title,
        callToActionType: "LEARN_MORE",
        videoId: "4035143386752067",
        imageUrl:
          businessInfo?.logo ||
          "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      };
      endpoint = "facebook";
    }

    if (selectedPlatform === "Google Ads") {
      payload = {
        refreshToken:
          "1//0gyFnzETMVPfBCgYIARAAGBASNwF-L9Irnr7JSvDaZBW_pCeQdDU0fUVNt5qnGP9jx7_scipp6Siip929an3TV5rKsQGADmG54cc",
        customerId: selectedAdAccount,
        campaignName,
        adGroupName,
        adType: selectedAdType,
        budgetAmountMicros: 2500000,
        cpcBidMicros: 800000,
        headlines: headlineData,
        description: title,
        finalUrl: businessInfo?.website || "https://adelo.ai",
      };
      endpoint = "google";
      console.log("headline", headlineData);
      console.log("google payload", payload);
    }

    if (selectedPlatform === "LinkedIn Ads") {
      payload = {
        accessToken: socialAccoutAccessToken,
        accountId: selectedAdAccount,
        campaignName,
        adName: adsName,
        dailyBudget,
        creatives: {
          headline: headlineData[0]?.text,
          description: title,
          landingPageUrl: businessInfo?.website,
        },
        targeting: {
          location,
          age: { from: ageFrom, to: ageTo },
          gender: selectedGender,
        },
      };
      endpoint = "linkedin";
    }
    if (selectedPlatform === "TikTok Ads") {
      payload = {
        accessToken: socialAccoutAccessToken,
        advertiserId: selectedAdAccount, // TikTok calls this "advertiser_id"
        campaignName,
        adGroupName: adGroupName || "Default Ad Group",
        adName: adsName,
        adType: selectedAdType || "TRAFFIC",
        budget: {
          mode: "BUDGET_MODE_DAY", // or BUDGET_MODE_TOTAL
          amount: dailyBudget, // daily budget in your currency unit
        },
        targeting: {
          geo_locations: location ? [location] : [],
          age: { min: ageFrom, max: ageTo },
          gender: selectedGender === "all" ? null : selectedGender,
          placement: ["PLACEMENT_TIKTOK"], // you can also add PLACEMENT_PANGLE, etc.
        },
        creative: {
          adFormat: "SINGLE_VIDEO", // or "SINGLE_IMAGE"
          headline: headlineData[0]?.text,
          description: title,
          callToAction: "LEARN_MORE", // TikTok supported CTA type
          videoUrl: businessInfo?.videoUrl || "", // for video ads
          imageUrl:
            businessInfo?.logo ||
            "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d", // fallback
          landingPageUrl: businessInfo?.website || "https://adelo.ai",
        },
      };
      endpoint = "tiktok";
    }

    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/ads/${endpoint}/create-ad`,
        payload
      );
      console.log("API Response:", res.data);
      alert("Ad created successfully!");
    } catch (error: any) {
      console.error(
        "Error creating ad:",
        error.response?.data || error.message
      );
      alert("Failed to create ad");
    }
  };

  return (
    <div>
      <p className="text-lg ">
        <span>Ad Campaign/</span>
        <span className="ml-1 text-blue-500">Create New Ad</span>
      </p>
      <div className="flex flex-col md:flex-row gap-9 mt-5">
        {/* **********left side section****************************************************************************** */}
        <div className="flex-1 bg-[#F3F4F6] rounded-[20px] p-4 space-y-5">
          <h5 className="text-3xl font-semibold">Create New Ad Campaign</h5>
          <div className="border border-gray-300 my-3" />
          {/* business information section */}
          <div>
            <CampaignSubHeader text="Business Information" />
            <div className="relative w-full">
              <select
                value={businessInfo}
                onChange={(e) => setBusinessInfo(e.target.value)}
                className="appearance-none w-full py-3 px-4 pr-10 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white text-gray-800"
                required
              >
                <option className="bg-white text-gray-700" value="">
                  Select Business
                </option>
                <option className="" value="Acme Sportswear">
                  Acme Sportswear
                </option>
                <option className="" value="Target Audience">
                  Target Audience
                </option>
                <option className="" value="Primary Goals">
                  Primary Goals
                </option>
              </select>
              {errors.businessInfo && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.businessInfo}
                </p>
              )}

              {/* Custom dropdown arrow (SVG) */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 14a1 1 0 01-.7-.3l-4-4a1 1 0 111.4-1.4L10 11.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-.7.3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* title add section */}
          <div>
            <CampaignSubHeader text="Add Title" />
            <div>
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="py-2 px-3 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
              {errors.title && (
                <p className="text-red-500 text-xs mt-1">{errors.title}</p>
              )}
            </div>
          </div>

          {/* Ad Objective */}
          <div>
            <CampaignSubHeader text="Ad Objective" />
            {errors.selectedObjective && (
              <p className="text-red-500 text-xs mt-1">
                {errors.selectedObjective}
              </p>
            )}

            <div className="grid grid-cols-2 gap-3">
              {objectives.map((objective, index) => (
                <div
                  key={index}
                  className={`flex justify-center  items-center gap-2 p-3 rounded-lg border cursor-pointer ${
                    selectedObjective === objective.value
                      ? "bg-purple-100 border-purple-600"
                      : "bg-[#E6E6E8] border-gray-200"
                  } hover:bg-[#F4F1FF]`}
                  onClick={() => setSelectedObjective(objective.value)}
                >
                  <objective.icon className="text-xl" />
                  <span className="text-sm font-medium text-center">
                    {objective.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Platform Selection */}

          <div>
            <CampaignSubHeader text="Platform Selection" />
            {errors.selectedPlatform && (
              <p className="text-red-500 text-xs mt-1">
                {errors.selectedPlatform}
              </p>
            )}

            <div className="flex justify-between">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className={`${
                    selectedPlatform === platform.value
                      ? "bg-purple-100 border-purple-600"
                      : "bg-[#E6E6E8]"
                  } px-5 py-3 rounded-lg border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-[#F4F1FF]`}
                  onClick={() => handlePlatformChange(platform.value)}
                >
                  <platform.icon className={`text-2xl ${platform.color}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Ad Type */}

          <div>
            <CampaignSubHeader text="Ad Type" />
            {errors.selectedAdType && (
              <p className="text-red-500 text-xs mt-1">
                {errors.selectedAdType}
              </p>
            )}

            <div className="grid grid-cols-3 gap-3">
              {(adTypesMap[selectedPlatform] || []).map((adType, index) => (
                <div
                  key={index}
                  className={`flex items-center p-3 gap-2 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50 ${
                    selectedAdType === adType.value
                      ? "bg-purple-100 border-purple-600"
                      : "bg-[#E6E6E8]"
                  }`}
                  onClick={() => setSelectedAdType(adType.value)}
                >
                  <adType.icon className="text-lg text-gray-600" />
                  <span className="text-xs text-center text-gray-700">
                    {adType.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* select ads account  */}
          <div>
            <CampaignSubHeader text="Ads Account" />
            {errors.selectedAdAccount && (
              <p className="text-red-500 text-xs mt-1">
                {errors.selectedAdAccount}
              </p>
            )}
            <div className="relative w-full">
              <select
                value={selectedAdAccount}
                onChange={(e) => {
                  const accountId = e.target.value.replace(/^act_/, "");
                  setSelectedAdAccount(accountId);
                }}
                className="appearance-none w-full py-3 px-4 pr-10 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white text-gray-800"
                required
              >
                {/* Default placeholder option */}
                <option value="" disabled>
                  Select your Ads Account
                </option>

                {/* List accounts if available */}
                {selectedPlatform &&
                (adsAccounts[selectedPlatform]?.length || 0) > 0
                  ? adsAccounts[selectedPlatform].map((account) => (
                      <option key={account.id} value={account.id}>
                        {account.name} ({account.id})
                      </option>
                    ))
                  : selectedPlatform && (
                      <option value="" disabled>
                        You don't have any Ads Account
                      </option>
                    )}
              </select>

              {/* Custom dropdown arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 14a1 1 0 01-.7-.3l-4-4a1 1 0 111.4-1.4L10 11.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-.7.3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* select page  */}
          {selectedPlatform === "Meta Ads" && (
            <div>
              <CampaignSubHeader text="Select page" />
              {errors.selectedPage && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.selectedPage}
                </p>
              )}
              <div className="relative w-full">
                <select
                  value={selectedPage}
                  onChange={(e) => {
                    const pageId = e.target.value.replace(/^act_/, "");
                    setSelectedPage(pageId);
                  }}
                  className="appearance-none w-full py-3 px-4 pr-10 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white text-gray-800"
                  required
                >
                  {/* Default placeholder option */}
                  <option value="" disabled>
                    Select page
                  </option>

                  {/* List accounts if available */}
                  {selectedPlatform && (page[selectedPlatform]?.length || 0) > 0
                    ? page[selectedPlatform].map((page) => (
                        <option key={page.pageId} value={page.pageId}>
                          ({page.pageId})
                        </option>
                      ))
                    : selectedPlatform && (
                        <option value="" disabled>
                          You don't have any Ads Account
                        </option>
                      )}
                </select>

                {/* Custom dropdown arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 14a1 1 0 01-.7-.3l-4-4a1 1 0 111.4-1.4L10 11.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-.7.3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
          {/* Campaign Name */}
          <div>
            <CampaignSubHeader text="Campaign Name" />
            {errors.campaignName && (
              <p className="text-red-500 text-xs mt-1">{errors.campaignName}</p>
            )}
            <div>
              <Input
                type="text"
                value={campaignName}
                required
                onChange={(e) => setCampaignName(e.target.value)}
                className="py-2 px-3 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Enter campaign name"
              />
            </div>
          </div>

          {/* Adset Name */}
          {selectedPlatform === "Meta Ads" && (
            <div>
              <CampaignSubHeader text="Adset Name" />
              {errors.adsetName && (
                <p className="text-red-500 text-xs mt-1">{errors.adsetName}</p>
              )}
              <div>
                <Input
                  type="text"
                  value={adsetName}
                  required
                  onChange={(e) => setAdsetName(e.target.value)}
                  className="py-2 px-3 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Enter adset name"
                />
              </div>
            </div>
          )}

          {/* Ads Name */}
          {selectedPlatform === "Meta Ads" && (
            <div>
              <CampaignSubHeader text="Ads Name" />
              {errors.adsName && (
                <p className="text-red-500 text-xs mt-1">{errors.adsName}</p>
              )}
              <div>
                <Input
                  type="text"
                  value={adsName}
                  required
                  onChange={(e) => setAdsName(e.target.value)}
                  className="py-2 px-3 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Enter ads name"
                />
              </div>
            </div>
          )}
          {/* Ads Group name  */}
          {selectedPlatform === "Google Ads" && (
            <div>
              <CampaignSubHeader text="Ads Group Name " />
              {errors.adGroupName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.adGroupName}
                </p>
              )}
              <div>
                <Input
                  type="text"
                  value={adGroupName}
                  required
                  onChange={(e) => setAdGroupName(e.target.value)}
                  className="py-2 px-3 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Enter Ads Group Name"
                />
              </div>
            </div>
          )}

          {/* google ads headline   */}
          {selectedPlatform === "Google Ads" && (
            <div>
              <CampaignSubHeader text="HeadLines " />
              {errors.headline && (
                <p className="text-red-500 text-xs mt-1">{errors.headline}</p>
              )}
              <div className="space-y-2">
                {headline.map((value, index) => (
                  <div key={index}>
                    <Input
                      type="text"
                      value={value}
                      required
                      onChange={(e) => {
                        const newHeadlines = [...headline];
                        newHeadlines[index] = e.target.value;
                        setHeadLine(newHeadlines);
                      }}
                      placeholder={`Enter Headline ${index + 1}`}
                      className="py-2 px-3 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                    {errors.headline?.[index] && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.headline[index]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Target Audience */}
          <div className="space-y-4">
            <CampaignSubHeader text=" Target Audience" />
            {/* Location */}
            <div>
              <p className="text-sm mb-1">Location</p>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full py-2 px-3 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              >
                <option value="">Select Location</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
              </select>
              {errors.location && (
                <p className="text-red-500 text-xs mt-1">{errors.location}</p>
              )}
            </div>

            {/* Age range */}
            <div>
              <p className="text-sm">Age range</p>
              <div className="flex items-center gap-2">
                <select
                  value={ageFrom}
                  onChange={(e) => setAgeFrom(e.target.value)}
                  className="w-full py-2 px-3 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                >
                  <option value="">From</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                </select>
                <p>To</p>
                <select
                  value={ageTo}
                  onChange={(e) => setAgeTo(e.target.value)}
                  className="w-full py-2 px-3 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                >
                  <option value="">To</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                </select>
              </div>
              {(errors.ageFrom || errors.ageTo) && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.ageFrom || errors.ageTo}
                </p>
              )}
            </div>

            {/* Gender */}
            <div>
              <CampaignSubHeader text="Gender" />
              {errors.selectedGender && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.selectedGender}
                </p>
              )}
              <div className="flex space-x-2">
                {["All", "Male", "Female"].map((gender) => (
                  <Button
                    key={gender}
                    variant={selectedGender === gender ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedGender(gender)}
                    className={
                      selectedGender === gender
                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                        : ""
                    }
                  >
                    {gender}
                  </Button>
                ))}
              </div>
            </div>
            {/* Interest */}
            <div>
              <CampaignSubHeader text="Interest" />
              {errors.interests && (
                <p className="text-red-500 text-xs mt-1">{errors.interests}</p>
              )}
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <div
                    key={interest}
                    className="flex items-center bg-[#E6E6E8] text-black px-3 py-1 rounded-full text-sm"
                  >
                    <span>{interest}</span>
                    <button
                      onClick={() => removeInterest(interest)}
                      className="ml-2 text-black hover:text-purple-700 cursor-pointer"
                    >
                      <FaTimes className="text-xs" />
                    </button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full w-8 h-8 p-0 text-purple-600 border-purple-300"
                >
                  +
                </Button>
              </div>
            </div>
          </div>

          {/* Budget & Schedule */}
          <div className="space-y-3">
            <CampaignSubHeader text="Budget & Schedule" />
            {/* Daily Budget */}
            <div>
              <p className="text-sm">Daily Budget</p>
              <select
                value={dailyBudget}
                onChange={(e) => setDailyBudget(e.target.value)}
                className="w-full py-2 px-3 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              >
                <option value="">Select Daily Budget</option>
                <option value="50">$50</option>
                <option value="100">$100</option>
                <option value="150">$150</option>
              </select>
              {errors.dailyBudget && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.dailyBudget}
                </p>
              )}
            </div>

            {/* Total Budget */}
            <div>
              <p className="text-sm">Total Budget</p>
              <select
                value={totalBudget}
                onChange={(e) => setTotalBudget(e.target.value)}
                className="w-full py-2 px-3 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              >
                <option value="">Select Total Budget</option>
                <option value="500">$500</option>
                <option value="1000">$1000</option>
                <option value="1500">$1500</option>
              </select>
              {errors.totalBudget && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.totalBudget}
                </p>
              )}
            </div>

            {/* date */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-sm">Start Date</p>
                <Input
                  type="date"
                  onChange={(e) => setStartDate(e.target.value)}
                  value={startDate}
                  className="py-2 px-3 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
                {errors.startDate && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.startDate}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm">End Date</p>
                <Input
                  type="date"
                  onChange={(e) => setEndDate(e.target.value)}
                  value={endDate}
                  className="py-2 px-3 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
                {errors.endDate && (
                  <p className="text-red-500 text-xs mt-1">{errors.endDate}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* **********right side section****************************************************************************** */}
        <div className="flex-1">
          <div className="flex justify-end items-center gap-5">
            <OutlineButton>Save Draft</OutlineButton>
            <PrimaryButton onClick={handleSubmit}>
              Launch Campaign
            </PrimaryButton>
          </div>
          <div className="border border-gray-300 my-3" />
          {/* prompt section */}
          <div className="flex-1 bg-[#F3F4F6] rounded-[20px] p-4">
            <CampaignSubHeader text="Ad Copy" />
            <div>
              <div>
                <p className="mt-5 text-sm text-T-200">Prompt</p>
                <textarea
                  name="prompt"
                  id=""
                  className="border-[1px] border-[979AA0] w-full rounded-xl px-1 py-2 text-sm"
                  defaultValue={
                    "Create an engaging ad copy for a summer sale offering 40% off"
                  }
                ></textarea>
                <button className="px-4 py-2 rounded-3xl bg-[#654FAE] cursor-pointer text-white font-bold">
                  Generate
                </button>
              </div>
              <div>
                <p className="mt-5 text-sm text-T-200">Generated Text</p>
                <textarea
                  name="prompt"
                  id=""
                  className="border-[1px] border-[979AA0] w-full rounded-xl px-1 py-2 text-sm"
                  defaultValue={
                    "Lorem ipsum dolor sit amet consectetur. Id feugiat magna lobortis gravida rhoncus neque vehicula. Euismod nullam tincidunt nunc faucibus viverra elit."
                  }
                  rows={4}
                ></textarea>
              </div>
            </div>
          </div>
          {/* media section */}
          <div className="mt-5">
            <CampaignSubHeader text="Ad Media" />
            <div className="bg-black rounded-md flex justify-center items-center gap-2 h-64 mx-6">
              <button className="px-4 py-2 rounded-3xl border border-[#8E6EFF] cursor-pointer text-[#8E6EFF] font-bold">
                Save Draft
              </button>
              <button className="px-4 py-2 rounded-3xl bg-gradient-to-r from-[#654FAE] via-[#C0AFFA] to-[#8E6EFF] cursor-pointer text-white font-bold">
                Browse Templates
              </button>
            </div>
            <div className="flex justify-center items-center py-3">
              <button className="px-4 py-2 rounded-md border cursor-pointer font-bold">
                Add Media +
              </button>
            </div>
          </div>
          {/* ------------write prompt section--------- */}
          <div className="flex items-center w-full p-3 rounded-full bg-[#f5f3ff] shadow-sm">
            {/* Dropdown */}
            <div className="relative text-blue-500">
              <select className="w-[100px] py-4 px-2 border border-gray-300 rounded-md text-sm bg-white">
                <option value="image">Image</option>
                <option value="text">Text</option>
              </select>
            </div>

            {/* Input field */}
            <input
              type="text"
              placeholder="Write Prompt..."
              className="flex-1 mx-3 text-sm bg-transparent outline-none text-gray-700 placeholder-gray-400"
            />

            {/* Icon button */}
            <button className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-md cursor-pointer">
              <FaWandMagicSparkles className="text-white" />
            </button>
          </div>
          {/* ------------preview section--------- */}
          <div className="mt-5">
            <CampaignSubHeader text="Ad Preview" />
            <div className="flex justify-end">
              <div className="inline-flex items-center bg-white border border-gray-300 rounded-full overflow-hidden text-sm font-medium">
                <button
                  onClick={() => setSelected("mobile")}
                  className={`px-4 py-3 transition-colors duration-200 ${
                    selected === "mobile"
                      ? "bg-purple-500 text-white"
                      : "text-black"
                  }`}
                >
                  Mobile
                </button>
                <button
                  onClick={() => setSelected("desktop")}
                  className={`px-4 py-3 transition-colors duration-200 ${
                    selected === "desktop"
                      ? "bg-purple-500 text-white"
                      : "text-black"
                  }`}
                >
                  Desktop
                </button>
              </div>
            </div>
            <div className="mt-7 flex justify-center">
              <img src="/src/assets/mobilepreview.jpg" />
            </div>
            <div className="flex justify-end mt-5">
              <button
                onClick={handlegenerate}
                className="px-3 py-2 text-white
               rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-md cursor-pointer"
              >
                Get AI Optimize Suggestions
                <FaWandMagicSparkles className="text-white ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCampaignCreate;
// okay
