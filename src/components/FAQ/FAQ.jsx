import React, { useState, useRef, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import '../FAQ/FAQ.css'
import faqdata from '../faqData'

export const FAQ = () => {

  const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };
  return (

    // FAQ section
    <div className='xs:h-[500px]'>
      <div className="faq_text xs:space-y-3 xs:text-center">
        <h1 className='xs:capitalize xs:font-bold xs:text-2xl xs:pt-6'>frequently asked questions</h1>

        <p className='xs:text-xs xs:px-6 xs:text-[#A1A1A1] xs:pb-6'>High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
      </div>


      <div className="faq">
        
      <div>
            {faqdata?.map((obj) => (
          <button
            className={`question-section ${active}`}
            onClick={toggleAccordion}
          >
              <div>
              <div className="question-align">
                <h4 className="question-style">
                  {obj.title}
                </h4>
                <FiPlus
                  className={active ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef}
                className={active ? `answer answer-divider` : `answer`}
              >
                <p>{obj.message}</p>
              </div>
            </div>
          </button>
            ))}
        </div>
      </div>
    </div>
  )
}
