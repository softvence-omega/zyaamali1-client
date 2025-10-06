/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaTiktok,
  FaImage,
  FaMousePointer,
  FaVideo,
  FaInstagram,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";
import toast from "react-hot-toast";
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
import { countries } from "@/utils/Countries";


const objectives = [
  {
    icon: ImBullhorn,
    label: "Awareness",
    value: "awareness",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: IoMagnetSharp,
    label: "Traffic",
    value: "traffic",
    color: "bg-gray-100 text-gray-600",
  },
  {
    icon: BsFillBarChartLineFill,
    label: "Conversions",
    value: "conversions",
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
  { icon: FaFacebookF, color: "text-blue-600", value: "Facebook" },
  { icon: FaGoogle, color: "text-red-500", value: "Google" },
  { icon: FaTiktok, color: "text-black", value: "Tiktok" },
  { icon: FaLinkedinIn, color: "text-blue-700", value: "LinkedIn" },
  { icon: FaInstagram, color: "text-black", value: "Instagram" },
];

const facebookAdTypes = [
  { icon: ImBullhorn, label: "Brand Awareness", value: "BRAND_AWARENESS" },
  { icon: FaMousePointer, label: "Reach", value: "REACH" },
  { icon: RiMessage3Fill, label: "Messages", value: "MESSAGES" },
  { icon: PiTrafficConeFill, label: "Traffic Ads", value: "TRAFFIC" },
  {
    icon: MdOutlineInstallMobile,
    label: "App Installs",
    value: "APP_INSTALLS",
  },
];

const googleAdsTypes = [
  { icon: ImDisplay, label: "Display Ad", value: "DISPLAY" },
  { icon: CiSearch, label: "Search Ad", value: "SEARCH" },
  { icon: FaVideo, label: "Video Ad", value: "VIDEO" },
  { icon: FaShoppingCart, label: "Shopping Ad", value: "SHOPPING" },
  {
    icon: MdOutlineAppRegistration,
    label: "App Campaigns",
    value: "APP_CAMPAIGNS",
  },
  { icon: Telescope, label: "Performance Max", value: "PERFORMANCE" },
  { icon: MdLocalActivity, label: "Local Ad", value: "LOCAL_ADS" },
];

const TiktokAdsTypes = [
  { icon: MdOutlineDynamicFeed, label: "In-Feed Ad", value: "SINGLE_VIDEO" },
  { icon: MdViewModule, label: "TopView Ad", value: "Topview" },
  {
    icon: ImBullhorn,
    label: "Branded Hashtag Challenges",
    value: "BRANDED_HASHTAG",
  },
  { icon: GiCometSpark, label: "Spark Ad", value: "SPARK_AD" },
  {
    icon: MdOutlineLeaderboard,
    label: "Lead Generation Ad",
    value: "LEAD_GENERATION",
  },
  { icon: TbBrandEdge, label: "Branded Effects", value: "BRANDED_EFFECTS" },
];

const LinkedinAdsTypes = [
  { icon: FaImage, label: "Sponsored Content Ads", value: "SPONSORED" },
  { icon: RiMessage3Fill, label: "Message Ads", value: "MESSAGE" },
  { icon: CiText, label: "Text Ads", value: "TEXT" },
  { icon: SiSpotlight, label: "Job Ads", value: "SPOTLIGHT_JOB" },
  { icon: SiSpotlight, label: "Video Ads", value: "VIDEO" },
];

const instagramAdTypes = [
  { icon: FaImage, label: "Feed Ad", value: "FEED_AD" },
  { icon: FaVideo, label: "Stories Ad", value: "STORIES_AD" },
  { icon: MdOutlineDynamicFeed, label: "Reels Ad", value: "REELS_AD" },
];

const adTypesMap: Record<string, typeof facebookAdTypes> = {
  Facebook: facebookAdTypes,
  Google: googleAdsTypes,
  LinkedIn: LinkedinAdsTypes,
  Instagram: instagramAdTypes,
  Tiktok: TiktokAdsTypes,
};

const DashboardCampaignCreateLatest = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selected, setSelected] = useState("mobile");
  const navigate = useNavigate();
  const [interests, setInterests] = useState([
    "Fitness",
    "Running",
    "Outdoor Activities",
  ]);
  const [newInterest, setNewInterest] = useState("");
  const [businessInfo, setBusinessInfo] = useState("");
  const [title, setTitle] = useState("");
  const [selectedObjective, setSelectedObjective] = useState("awareness");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedPlatform, setSelectedPlatform] = useState("Facebook");
  const [selectedAdType, setSelectedAdType] = useState("");
  const [locationId, setLocationId] = useState("");
  const [locationCode, setLocationCode] = useState("");
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
  const [headline, setHeadLine] = useState(["", "", ""]);
  const [video, setVideo] = useState<File | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [carousel, setCarousel] = useState<FileList | null>(null);
  const [loading, setLoading] = useState(false);
  const [company, setCompany] = useState("");
  const [platform, setPlatform] = useState("");
  const [prompt, setPrompt] = useState(
    "Create an engaging ad copy for a summer sale offering 40% off"
  );
  const [lifetimeBudget, setLifetimeBudget] = useState(false);

  const steps = [
    "Campaign Objective",
    "Audience & Targeting",
    "Budget & Schedule",
    "Creative & Preview",
    "Review & Confirm",
  ];

  const removeInterest = (interest: string) => {
    setInterests(interests.filter((i) => i !== interest));
  };

  const addInterest = () => {
    if (newInterest && !interests.includes(newInterest)) {
      setInterests([...interests, newInterest]);
      setNewInterest("");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const files = e.target.files;
    if (type === "video" && files && files[0]) {
      setVideo(files[0]);
    } else if (type === "image" && files && files[0]) {
      setImage(files[0]);
    } else if (type === "carousel" && files) {
      setCarousel(files);
    }
  };

  // const validateStep = (step: number) => {
  //   const newErrors: Record<string, string> = {};
  //   if (step === 1) {
  //     if (!businessInfo) newErrors.businessInfo = "Business information is required";
  //     if (!title) newErrors.title = "Title is required";
  //     if (!selectedObjective) newErrors.selectedObjective = "Objective is required";
  //     if (!selectedPlatform) newErrors.selectedPlatform = "Platform is required";
  //     if (!selectedAdType) newErrors.selectedAdType = "Ad type is required";
  //     if (!selectedAdAccount) newErrors.selectedAdAccount = "Ad account is required";
  //     if (!campaignName) newErrors.campaignName = "Campaign name is required";
  //     if (selectedPlatform === "Facebook" || selectedPlatform === "Instagram") {
  //       if (!adsetName) newErrors.adsetName = "Adset name is required";
  //       if (!adsName) newErrors.adsName = "Ads name is required";
  //       if (!selectedPage) newErrors.selectedPage = "Page is required";
  //     }
  //     if (selectedPlatform === "Google") {
  //       if (!adGroupName) newErrors.adGroupName = "Ad group name is required";
  //     }
  //   } else if (step === 2) {
  //     if (!locationId) newErrors.locationId = "Location id is required";
  //     if (!locationCode) newErrors.locationCode = "Location code is required";
  //     if (!ageFrom) newErrors.ageFrom = "Age from is required";
  //     if (!ageTo) newErrors.ageTo = "Age to is required";
  //     if (!selectedGender) newErrors.selectedGender = "Gender is required";
  //     if (interests.length === 0) newErrors.interests = "At least one interest is required";
  //   } else if (step === 3) {
  //     if (!dailyBudget && !lifetimeBudget) newErrors.dailyBudget = "Daily budget is required";
  //     if (!totalBudget && lifetimeBudget) newErrors.totalBudget = "Lifetime budget is required";
  //     if (!startDate) newErrors.startDate = "Start date is required";
  //     if (!endDate) newErrors.endDate = "End date is required";
  //   } else if (step === 4) {
  //     if (selectedPlatform === "Google" && (!headline || headline.every(h => !h))) {
  //       newErrors.headline = "At least one headline is required";
  //     }
  //     if (!video && !image && !carousel) {
  //       newErrors.media = "At least one media file is required";
  //     }
  //   }
  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  const handleNext = () => {
    // if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    // }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const fetchSocialAccounts = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/connect/get-All-Data"
      );
      if (!response.ok) throw new Error("Failed to fetch social accounts");
      const data = await response.json();
      const platformMap: Record<string, { id: string; name: string }[]> = {};
      const pageMap: Record<
        string,
        { pageId: string; pageAccessToken: string }[]
      > = {};
      const tokenMap: Record<string, string> = {};
      data?.data?.forEach((account: any) => {
        platformMap[account.name] =
          account.adAccount?.map((ad: any) => ({
            id: ad.id,
            name: ad.name,
          })) || [];
        pageMap[account.name] =
          account.pages?.map((page: any) => ({
            pageId: page.pageId,
            pageAccessToken: page.pageAccessToken,
          })) || [];
        tokenMap[account.name] = account.accessToken;
      });
      setPage(pageMap);
      setAdsAccounts(platformMap);
      setPlatformTokens(tokenMap);
    } catch (err: any) {
      console.log(err);
      setErrors({ fetchError: err.message });
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetchSocialAccounts();
  }, []);

  const handleGenerate = () => {
    navigate("/dashboard/campaign/preview");
  };

  const handlePlatformChange = (platform: string) => {
    setSelectedPlatform(platform);
    setSelectedAdType("");
  };

  const saveDraft = () => {
    const draft = {
      businessInfo,
      title,
      selectedObjective,
      selectedPlatform,
      selectedAdType,
      campaignName,
      adsetName,
      adsName,
      adGroupName,
      locationId,
      locationCode,
      ageFrom,
      ageTo,
      selectedGender,
      interests,
      dailyBudget,
      totalBudget,
      startDate,
      endDate,
      headline,
    };
    localStorage.setItem("campaignDraft", JSON.stringify(draft));
    toast.success("Draft saved successfully");
  };

  const browseTemplates = () => {
    navigate("/dashboard/templates");
  };

  const socialAccoutAccessToken = platformTokens[selectedPlatform];

  const handleSubmit = async () => {
    // if (!validateStep(5)) return;
    let payload: any = {};
    let endpoint = "";
    setLoading(true);
    if (selectedPlatform === "Facebook") {
      payload = {
        accessToken: socialAccoutAccessToken,
        adAccountId: selectedAdAccount,
        pageId: selectedPage,
        adType: selectedAdType,
        campaignName,
        adSetName: adsetName,
        adName: adsName,
        dailyBudget: lifetimeBudget ? undefined : dailyBudget,
        lifetimeBudget: lifetimeBudget ? totalBudget : undefined,
        targeting: {
          geo_locations: { countries: locationCode ? [locationCode] : [] },
          age_min: ageFrom,
          age_max: ageTo,
          publisher_platforms: ["facebook"],
          facebook_positions: ["feed"],
        },
        link: "https://adelo.ai",
        message: title,
        callToActionType: "LEARN_MORE",
        videoId: video ? "4035143386752067" : undefined,
        imageUrl: image
          ? "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
          : undefined,
      };
      endpoint = "facebook";
    } else if (selectedPlatform === "Google") {
      payload = {
        refreshToken:
          "1//0gyFnzETMVPfBCgYIARAAGBASNwF-L9Irnr7JSvDaZBW_pCeQdDU0fUVNt5qnGP9jx7_scipp6Siip929an3TV5rKsQGADmG54cc",
        customerId: selectedAdAccount,
        campaignName,
        adGroupName,
        adType: selectedAdType,
        budgetAmountMicros: lifetimeBudget ? parseInt(totalBudget) * 1000000 : parseInt(dailyBudget) * 1000000,
        cpcBidMicros: 800000,
        headlines: headline.map((item) => ({ text: item })),
        description: title,
        finalUrl: "https://adelo.ai",
      };
      endpoint = "google";
    } else if (selectedPlatform === "Tiktok") {
      payload = {
        accessToken: socialAccoutAccessToken,
        adAccountId: selectedAdAccount,
        campaignName,
        adType: selectedAdType,
        dailyBudget: lifetimeBudget ? undefined : dailyBudget,
        lifetimeBudget: lifetimeBudget ? totalBudget : undefined,
        targeting: {
          locations: locationCode ? [locationCode] : [],
          age_min: ageFrom,
          age_max: ageTo,
        },
        creative: { title, media: image || video },
      };
      endpoint = "tiktok";
    } else if (selectedPlatform === "LinkedIn") {
      payload = {
        accessToken: socialAccoutAccessToken,
        adAccountId: selectedAdAccount,
        campaignName,
        adType: selectedAdType,
        budget: lifetimeBudget ? totalBudget : dailyBudget,
        targeting: {
          locations: locationCode ? [locationCode] : [],
          age_min: ageFrom,
          age_max: ageTo,
        },
        creative: { title, media: image || video },
      };
      endpoint = "linkedin";
    } else if (selectedPlatform === "Instagram") {
      payload = {
        accessToken: socialAccoutAccessToken,
        adAccountId: selectedAdAccount,
        pageId: selectedPage,
        adType: selectedAdType,
        campaignName,
        adSetName: adsetName,
        adName: adsName,
        dailyBudget: lifetimeBudget ? undefined : dailyBudget,
        lifetimeBudget: lifetimeBudget ? totalBudget : undefined,
        targeting: {
          geo_locations: { countries: locationCode ? [locationCode] : [] },
          age_min: ageFrom,
          age_max: ageTo,
          instagram_positions: ["feed", "stories"],
        },
        link: "https://adelo.ai",
        message: title,
        videoId: video ? "4035143386752067" : undefined,
        imageUrl: image
          ? "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
          : undefined,
      };
      endpoint = "instagram";
    }
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/ads/${endpoint}/create-ad`,
        payload
      );
      console.log("API Response:", res.data);
      toast.success("Ad created successfully");
      setLoading(false);
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || error.message || "Failed to create ad";
      console.error("Error creating ad:", errorMessage);
      toast.error(errorMessage);
      setLoading(false);
    }
  };

  const handleGenerateAdsData = async () => {
    const data = {
      company_info: company,
      platform,
      prompt: prompt,
    };
    try {
      const res = await axios.post(
        "http://74.118.168.229:8000/ads/generate",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setTitle(res.data.ads_features.title);
      setSelectedObjective(res.data.ads_features.objective.toLowerCase());
      setSelectedPlatform(res.data.ads_features.platform);
    } catch (err) {
      console.error("API Error:", err);
      toast.error("Failed to generate ad copy");
    }
  };

  const renderProgressBar = () => (
    <div className="flex justify-between mb-8">
      {steps.map((step, index) => (
        <div key={index} className="flex-1 text-center">
          <div
            className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${
              currentStep > index + 1
                ? "bg-purple-600 text-white"
                : currentStep === index + 1
                ? "bg-purple-600 text-white"
                : "bg-gray-300 text-gray-600"
            }`}
          >
            {index + 1}
          </div>
          <p className="mt-2 text-sm">{step}</p>
        </div>
      ))}
    </div>
  );

