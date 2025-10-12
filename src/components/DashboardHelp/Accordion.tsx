import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

type FAQItem = {
  question: string;
  answer?: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is ADELO?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Ipsum facilisi orci amet id dignissim. A quis turpis fringilla libero maecenas elementum morbi. Orci tristique venenatis penatibus vitae blandit aliquam.",
  },
  {
    question: "How can I upgrade my subscription?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Ipsum facilisi orci amet id dignissim. A quis turpis fringilla libero maecenas elementum morbi. Orci tristique venenatis penatibus vitae blandit aliquam.",
  },
  {
    question: "How much does ADELO cost?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Ipsum facilisi orci amet id dignissim. A quis turpis fringilla libero maecenas elementum morbi. Orci tristique venenatis penatibus vitae blandit aliquam.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Ipsum facilisi orci amet id dignissim. A quis turpis fringilla libero maecenas elementum morbi. Orci tristique venenatis penatibus vitae blandit aliquam.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Ipsum facilisi orci amet id dignissim. A quis turpis fringilla libero maecenas elementum morbi. Orci tristique venenatis penatibus vitae blandit aliquam.",
  },
  {
    question: "What should I do if I can’t access my account?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Ipsum facilisi orci amet id dignissim. A quis turpis fringilla libero maecenas elementum morbi. Orci tristique venenatis penatibus vitae blandit aliquam.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white dark:bg-[#1e2939] rounded-2xl shadow-md px-4 py-8 sm:px-6 md:px-16 lg:px-20 xl:px-24 max-w-full md:max-w-4xl mx-auto mt-10">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b last:border-b-0 py-6 md:py-8 border-[#D9DBE9] dark:border-gray-400 transition-all duration-200 ease-in-out"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-start text-left focus:outline-none group"
          >
            <span
              className={`text-lg sm:text-xl md:text-2xl font-medium transition-colors duration-200 ${
                openIndex === index
                  ? "text-[#3A4C67] dark:text-gray-200"
                  : "text-[#212121] dark:text-gray-300 hover:text-[#3A4C67] dark:hover:text-gray-100"
              }`}
            >
              {faq.question}
            </span>
            <span className="text-purple-500 text-xl transition-transform duration-200 transform group-hover:scale-110">
              {openIndex === index ? <FiMinus /> : <FiPlus />}
            </span>
          </button>
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              openIndex === index
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="mt-2 text-sm text-[#878788] dark:text-gray-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
