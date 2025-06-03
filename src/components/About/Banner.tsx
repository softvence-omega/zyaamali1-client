
import serviceBack from "../../assets/serviceback.png";
const Banner = () => {
  return (
    <div className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center text-center overflow-hidden">
          {/* Background Image (Centered Absolutely) */}
          <img
            src={serviceBack}
            alt="Service Background"
            className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-1"
          />

          {/* Foreground text */}
          <div className="relative z-20 px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-center">
              <span className="bg-gradient-to-b from-[#8E6EFF] to-[#000000] bg-clip-text text-transparent block">
                Sterling Chatbot
              </span>
              <span className="text-black block mt-2">Assistant</span>
            </h1>

            <p className="text-T-600 mt-4  sm:text-lg max-w-6xl mx-auto">
              Sterling is your personal AI marketing assistant — ready to help
              you brainstorm, create, and optimize marketing campaigns anytime
              you need. Unlike traditional bots, Sterling offers smart,
              contextual advice based on your unique business needs and campaign
              performance data, acting as a trusted partner in your marketing
              journey.
            </p>
          </div>
        </div>

  )
}

export default Banner