/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import work_img from '../../assets/images/work4.jpg';

const Portfolio = () => {
  return (
    <section className="section section-bg section-parallax-5" id="works-section">
      <div className="container">
        <div className="m-titles">
          <h2
            className="m-title splitting-text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            My Projects
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
                A Collection of my favorites project I’ve designed recently.
                Feeling great while sharing here.
              </p>
            </div>
          </div>
        </div>

        <div className="works-box">
          <div
            className="filter-links scrolla-element-anim-1 scroll-animate"
            data-animate="active"
          >
            <a href="#" className="active" data-href=".works-col">
              All
            </a>
            <a href="#" data-href=".sorting-ui-ux-design">
              UI UX Design
            </a>
            <a href="#" data-href=".sorting-photo">
              Photography
            </a>
            <a href="#" data-href=".sorting-development">
              Development
            </a>
            <a href="#" data-href=".sorting-branding">
              Branding
            </a>
          </div>

          <div className="works-items works-list-items row">
            <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
              <div className="works-item">
                <a href="#">
                  <span
                    className="image scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <span className="img">
                      <img src={work_img} alt="Zorro" />
                      <span className="overlay"></span>
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="name splitting-text-anim-1 scroll-animate"
                      data-splitting="chars"
                      data-animate="active"
                    >
                      Zorro
                    </span>
                    <span
                      className="category scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      Branding
                      <br />
                      Photography
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-ui-ux-design ">
              <div className="works-item">
                <a href="#">
                  <span
                    className="image scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <span className="img">
                      <img src={work_img} alt="Gooir" />
                      <span className="overlay"></span>
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="name splitting-text-anim-1 scroll-animate"
                      data-splitting="chars"
                      data-animate="active"
                    >
                      Gooir
                    </span>
                    <span
                      className="category scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      Branding
                      <br />
                      UI UX Design
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
              <div className="works-item">
                <a href="#">
                  <span
                    className="image scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <span className="img">
                      <img src={work_img} alt="Explore" />
                      <span className="overlay"></span>
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="name splitting-text-anim-1 scroll-animate"
                      data-splitting="chars"
                      data-animate="active"
                    >
                      Explore
                    </span>
                    <span
                      className="category scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      Development
                      <br />
                      UI UX Design
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
              <div className="works-item">
                <a href="#">
                  <span
                    className="image scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <span className="img">
                      <img src={work_img} alt="Mozar" />
                      <span className="overlay"></span>
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="name splitting-text-anim-1 scroll-animate"
                      data-splitting="chars"
                      data-animate="active"
                    >
                      Mozar
                    </span>
                    <span
                      className="category scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      Branding
                      <br />
                      Photography
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
              <div className="works-item">
                <a href="#">
                  <span
                    className="image scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <span className="img">
                      <img src={work_img} alt="Stay Fit" />
                      <span className="overlay"></span>
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="name splitting-text-anim-1 scroll-animate"
                      data-splitting="chars"
                      data-animate="active"
                    >
                      Stay Fit
                    </span>
                    <span
                      className="category scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      Development
                      <br />
                      UI UX Design
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
              <div className="works-item">
                <a href="#">
                  <span
                    className="image scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <span className="img">
                      <img src={work_img} alt="Kana" />
                      <span className="overlay"></span>
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="name splitting-text-anim-1 scroll-animate"
                      data-splitting="chars"
                      data-animate="active"
                    >
                      Kana
                    </span>
                    <span
                      className="category scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      Development
                      <br />
                      Photography
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
