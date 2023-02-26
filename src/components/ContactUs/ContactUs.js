import React from 'react';
import { Container } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <Container>
      <p className="about">Contact Us</p>
      <address>
        <h2>Bangladesh Sports School</h2>
        <p>1 Champions Way, Singapore 737913</p>
        <p>T: +65 67660100</p>
        <p>F: +65 67662100</p>
          
        <h2>General Enquiries</h2>
        <p>enquire@sportsschool.edu.sg</p> 

        <h2>Admission Enquiries</h2>
        <p>admissions@sportsschool.edu.sg</p> 
        <p>Attention: Admission Officers</p>
      </address>

    </Container>
  );
};

export default ContactUs;