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
    <div className="bg-white rounded-2xl shadow-md px-4 py-8 sm:px-6 md:px-16 lg:px-20 xl:px-24 max-w-full md:max-w-4xl mx-auto mt-10">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b last:border-b-0 py-6 md:py-8 border-[#D9DBE9]"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-start text-left"
          >
            <span
              className={`text-lg sm:text-xl md:text-2xl font-medium ${
                openIndex === index ? "text-[#3A4C67]" : "text-[#212121]"
              }`}
            >
              {faq.question}
            </span>
            <span className="text-purple-500 text-xl">
              {openIndex === index ? <FiMinus /> : <FiPlus />}
            </span>
          </button>
          {openIndex === index && faq.answer && (
            <p className="mt-2 text-sm text-[#878788] leading-relaxed">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
