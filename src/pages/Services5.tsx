import HeroSection from "@/components/Reuseable/HeroSection"
import serviceBack from "../assets/serviceback.png";
import img from "../assets/image (3).png";
import SectionBlock from "@/components/Reuseable/SectionBlock";
import serviceVideo from "../assets/servicevideo.mp4";
import marketing1 from "../assets/marketing-1.png";
import marketing2 from "../assets/marketing-2.png";
import marketing3 from "../assets/marketing-3.png";
import marketing4 from "../assets/marketing-4.png";

const longDescription = `  
Access a growing library of ready-to-use ad templates, customizable by industry, goal, and 
platform, to streamline your creative process.
`;


const Services5 = () => {
  return (
    <div>

     
      <HeroSection
          backgroundImage={serviceBack}
          titleTop="Marketing Template"
          titleBottom="Library"
          description="Our expansive Marketing Template Library provides professionally designed, customizable templates for every type of campaign. Whether you need social media graphics, email newsletters, or ad copy templates, you’ll find ready-made layouts and messaging frameworks tailored to your industry and marketing goals."
        />
      <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="md:w-2/3 mb-10">
        <h1 className="text-4xl font-semibold">Marketing Template Library</h1>
        <p className="mt-5">Our expansive Marketing Template Library provides professionally designed, customizable templates for every type of campaign. Whether you need social media graphics, email newsletters, or ad copy templates, you’ll find ready-made layouts and messaging frameworks tailored to your industry and marketing goals.</p>
       </div>

        
       

        {/* SectionBlock */}
        <SectionBlock
          img={img}
          title="About This Service"
          description={longDescription}
          subTitle="Templates about:"
        />


          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-7xl py-8 ">
          <img
            src={marketing1}
            alt="Work 1"
            className="w-full h-auto object-cover"
          />
          <img
            src={marketing2}
            alt="Work 2"
            className="w-full h-auto object-cover"
          />
          <img
            src={marketing3}
            alt="Work 3"
            className="w-full h-auto object-cover"
          />
          <img
            src={marketing4}
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

export default Services5
