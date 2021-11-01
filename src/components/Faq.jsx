import React from "react";
import {Col, Container, Row} from 'react-bootstrap';
import FaqComponent from "./FaqComponent";

const Faq = () => {
    return (
        <React.Fragment>
            <section id="faq" className="ud-faq">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="ud-section-title text-center mx-auto">
                                <span>Any Questions? Answered</span>
                                <h2 data-aos="zoom-in-up">
                                    Frequently Asked Questions</h2>
                                <br/>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <FaqComponent 
                                target = "#collapseOne"
                                question = "Question 01"
                                collapseid = "collapseOne"
                                answer = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            />

                            <FaqComponent 
                                target = "#collapseTwo"
                                question = "Question 02"
                                collapseid = "collapseTwo"
                                answer = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            />

                            <FaqComponent 
                                target = "#collapseThree"
                                question = "Question 03"
                                collapseid = "collapseThree"
                                answer = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            />
                        </Col>

                        <Col lg={6}>
                            <FaqComponent 
                                target = "#collapseFour"
                                question = "Question 04"
                                collapseid = "collapseFour"
                                answer = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            />

                            <FaqComponent 
                                target = "#collapseFive"
                                question = "Question 05"
                                collapseid = "collapseFive"
                                answer = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            />

                            <FaqComponent 
                                target = "#collapseSix"
                                question = "Question 06"
                                collapseid = "collapseSix"
                                answer = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Faq;
