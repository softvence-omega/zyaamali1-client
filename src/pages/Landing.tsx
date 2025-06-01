import CommonWrapper from "@/common/CommonWrapper";
import bannerVid from "../assets/bannerVid.mp4";
import bannerImg from "../assets/bgbannerImg.png"; // Import the image if needed
import { Banner } from "@/components/LandingPage/Banner";
import { Rating } from "@/components/LandingPage/Rating";
import { Services } from "@/components/LandingPage/Services";
import { Marketing } from "@/components/LandingPage/Marketing";
import MyCarousel from "@/components/LandingPage/Carousel";
import { HowWorks } from "@/components/LandingPage/HowWorks";
import { Inspiration } from "@/components/LandingPage/Inspiration";
import { Review } from "@/components/LandingPage/Review";
import { Pricing } from "@/components/LandingPage/Pricing";

function Landing() {
  return (
    <div>
      <div className=" bg-T-400 relative overflow-hidden pb-20"> {/* Added relative and overflow-hidden */}
        <video
          autoPlay
          loop
          muted
          playsInline // Recommended for better mobile compatibility
          className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
        >
          <source src={bannerVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <img
          src={bannerImg} // Use the image as a fallback or for additional styling
          alt="Banner Background"
          className="absolute top-8 -right-[45%] w-full h-full object-contain  " // Adjust opacity as needed
        />


        <CommonWrapper>
          <div className="pt-34 relative z-10 "> {/* Added relative and z-10 to ensure content is above video */}
            {/* Your content here */}
            <Banner></Banner>
            <Rating></Rating>

          </div>
        </CommonWrapper>

      </div>
      <Services></Services>
      <Marketing></Marketing>
      <div className="mb-10">
        <MyCarousel></MyCarousel>
      </div>
      <div className="mb-10">
        <HowWorks></HowWorks>
      </div>
      <div className="mb-10">
        <Inspiration></Inspiration>
      </div>
      <div className="mb-10">
        <Review></Review>
      </div>
      <div className="mb-10">
        <Pricing></Pricing>
      </div>
    </div>
  );
}

export default Landing;