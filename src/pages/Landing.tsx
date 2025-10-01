import CommonWrapper from "@/common/CommonWrapper";
import bannerVid from "../assets/bannerVid.mp4";
import { Banner } from "@/components/LandingPage/Banner";
import { Rating } from "@/components/LandingPage/Rating";
import { Services } from "@/components/LandingPage/Services";
import { Marketing } from "@/components/LandingPage/Marketing";
import MyCarousel from "@/components/LandingPage/Carousel";
import { HowWorks } from "@/components/LandingPage/HowWorks";
import { Inspiration } from "@/components/LandingPage/Inspiration";
import { Review } from "@/components/LandingPage/Review";
import { Pricing } from "@/components/LandingPage/Pricing";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

const Landing: React.FC = () => {
  const location = useLocation();
  const { isDarkMode } = useTheme();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="relative bg-white dark:bg-gray-900">
      {/* Hero Section with Background */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Conditional background - video for light mode, dark overlay for dark mode */}
        {!isDarkMode ? (
          <>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
            >
              <source src={bannerVid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Light overlay to improve text readability */}
            <div className="absolute inset-0 dark:bg-black/20" />
          </>
        ) : (
          <div className="absolute inset-0 bg-black opacity-70" />
        )}

        <CommonWrapper>
          <div className="relative z-10 pt-34 pb-18 text-white dark:text-gray-200">
            <Banner />
            <Rating />
          </div>
        </CommonWrapper>
      </div>

      {/* Content Sections with proper backgrounds */}
      <div className="bg-white dark:bg-gray-900">
        <div className="">
          <Services />
        </div>
        <div className="mt-10">
          <Marketing />
        </div>
        <div className="mb-10">
          <MyCarousel />
        </div>
        <div className="mb-10">
          <HowWorks />
        </div>
        <div className="mb-10">
          <Inspiration />
        </div>
        <div className="mb-10">
          <Review />
        </div>
        <div className="mb-10">
          <Pricing />
        </div>
      </div>
    </div>
  );
};

export default Landing;