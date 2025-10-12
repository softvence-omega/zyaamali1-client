import CommonWrapper from "@/common/CommonWrapper";
import serviceBack from "../../assets/serviceback.png";
const Banner = () => {
  return (
    <div className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center text-center overflow-hidden bg-gray-50 dark:bg-gray-900">
    <CommonWrapper>
        {/* Background Image with Dark Mode Overlay */}
      <div className="absolute inset-0 z-1">
        <img
          src={serviceBack}
          alt="Service Background"
          className="w-full h-full object-cover dark:opacity-40"
        />
        {/* Gradient overlay for better text readability in dark mode */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50 dark:to-gray-900" />
      </div>

      {/* Foreground text */}
      <div className="relative z-20 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-center">
          <span className="bg-gradient-to-b from-[#8E6EFF] via-[#654FAE] to-[#000000] dark:from-[#C0AFFA] dark:via-[#8E6EFF] dark:to-white bg-clip-text text-transparent mb-4">
            Sterling Chatbot
          </span>
          <span className="text-black dark:text-white block mt-2 font-semibold">Assistant</span>
        </h1>

        <p className="text-gray-700 dark:text-gray-200 mt-6 sm:text-lg max-w-4xl mx-auto leading-relaxed font-medium">
          Sterling is your personal AI marketing assistant — ready to help
          you brainstorm, create, and optimize marketing campaigns anytime
          you need. Unlike traditional bots, Sterling offers smart,
          contextual advice based on your unique business needs and campaign
          performance data, acting as a trusted partner in your marketing
          journey.
        </p>
        
        {/* Additional visual element for dark mode */}
        <div className="mt-8 flex justify-center">
          <div className="w-20 h-1 bg-gradient-to-r from-[#8E6EFF] to-[#654FAE] dark:from-[#C0AFFA] dark:to-[#8E6EFF] rounded-full" />
        </div>
      </div>
    </CommonWrapper>
    </div>
  )
}

export default Banner