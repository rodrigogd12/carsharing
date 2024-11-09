import { useState } from 'react';
import preguntas from '../../assets/preguntas.jpeg'

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
    <section className='flex justify-center  bg-gray-200 mt-8'>
      <div className='bg-white pl-8 pr-8  rounded-lg shadow-lg max-w-6xl'>
    <h2 className="text-2xl font-bold text-center mb-6 mt-10">Frequently Asked Questions</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl flex flex-col md:flex-row">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Reducción de emisiones */}
            <div className="flex items-start">
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
            </div>

          <div className="flex items-start pb-8 mt-8">
          <img src={preguntas} />
          </div>

        </div>
    </div>
    </section>
  );
};

export default Preguntas;