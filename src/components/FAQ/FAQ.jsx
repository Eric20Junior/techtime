import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import '../FAQ/FAQ.css';
import faqdata from '../faqData';

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='faq-container'>
      <div className="faq-text">
        <h1 className='faq-title'>Frequently Asked Questions</h1>
        <p className='faq-description mx-auto'>High-definition video is video of higher resolution and quality than standard definition. While there’s no standard meaning for high definition, generally any standard video image.</p>
      </div>

      <div className="faq">
        {faqdata?.map((obj, index) => (
          <div key={obj.id} className="faq-item">
            <button
              className="question-section"
              onClick={() => toggleAccordion(index)}
            >
              <div className="question-align">
                <h4 className="question-style">{obj.title}</h4>
                <FiPlus
                  className={activeIndex === index ? `question-icon rotate` : `question-icon`}
                />
              </div>
            </button>
            <div className={activeIndex === index ? `answer answer-active` : `answer`}>
              <p>{obj.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
