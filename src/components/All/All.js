import React from 'react';
import './All.css'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CarouselContainer from '../CarouselContainer/CarouselContainer';
import Services from '../Services/Services';
import Error from '../Error/Error';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import HomeService from '../Services/HomeService';


const All = () => {
  return (
    <div className="body">
      <Router>
        <Header/>
        <Switch>
          {/* root */}
          <Route exact path="/">
            <CarouselContainer/>
            <HomeService/>
          </Route>
          {/* home */}
          <Route path="/home">
            <CarouselContainer/>
            <HomeService/>
          </Route>
          {/* service */}
          <Route path ="/services">
            <Services/>
          </Route>
          {/* about us */}
          <Route path ="/aboutUs">
            <AboutUs/>
          </Route>
          {/* contact us */}
          <Route path ="/contactUs">
            <ContactUs/>
          </Route>
          {/* unknown link  */}
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
      </Router>
    <Footer/>
    </div>
  );
};

export default All;