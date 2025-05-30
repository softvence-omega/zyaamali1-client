import andImg from '../../assets/&.png'
import vissionImg from '../../assets/Vector 6.png'

const MissionVision = () => {
  return (
   <div>
  <div className="flex flex-col md:flex-row min-h-screen font-sans">
    {/* Left Side */}
    <div className="bg-[#F6F3FF] flex-1 flex items-center justify-center p-10 w-full">
      <img src={vissionImg} alt="" className="w-75" />
    </div>

    {/* Right Side */}
    <div className="bg-[#0C0C1D] flex-1 text-white flex flex-col justify-center w-full px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-20 space-y-12 md:space-y-24">
      {/* Mission */}
      <div>
        <p className="text-[#7C7AFD] text-sm mb-2">Our Mission</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-snug">
          Revolutionizing the way marketers work with AI.
        </h2>
        <p className="text-base md:text-lg text-[#AFAFBF] leading-relaxed">
          AI Marketing Hub was founded to bridge the gap between creativity and automation. We believe marketers
          should spend less time on manual tasks and more time on big ideas. That’s why we built a platform that
          thinks, writes, creates, and optimizes — so you can focus on strategy and growth.
        </p>
      </div>

      {/* Vision */}
      <div>
        <p className="text-[#7C7AFD] text-sm mb-2">Our Vision</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-snug">
          To become the go-to AI platform for modern marketing.
        </h2>
        <p className="text-base md:text-lg text-[#AFAFBF] leading-relaxed">
          We're building a future where anyone can launch high-performing campaigns without needing an agency or
          technical skills — just smart tools and real results.
        </p>
      </div>
    </div>
  </div>

  {/* Mission & Vision Text at Bottom */}
  <h1 className="hidden lg:block text-[90px] font-bold absolute bottom-10 left-[28.8%] leading-none text-center">
    Mission <img src={andImg} className="w-18 inline-block" /> <span className="text-white">Vision</span>
  </h1>
</div>

  );
};

export default MissionVision;
