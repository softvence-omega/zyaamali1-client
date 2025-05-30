import chat from "../assets/chatpic.png";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import work4 from "../assets/work4.png";
import serviceVideo from "../assets/servicevideo.mp4";

const Services = () => {
  return (
    <section>
      <div>
        {/* for the upper description */}
        <div></div>

        {/* for the chat pic */}
        <div className="flex flex-col items-center justify-center py-12">
          <img src={chat} alt="Chat illustration" />
        </div>

        {/* description section */}
        <div className="container mx-auto flex flex-col gap-6 py-8 items-start justify-start">
          <h1 className="text-3xl font-bold">About This Service</h1>
          <p className="text-T-500 w-[70%]">
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
          </p>
        </div>

        {/* grid image section */}
        <div className="container mx-auto grid grid-cols-2 gap-5 max-w-6xl py-8">
          <img src={work1} alt="Work 1" />
          <img src={work2} alt="Work 2" />
          <img src={work3} alt="Work 3" />
          <img src={work4} alt="Work 4" />
        </div>

        {/* banner with video background */}
        <div className="relative w-full h-[800px] overflow-hidden mt-10 container mx-auto rounded-4xl mb-24">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={serviceVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-4xl md:text-7xl font-bold text-center mb-12">
              Let Adelo <span className="outline-text">Optimize</span> <br />
              <span className="outline-text"> Your Campaign</span> <br />
              <span className="italic">Effortlessly</span>
            </h1>

            <div className="flex gap-4 mt-6 flex-wrap justify-center">
              <button className="bg-gradient-to-r from-[#654FAE] via-[#A891FB] cursor-pointer to-[#8E6EFF] text-white px-6 py-3 rounded-2xl font-semibold hover:opacity-90 transition duration-300">
                Start Your Free Trial
              </button>
              <button className="border border-blue-500 text-blue-500 px-6 py-3 cursor-pointer rounded-2xl font-semibold ">
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
