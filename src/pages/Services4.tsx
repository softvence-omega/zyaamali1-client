import HeroSection from "@/components/Reuseable/HeroSection"
import serviceBack from "../assets/serviceback.png";
import img from "../assets/image (2).png";
import SectionBlock from "@/components/Reuseable/SectionBlock";
import serviceVideo from "../assets/servicevideo.mp4";
import feed1 from "../assets/feed-1.png";
import feed2 from "../assets/feed-2.png";
import feed3 from "../assets/feed-3.png";
import feed4 from "../assets/feed4.png";

const longDescription = `
Our AI reviews your ads, strategy, and campaigns and offers instant feedback on visuals, tone, 
and call-to-action effectiveness, helping you improve performance before you publish.
`;


const Services4 = () => {
  return (
    <div>
      <HeroSection
          backgroundImage={serviceBack}
          titleTop="AI-Powered  "
          titleBottom="Feedback Loop"
          description="Before publishing your marketing materials, make sure they’re optimized for success. Our AI-Powered Feedback Loop analyzes your content and strategies in real-time, benchmarking them against best practices and industry standards. It identifies potential issues, highlights opportunities, and provides concrete recommendations to boost your campaign’s effectiveness."
        />
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
       

        {/* SectionBlock */}
        <SectionBlock
          img={img}
          title="About This Service"
          description={longDescription}
          subTitle="  AI Feedback about:"
        />


          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-7xl py-8 ">
          <img
            src={feed1}
            alt="Work 1"
            className="w-full h-auto object-cover"
          />
          <img
            src={feed2}
            alt="Work 2"
            className="w-full h-auto object-cover"
          />
          <img
            src={feed3}
            alt="Work 3"
            className="w-full h-auto object-cover"
          />
          <img
            src={feed4}
            alt="Work 4"
            className="w-full h-auto object-cover"
          />
        </div>


 

        {/* Video Section */}
        <div className="relative w-full h-[600px] sm:h-[700px] md:h-[800px] overflow-hidden mt-10 rounded-3xl mb-24  ">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={serviceVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col items-center justify-center text-center px-4 sm:px-8">
            <h1
              className="text-white font-bold text-center mb-12 leading-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 4.5rem)" }}
            >
              Let Adelo <span className="outline-text">Optimize</span> <br />
              <span className="outline-text">Your Campaign</span> <br />
              <span className="italic">Effortlessly</span>
            </h1>

            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <button className="bg-gradient-to-r from-[#654FAE] via-[#A891FB] to-[#8E6EFF] text-white px-6 py-3 rounded-2xl font-semibold hover:opacity-90 transition duration-300">
                Start Your Free Trial
              </button>
              <button className="border border-blue-500 text-blue-500 px-6 py-3 rounded-2xl font-semibold">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

      </div>
      </div>
    
      
  
  )
}

export default Services4
