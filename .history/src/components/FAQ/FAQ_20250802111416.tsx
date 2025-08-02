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
      question: 'When and where is NaijaTech Summit 2025 taking place?',
      answer: 'NaijaTech Summit 2025 will be held from November 15-17, 2025 at the Landmark Event Centre in Victoria Island, Lagos, Nigeria.'
    },
    {
      id: 2,
      question: 'What is included in my conference pass?',
      answer: 'Your pass includes access to all keynotes, workshops, panel discussions, networking sessions, breakfast and lunch on all three days, conference materials, and exclusive access to the event app.'
    },
    {
      id: 3,
      question: 'Are there accommodation options near the venue?',
      answer: 'Yes, we have partnered with several hotels in Victoria Island offering special rates for attendees. Check our website for the full list of partner hotels and booking codes.'
    },
    {
      id: 4,
      question: 'Will there be opportunities for networking?',
      answer: 'Absolutely! We have dedicated networking sessions, roundtable discussions, and social events scheduled throughout the summit to connect you with industry leaders and fellow tech enthusiasts.'
    },
    {
      id: 5,
      question: 'Is there a discount for students or startups?',
      answer: 'Yes, we offer a 30% discount for students with valid ID and early-stage startups (less than 2 years old). Contact registration@naijatechsummit.ng for verification and discount code.'
    },
    {
      id: 6,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit/debit cards, bank transfers, and mobile money. For local transfers within Nigeria, please use the bank details provided during registration.'
    },
    {
      id: 7,
      question: 'Can I get a certificate of attendance?',
      answer: 'Yes, all registered attendees who attend at least 80% of the sessions will receive a digital certificate of attendance via email within one week after the event.'
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
              className={`w-full px-6 py-4 text-left cursor-pointer flex justify-between items-center focus:outline-none transition-all duration-200 transform hover:scale-[1.005] ${
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
