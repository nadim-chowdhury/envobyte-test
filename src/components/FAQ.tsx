"use client";

import { faqs } from "@/utils/faqs";
import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto my-10 px-4">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className="border-b border-gray-300 pb-2 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center text-gray-900 font-semibold">
              <div className="flex gap-2">
                <span className="text-blue-600 font-bold">{`0${faq.id}`}</span>
                <span
                  className={`${
                    openIndex === index ? "font-bold" : "font-normal"
                  }`}
                >
                  {faq.question}
                </span>
              </div>
              <span className="text-blue-500">
                {openIndex === index ? <FaTimes /> : <FaPlus />}
              </span>
            </div>

            {openIndex === index && faq.answer && (
              <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
