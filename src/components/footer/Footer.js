/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
const current_year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__builder">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-left">
              <div
                className="social-links scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <a target="_blank" rel="nofollow" href="http://twitter.com">
                  <i aria-hidden="true" className="fab fa-twitter"></i>
                </a>
                <a target="_blank" rel="nofollow" href="http://dribble.com">
                  <i aria-hidden="true" className="fab fa-dribbble"></i>
                </a>
                <a target="_blank" rel="nofollow" href="http://behance.com">
                  <i aria-hidden="true" className="fab fa-behance"></i>
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-center">
              <div
                className="copyright-text scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                Copyright © {current_year}. All Rights Reserved.
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
              <div
                className="copyright-text scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                Developed by <strong>Nishant Kapadiya</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
