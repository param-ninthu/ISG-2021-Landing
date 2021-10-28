import React from 'react'
import logo from '../pictures/logo/logo.png'
import { useState } from 'react';
import { Col, Container, Row, Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    let [scrollStyle="ud-header", setScrollStyle] = useState();
    let [isActive,setActive] = useState(false);

    window.onscroll =  () => { 
            if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
                setScrollStyle(scrollStyle = "ud-header sticky")
            } else {
                setScrollStyle(scrollStyle = "ud-header")
            }
        }

        const navbarToggle=()=>{
            setActive(!isActive)
        }

    return (
        <header className={scrollStyle}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Navbar className="navbar" expand="lg">
                            <Navbar.Brand className="navbar-brand" href="#home">
                                <img src={logo} alt="logo" />
                            </Navbar.Brand>
                            <button className={isActive ?"navbar-toggler active":"navbar-toggler"} onClick={navbarToggle}>
                                <span className="toggler-icon"> </span>
                                <span className="toggler-icon"> </span>
                                <span className="toggler-icon"> </span>
                            </button>
                            <div className={isActive ?"navbar-collapse show":"navbar-collapse"}>
                                <ul id="nav" className="navbar-nav mx-auto">
                                    <li className="nav-item">
                                        <a className="ud-menu-scroll" href="#home">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="ud-menu-scroll" href="#about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#pricing">Schedule</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="ud-menu-scroll" href="#team">Register</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="ud-menu-scroll" href="#contact">Awards</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="ud-menu-scroll" href="#contact">Past Events</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="ud-menu-scroll" href="#contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="navbar-btn d-none d-sm-inline-block">
                                <a className="ud-main-btn ud-white-btn" href="javascript:void(0)">
                                    Register
                                </a>
                            </div>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default NavBar
