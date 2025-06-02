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
               Empowering Marketers <br />with Smarter AI
              </span>
            </h1>

            <p className="text-T-600 mt-4  sm:text-lg max-w-6xl mx-auto">
              We're on a mission to make advanced marketing effortless, data-driven, and accessible to everyone — from solo entrepreneurs to growing teams.
            </p>
          </div>
        </div>
  )
}

export default Banner