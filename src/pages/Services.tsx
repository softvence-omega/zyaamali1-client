import chat from "../assets/chatpic.png";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import work4 from "../assets/work4.png";
import serviceVideo from "../assets/servicevideo.mp4";
import serviceBack from "../assets/serviceback.png";

const Services = () => {
  return (
    <section>
      <div>
        {/* for the upper description */}
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
              <span className="text-black block">Assistant</span>
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

        {/* for the chat pic */}
        <div className="flex flex-col items-center justify-center py-12 px-4 max-w-7xl container mx-auto">
          <img src={chat} alt="Chat illustration" className="w-full " />
        </div>

        {/* description section */}
        <div className="container mx-auto flex flex-col gap-6 py-8 px-4 sm:px-6 items-start justify-start">
          <h1 className="text-3xl font-bold">About This Service</h1>
          <p className="text-T-500 w-full md:w-[70%]">
            Lorem ipsum dolor sit amet consectetur. In fringilla fames facilisis
            vulputate gravida blandit leo habitant. Ullamcorper justo adipiscing
            amet consequat ut metus aliquam eget sed. Nulla nunc velit lacinia
            ultricies. Aenean amet venenatis cursus egestas non odio. Tellus
            morbi tempus eu pharetra libero felis euismod vitae. Venenatis id
            sagittis in in vulputate. Nisi cras aenean neque lacus odio. Sed
            hendrerit tristique nullam sit amet pharetra cursus dictum. Neque
            nec iaculis sit elementum leo. Lorem ipsum dolor sit amet
            consectetur. In fringilla fames facilisis vulputate gravida blandit
            leo habitant. Ullamcorper justo adipiscing amet consequat ut metus
            aliquam eget sed. Nulla nunc velit lacinia ultricies. Aenean amet
            venenatis cursus egestas non odio. Tellus morbi tempus eu pharetra
            libero felis euismod vitae. Venenatis id sagittis in in vulputate.
            Nisi cras aenean neque lacus odio. Sed hendrerit tristique nullam
            sit amet pharetra cursus dictum. Neque nec iaculis sit elementum
            leo.
            {/* Truncated for brevity */}
          </p>
        </div>

        {/* grid image section */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-6xl py-8 px-4">
          <img
            src={work1}
            alt="Work 1"
            className="w-full h-auto object-cover"
          />
          <img
            src={work2}
            alt="Work 2"
            className="w-full h-auto object-cover"
          />
          <img
            src={work3}
            alt="Work 3"
            className="w-full h-auto object-cover"
          />
          <img
            src={work4}
            alt="Work 4"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* banner with video background */}
        <div className="relative w-full h-[600px] md:h-[800px] overflow-hidden mt-10 rounded-3xl mb-24 mx-4 sm:mx-auto max-w-7xl">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={serviceVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-3xl sm:text-4xl md:text-7xl font-bold text-center mb-12">
              Let Adelo <span className="outline-text">Optimize</span> <br />
              <span className="outline-text"> Your Campaign</span> <br />
              <span className="italic">Effortlessly</span>
            </h1>

            <div className="flex gap-4 mt-6 flex-wrap justify-center">
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
    </section>
  );
};

export default Services;
