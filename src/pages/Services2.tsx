import chat from "../assets/campaignservice.png";
import img1 from "../assets/img-1.png";
import img2 from "../assets/img-2.png";
import img3 from "../assets/img-3.png";
import img4 from "../assets/img-4.png";
import serviceVideo from "../assets/servicevideo.mp4";
import serviceBack from "../assets/serviceback.png";
import HeroSection from "@/components/Reuseable/HeroSection";

const Services2 = () => {
  return (
    <section>
      <div>
        {/* for the upper description */}
        <div className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center text-center overflow-hidden">
      

          {/* Foreground text */}
         
      
            <HeroSection
              backgroundImage={serviceBack}
              titleTop="Ad Campaign "
              titleBottom="Automation"
              description="Ad Campaign Automation is your full-service marketing manager on
              autopilot. It takes the heavy lifting out of creating and managing
              ad campaigns by automating the entire process from start to
              finish. From writing compelling ad copy and generating
              eye-catching visuals to defining target audiences and optimizing
              budgets, this tool delivers performance-driven campaigns with
              minimal manual input."
            />

   
        </div>

        {/* for the chat pic */}
        <div className="flex flex-col items-center justify-center py-12 px-4 max-w-7xl container mx-auto">
          <img src={chat} alt="Chat illustration" className="w-full h-auto" />
        </div>

        {/* description section */}
        <div className="container mx-auto flex flex-col gap-6 py-8 px-4 sm:px-6 items-start justify-start">
          <h1 className="text-5xl sm:text-3xl font-bold dark:text-white">
            About This Service
          </h1>
          <p className="text-T-500 dark:text-gray-300 w-full md:w-[70%] text-base sm:text-lg">
            Launch full AI-powered automated ad campaigns in minutes. Adelo
            handles audience targeting, budget allocations, performance
            optimization, and strategy adjustment, so you don't have to.
          </p>
        </div>

        {/* How It Works section */}
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-T-900 dark:text-white font-bold text-3xl sm:text-5xl">
              How It Works
            </h1>
          </div>

          {/* Section 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="md:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-4 bg-gradient-to-b from-[#8E6EFF] to-[#000000] dark:from-[#8E6EFF] dark:to-white bg-clip-text text-transparent block">
                01
              </h2>
              <h1 className="font-bold text-T-900 dark:text-white text-4xl mb-2">
                Input Your Campaign Details
              </h1>
              <p className="text-T-600 dark:text-gray-300 text-base sm:text-lg">
                Start by providing Sterling, your AI marketing assistant, with a
                brief overview of your business, goals, and target audience.
                This helps tailor your campaigns to fit your unique needs.Start
                by providing Sterling, your AI marketing assistant, with a brief
                overview of your business, goals, and target audience. This
                helps tailor your campaigns to fit your unique needs.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img1} alt="Step 1" className="w-full h-auto" />
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
            <div className="md:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-4 bg-gradient-to-b from-[#8E6EFF] to-[#000000] dark:from-[#8E6EFF] dark:to-white bg-clip-text text-transparent block">
                02
              </h2>
              <h1 className="font-bold text-T-900 dark:text-white text-4xl mb-2">
                AI Crafts Your Ad Creatives
              </h1>
              <p className="text-T-600 dark:text-gray-300 text-base sm:text-lg">
                AI automatically creates compelling ad copy, eye-catching
                images, and videos based on your inputs. You can review,
                customize, and approve the creatives before launch.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img2} alt="Step 2" className="w-full h-auto" />
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="md:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-4 bg-gradient-to-b from-[#8E6EFF] to-[#000000] dark:from-[#8E6EFF] dark:to-white bg-clip-text text-transparent block">
                03
              </h2>
              <h1 className="font-bold text-T-900 dark:text-white text-4xl mb-2">
                Setup Targeting Rules
              </h1>
              <p className="text-T-600 dark:text-gray-300 text-base sm:text-lg">
                AI tailors audience targeting by analyzing your objectives and
                market data. It helps you reach the right people effectively.
                This ensures your marketing efforts align with your business
                goals.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img3} alt="Step 3" className="w-full h-auto" />
            </div>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-4 bg-gradient-to-b from-[#8E6EFF] to-[#000000] dark:from-[#8E6EFF] dark:to-white bg-clip-text text-transparent block">
                04
              </h2>
              <h1 className="font-bold text-T-900 dark:text-white text-4xl mb-2">
                Continuous Optimization
              </h1>
              <p className="text-T-600 dark:text-gray-300 text-base sm:text-lg">
                The platform tracks real-time feedback and market dynamics to
                enhance your campaigns automatically. It ensures your strategies
                are always aligned with current trends. This way, you can
                maximize your results effortlessly.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={img4} alt="Step 4" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* banner with video background */}
        <div className="relative w-full h-[600px] sm:h-[700px] md:h-[800px] overflow-hidden mt-10 rounded-3xl mb-24 mx-auto max-w-7xl px-4 lg:px-0">
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
              <button className="border border-blue-500 dark:border-white text-blue-500 dark:text-white px-6 py-3 rounded-2xl font-semibold">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services2;
