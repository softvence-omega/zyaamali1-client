import andImg from '../../assets/&.png';
import vissionImg from '../../assets/Vector 6.png';

const MissionVision = () => {
  return (
    <div
      className="font-sans min-h-screen flex flex-col relative"
      style={{ height: 'calc((100vh - 50rem - 2.5rem) / 2)' }}
    >
      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Left Side */}
        <div className="bg-[#F6F3FF] flex-1 flex items-center justify-center p-10">
          <img src={vissionImg} alt="Vision Visual" className="max-w-full h-auto" />
        </div>

        {/* Right Side */}
        <div className="text-white flex-1 flex flex-col justify-center sm:px-3 md:px-5 lg:px-8 py-6 space-y-6 bg-black">
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

      {/* Mission & Vision Footer (absolute positioned with background) */}
      <h1
        className="misson-vission hidden lg:flex absolute left-1/2 transform -translate-x-1/2 bottom-10
           px-8 py-4 rounded-lg font-bold text-[90px] leading-none text-center text-black"
      >
        Mission
        <img src={andImg} className="w-20 inline-block mx-4" alt="and symbol" />
        <span className="text-white">Vision</span>
      </h1>
    </div>
  );
};

export default MissionVision;
