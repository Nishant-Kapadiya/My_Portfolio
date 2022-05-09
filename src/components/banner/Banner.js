/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import profile_pic from '../../assets/images/profile.png';

const Banner = () => {
  return (
    <section className="section section-started">
      <div className="container">
        <div className="hero-started">
          <div
            className="slide scrolla-element-anim-1 scroll-animate"
            data-animate="active"
          >
            <img src={profile_pic} alt="profile-img" />
            <span className="circle circle-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="749px"
                height="375px"
              >
                <path
                  fillRule="evenodd"
                  fill="#ff8059"
                  d="M749.000,0.000 C749.000,206.786 581.459,374.514 374.608,374.514 C167.758,374.514 -0.000,206.786 -0.000,0.000 "
                />
              </svg>
            </span>
            <span className="circle circle-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="416px"
                height="209px"
              >
                <path
                  fillRule="evenodd"
                  fill="#3aafc9"
                  d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                />
              </svg>
            </span>
            <span className="circle circle-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="416px"
                height="209px"
              >
                <path
                  fillRule="evenodd"
                  fill="#b9d1e4"
                  d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                />
              </svg>
            </span>
            <span className="circle circle-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="121px"
                height="241px"
              >
                <path
                  fillRule="evenodd"
                  fill="#676cdb"
                  d="M0.000,0.000 C66.624,0.000 120.402,54.096 120.402,120.733 C120.402,187.371 66.624,241.000 0.000,241.000 "
                />
              </svg>
            </span>
            <span className="circle circle-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="232px"
                height="117px"
              >
                <path
                  fillRule="evenodd"
                  fill="rgb(255, 208, 65)"
                  d="M232.000,0.000 C232.000,64.151 180.376,116.580 116.238,116.580 C52.100,116.580 0.000,64.151 0.000,0.000 "
                />
              </svg>
            </span>
          </div>
          <div className="content">
            <div className="titles">
              <div
                className="subtitle splitting-text-anim-2 scroll-animate"
                data-splitting="chars"
                data-animate="active"
              >
                Full Stack Developer
              </div>
              <h2
                className="title splitting-text-anim-1 scroll-animate"
                data-splitting="chars"
                data-animate="active"
              >
                Nishant <br />
                Kapadiya
              </h2>
            </div>
            <div
              className="description scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <p>
                I"m a Full Stack Developer based in India and enjoy my works. I
                love exploring and learning new things on the internet, &amp;
                listening music.
              </p>
              <div className="social-links">
                <a target="_blank" rel="nofollow" href="#">
                  <i aria-hidden="true" className="fab fa-twitter"></i>
                </a>
                <a target="_blank" rel="nofollow" href="#">
                  <i aria-hidden="true" className="fab fa-dribbble"></i>
                </a>
                <a target="_blank" rel="nofollow" href="#">
                  <i aria-hidden="true" className="fab fa-behance"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="info-list">
            <ul>
              <li
                className="scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                Born in <strong>Ahmedabad, Gujarat, India</strong>
              </li>
              <li
                className="scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                Experience <strong>3+ Years</strong>
              </li>
              <li
                className="scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                Date of Birth <strong>20 February 1998</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
