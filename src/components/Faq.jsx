import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap'

const Faq = () => {
  return (
    <React.Fragment>
      <section id="faq" className="ud-faq">
        <Container>
          <Row>
            <Col lg = {12} >
              <div className="ud-section-title text-center mx-auto">
                <span>Any Questions? Answered</span>
                <h2 data-aos="zoom-in-up">
                Frequently Asked Questions</h2>
                <br />
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg = {6} >
              <div className="ud-single-faq wow fadeInUp" data-aos="fade-up">
                <div className="accordion">
                  <button
                    className="ud-faq-btn collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    >
                    <span className="icon flex-shrink-0">
                      <i className="bi bi-chevron-down"></i>
                    </span>
                    <span className="q-title">Question 01</span>
                  </button>
                  <div id="collapseOne" className="accordion-collapse collapse">
                    <div className="ud-faq-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>
                </div>
              </div>
              <div className="ud-single-faq wow fadeInUp" data-aos="fade-up">
                <div className="accordion">
                  <button
                    className="ud-faq-btn collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                  >
                    <span className="icon flex-shrink-0">
                    <i className="bi bi-chevron-down"></i>
                    </span>
                    <span className="q-title">Question 02</span>
                  </button>
                  <div id="collapseTwo" className="accordion-collapse collapse">
                    <div className="ud-faq-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>
                </div>
              </div>
              <div className="ud-single-faq wow fadeInUp" data-aos="fade-up">
                <div className="accordion">
                  <button
                    className="ud-faq-btn collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                  >
                    <span className="icon flex-shrink-0">
                    <i className="bi bi-chevron-down"></i>
                    </span>
                    <span className="q-title">Question 03</span>
                  </button>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                  >
                    <div className="ud-faq-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg = {6} >
              <div className="ud-single-faq wow fadeInUp" data-aos="fade-up">
                <div className="accordion">
                  <button
                    className="ud-faq-btn collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                  >
                    <span className="icon flex-shrink-0">
                      <i className="bi bi-chevron-down"></i>
                    </span>
                    <span className="q-title">Question 04</span>
                  </button>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                  >
                    <div className="ud-faq-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>
                </div>
              </div>
              <div className="ud-single-faq wow fadeInUp" data-aos="fade-up">
                <div className="accordion">
                  <button
                    className="ud-faq-btn collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                  >
                    <span className="icon flex-shrink-0">
                    <i className="bi bi-chevron-down"></i>
                    </span>
                    <span className="q-title">Question 05</span>
                  </button>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                  >
                    <div className="ud-faq-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>
                </div>
              </div>
              <div className="ud-single-faq wow fadeInUp" data-aos="fade-up">
                <div className="accordion">
                  <button
                    className="ud-faq-btn collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                  >
                    <span className="icon flex-shrink-0">
                    <i className="bi-chevron-down"></i>
                    </span>
                    <span className="q-title">Question 06</span>
                  </button>
                  <div id="collapseSix" className="accordion-collapse collapse">
                    <div className="ud-faq-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Faq;
