import { useState } from 'react';

const faqs = [
  {
    question: 'What is car sharing and how does it work?',
    answer: 'Car sharing, or vehicle sharing, is a transportation model that allows users to access electric vehicles without the need to own one.'
  },
  {
    question: 'What are the benefits of using shared electric vehicles?',
    answer: 'The benefits include cost savings, reduced environmental impact, and greater flexibility in vehicle use.'
  },
  {
    question: 'How can I book a vehicle?',
    answer: 'You can book a vehicle through our mobile app or website by following a few simple steps.'
  },
  {
    question: 'What types of electric vehicles are available?',
    answer: 'We offer a variety of electric vehicles, from compact cars to SUVs and vans.'
  },
  {
    question: 'Is it safe to use shared vehicles?',
    answer: 'Yes, our vehicles undergo regular inspections and are insured for user safety.'
  },
  {
    question: 'What should I do if I have an accident or a problem with the vehicle?',
    answer: 'You should contact our customer service immediately for assistance.'
  },
  {
    question: 'Can I use the vehicle for long trips?',
    answer: 'Yes, but you should check our mileage policies and additional fees for long trips.'
  }
];

const Preguntas = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Preguntas Frecuentes</h2>
      <ul className="space-y-4">
        {faqs.map((faq, index) => (
          <li key={index} className="border-b pb-4">
            <div className="flex justify-between items-center">
              <button
                onClick={() => toggleFAQ(index)}
                className="text-left text-lg font-semibold focus:outline-none"
              >
                {faq.question}
              </button>
              <button
                onClick={() => toggleFAQ(index)}
                className="text-xl font-bold text-gray-500 focus:outline-none"
              >
                {openIndex === index ? 'X' : '+'}
              </button>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 bg-green-100 p-3 rounded-lg">
                {faq.answer}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Preguntas;