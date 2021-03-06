import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import logo from "../assets/images/ics-logo.png"
import FlipCountdown from '@rumess/react-flip-countdown';
import ReactRotatingText from "react-rotating-text/lib/ReactRotatingText";

const HeroSection = () => {
    return (
        <section className="ud-hero" id="home">
            <Container>
                <Row>
                    <Col lg={12} className="mb-5 pb-4">
                        <div className="ud-hero-content wow fadeInUp m-auto" data-wow-delay=".2s">
                            <img src={logo} alt="ISG Logo" className="mb-3 mb-md-2 mb-lg-1 mb-xxl-2 p-0 ud-hero-logo"/>
                            <h1 className="ud-hero-title my-3 mb-4 mb-lg-2 glitch" data-text="iCS - Hack The World">
                                iCS - Hack The World
                            </h1>
                            <h3 className="ud-hero-subtitle pt-1 pb-lg-1 my-3 my-md-2 mb-xxl-3 px-4">
                                <ReactRotatingText
                                    items={['24-hour Capture The Flag (CTF) Competition', 'Organized by ISACA Student Group of UCSC', 'Get ready!']}/>
                            </h3>
                            <p className="ud-hero-desc mt-3 mt-xxl-4 p-2">
                                Registrations open in
                            </p>
                            <div className="ud-hero-buttons my-2 mt-5 mt-sm-3 mt-lg-3 mt-xxl-4">
                                {/*<a href="/" rel="nofollow noopener" target="_blank"*/}
                                {/*   className="ud-main-btn ud-white-btn mx-3">*/}
                                {/*  Register Now*/}
                                {/*</a>*/}

                                <FlipCountdown
                                    theme="dark"
                                    hideYear
                                    hideMonth
                                    endAtZero
                                    titlePosition="bottom"
                                    dayTitle='Days'
                                    hourTitle='Hours'
                                    minuteTitle='Minutes'
                                    secondTitle='Seconds'
                                    endAt={"2021-11-15 00:00:00"} // Date/Time
                                />

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
