import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

const Sponsors = () => {
  return (
      <section>
        <section id="sponsors" className="ud-sponsors">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="ud-section-title mx-auto text-center">
                  {/* <span className="ud-topic">Sponsors</span> */}
                  <h2 data-aos="zoom-in-down">SPONSORS</h2>
                  <br/>
                  <div className="text">
                    <p>
                      Here are the our honurable sponsors.
                    </p><br/><br/>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg={4} md={6} data-aos="fade-right">
                <div className="ud-single-sponser first">
                  <iframe width="300" height="200" src="https://www.youtube.com/embed/gqhOH4jkpVI"
                          title="YouTube video player" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen/>
                  <p className="ud-content">
                    <font>Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.</font>
                  </p>
                </div>
              </Col>
              <Col lg={4} md={6} data-aos="zoom-in">
                <div className="ud-single-sponser second">
                  <iframe width="300" height="200" src="https://www.youtube.com/embed/gqhOH4jkpVI"
                          title="YouTube video player" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen/>
                  <p className="ud-content">
                    <font>Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.</font>
                  </p>
                </div>
              </Col>
              <Col lg={4} md={6} data-aos="fade-left">
                <div className="ud-single-sponser third">
                  <iframe width="300" height="200" src="https://www.youtube.com/embed/gqhOH4jkpVI"
                          title="YouTube video player" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen/>
                  <p className="ud-content">
                    <font>Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.</font>
                  </p>
                </div>
              </Col>
            </Row><br/><br/>
            <Row>
              <Col lg={4} md={6} data-aos="fade-right">
                <div className="ud-single-sponser fourth">
                  <iframe width="300" height="200" src="https://www.youtube.com/embed/gqhOH4jkpVI"
                          title="YouTube video player" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen/>
                  <p className="ud-content">
                    <font>Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.</font>
                  </p>
                </div>
              </Col>
              <Col lg={4} md={6} data-aos="zoom-in">
                <div className="ud-single-sponser fifth">
                  <iframe width="300" height="200" src="https://www.youtube.com/embed/gqhOH4jkpVI"
                          title="YouTube video player" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen/>
                  <p className="ud-content">
                    <font>Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.</font>
                  </p>
                </div>
              </Col>
              <Col lg={4} md={6} data-aos="fade-left">
                <div className="ud-single-sponser sixth">
                  <iframe width="300" height="200" src="https://www.youtube.com/embed/gqhOH4jkpVI"
                          title="YouTube video player" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen/>
                  <p className="ud-content">
                    <font>Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.</font>
                  </p>
                </div>
              </Col>
            </Row>
            <br/>
          </Container>
        </section>
      </section>
  );
};

export default Sponsors;
