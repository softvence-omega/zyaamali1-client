import CommonWrapper from "@/common/CommonWrapper";
import elipse from "../../assets/Ellipse 5.png";

type Service = {
  id: string;
  title: string;
  description: string;
};

export const Services = () => {
  // Service data
  const data: Service[] = [
    {
      id: "1",
      title: "AI Marketing Assistant Sterling",
      description:
        "Get expert-level marketing guidance in real time. Sterling, your intelligent chatbot assistant, helps you strategize, build campaigns, and refine your content all through simple conversations.",
    },
    {
      id: "2",
      title: "Ad Campaign Automation",
      description:
        "Automate the full lifecycle of your ad campaigns—from generating copy and visuals to targeting the right audience and optimizing for performance. Just input your goal, and we'll do the rest.",
    },
    {
      id: "3",
      title: "Content & Copy Generation",
      description:
        "Effortlessly generate high-converting social media posts, emails, and ad copy with AI. Choose from ready-made templates or create content from scratch—fast, relevant, and always on-brand.",
    },
    {
      id: "4",
      title: "AI-Powered Feedback Loop",
      description:
        "Upload your marketing content and receive instant actionable insights. Improve clarity, engagement, and messaging based on proven marketing principles and AI analysis.",
    },
    {
      id: "5",
      title: "Marketing Template Library",
      description:
        "Access a growing library of customizable marketing templates for every channel—from social media to Google Ads. Save time and stay consistent with proven formats.",
    },
  ];

  return (
    <div className="bg-[#010610] relative">
      <CommonWrapper>
        {" "}
        <img
          src={elipse}
          alt="Background Ellipse"
          className="absolute top-0 left-0 z-0"
        />
        {/* Title */}
        <div className="flex justify-center items-center pt-20 pb-10 z-10">
          <h1 className="bg-gradient-to-b from-[#FFFFFF] to-[#8E6EFF] bg-clip-text text-transparent font-bold text-7xl lg:text-[90px] 2xl:text-[120px]">
            Services
          </h1>
        </div>
        {/* Service List */}
        <div className=" my-auto z-10">
          <div className="flex flex-col gap-10 py-6 sm:py-10">
            {data.map((service) => (
              <div
                key={service.id}
                className="flex justify-between items-center pb-8 border-b-2 border-gray-600"
              >
                <div className="flex-1">
                  <h2 className="text-3xl text-white font-light">
                    {service?.title}
                  </h2>
                </div>
                <div className="flex-1">
                  <p className="text-white/70">{service?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};
