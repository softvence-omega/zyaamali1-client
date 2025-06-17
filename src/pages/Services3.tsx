import SectionBlock from "@/components/Reuseable/SectionBlock";
import img from "../assets/image (1).png";
import HeroSection from "@/components/Reuseable/HeroSection";
import serviceBack from "../assets/serviceback.png";
import serviceVideo from "../assets/servicevideo.mp4";
import img1 from "../assets/Frame 349.png";
import img2 from "../assets/img-2.png";
import img3 from "../assets/Frame 350.png";

const longDescription = `
Generate scroll-stopping videos, images, and ad copy tailored to your business and 
audience—all driven by AI and refined through your brand voice. 
`;

function Services3() {
  return (
    <div className="w-full">
       {/* Hero Section */}
        <HeroSection
          backgroundImage={serviceBack}
          titleTop="Content & Copy "
          titleBottom="Generation"
          description="Generating fresh, engaging content is one of the biggest challenges marketers face. Our Content & Copy Generation tool makes it easy by instantly creating high-quality written and visual content that aligns with your brand voice and campaign objectives. Whether you need social media posts, email subject lines, blog snippets, or ad copy, this AI-driven tool delivers tailored content that resonates."
        />
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
       

        {/* SectionBlock */}
        <SectionBlock
          img={img}
          title="About This Service"
          description={longDescription}
          subTitle="Content Generation about:"
        />

 <div className="   py-12">
      <div className="max-w-7xl mx-auto ">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-T-900 font-bold text-3xl sm:text-5xl">
            How It Works
          </h1>
        </div>

        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center  mb-20">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-4 bg-gradient-to-b from-[#8E6EFF] to-[#000000] bg-clip-text text-transparent block">
              01
            </h2>
            <h3 className="font-bold text-T-900 text-3xl sm:text-4xl mb-3">
            Provide Your Campaign Goals & Audience Details
            </h3>
            <p className="text-T-600 text-base sm:text-lg">
              Start by sharing key details about your business, campaign objectives, and target audience. Whether you want to drive sales, increase brand awareness, or generate leads, Sterling tailors your content to align with your goals.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={img1} alt="Step 1" className=" h-auto rounded-xl" />
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-4 bg-gradient-to-b from-[#8E6EFF] to-[#000000] bg-clip-text text-transparent block">
              02
            </h2>
            <h3 className="font-bold text-T-900 text-3xl sm:text-4xl mb-3">
            AI Creates Tailored Content & Copy
            </h3>
            <p className="text-T-600 text-base sm:text-lg">
             Our AI assistant, Sterling, generates personalized content for you—whether it’s ad copy, email subject lines, social media posts, or landing page text. The content is crafted to match your brand tone and the specific requirements of each platform.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={img2} alt="Step 2" className="w-full h-auto rounded-xl" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-4 bg-gradient-to-b from-[#8E6EFF] to-[#000000] bg-clip-text text-transparent block">
              03
            </h2>
            <h3 className="font-bold text-T-900 text-3xl sm:text-4xl mb-3">
             Customize & Refine Your Content
            </h3>
            <p className="text-T-600 text-base sm:text-lg">
            You can review and customize the generated content. Add your personal touch, adjust tone, or make minor edits to ensure the message aligns perfectly with your vision.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={img3} alt="Step 3" className="w-full h-auto rounded-xl" />
          </div>
        </div>
      </div>
    </div>

        {/* Video Section */}
        <div className="relative w-full h-[600px] sm:h-[700px] md:h-[800px] overflow-hidden mt-10 rounded-3xl mb-24">
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
  );
}

export default Services3;
