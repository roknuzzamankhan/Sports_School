import React from 'react';
import './AboutUs.css'
import logo from '../../images/logo.png'
import { Container } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container>
      <p className="about">About our school</p>
      <h2 className="text_center who">Who We Are</h2>
      <img className="imgs" src="https://images.adsttc.com/media/images/5796/eaba/e58e/ce86/a200/0006/newsletter/2Z9A0867_DxO-1_%C2%A9_Takuji_Shimmura.jpg?1469508218" alt="" />
      <h1>Our Mission And Values</h1> 
      <h3>Our Vision</h3>
      <p>Every student-athlete a Champion</p>

      <h3>Our Mission</h3>
      <p>Nurturing Learned Champions With Character</p>

      <h3>Our Values</h3>
      <p>Singapore Sports School will rise to the challenge to develop staff and student-athletes to live as Champions in the 21st Century instilled with the core values of:</p>
      <ul>
        <li>Respect</li>
        <li>Integrity</li>
        <li>Responsibility</li>
        <li>Excellence</li>
        <li>Resilience</li>
        <li>Respect</li>
      </ul>

      <h3>Our School Logo</h3>
      <p>Singapore Sports School's Logo features a pair of red and orange wings. The pair of wings is a universal symbol of flight and is used to embody the soaring aspirations of our student-athletes. The symmetry of the wings denotes the striking balance between academic finesse and sporting excellence.</p>
      <img src={logo} alt="" className="logo"/>
    </Container>
  );
};

export default AboutUs;