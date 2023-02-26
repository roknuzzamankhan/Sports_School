import React from 'react';
import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './Services.css'

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(()=> {
    fetch("./services.json")
    .then(res => res.json())
    .then(data => setServices(data))
  },[])

  return (
    <div className="services">
      {/* // =============== Service component =============== // */}
      {
        services.map(service => <Service key={service.id} img={service.img} name={service.name} price={service.price} ></Service>)
      }
    </div>
  );
};



// =============== Per Service component =============== //
const Service = (props) => {
  return (
    <Card border="secondary" className="service">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title><b>Sport:</b> {props.name}</Card.Title>
        <Card.Text><b>Price:</b> {props.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Services;

