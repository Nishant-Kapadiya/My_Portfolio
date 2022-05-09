import React from 'react';
import signature from '../../assets/images/signature.png';
const About = () => {
  return (
    <section
      className="section section-bg section-parallax-1"
      id="about-section"
    >
      <div className="container">
        <div className="m-titles">
          <h2
            className="m-title splitting-text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            About Me
          </h2>
        </div>
        <div className="row row-custom">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right">
            <div className="numbers-items">
              <div
                className="numbers-item scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i aria-hidden="true" className="far fa-check-circle"></i>
                </div>
                <div className="num">25+</div>
                <div className="title">
                  Completed <br />
                  Project
                </div>
              </div>
              <div
                className="numbers-item scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i aria-hidden="true" className="far fa-smile-beam"></i>
                </div>
                <div className="num">10+</div>
                <div className="title">
                  Happy <br />
                  Clients
                </div>
              </div>
              <div
                className="numbers-item scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i aria-hidden="true" className="far fa-gem"></i>
                </div>
                <div className="num">3+</div>
                <div className="title">
                  Experience <br />
                  years
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
            <div className="profile-box">
              <div
                className="text scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                  My name is Nishant Kapadiya. I have been working as wordpress
                  developer at all solutions 24x7 it company since april 2019 to
                  present. I work on freelance projects and utilize the time to
                  built my own products.
                </p>
                <p>
                  I spent my leisure hours research and developing. Right now
                  I'm also trying a hand at full stack developer. I love to
                  learn and explore new arenas on the internet to imporving my
                  productivity.
                </p>
                <a
                  href="#contact-section"
                  className="btn scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Contact Me
                </a>
                <div
                  className="signature scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <img src={signature} alt="signature" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
