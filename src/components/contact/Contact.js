/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Contact = () => {
  return (
    <section
      className="section section-bg section-parallax-2"
      id="contact-section"
    >
      <div className="container">
        <div className="m-titles">
          <h2
            className="m-title splitting-text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Contact Me
          </h2>
        </div>

        <div className="row row-custom">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right">
            <div className="numbers-items contacts-items">
              <div
                className="numbers-item scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i aria-hidden="true" className="fas fa-phone"></i>
                </div>
                <div className="num">+91 7984126812</div>
              </div>
              <div
                className="numbers-item scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i aria-hidden="true" className="fas fa-at"></i>
                </div>
                <div className="num">nishantkapadya8@gmail.com</div>
              </div>
              <div
                className="numbers-item scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i aria-hidden="true" className="fas fa-location-arrow"></i>
                </div>
                <div className="num">
                  A-203, Avakar Height, B/H Satyamev Hospital, Chandkheda,
                  Ahmedabad – 382424
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
            <div
              className="contacts-form scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <form id="cform" method="post">
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                  />
                </label>
                <label>
                  Email Address
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                  />
                </label>
                <label>
                  Message
                  <textarea
                    name="message"
                    placeholder="Enter your message here"
                  ></textarea>
                </label>
                <button
                  type="submit"
                  className="btn"
                  onClick="$('#cform').submit(); return false;"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="alert-success" style={{ display: 'none' }}>
              <p>Thanks, your message is sent successfully.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
