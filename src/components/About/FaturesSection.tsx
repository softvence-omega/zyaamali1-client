import starling from '../../assets/starling.png';
import addCampagin from '../../assets/ad-campaign.png';
import content from '../../assets/fi_6663539.png';
import aiPowered from '../../assets/ai-powered.png';

const FeaturesSection = () => {
  return (
    <div className="bg-white text-black font-sans px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-20">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-left max-w-5xl mb-12 sm:mb-16">
        At ADELO, we offer <span className="text-[#8a72dfe8]">AI tools to</span> <br />
        <span>automate and <span className="text-[#8a72dfe8]">enhance your</span></span> <br />
        <span>marketing <span className="text-[#8a72dfe8]">campaigns, tailored for</span></span> <br />
        <span>businesses <span className="text-[#8a72dfe8]">of all sizes.</span></span>
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 border-black/10">
        {/* Card 1 */}
        <div className="border-b border-r border-black/10 p-6 sm:p-8 md:p-10">
          <img src={starling} alt="Sterling" className="w-12 h-12 sm:w-16 sm:h-16 mb-4" />
          <h2 className="text-3xl text-[#1E1B4B] font-semibold mb-2">Sterling</h2>
          <p className="text-sm text-black/70 leading-relaxed">
            Get personalized advice, strategy recommendations, and <br /> insights tailored to your business goals.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border-b border-black/10 p-6 sm:p-8 md:p-10">
          <img src={addCampagin} alt="Ad Campaign" className="w-12 h-12 sm:w-16 sm:h-16 mb-4" />
          <h2 className="text-3xl text-[#1E1B4B] font-semibold mb-2">Ad Campaign Automation</h2>
          <p className="text-sm text-black/70 leading-relaxed">
            Automate the creation, optimization, and tracking of <br /> your ads, saving time and improving campaign performance.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border-r border-black/10 p-6 sm:p-8 md:p-10">
          <img src={content} alt="Content & Copy" className="w-12 h-12 sm:w-16 sm:h-16 mb-4" />
          <h2 className="text-3xl text-[#1E1B4B] font-semibold mb-2">Content & Copy Generation</h2>
          <p className="text-sm text-black/70 leading-relaxed">
            Quickly generate high-quality content for social media, <br /> email campaigns, and ads, with customizable templates <br /> to match your brand.
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-6 sm:p-8 md:p-10">
          <img src={aiPowered} alt="AI Feedback" className="w-12 h-12 sm:w-16 sm:h-16 mb-4" />
          <h2 className="text-3xl text-[#1E1B4B] font-semibold mb-2">AI-Powered Feedback Loop</h2>
          <p className="text-sm text-black/70 leading-relaxed">
            Receive actionable feedback on your marketing <br /> materials to ensure they are clear, relevant, and <br /> impactful.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
