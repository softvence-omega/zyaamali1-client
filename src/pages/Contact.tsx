import serviceBack from "../assets/serviceback.png";
import serviceVideo from "../assets/servicevideo.mp4";
import cornerbg from "../assets/cornerbg.png";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What is ADELO?",
    answer:
      "Adelo is an AI-powered marketing platform that helps businesses create, launch, and optimizead campaigns across channels automatically. It’s like having a full marketing team, without the costs.",
  },
  {
    question: "Can I integrate Adelo with my social media accounts?",
    answer:
      "Yes, Adelo supports integration with major platforms like Facebook, Instagram, and Google Ads.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Absolutely! You can start with a 14-day free trial — no credit card required.",
  },
  {
    question: "How do I measure campaign success?",
    answer:
      "Adelo offers real-time analytics and performance metrics, accessible via your dashboard.",
  },
  {
    question: "Is customer support available?",
    answer:
      "Yes, our support team is available 24/7 via chat and email to assist you.",
  },
  {
    question: "Is customer support available?",
    answer:
      "Yes, our support team is available 24/7 via chat and email to assist you.",
  },
  {
    question: "How do I measure campaign success?",
    answer:
      "Adelo offers real-time analytics and performance metrics, accessible via your dashboard.",
  },
];

const Contact = () => {
  const [openFAQ, setOpenFAQ] = useState(0); // Only one open at a time

  // Add state for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Optionally clear form or keep values as is
  };

  return (
    <section>
      <div>
        {/* Hero section */}
        <div className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center text-center overflow-hidden">
          <img
            src={serviceBack}
            alt="Service Background"
            className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-1"
          />
          <div className="relative z-20 px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-center">
              <span className="bg-gradient-to-b from-[#8E6EFF] to-[#000000] bg-clip-text text-transparent block text-7xl lg:text-[90px] 2xl:text-[120px]">
                Contact Us
              </span>
            </h1>
            <p className="text-T-600 mt-4 sm:text-lg max-w-xl mx-auto">
              Have questions or need help getting started? Reach out to our team. We’re here to support you
              with anything from onboarding to campaign strategy.
            </p>
          </div>
        </div>

        {/* Video form section */}
        <div className="relative w-full h-[600px] sm:h-[700px] md:h-[800px] overflow-hidden mt-10 rounded-3xl mb-24 mx-auto max-w-7xl px-4 lg:px-0">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={serviceVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <img
            src={cornerbg}
            alt="Corner Decoration"
            className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-64 z-10"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center text-center px-4 sm:px-8">
            <form className="w-full max-w-xl space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-xl bg-T-500 text-T-100 placeholder-T-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-xl bg-T-500 text-T-100 placeholder-T-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-xl bg-T-500 text-T-100 placeholder-T-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-xl bg-T-500 text-T-100 placeholder-T-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-fit px-6 py-2 bg-gradient-to-r from-[#654FAE] via-[#A891FB] to-[#8E6EFF] text-white rounded-4xl font-semibold hover:opacity-90 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16 flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="md:w-1/3 bg-[#8E6EFF] px-12 py-18">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Frequently
              <br />
              Asked
              <br />
              Questions
            </h1>
          </div>

          {/* Right Column */}
          <div className="md:w-2/3 space-y-4 bg-[#020817] px-12 py-18">
            {faqs.map((faq, index) => {
              const isOpen = openFAQ === index;
              return (
                <div
                  key={index}
                  className="bg-T-200 p-4 rounded-xl shadow-md transition-all duration-300"
                >
                  <button
                    className="w-full flex items-center justify-between text-left"
                    onClick={() => setOpenFAQ(isOpen ? -1 : index)}
                  >
                    <span className="text-lg font-semibold text-T-900">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <FiMinus className="text-xl text-T-900" />
                    ) : (
                      <FiPlus className="text-xl text-T-900" />
                    )}
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-T-600 transition-all duration-300">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
