import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import logo from '../../images/logo.png'
import './Header.css'
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Container className="container">
        <Row>
            <Col xs={1} className="">
              {/* logo */}
              <Image src={logo} fluid  className="img"/>
            </Col>
            <Col xs={5}>
              <h1 className="logoName">Sports School</h1>
            </Col>
              {/* nav links */}
            <Col xs={6}>
              <NavLink to="/home" className="links" activeStyle={{fontWeight: "bold", color: "skyblue"}}>Home</NavLink>
              <NavLink to="/services" className="links" activeStyle={{fontWeight: "bold", color: "skyblue"}}>Services</NavLink>
              <NavLink to="/aboutUs" className="links" activeStyle={{fontWeight: "bold", color: "skyblue"}}>About Us</NavLink>
              <NavLink to="/contactUs" className="links" activeStyle={{fontWeight: "bold", color: "skyblue"}}>Contact Us</NavLink>
            </Col>
        </Row>
      </Container>
    </div>
      
  );
};

export default Header;