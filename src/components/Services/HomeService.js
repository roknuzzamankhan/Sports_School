import React from 'react';
import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './Services.css'
import './HomeService.css'

const HomeService = () => {
  const [services, setServices] = useState([]);
  useEffect(()=> {
    fetch("./services.json")
    .then(res => res.json())
    .then(data => setServices(data.slice(0,4)))
  },[])

  return (
    <div>
      <h1 className="homeSportsTitle">Our Sports</h1>
      <div className="services">
      {/* // =============== Service component =============== // */}
      {
        services.map(service => <Service key={service.id} img={service.img} name={service.name} price={service.price} ></Service>)
      }
      </div>
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

export default HomeService;
