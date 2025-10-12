import starling from '../../assets/starling.png';
import addCampagin from '../../assets/ad-campaign.png';
import content from '../../assets/fi_6663539.png';
import aiPowered from '../../assets/ai-powered.png';
import CommonWrapper from '@/common/CommonWrapper';

const FeaturesSection = () => {
  const features = [
    {
      icon: starling,
      title: "Sterling",
      description: "Get personalized advice, strategy recommendations, and insights tailored to your business goals.",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: addCampagin,
      title: "Ad Campaign Automation",
      description: "Automate the creation, optimization, and tracking of your ads, saving time and improving campaign performance.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: content,
      title: "Content & Copy Generation",
      description: "Quickly generate high-quality content for social media, email campaigns, and ads with customizable templates to match your brand.",
      gradient: "from-cyan-500 to-green-500"
    },
    {
      icon: aiPowered,
      title: "AI-Powered Feedback Loop",
      description: "Receive actionable feedback on your marketing materials to ensure they are clear, relevant, and impactful.",
      gradient: "from-green-500 to-purple-500"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 font-sans px-4 sm:px-6 md:px-12 lg:px-24 py-16 md:py-24">
  <CommonWrapper>
        {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-[#8a72dfe8] to-[#A891FB] dark:from-[#A891FB] dark:to-[#C0AFFA] bg-clip-text text-transparent">
            AI-Powered Marketing
          </span>
          <br />
          <span className="text-gray-900 dark:text-white">
            Tools That Scale With Your Business
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mx-auto max-w-2xl ">
          Transform your marketing strategy with intelligent automation. From content creation to campaign optimization, 
          we provide the tools you need to succeed in today's digital landscape.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-transparent"
          >
            {/* Gradient Border Effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            
            {/* Icon Container */}
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="w-8 h-8 dark:invert dark:opacity-90" 
                />
              </div>
              {/* Floating Gradient Dot */}
              <div className={`absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r ${feature.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#8a72dfe8] group-hover:to-[#A891FB] group-hover:bg-clip-text transition-all duration-300">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
              {feature.description}
            </p>

            {/* Hover Arrow */}
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-r from-[#8a72dfe8] to-[#A891FB] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16 md:mt-20">
        <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#8a72dfe8] to-[#A891FB] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
          <span className="text-white font-semibold text-lg">Explore All Features</span>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
            <svg className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
  </CommonWrapper>
    </div>
  );
};

export default FeaturesSection;