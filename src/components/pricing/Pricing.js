import React from 'react';

const Pricing = () => {
  return (
    <section className="section" id="pricing-section">
      <div className="container">
        <div className="m-titles">
          <h2
            className="m-title splitting-text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Pricing Plans
          </h2>
        </div>
        <div className="row row-custom">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
            <div
              className="text scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <p>
                Are you interested to work with me ? Here are my price list for
                design related work. Lets talk about project !
              </p>
            </div>
          </div>
        </div>
        <div className="pricing-items row">
          <div className="pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div
              className="pricing-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="title">Full Time</div>
              <div className="subtitle">Available for Full Time</div>
              <div className="price">$1200</div>
              <div className="text">
                <ul>
                  <li>Brand Design</li>
                  <li>Advertising</li>
                  <li>Web Development</li>
                  <li>Photography</li>
                </ul>
              </div>
              <a href="#contact-section" className="btn">
                Hire Me
              </a>
            </div>
          </div>

          <div className="pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div
              className="pricing-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="title">Project Wise</div>
              <div className="subtitle">Available for Freelancing</div>
              <div className="price">$400</div>
              <div className="text">
                <ul>
                  <li>Brand Design</li>
                  <li>Advertising</li>
                  <li>Web Development</li>
                  <li>Photography</li>
                </ul>
              </div>
              <a href="#contact-section" className="btn">
                Hire Me
              </a>
            </div>
          </div>

          <div className="pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div
              className="pricing-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="title">Hourley</div>
              <div className="subtitle">Available for Hourley Basis</div>
              <div className="price">$60</div>
              <div className="text">
                <ul>
                  <li>Brand Design</li> <li>Advertising</li>
                  <li>Web Development</li> <li>Photography</li>
                </ul>
              </div>
              <a href="#contact-section" className="btn">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
