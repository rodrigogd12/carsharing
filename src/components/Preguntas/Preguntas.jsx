import { useState } from 'react';
import preguntas from '../../assets/preguntas.jpeg';

const faqs = [
  {
    question: 'What is car sharing and how does it work?',
    answer: 'Car sharing, or vehicle sharing, is a transportation model that allows users to access electric vehicles without the need to own one.'
  },
  {
    question: 'What are the benefits of using shared vehicles?',
    answer: 'The benefits include cost savings, reduced environmental impact, and greater flexibility in vehicle use.'
  },
  {
    question: 'How can I book a vehicle?',
    answer: 'At the moment, these actions will not be implemented in the short term.'
  },
  {
    question: 'What types of vehicles are available?',
    answer: 'A wide variety of vehicles will be available, from compact cars to SUVs.'
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
    answer: 'At the moment, long-distance trips will not be allowed. Coverage will range from the 1st ring to the 8th ring of the city of Santa Cruz in its first phase.'
  },
  {
    question: 'Will there be stations or stops?',
    answer: 'Yes, there will be stops; however, they have not yet been defined.'
  },
  {
    question: 'What are the prices, and how will promotions work?',
    answer: 'They are yet to be defined.'
  }
];


const Preguntas = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex justify-center bg-gray-200 py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl w-full">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="flex flex-col md:flex-row items-start md:space-x-8">
          {/* Lista de preguntas y respuestas */}
          <div className="w-full md:w-1/2 space-y-4">
            <ul className="space-y-4">
              {faqs.map((faq, index) => (
                <li key={index} className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="text-left text-lg font-semibold focus:outline-none w-full"
                    >
                      {faq.question}
                    </button>
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="text-xl font-bold text-gray-500 focus:outline-none"
                    >
                      {openIndex === index ? '−' : '+'}
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

          {/* Imagen sin recorte */}
          <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img src={preguntas} alt="Preguntas frecuentes" className="rounded-lg shadow-md w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preguntas;
