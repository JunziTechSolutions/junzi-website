'use client';
import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  isOpen?: boolean;
}

export const FAQSection = () => {
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    {
      id: 1,
      question: "What is the delivery time?",
      answer: "We guarantee delivery of your complete package within 7 business days after our discovery call.",
      isOpen: true
    },
    {
      id: 2,
      question: "What if I need revisions?",
      answer: "We offer unlimited revisions until you're completely satisfied with the final product. Our team works closely with you to ensure every detail meets your expectations.",
      isOpen: false
    },
    {
      id: 3,
      question: "Who is this for?",
      answer: "This service is designed for early-stage founders, entrepreneurs, and startups who need professional investor-ready materials but don't have the technical team or design resources to create them in-house.",
      isOpen: false
    }
  ]);

  const toggleFAQ = (id: number) => {
    setFaqItems(items =>
      items.map(item =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <section 
      className="py-16 px-6 lg:px-8 relative"
    >
      <div className="max-w-4xl mx-auto">
        <div className="space-y-0">
          {faqItems.map((item, index) => (
            <div key={item.id}>
              <div
                className="overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center transition-colors duration-200 hover:cursor-pointer"
                >
                  <h3 className="text-xl font-semibold text-gray-800 pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 transition-transform duration-300 ${
                        item.isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                      fill="none"
                      stroke="#22282B"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    item.isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-8 pt-2">
                    <div className="h-px bg-gray-300/60 mb-6 mx-0"></div>
                    <p className="text-gray-900 leading-relaxed text-lg">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Разделительная линия между карточками */}
              {index < faqItems.length - 1 && (
                <div className="h-px bg-gray-300/40 my-1"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};