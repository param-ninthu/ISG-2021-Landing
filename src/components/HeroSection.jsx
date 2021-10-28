import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import logo from "../assets/images/ics-logo.png"

const HeroSection = () => {
  return (
    <section className="ud-hero" id="home">
      <Container>
        <Row>
          <Col lg={12} className="mb-5 pb-4">
            <div className="ud-hero-content wow fadeInUp m-auto" data-wow-delay=".2s">
              <img src={logo} alt="ISG Logo" className="mb-3 mb-md-2 mb-lg-1 mb-xxl-3 p-1 p-xxl-2 ud-hero-logo"/>
              <h1 className="ud-hero-title my-3 mb-4 mb-lg-0">
                iCS - Hack The World
              </h1>
              <h3 className="ud-hero-subtitle pb-lg-1 my-3 my-md-2 my-xxl-3 px-4">24-hour Capture The Flag (CTF)
                Competition</h3>
              {/*<p className="ud-hero-desc mt-3">*/}
              {/*  00 days&ensp;00 hours&ensp;00 mins*/}
              {/*</p>*/}
              <div className="ud-hero-buttons my-2 mt-5 mt-sm-3 mt-lg-4 mt-xxl-5">
                <a href="/" rel="nofollow noopener" target="_blank"
                   className="ud-main-btn ud-white-btn mx-3">
                  Register Now
                </a>
              </div>
            </div>
            {/*<div className="ud-hero-image wow fadeInUp" data-wow-delay=".25s">*/}
            {/*                <img src="assets/images/hero/hero-image.svg" alt="hero-image" />*/}
            {/*                <img*/}
            {/*                  src="assets/images/hero/dotted-shape.svg"*/}
            {/*                  alt="shape"*/}
            {/*                  class="shape shape-1"*/}
            {/*                />*/}
            {/*                <img*/}
            {/*                  src="assets/images/hero/dotted-shape.svg"*/}
            {/*                  alt="shape"*/}
            {/*                  class="shape shape-2"*/}
            {/*                />*/}
            {/*</div>*/}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
