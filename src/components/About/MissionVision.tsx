import andImg from '../../assets/&.png';
import vissionImg from '../../assets/Adelo_triangle only.svg';

const MissionVision = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Main Layout */}
      <div className="flex flex-col md:flex-row min-h-screen font-sans">
        {/* Left Side */}
        <div className="bg-[#F6F3FF] flex-1 flex items-center justify-center p-10 w-full">
          <img src={vissionImg} alt="Vision Illustration" className="max-w-full h-auto" />
        </div>

        {/* Right Side */}
        <div className="bg-[#0C0C1D] flex-1 text-white flex flex-col justify-center w-full px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-20 space-y-12 md:space-y-24">
          {/* Mission */}
          <div className="max-w-3xl mx-auto">
            <p className="text-[#7C7AFD] text-sm mb-2">Our Mission</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 leading-snug text-balance">
              Revolutionizing the way marketers work with AI.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#AFAFBF] leading-relaxed text-balance">
              AI Marketing Hub was founded to bridge the gap between creativity and automation. We believe marketers
              should spend less time on manual tasks and more time on big ideas. That’s why we built a platform that
              thinks, writes, creates, and optimizes — so you can focus on strategy and growth.
            </p>
          </div>

          {/* Vision */}
          <div className="max-w-3xl mx-auto">
            <p className="text-[#7C7AFD] text-sm mb-2">Our Vision</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 leading-snug text-balance">
              To become the go-to AI platform for modern marketing.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#AFAFBF] leading-relaxed text-balance">
              We're building a future where anyone can launch high-performing campaigns without needing an agency or
              technical skills — just smart tools and real results.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Text at Bottom */}
      <h1 className="hidden lg:flex items-center justify-center gap-4 text-3xl 2xl:text-5xl font-bold absolute bottom-10 left-[48.5%] -translate-x-1/2 leading-none text-center z-10 whitespace-nowrap">
        Mission
        <img src={andImg} alt="&" className="w-[40px] xl:w-[50px] h-auto inline-block align-middle" />
        <span className="text-white">Vision</span>
      </h1>
    </div>
  );
};

export default MissionVision;
