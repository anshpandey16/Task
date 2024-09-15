import React, { useState } from 'react';


const FAQPage = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'How is Tangerine healthy?',
      answer: 'Tangerines are a great health booster due to their high vitamin C content, which supports the immune system and skin health.',
      open: false
    },
    {
      question: 'What are the benefits of eating tangerines?',
      answer: 'Tangerines are rich in antioxidants and fiber, which can help reduce the risk of chronic diseases and improve digestive health.',
      open: false
    },
    {
      question: 'How can tangerines be included in a diet?',
      answer: 'Tangerines can be eaten fresh, added to salads, or used in desserts and smoothies for a nutritious boost.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }
      return faq;
    }));
  };

  return (
    <div className="faq-container">
      <h2>FAQ Section</h2>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq ${faq.open ? 'open' : ''}`} onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              {faq.question}
            </div>
            <div className="faq-answer">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
