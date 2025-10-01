import serviceBack from "../assets/serviceback.png";
import serviceVideo from "../assets/servicevideo.mp4";
import cornerbg from "../assets/cornerbg.png";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What is ADELO?",
    answer:
      "Adelo is an AI-powered marketing platform that helps businesses create, launch, and optimize ad campaigns across channels automatically. It's like having a full marketing team, without the costs.",
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
    question: "What makes Adelo different from other marketing tools?",
    answer:
      "Adelo combines AI-powered automation with human-like creativity, offering personalized marketing strategies tailored to your business needs.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time without any hidden fees or complications.",
  },
];

const Contact = () => {
  const [openFAQ, setOpenFAQ] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Handle form submission
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      {/* Hero section */}
      <div className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center text-center overflow-hidden">
        <img
          src={serviceBack}
          alt="Service Background"
          className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-1 dark:opacity-60"
        />
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />
        <div className="relative z-20 px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-center">
            <span className="bg-gradient-to-b from-[#8E6EFF] to-[#000000] dark:from-[#A891FB] dark:to-white bg-clip-text text-transparent block text-7xl lg:text-[90px] 2xl:text-[120px]">
              Contact Us
            </span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mt-6 sm:text-lg max-w-xl mx-auto text-lg">
            Have questions or need help getting started? Reach out to our team. We're here to support you
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
          className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-64 z-10 dark:opacity-80"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 dark:bg-black/60 flex items-center justify-center text-center px-4 sm:px-8">
          <form className="w-full max-w-xl space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#8E6EFF] focus:border-transparent"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#8E6EFF] focus:border-transparent"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#8E6EFF] focus:border-transparent"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#8E6EFF] focus:border-transparent resize-none"
            />
            <button
              type="submit"
              className="w-fit px-8 py-4 bg-gradient-to-r from-[#654FAE] via-[#A891FB] to-[#8E6EFF] text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Submit Message
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 flex flex-col md:flex-row bg-white dark:bg-gray-900">
        {/* Left Column */}
        <div className="md:w-1/3 bg-gradient-to-br from-[#8E6EFF] to-[#654FAE] dark:from-[#654FAE] dark:to-[#8E6EFF] px-8 md:px-12 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Frequently
            <br />
            Asked
            <br />
            Questions
          </h1>
          <p className="text-white/80 mt-6 text-lg">
            Can't find what you're looking for? Reach out to our support team.
          </p>
        </div>

        {/* Right Column */}
        <div className="md:w-2/3 space-y-4 bg-gray-50 dark:bg-gray-800 px-8 md:px-12 py-16 md:py-24">
          {faqs.map((faq, index) => {
            const isOpen = openFAQ === index;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-600"
              >
                <button
                  className="w-full flex items-center justify-between text-left"
                  onClick={() => setOpenFAQ(isOpen ? -1 : index)}
                >
                  <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <FiMinus className="text-xl text-[#8E6EFF] dark:text-[#A891FB] flex-shrink-0" />
                  ) : (
                    <FiPlus className="text-xl text-[#8E6EFF] dark:text-[#A891FB] flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed transition-all duration-300">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;