const renderStep1 = () => (
  <div className="space-y-6">
    <p className="text-sm text-gray-600 dark:text-gray-300">
      Hint: Choose your campaign goal, platform, and basic setup.
    </p>

    {/* 01. Business Information */}
    <div>
      <CampaignSubHeader text="Business Information" />
      <div className="relative w-full">
        <select
          value={businessInfo}
          onChange={(e) => setBusinessInfo(e.target.value)}
          className="appearance-none w-full py-3 px-4 pr-10 border border-gray-300 dark:border-gray-400 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white text-gray-800 dark:bg-[#1e2939] dark:text-gray-300"
          required
        >
          <option
            className="bg-white dark:bg-[#1e2939] dark:text-gray-300 text-gray-700"
            value=""
          >
            Select Business
          </option>
          <option value="Acme Sportswear">Acme Sportswear</option>
          <option value="Target Audience">Target Audience</option>
          <option value="Primary Goals">Primary Goals</option>
        </select>
        {errors.businessInfo && (
          <p className="text-red-500 text-xs mt-1">{errors.businessInfo}</p>
        )}
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

    {/* 02. Add Title */}
    <div>
      <CampaignSubHeader text="Add Title" />
      <div>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="py-2 px-3 border border-gray-300 dark:border-gray-400 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:bg-[#1e2939] dark:text-gray-300"
          required
        />
        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
      </div>
    </div>

    {/* 03. Ad Objective */}
    <div>
      <CampaignSubHeader text="Ad Objective" />
      {errors.selectedObjective && (
        <p className="text-red-500 text-xs mt-1">{errors.selectedObjective}</p>
      )}
      <div className="grid grid-cols-2 gap-3">
        {objectives.map((objective, index) => (
          <div
            key={index}
            className={`flex justify-center items-center gap-2 p-3 rounded-lg border cursor-pointer transition ${
              selectedObjective === objective.value
                ? "bg-purple-100 border-purple-600 dark:bg-purple-700"
                : "bg-[#E6E6E8] border-gray-200 dark:bg-[#1e2939] dark:border-gray-400"
            } hover:bg-[#F4F1FF]`}
            onClick={() => setSelectedObjective(objective.value)}
          >
            <objective.icon className="text-xl dark:text-gray-300" />
            <span className="text-sm font-medium text-center dark:text-gray-300">
              {objective.label}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* 04. Platform Selection */}
    <div>
      <CampaignSubHeader text="Platform Selection" />
      {errors.selectedPlatform && (
        <p className="text-red-500 text-xs mt-1">{errors.selectedPlatform}</p>
      )}
      <div className="flex justify-between">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className={`px-5 py-3 rounded-lg border flex items-center justify-center cursor-pointer hover:bg-[#F4F1FF] ${
              selectedPlatform === platform.value
                ? "bg-purple-100 border-purple-600 dark:bg-purple-700"
                : "bg-[#E6E6E8] border-gray-200 dark:bg-[#1e2939] dark:border-gray-400"
            }`}
            onClick={() => handlePlatformChange(platform.value)}
          >
            <platform.icon className={`text-2xl ${platform.color} dark:text-gray-300`} />
          </div>
        ))}
      </div>
    </div>

    {/* 05. Ad Type */}
    <div>
      <CampaignSubHeader text="Ad Type" />
      {errors.selectedAdType && (
        <p className="text-red-500 text-xs mt-1">{errors.selectedAdType}</p>
      )}
      <div className="grid grid-cols-3 gap-3">
        {(adTypesMap[selectedPlatform] || []).map((adType, index) => (
          <div
            key={index}
            className={`flex items-center p-3 gap-2 rounded-lg border cursor-pointer transition ${
              selectedAdType === adType.value
                ? "bg-purple-100 border-purple-600 dark:bg-purple-700 dark:border-purple-400"
                : "bg-[#E6E6E8] border-gray-200 dark:bg-[#1e2939] dark:border-gray-400"
            } hover:bg-gray-50`}
            onClick={() => setSelectedAdType(adType.value)}
          >
            <adType.icon className="text-lg text-gray-600 dark:text-gray-300" />
            <span className="text-xs text-center text-gray-700 dark:text-gray-300">
              {adType.label}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* 06. Ads Account */}
    <div>
      <CampaignSubHeader text="Ads Account" />
      {errors.selectedAdAccount && (
        <p className="text-red-500 text-xs mt-1">{errors.selectedAdAccount}</p>
      )}
      <div className="relative w-full">
        <select
          value={selectedAdAccount}
          onChange={(e) => {
            const accountId = e.target.value.replace(/^act_/, "");
            setSelectedAdAccount(accountId);
          }}
          className="appearance-none w-full py-3 px-4 pr-10 border border-gray-300 dark:border-gray-400 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white text-gray-800 dark:bg-[#1e2939] dark:text-gray-300"
          required
        >
          <option value="" disabled>
            Select your Ads Account
          </option>
          {selectedPlatform && (adsAccounts[selectedPlatform]?.length || 0) > 0 ? (
            adsAccounts[selectedPlatform].map((account) => (
              <option key={account.id} value={account.id}>
                {account.name} ({account.id})
              </option>
            ))
          ) : (
            <option value="" disabled>
              You don't have any Ads Account
            </option>
          )}
        </select>
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

    {/* 07. Page Selection (Facebook/Instagram) */}
    {(selectedPlatform === "Facebook" || selectedPlatform === "Instagram") && (
      <div>
        <CampaignSubHeader text="Select page" />
        {errors.selectedPage && (
          <p className="text-red-500 text-xs mt-1">{errors.selectedPage}</p>
        )}
        <div className="relative w-full">
          <select
            value={selectedPage}
            onChange={(e) => {
              const pageId = e.target.value.replace(/^act_/, "");
              setSelectedPage(pageId);
            }}
            className="appearance-none w-full py-3 px-4 pr-10 border border-gray-300 dark:border-gray-400 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white text-gray-800 dark:bg-[#1e2939] dark:text-gray-300"
            required
          >
            <option value="" disabled>
              Select page
            </option>
            {selectedPlatform && (page[selectedPlatform]?.length || 0) > 0 ? (
              page[selectedPlatform].map((page) => (
                <option key={page.pageId} value={page.pageId}>
                  ({page.pageId})
                </option>
              ))
            ) : (
              <option value="" disabled>
                You don't have any Ads Account
              </option>
            )}
          </select>
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

    {/* 08. Campaign Name */}
    <div>
      <CampaignSubHeader text="Campaign Name" />
      {errors.campaignName && (
        <p className="text-red-500 text-xs mt-1">{errors.campaignName}</p>
      )}
      <Input
        type="text"
        value={campaignName}
        required
        onChange={(e) => setCampaignName(e.target.value)}
        className="py-2 px-3 border border-gray-300 dark:border-gray-400 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:bg-[#1e2939] dark:text-gray-300"
        placeholder="Enter campaign name"
      />
    </div>

    {/* 09. Adset / Ads / Group Name */}
    {(selectedPlatform === "Facebook" || selectedPlatform === "Instagram") && (
      <>
        <div>
          <CampaignSubHeader text="Adset Name" />
          {errors.adsetName && (
            <p className="text-red-500 text-xs mt-1">{errors.adsetName}</p>
          )}
          <Input
            type="text"
            value={adsetName}
            required
            onChange={(e) => setAdsetName(e.target.value)}
            className="py-2 px-3 border border-gray-300 dark:border-gray-400 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:bg-[#1e2939] dark:text-gray-300"
            placeholder="Enter adset name"
          />
        </div>

        <div>
          <CampaignSubHeader text="Ads Name" />
          {errors.adsName && (
            <p className="text-red-500 text-xs mt-1">{errors.adsName}</p>
          )}
          <Input
            type="text"
            value={adsName}
            required
            onChange={(e) => setAdsName(e.target.value)}
            className="py-2 px-3 border border-gray-300 dark:border-gray-400 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:bg-[#1e2939] dark:text-gray-300"
            placeholder="Enter ads name"
          />
        </div>
      </>
    )}

    {selectedPlatform === "Google" && (
      <div>
        <CampaignSubHeader text="Ads Group Name" />
        {errors.adGroupName && (
          <p className="text-red-500 text-xs mt-1">{errors.adGroupName}</p>
        )}
        <Input
          type="text"
          value={adGroupName}
          required
          onChange={(e) => setAdGroupName(e.target.value)}
          className="py-2 px-3 border border-gray-300 dark:border-gray-400 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:bg-[#1e2939] dark:text-gray-300"
          placeholder="Enter Ads Group Name"
        />
      </div>
    )}
  </div>
);

const renderStep2 = () => (
  <div className="space-y-6">
    <p className="text-sm text-gray-600 dark:text-gray-300">
      Hint: Define who sees your ad based on demographics and interests.
    </p>
    <div className="space-y-4">
      <CampaignSubHeader text="Target Audience" />
      <div>
        <p className="text-sm mb-1 dark:text-gray-300">Location</p>
        <select
          value={locationCode}
          onChange={(e) => {
            const selectedCountry = countries.find(
              (c) => c.code === e.target.value
            );
            if (selectedCountry) {
              setLocationId(String(selectedCountry.id));
              setLocationCode(selectedCountry.code);
            } else {
              setLocationId("");
              setLocationCode("");
            }
          }}
          className="w-full py-2 px-3 border border-gray-300 dark:border-gray-400 rounded-md text-sm text-gray-800 bg-white dark:bg-[#1e2939] dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          required
        >
          <option value="">Select Location</option>
          {countries.map((c) => (
            <option key={c.id || c.name} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>
        {errors.locationId && (
          <p className="text-red-500 text-xs mt-1">{errors.locationId}</p>
        )}
      </div>

      <div>
        <p className="text-sm dark:text-gray-300">Age range</p>
        <div className="flex items-center gap-2">
          <select
            value={ageFrom}
            onChange={(e) => setAgeFrom(e.target.value)}
            className="w-full py-2 px-3 border border-gray-300 dark:border-gray-400 rounded-md text-sm text-gray-800 bg-white dark:bg-[#1e2939] dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            required
          >
            <option value="">From</option>
            {Array.from({ length: 43 }, (_, i) => 18 + i).map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
          <p className="dark:text-gray-300">To</p>
          <select
            value={ageTo}
            onChange={(e) => setAgeTo(e.target.value)}
            className="w-full py-2 px-3 border border-gray-300 dark:border-gray-400 rounded-md text-sm text-gray-800 bg-white dark:bg-[#1e2939] dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            required
          >
            <option value="">To</option>
            {Array.from({ length: 43 }, (_, i) => 18 + i).map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
            <option value="60+">60+</option>
          </select>
        </div>
        {(errors.ageFrom || errors.ageTo) && (
          <p className="text-red-500 text-xs mt-1">{errors.ageFrom || errors.ageTo}</p>
        )}
      </div>

      <div>
        <CampaignSubHeader text="Gender" />
        {errors.selectedGender && (
          <p className="text-red-500 text-xs mt-1">{errors.selectedGender}</p>
        )}
        <div className="flex space-x-2">
          {["All", "Male", "Female"].map((gender) => (
            <Button
              key={gender}
              variant={selectedGender === gender ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedGender(gender)}
              className={`${
                selectedGender === gender
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "dark:bg-[#1e2939] dark:text-gray-300 dark:border-gray-400"
              }`}
            >
              {gender}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <CampaignSubHeader text="Interest" />
        {errors.interests && (
          <p className="text-red-500 text-xs mt-1">{errors.interests}</p>
        )}
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <div
              key={interest}
              className="flex items-center bg-[#E6E6E8] dark:bg-[#1e2939] dark:text-gray-300 text-black px-3 py-1 rounded-full text-sm border dark:border-gray-400"
            >
              <span>{interest}</span>
              <button
                onClick={() => removeInterest(interest)}
                className="ml-2 text-black dark:text-gray-300 hover:text-purple-700 cursor-pointer"
              >
                <FaTimes className="text-xs" />
              </button>
            </div>
          ))}
          <div className="flex items-center gap-2">
            <Input
              type="text"
              value={newInterest}
              onChange={(e) => setNewInterest(e.target.value)}
              placeholder="Add new interest"
              className="py-2 px-3 border border-gray-300 dark:border-gray-400 rounded-md text-sm text-gray-800 bg-white dark:bg-[#1e2939] dark:text-gray-300"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={addInterest}
              className="rounded-full w-8 h-8 p-0 text-purple-600 border-purple-300 dark:bg-[#1e2939] dark:text-gray-300 dark:border-gray-400"
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);


const renderStep3 = () => (
  <div className="space-y-6">
    <p className="text-sm text-gray-600 dark:text-gray-400">
      Hint: Set your spending limits and when the campaign runs.
    </p>
    <div className="space-y-3">
      <CampaignSubHeader text="Budget & Schedule" />
      <div className="flex space-x-4">
        <Button
          variant={!lifetimeBudget ? "default" : "outline"}
          onClick={() => setLifetimeBudget(false)}
          className={`${
            !lifetimeBudget
              ? "bg-purple-600 text-white hover:bg-purple-700"
              : "dark:bg-[#1e2939] dark:text-gray-300 dark:border-gray-400"
          }`}
        >
          Daily Budget
        </Button>
        <Button
          variant={lifetimeBudget ? "default" : "outline"}
          onClick={() => setLifetimeBudget(true)}
          className={`${
            lifetimeBudget
              ? "bg-purple-600 text-white hover:bg-purple-700"
              : "dark:bg-[#1e2939] dark:text-gray-300 dark:border-gray-400"
          }`}
        >
          Lifetime Budget
        </Button>
      </div>

      {!lifetimeBudget ? (
        <div>
          <p className="text-sm dark:text-gray-300">Daily Budget</p>
          <Input
            type="text"
            value={dailyBudget}
            required
            onChange={(e) => setDailyBudget(e.target.value)}
            placeholder="Select Daily Budget"
            className="py-2 px-3 border border-gray-300 dark:border-gray-400 rounded-md text-sm text-gray-800 dark:text-gray-300 bg-white dark:bg-[#1e2939] focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
          {errors.dailyBudget && (
            <p className="text-red-500 text-xs mt-1">{errors.dailyBudget}</p>
          )}
        </div>
      ) : (
        <div>
          <p className="text-sm dark:text-gray-300">Lifetime Budget</p>
          <Input
            type="text"
            value={totalBudget}
            required
            onChange={(e) => setTotalBudget(e.target.value)}
            placeholder="Select Lifetime Budget"
            className="py-2 px-3 border border-gray-300 dark:border-gray-400 rounded-md text-sm text-gray-800 dark:text-gray-300 bg-white dark:bg-[#1e2939] focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
          {errors.totalBudget && (
            <p className="text-red-500 text-xs mt-1">{errors.totalBudget}</p>
          )}
        </div>
      )}

      <div className="flex gap-4">
        <div className="flex-1">
          <p className="text-sm dark:text-gray-300">Start Date</p>
          <Input
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
            value={startDate}
            className="py-2 px-3 border border-gray-300 dark:border-gray-400 rounded-md text-sm text-gray-800 dark:text-gray-300 bg-white dark:bg-[#1e2939] focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            required
          />
          {errors.startDate && (
            <p className="text-red-500 text-xs mt-1">{errors.startDate}</p>
          )}
        </div>

        <div className="flex-1">
          <p className="text-sm dark:text-gray-300">End Date</p>
          <Input
            type="date"
            onChange={(e) => setEndDate(e.target.value)}
            value={endDate}
            className="py-2 px-3 border border-gray-300 dark:border-gray-400 rounded-md text-sm text-gray-800 dark:text-gray-300 bg-white dark:bg-[#1e2939] focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            required
          />
          {errors.endDate && (
            <p className="text-red-500 text-xs mt-1">{errors.endDate}</p>
          )}
        </div>
      </div>
    </div>
  </div>
);


const renderStep4 = () => (
  <div className="space-y-6">
    <p className="text-sm text-gray-600 dark:text-gray-400">
      Hint: Create your ad content, upload media, and preview how it looks.
    </p>

    {/* Headlines Section */}
    {(selectedPlatform === "Google" || selectedPlatform === "LinkedIn") && (
      <div>
        <CampaignSubHeader text="Headlines" />
        {errors.headline && (
          <p className="text-red-500 text-xs mt-1">{errors.headline}</p>
        )}
        <div className="space-y-2">
          {headline.map((value, index) => (
            <div key={index} className="relative">
              <Input
                type="text"
                value={value}
                required
                onChange={(e) => {
                  const newHeadlines = [...headline];
                  newHeadlines[index] = e.target.value;
                  setHeadLine(newHeadlines);
                }}
                placeholder={`Enter Headline ${index + 1} (max 30 characters)`}
                maxLength={30}
                className="py-2 px-3 border border-gray-300 dark:border-gray-400 rounded-md text-sm text-gray-800 dark:text-gray-300 bg-white dark:bg-[#1e2939] focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {value.length}/30 characters
              </p>
            </div>
          ))}
        </div>
      </div>
    )}

    {/* Ad Copy Section */}
    <div>
      <CampaignSubHeader text="Ad Copy" />
      <div className="mb-4 mt-5">
        <label htmlFor="bt" className="font-bold dark:text-gray-300">
          Company Info
        </label>
        <input
          id="bt"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Enter your company details"
          className="border border-gray-200 dark:border-gray-400 rounded-lg w-full py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-gray-800 dark:text-gray-300 bg-white dark:bg-[#1e2939]"
        />
      </div>

      <div className="mb-4 mt-5 flex flex-col">
        <label htmlFor="platform" className="font-bold dark:text-gray-300">
          Platform
        </label>
        <select
          id="platform"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="py-2 px-2 border border-gray-200 dark:border-gray-400 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-gray-800 dark:text-gray-300 bg-white dark:bg-[#1e2939]"
        >
          <option value="">Select Platform</option>
          <option value="Facebook">Facebook</option>
          <option value="Google">Google</option>
          <option value="Tiktok">Tiktok</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Instagram">Instagram</option>
        </select>
      </div>

      <div>
        <label className="font-bold dark:text-gray-300" htmlFor="prompt">
          Prompt
        </label>
        <textarea
          name="prompt"
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter a prompt to generate ad copy (e.g., 'Create an engaging ad for a summer sale')"
          className="border border-gray-200 dark:border-gray-400 w-full rounded-xl px-3 py-2 text-sm mt-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-gray-800 dark:text-gray-300 bg-white dark:bg-[#1e2939]"
          rows={4}
        />
        {errors.prompt && (
          <p className="text-red-500 text-xs mt-1">{errors.prompt}</p>
        )}
      </div>

      <button
        onClick={handleGenerateAdsData}
        disabled={!company || !platform || !prompt}
        className={`px-4 py-2 mt-4 rounded-3xl font-bold text-white cursor-pointer ${
          !company || !platform || !prompt
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#654FAE] hover:bg-[#5a4599]"
        }`}
      >
        Generate
      </button>
    </div>

    {/* Ad Media Section */}
    <div className="mt-5">
      <CampaignSubHeader text="Ad Media" />
      <div className="dark:bg-[#0f172a] bg-black rounded-md flex justify-center items-center gap-2 h-64 mx-6">
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt="Media Preview"
            className="max-h-full max-w-full object-contain"
          />
        ) : video ? (
          <video
            src={URL.createObjectURL(video)}
            controls
            className="max-h-full max-w-full object-contain"
          />
        ) : carousel && carousel.length > 0 ? (
          <div className="relative flex items-center">
            {Array.from(carousel).map((file, index) => (
              <img
                key={index}
                src={URL.createObjectURL(file)}
                alt={`Carousel ${index + 1}`}
                className="max-h-60 w-40 object-contain mx-2"
              />
            ))}
          </div>
        ) : (
          <p className="text-white dark:text-gray-400">No media uploaded</p>
        )}
      </div>

      <div className="flex justify-center items-center py-3 gap-4">
        <button
          onClick={saveDraft}
          className="px-4 py-2 rounded-3xl border border-[#8E6EFF] text-[#8E6EFF] font-bold hover:bg-[#F4F1FF] dark:hover:bg-[#2a2a3c]"
        >
          Save Draft
        </button>
        <button
          onClick={browseTemplates}
          className="px-4 py-2 rounded-3xl bg-gradient-to-r from-[#654FAE] via-[#C0AFFA] to-[#8E6EFF] text-white font-bold hover:opacity-90"
        >
          Browse Templates
        </button>
      </div>
    </div>

    {/* Prompt Section */}
    <div className="flex items-center w-full p-3 rounded-full bg-[#f5f3ff] dark:bg-[#1e2939] shadow-sm">
      <div className="relative text-blue-500">
        <select
          className="w-[100px] py-4 px-2 border border-gray-300 dark:border-gray-400 rounded-md text-sm bg-white dark:bg-[#1e2939] dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          onChange={(e) => console.log('Selected prompt type:', e.target.value)}
        >
          <option value="image">Image</option>
          <option value="text">Text</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Write a prompt to generate creative content..."
        className="flex-1 mx-3 text-sm bg-transparent outline-none text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500"
        onChange={(e) => console.log('Prompt input:', e.target.value)}
      />
      <button className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-md cursor-pointer">
        <FaWandMagicSparkles className="text-white" />
      </button>
    </div>

    {/* Ad Preview Section */}
    <div className="mt-5">
      <CampaignSubHeader text="Ad Preview" />
      <div className="flex justify-end">
        <div className="inline-flex items-center bg-white dark:bg-[#1e2939] border border-gray-300 dark:border-gray-400 rounded-full overflow-hidden text-sm font-medium">
          <button
            onClick={() => setSelected('mobile')}
            className={`px-4 py-3 transition-colors duration-200 ${
              selected === 'mobile'
                ? 'bg-purple-500 text-white'
                : 'text-black dark:text-gray-300'
            }`}
          >
            Mobile
          </button>
          <button
            onClick={() => setSelected('desktop')}
            className={`px-4 py-3 transition-colors duration-200 ${
              selected === 'desktop'
                ? 'bg-purple-500 text-white'
                : 'text-black dark:text-gray-300'
            }`}
          >
            Desktop
          </button>
        </div>
      </div>

      <div className="mt-7 flex justify-center">
        {selected === 'mobile' ? (
          <div className="border-8 border-gray-800 dark:border-gray-700 rounded-3xl p-4 max-w-xs bg-white dark:bg-[#1e2939]">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Mobile Preview"
                className="w-full h-auto rounded-md"
              />
            ) : video ? (
              <video
                src={URL.createObjectURL(video)}
                controls
                className="w-full h-auto rounded-md"
              />
            ) : carousel && carousel.length > 0 ? (
              <div className="relative">
                {Array.from(carousel).map((file, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(file)}
                    alt={`Carousel ${index + 1}`}
                    className={`w-full h-auto rounded-md ${index === 0 ? '' : 'hidden'}`}
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-600 dark:text-gray-400">
                No media uploaded for preview
              </p>
            )}
            <p className="mt-2 text-sm font-bold dark:text-gray-300">{title}</p>
            {selectedPlatform === 'Google' && headline.filter((h) => h).length > 0 && (
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {headline.filter((h) => h)[0]}
              </p>
            )}
          </div>
        ) : (
          <div className="border border-gray-300 dark:border-gray-400 p-4 max-w-2xl bg-white dark:bg-[#1e2939]">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Desktop Preview"
                className="w-full h-auto rounded-md"
              />
            ) : video ? (
              <video
                src={URL.createObjectURL(video)}
                controls
                className="w-full h-auto rounded-md"
              />
            ) : carousel && carousel.length > 0 ? (
              <div className="flex gap-2">
                {Array.from(carousel).map((file, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(file)}
                    alt={`Carousel ${index + 1}`}
                    className="w-1/3 h-auto rounded-md"
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-600 dark:text-gray-400">
                No media uploaded for preview
              </p>
            )}
            <p className="mt-2 text-sm font-bold dark:text-gray-300">{title}</p>
            {selectedPlatform === 'Google' && headline.filter((h) => h).length > 0 && (
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {headline.filter((h) => h).join(' | ')}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="flex justify-end mt-5">
        <button
          onClick={handleGenerate}
          className="px-3 py-2 text-white rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-md cursor-pointer hover:opacity-90"
        >
          Get AI Optimize Suggestions
          <FaWandMagicSparkles className="text-white ml-2" />
        </button>
      </div>
    </div>
  </div>
);

  const renderStep5 = () => (
    <div className="space-y-6">
      <p className="text-sm text-gray-600">Hint: Review all details before launching.</p>
      <div>
        <h3 className="font-bold">Campaign Objective</h3>
        <p>Objective: {selectedObjective}</p>
        <p>Platform: {selectedPlatform}</p>
        <p>Ad Type: {selectedAdType}</p>
        <p>Campaign Name: {campaignName}</p>
      </div>
      <div>
        <h3 className="font-bold">Audience & Targeting</h3>
        <p>Location: {locationCode}</p>
        <p>Age: {ageFrom} - {ageTo}</p>
        <p>Gender: {selectedGender}</p>
        <p>Interests: {interests.join(", ")}</p>
      </div>
      <div>
        <h3 className="font-bold">Budget & Schedule</h3>
        <p>Budget: {lifetimeBudget ? `Lifetime: ${totalBudget}` : `Daily: ${dailyBudget}`}</p>
        <p>Start: {startDate}</p>
        <p>End: {endDate}</p>
      </div>
      <div>
        <h3 className="font-bold">Creative & Preview</h3>
        <p>Title: {title}</p>
        {selectedPlatform === "Google" && (
          <p>Headlines: {headline.filter(h => h).join(", ")}</p>
        )}
        <p>Media: {video ? "Video uploaded" : image ? "Image uploaded" : carousel ? "Carousel uploaded" : "None"}</p>
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-[#F3F4F6] space-y-6 dark:bg-[#1e2939] dark:text-gray-300 rounded-[20px]">
      <p className="text-lg">
        <span>Ad Campaign/</span>
        <span className="ml-1 text-blue-500">Create New Ad</span>
      </p>
      {renderProgressBar()}
      <div className="mt-5">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
        {currentStep === 4 && renderStep4()}
        {currentStep === 5 && renderStep5()}
      </div>
      <div className="flex justify-between mt-8">
        {currentStep > 1 && (
          <OutlineButton onClick={handleBack}>Back</OutlineButton>
        )}
        {currentStep < steps.length ? (
          <PrimaryButton onClick={handleNext}>Next</PrimaryButton>
        ) : (
          <PrimaryButton onClick={handleSubmit}>
            <span className="flex items-center gap-2">
              {loading && (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              )}
              {loading ? "Launching Campaign..." : "Launch Campaign"}
            </span>
          </PrimaryButton>
        )}
      </div>
    </div>
  );
};

export default DashboardCampaignCreateLatest;