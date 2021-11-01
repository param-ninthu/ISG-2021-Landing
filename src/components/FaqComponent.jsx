import React from "react";
import 'bootstrap'

const FaqComponent = ({ target, question, collapseid, answer }) => {
    return (
                    
        <div className="ud-single-faq" data-aos="fade-up">
            <div className="accordion">
                <button
                    className="ud-faq-btn collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target={target}
                >
                    <span className="icon flex-shrink-0">
                        <i className="bi bi-chevron-down"/>
                    </span>
                    <span className="q-title">{question}</span>
                </button>
                <div id={collapseid} className="accordion-collapse collapse">
                    <div className="ud-faq-body">
                       {answer} 
                    </div>
                </div>
            </div>
        </div>
                            
    );
};

export default FaqComponent;
