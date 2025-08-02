import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'When and where is TechConf 2024 taking place?',
      answer: 'TechConf 2024 will be held on November 15-17, 2024 at the Grand Tech Convention Center in San Francisco, CA.'
    },
    {
      id: 2,
      question: 'What is included in the conference pass?',
      answer: 'Your conference pass includes access to all keynotes, sessions, workshops, networking events, meals during conference hours, and conference swag.'
    },
    {
      id: 3,
      question: 'Can I get a refund if I can\'t attend?',
      answer: 'We offer full refunds up to 30 days before the event. After that date, we can transfer your ticket to someone else if you can\'t attend.'
    },
    {
      id: 4,
      question: 'Will the sessions be recorded?',
      answer: 'Yes, all keynotes and sessions will be recorded and made available to registered attendees after the conference.'
    },
    {
      id: 5,
      question: 'Is there a discount for group registrations?',
      answer: 'Yes, we offer a 15% discount for groups of 5 or more. Please contact our team at groups@techconf.com for more information.'
    },
    {
      id: 6,
      question: 'What COVID-19 safety measures are in place?',
      answer: 'The health and safety of our attendees is our top priority. We will follow all local health guidelines and provide hand sanitizing stations throughout the venue. Masks will be available for those who wish to wear them.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={faq.id} 
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
          >
            <button
              className={`w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none transition-all duration-200 transform hover:scale-[1.005] ${
                openIndex === index 
                  ? 'bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 -ml-1 pl-5' 
                  : 'hover:bg-gray-50 hover:pl-5 hover:-ml-1 border-l-4 border-transparent'
              }`}
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-content-${faq.id}`}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            
            <div
              id={`faq-content-${faq.id}`}
              className={`px-6 pb-4 pt-0 text-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index 
                  ? 'max-h-96 opacity-100 transform translate-y-0' 
                  : 'max-h-0 opacity-0 transform -translate-y-2'
              }`}
              aria-hidden={openIndex !== index}
            >
              <div className="pb-2">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">Still have questions?</p>
        <a
          href="mailto:info@techconf.com"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
        >
          Contact Our Team
          <svg
            className="ml-2 -mr-1 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default FAQ;
