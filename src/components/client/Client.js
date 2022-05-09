import React from 'react';
import brand1 from '../../assets/images/brand1.png';
import brand2 from '../../assets/images/brand2.png';
import brand3 from '../../assets/images/brand3.png';
import brand4 from '../../assets/images/brand4.png';

const Client = () => {
  return (
    <section className="section section-parallax-5">
      <div className="container">
        <div className="m-titles">
          <h2
            className="m-title splitting-text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            My Clients
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
                Suspendisse potenti. Sed egestas eros eu libero posuere
                ultrices. Nullam ut aliquet felis, sit amet imperdiet felis.
              </p>
            </div>
          </div>
        </div>

        <div className="row clients-items">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
            <div className="clients-item">
              <img src={brand1} alt="" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
            <div className="clients-item">
              <img src={brand2} alt="" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
            <div className="clients-item">
              <img src={brand3} alt="" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
            <div className="clients-item">
              <img src={brand4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
