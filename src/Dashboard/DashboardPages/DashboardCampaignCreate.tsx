"use client";

import { useState } from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaTwitter,
  FaTiktok,
  FaYoutube,
  FaImage,
  FaMousePointer,
  FaImages,
  FaPlay,
  FaFont,
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

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import CampaignSubHeader from "@/components/Dashboard/campaign/CampaignSubHeader";

const DashboardCampaignCreate = () => {
  const [selected, setSelected] = useState("mobile");
  const [selectedGender, setSelectedGender] = useState("All");
  const [interests, setInterests] = useState([
    "Fitness",
    "Running",
    "Outdoor Activities",
  ]);

  const removeInterest = (interest: string) => {
    setInterests(interests.filter((i) => i !== interest));
  };

  const objectives = [
    {
      icon: ImBullhorn,
      label: "Brand Awareness",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: IoMagnetSharp,
      label: "Lead Generation",
      color: "bg-gray-100 text-gray-600",
    },
    {
      icon: BsFillBarChartLineFill,
      label: "Sales",
      color: "bg-gray-100 text-gray-600",
    },
    {
      icon: FaPeopleGroup,
      label: "Engagement",
      color: "bg-gray-100 text-gray-600",
    },
  ];

  const platforms = [
    { icon: FaFacebookF, color: "text-blue-600" },
    { icon: FaGoogle, color: "text-red-500" },
    { icon: FaLinkedinIn, color: "text-blue-700" },
    { icon: FaTwitter, color: "text-black" },
    { icon: FaTiktok, color: "text-black" },
    { icon: FaYoutube, color: "text-red-600" },
  ];

  const adTypes = [
    { icon: FaImage, label: "Image Ads" },
    { icon: FaMousePointer, label: "Interactive Ads" },
    { icon: FaImages, label: "Carousel Ads" },
    { icon: FaPlay, label: "Slideshow Ads" },
    { icon: FaFont, label: "Text Ads" },
    { icon: FaCog, label: "Dynamic Ads" },
    { icon: FaVideo, label: "Video Ads" },
    { icon: FaInstagram, label: "Story Ads" },
    { icon: FaShoppingCart, label: "Shopping Ads" },
  ];
  return (
    <div>
      <p className="text-lg ">
        <span>Ad Campaign/</span>
        <span className="ml-1 text-blue-500">Create New Ad</span>
      </p>
      <div className="flex gap-9 mt-5">
        {/* **********left side section****************************************************************************** */}
        <div className="flex-1 bg-[#F3F4F6] rounded-[20px] p-4 space-y-5">
          <h5 className="text-3xl font-semibold">Create New Ad Campaign</h5>
          <div className="border border-gray-300 my-3" />
          {/* business information section */}
          <div>
            <CampaignSubHeader text="Business Information" />
            <div>
              <Select>
                <SelectTrigger className="w-full py-2">
                  <SelectValue placeholder="Acme Sportswear" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="light">Acme Sportswear</SelectItem>
                  <SelectItem value="dark">Target Audience</SelectItem>
                  <SelectItem value="system">Primary Goals</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* title add section */}
          <div>
            <CampaignSubHeader text="Add Title" />
            <div>
              <Input type="text" />
            </div>
          </div>

          {/* Ad Objective */}

          <div>
            <CampaignSubHeader text="Ad Objective" />

            <div className="grid grid-cols-2 gap-3">
              {objectives.map((objective, index) => (
                <div
                  key={index}
                  className={`flex justify-center  items-center gap-2 p-3 rounded-lg border cursor-pointer ${objective.color}`}
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

            <div className="flex justify-between">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-[#E6E6E8] px-7 py-5 rounded-lg border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-[#F4F1FF]"
                >
                  <platform.icon className={`text-3xl ${platform.color}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Ad Type */}

          <div>
            <CampaignSubHeader text="Ad Type" />
            <div className="grid grid-cols-3 gap-3">
              {adTypes.map((adType, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 gap-2 rounded-lg border bg-[#E6E6E8] border-gray-200 cursor-pointer hover:bg-gray-50"
                >
                  <adType.icon className="text-lg text-gray-600" />
                  <span className="text-xs text-center text-gray-700">
                    {adType.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Audience */}
          <div className="space-y-4">
            <CampaignSubHeader text=" Target Audience" />
            {/* Location */}
            <div>
              <p className="text-sm">Location</p>

              <Select defaultValue="united-states">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="united-states">United States</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Age range */}
            <div>
              <p className="text-sm">Age range</p>
              <div className="flex items-center gap-2">
                <Select defaultValue="18">
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="united-states">18</SelectItem>
                    <SelectItem value="canada">19</SelectItem>
                    <SelectItem value="uk">20</SelectItem>
                  </SelectContent>
                </Select>
                <p>To</p>
                <Select defaultValue="18">
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="united-states">18</SelectItem>
                    <SelectItem value="canada">19</SelectItem>
                    <SelectItem value="uk">20</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            {/* Gender */}
            <div>
              <CampaignSubHeader text="Gender" />
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

              <Select defaultValue="50">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="50">$50</SelectItem>
                  <SelectItem value="100">$100</SelectItem>
                  <SelectItem value="150">$150</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Total Budget */}
            <div>
              <p className="text-sm">Total Budget</p>

              <Select defaultValue="500">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="500">$500</SelectItem>
                  <SelectItem value="1000">$1000</SelectItem>
                  <SelectItem value="1500">$1500</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* date */}
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-sm">Start Date</p>
                <Input type="date" />
              </div>
              <div className="flex-1">
                <p className="text-sm">End Date</p>
                <Input type="date" />
              </div>
            </div>
          </div>
        </div>
        {/* **********right side section****************************************************************************** */}
        <div className="flex-1">
          <div className="flex justify-end items-center gap-5">
            <button className="px-4 py-2 rounded-3xl border cursor-pointer text-T-100 font-bold">
              Save Draft
            </button>
            <button className="px-4 py-2 rounded-3xl bg-gradient-to-r from-[#654FAE] via-[#C0AFFA] to-[#8E6EFF] cursor-pointer text-T-100 font-bold">
              Launch Campaign
            </button>
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
                  value={
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
                  value={
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
            <div className="relative text-blue-500 ">
              <Select>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Image" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Image</SelectItem>
                  <SelectItem value="dark">Text</SelectItem>
                </SelectContent>
              </Select>
              {/* Dropdown options can be added here */}
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
              <button className="px-3 py-2 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-md cursor-pointer">
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
