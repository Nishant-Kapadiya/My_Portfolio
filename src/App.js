import React from 'react';
import {
  Header,
  Footer,
  About,
  Testimonials,
  Portfolio,
  Contact,
  Banner,
  Resume,
  Pricing,
  Client,
} from './components/index';
import preloader from './assets/images/ober_logo.png';
// import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <div className="container-page">
        <div className="preloader">
          <div className="centrize full-width">
            <div className="vertical-center">
              <div className="spinner-logo">
                <img src={preloader} alt="preloader" />
                <div className="spinner-dot"></div>
                <div className="spinner spinner-line"></div>
              </div>
            </div>
          </div>
        </div>
        <Header />
        <div className="wrapper">
          <Banner />
          <About />
          <Resume />
          <Portfolio />
          <Pricing />
          <Testimonials />
          <Client />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
