import React, { useEffect, useRef, useState } from "react";
import images from "../../Assets/dataimg";
import "../HomePage/HomePage.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Components/LoginPage/AuthProvider";

const carouselOptions = {
  loop: true,
  margin: 20,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 7500,
  smartSpeed: 1500,
  responsive: {
    450: {
      items: 2,
    },
    600: {
      items: 2,
    },
    750: {
      items: 3,
    },
    900: {
      items: 3,
    },
    1050: {
      items: 4,
    },
    1150: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
};

const CounterBox = ({ className, end, duration, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < end ? prevCount + 1 : prevCount));
    }, duration * 10);

    return () => clearInterval(interval);
  }, [end, duration]);

  return (
    <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
      <div className="count-box">
        <i className={className}></i>
        <span className="purecounter">{count}</span>
        <p>{label}</p>
      </div>
    </div>
  );
};

function HomePage({ onClose }) {
  const { user, login } = useAuth();

  const handleBuyNowClick = () => {
    if (!user) {
      alert("Pealse login to buy.");
      login();
    } else {
      alert("Still Working");
    }
  };
  const navigate = useNavigate();
  const handlePaymentClick = () => {
    navigate("/payment");
  };
  const handleFindClick = () => {
    navigate("/specialties");
  };
  const handleWorkClick = () => {
    navigate("/contactus");
  };
  const handleAcademicClick = () => {
    navigate("/academic");
  };

  return (
    <div>
      <div className="homepage">
        <div className="row">
          <div className="col-12 slide-home">
            <div
              id="carouselExampleFade"
              className="carousel carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="7500">
                  <video key={1} className="img-fluid " autoPlay loop muted>
                    <source src={images.videoslide1} type="video/mp4" />
                  </video>
                  <div className="flex-caption d-none d-md-block shadow">
                    <p className="welcome-text fw-bold ">
                      Welcome to Cambridge Health Alliance
                    </p>
                    <p className="d-none d-lg-block fw-bold">
                      CHA Cambridge Hospital is always actively working to serve
                      the community in the best way.
                    </p>
                    <p className="d-none d-xl-block fw-bold">
                      Key services include 24-hour Emergency Care, Maternity,
                      Mental Health Care, Primary Care, Specialty Care, Surgery
                      and overnight hospital care.
                    </p>
                  </div>
                </div>

                <div className="carousel-item" data-bs-interval="7500">
                  <video key={2} className="img-fluid " autoPlay loop muted>
                    <source src={images.videoslide2} type="video/mp4" />
                  </video>
                  <div className="flex-caption d-none d-md-block shadow">
                    <p className="welcome-text fw-bold">
                      Welcome to Cambridge Health Alliance
                    </p>
                    <p className="d-none d-lg-block fw-bold">
                      CHA Cambridge Hospital is always actively working to serve
                      the community in the best way.
                    </p>
                    <p className="d-none d-xl-block fw-bold">
                      Key services include 24-hour Emergency Care, Maternity,
                      Mental Health Care, Primary Care, Specialty Care, Surgery
                      and overnight hospital care.
                    </p>
                  </div>
                </div>

                <div className="carousel-item" data-bs-interval="7500">
                  <video key={3} className="img-fluid " autoPlay loop muted>
                    <source src={images.videoslide3} type="video/mp4" />
                  </video>
                  <div className="flex-caption d-none d-md-block shadow">
                    <p className="welcome-text fw-bold">
                      Welcome to Cambridge Health Alliance
                    </p>
                    <p className="d-none d-lg-block fw-bold container">
                      CHA Cambridge Hospital is always actively working to serve
                      the community in the best way.
                    </p>
                    <p className="d-none d-xl-block fw-bold">
                      Key services include 24-hour Emergency Care, Maternity,
                      Mental Health Care, Primary Care, Specialty Care, Surgery
                      and overnight hospital care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row text-center text-caretopeople shadow card bg-light ">
          <div className="col-12 overflow-visiblecontainer pt-3 pb-1 ">
            <div className="row">
              <div className="col-md-3 my-1 ">
                <img
                  className="caretopeople"
                  src={images.logan2}
                  alt="cart to people"
                />
              </div>
              <div className="col-md-3  caretopeople-items">
                <div className="my-2" role="button" onClick={handleFindClick}>
                  <div className="link-primary  fw-bold  link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                    Find and Get Care
                  </div>
                </div>
              </div>
              <div className="col-md-3  caretopeople-items ">
                <div
                  className="my-2"
                  role="button"
                  onClick={handlePaymentClick}
                >
                  <div className="link-primary fw-bold link-offset-2 mb-3 link-underline-opacity-25 link-underline-opacity-100-hover">
                    Pay Bill
                  </div>
                </div>
              </div>
              <div className="col-md-3  caretopeople-items ">
                <div className="my-2" role="button" onClick={handleWorkClick}>
                  <div className="link-primary fw-bold link-offset-2 mb-3 link-underline-opacity-25 link-underline-opacity-100-hover">
                    Work at CHA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12 pt-3 text-center ">
            <h1 className="">How Can We Help You?</h1>
          </div>
          <div id="Helpyou" className="helpyou pt-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div className="iconhome card shadow ">
                    <div className="card dr-zoom">
                      <img
                        className="b-img"
                        src={images.img1}
                        alt="Cambridge Hopistal"
                      />
                    </div>
                    <div
                      className=" text-center link-primary link-offset-2 mb-3 link-underline-opacity-25 link-underline-opacity-100-hover"
                      role="button"
                      onClick={handleAcademicClick}
                    >
                      <h5 className=" fw-bold"> Academics & Research</h5>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                  <div className="iconhome card shadow ">
                    <div className="card dr-zoom">
                      <img
                        className="b-img"
                        src={images.img2}
                        alt="Cambridge Hopistal"
                      />
                    </div>
                    <div
                      className=" text-center link-primary  link-offset-2 mb-3 link-underline-opacity-25 link-underline-opacity-100-hover"
                      role="button"
                      onClick={handleAcademicClick}
                    >
                      <h5 className="fw-bold">Vaccine</h5>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                  <div className="iconhome card shadow ">
                    <div className="card dr-zoom">
                      <img
                        className="b-img"
                        src={images.img3}
                        alt="Cambridge Hopistal"
                      />
                    </div>
                    <div
                      className=" text-center link-primary  link-offset-2 mb-3 link-underline-opacity-25 link-underline-opacity-100-hover"
                      role="button"
                      onClick={handleAcademicClick}
                    >
                      <h5 className="fw-bold">CHA Pharmacy</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
              <a className="glightbox play-btn mb-4">
                <video className="" src={images.video1} autoPlay loop></video>
              </a>
            </div>

            <div className="col-xl-7 col-lg-6 iconhomees d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5 shadow">
              <h3 className="fw-bold">Cambridge Health Alliance (CHA)</h3>
              <p>
                Cambridge Health Alliance (CHA) is a vibrant, innovative health
                system dedicated to providing equity and excellence for
                everyone, every time. With over 140,000 patients in Boston’s
                metro-north region, CHA is proud to offer the health care people
                need most in their lives.
              </p>

              <div className="iconhome">
                <div className="icon">
                  <i className="bx bx-fingerprint"></i>
                </div>
                <h4 className="title">
                  <a className="text-decoration-none text-secondary fw-bold">
                    Services{" "}
                  </a>
                </h4>
                <p className="description1">
                  Key clinical services include primary care, behavioral health,
                  emergency care, surgery and specialty care, hospital care,
                  maternity and state-of-the-art testing services. These are
                  offered at convenient neighborhood locations. CHA patients
                  also have seamless access to advanced care for rare or complex
                  conditions at its clinical partners - Beth Israel Deaconess
                  Medical Center and Mass. General Hospital for Children.
                </p>
              </div>

              <div className="iconhome">
                <div className="icon">
                  <i className="bx bx-gift"></i>
                </div>
                <h4 className="title">
                  <a className="text-decoration-none text-secondary fw-bold">
                    Partner
                  </a>
                </h4>
                <p className="description1">
                  CHA's work extends far beyond patient care. It has a robust
                  Department of Community Health Improvement and operates the
                  nationally accredited Cambridge Public Health Department. It
                  collaborates closely with local governments and non-profits to
                  improve health and reduce barriers to care. As a teaching
                  hospital of Harvard Medical School, Harvard School of Public
                  Health, Harvard School of Dental Medicine and Tufts University
                  School of Medicine, CHA trains the health care providers of
                  tomorrow.
                </p>
              </div>
            </div>
          </div>
          <div id="counts" className="counts">
            <div className="container">
              <div className="row">
                <CounterBox
                  className="fa fa-user-md"
                  end={150}
                  duration={1}
                  label="Doctors"
                />
                <CounterBox
                  className="fa fa-hospital-o"
                  end={35}
                  duration={1}
                  label="Departments"
                />
                <CounterBox
                  className="fa fa-flask"
                  end={20}
                  duration={1}
                  label="Research Labs"
                />
                <CounterBox
                  className="fa fa-trophy"
                  end={170}
                  duration={1}
                  label="Awards"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="features" className="features pb-5 pt-5 bg-light">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div
                className="col-lg-6 order-2 order-lg-1"
                data-aos="fade-right"
              >
                <div className="iconhome mt-5 mt-lg-0">
                  <i className="fa fa-newspaper-o "></i>
                  <h4>It is hard work</h4>
                  <p>
                    They are the result, or as it were, of something that is
                    equal to these labors, except that some
                  </p>
                </div>
                <div className="iconhome mt-5">
                  <i className="fa cube fa-cube"></i>
                  <h4>Of these who</h4>
                  <p>
                    They are people who always prioritize healing, over things
                    that blind their desires
                  </p>
                </div>
                <div className="iconhome mt-5">
                  <i className="fa fa-picture-o"></i>
                  <h4>Priority</h4>
                  <p>
                    Sometimes we are faced with many different choices and
                    sometimes we have to prioritize something above all else.
                  </p>
                </div>
                <div className="iconhome mt-5">
                  <i className="fa fa-shield"></i>
                  <h4>Blessing</h4>
                  <p>
                    At important times in life, the most precious thing is It
                    doesn't matter anymore, the only thing to do is hope for the
                    best
                  </p>
                </div>
              </div>
              <div
                className="image col-lg-6 order-1 order-lg-2"
                data-aos="zoom-in"
              >
                <img className="card shadow" src={images.features} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="departments bg-light ">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="section-titles mt-5">
                  <h3 className="fw-bold">Our Qualified Doctors</h3>
                </div>
                <div className="section-subtitle text-secondary fw-bold mb-5">
                  Separated they live in. A small river named Duden flows by
                  their place and supplies it with the necessary regelialia. It
                  is a paradisematic country
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 p-5">
                <div className="dept-slider-container-outer ">
                  <div className="dept-slider-container col-lg-12">
                    <OwlCarousel className="owl-theme" {...carouselOptions}>
                      <div className="dr-item">
                        <div className="card dr-zoom">
                          <img
                            className="dr-img"
                            src={images.doctor1}
                            alt="doctor cambridge hospital"
                          />
                          <div className="dr-img-info">
                            <a href="mailto:example@gmail.com">
                              <i className="fa  fa-envelope fa-2x text-danger"></i>
                            </a>
                            <a href="https://www.facebook.com">
                              <i className="fa  fa-facebook fa-2x text-primary"></i>
                            </a>
                            <a href="https://www.twitter.com">
                              <i className="fa  fa-twitter fa-2x text-info"></i>
                            </a>
                          </div>
                        </div>

                        <div className="text-center">
                          <div className="dr-title">
                            <a
                              className="text-dark fw-bold text-decoration-none"
                              href="#"
                            >
                              Helga Patricia
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="dr-item">
                        <div className="card dr-zoom">
                          <img
                            className="dr-img"
                            src={images.doctor2}
                            alt="doctor cambridge hospital"
                          />
                          <div className="dr-img-info">
                            <a href="mailto:example@gmail.com">
                              <i className="fa  fa-envelope fa-2x text-danger"></i>
                            </a>
                            <a href="https://www.facebook.com">
                              <i className="fa  fa-facebook fa-2x text-primary"></i>
                            </a>
                            <a href="https://www.twitter.com">
                              <i className="fa  fa-twitter fa-2x text-info"></i>
                            </a>
                          </div>
                        </div>

                        <div className="text-center">
                          <div className="dr-title">
                            <a
                              className="text-dark fw-bold text-decoration-none"
                              href="#"
                            >
                              Hypatia Anna
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="dr-item">
                        <div className="card dr-zoom">
                          <img
                            className="dr-img"
                            src={images.doctor3}
                            alt="doctor cambridge hospital"
                          />
                          <div className="dr-img-info">
                            <a href="mailto:example@gmail.com">
                              <i className="fa  fa-envelope fa-2x text-danger"></i>
                            </a>
                            <a href="https://www.facebook.com">
                              <i className="fa  fa-facebook fa-2x text-primary"></i>
                            </a>
                            <a href="https://www.twitter.com">
                              <i className="fa  fa-twitter fa-2x text-info"></i>
                            </a>
                          </div>
                        </div>

                        <div className="text-center">
                          <div className="dr-title">
                            <a
                              className="text-dark fw-bold text-decoration-none"
                              href="#"
                            >
                              Smith Harry
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="dr-item">
                        <div className="card dr-zoom">
                          <img
                            className="dr-img"
                            src={images.doctor4}
                            alt="doctor cambridge hospital"
                          />
                          <div className="dr-img-info">
                            <a href="mailto:example@gmail.com">
                              <i className="fa  fa-envelope fa-2x text-danger"></i>
                            </a>
                            <a href="https://www.facebook.com">
                              <i className="fa  fa-facebook fa-2x text-primary"></i>
                            </a>
                            <a href="https://www.twitter.com">
                              <i className="fa  fa-twitter fa-2x text-info"></i>
                            </a>
                          </div>
                        </div>

                        <div className="text-center">
                          <div className="dr-title">
                            <a
                              className="text-dark fw-bold text-decoration-none"
                              href="#"
                            >
                              Wilson Roy
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="dr-item">
                        <div className="card dr-zoom">
                          <img
                            className="dr-img"
                            src={images.doctor5}
                            alt="doctor cambridge hospital"
                          />
                          <div className="dr-img-info">
                            <a href="mailto:example@gmail.com">
                              <i className="fa  fa-envelope fa-2x text-danger"></i>
                            </a>
                            <a href="https://www.facebook.com">
                              <i className="fa  fa-facebook fa-2x text-primary"></i>
                            </a>
                            <a href="https://www.twitter.com">
                              <i className="fa  fa-twitter fa-2x text-info"></i>
                            </a>
                          </div>
                        </div>

                        <div className="text-center">
                          <div className="dr-title">
                            <a
                              className="text-dark fw-bold text-decoration-none"
                              href="#"
                            >
                              Alexandra Aubrey
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="dr-item">
                        <div className="card dr-zoom">
                          <img
                            className="dr-img"
                            src={images.doctor6}
                            alt="doctor cambridge hospital"
                          />
                          <div className="dr-img-info">
                            <a href="mailto:example@gmail.com">
                              <i className="fa  fa-envelope fa-2x text-danger"></i>
                            </a>
                            <a href="https://www.facebook.com">
                              <i className="fa  fa-facebook fa-2x text-primary"></i>
                            </a>
                            <a href="https://www.twitter.com">
                              <i className="fa  fa-twitter fa-2x text-info"></i>
                            </a>
                          </div>
                        </div>

                        <div className="text-center">
                          <div className="dr-title">
                            <a
                              className="text-dark fw-bold text-decoration-none"
                              href="#"
                            >
                              Joseph Cadell
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="dr-item">
                        <div className="card dr-zoom">
                          <img
                            className="dr-img"
                            src={images.doctor7}
                            alt="doctor cambridge hospital"
                          />
                          <div className="dr-img-info">
                            <a href="mailto:example@gmail.com">
                              <i className="fa  fa-envelope fa-2x text-danger"></i>
                            </a>
                            <a href="https://www.facebook.com">
                              <i className="fa  fa-facebook fa-2x text-primary"></i>
                            </a>
                            <a href="https://www.twitter.com">
                              <i className="fa  fa-twitter fa-2x text-info"></i>
                            </a>
                          </div>
                        </div>

                        <div className="text-center">
                          <div className="dr-title">
                            <a
                              className="text-dark fw-bold text-decoration-none"
                              href="#"
                            >
                              Blanche Martha
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="dr-item">
                        <div className="card dr-zoom">
                          <img
                            className="dr-img"
                            src={images.doctor8}
                            alt="doctor cambridge hospital"
                          />
                          <div className="dr-img-info">
                            <a href="mailto:example@gmail.com">
                              <i className="fa  fa-envelope fa-2x text-danger"></i>
                            </a>
                            <a href="https://www.facebook.com">
                              <i className="fa  fa-facebook fa-2x text-primary"></i>
                            </a>
                            <a href="https://www.twitter.com">
                              <i className="fa  fa-twitter fa-2x text-info"></i>
                            </a>
                          </div>
                        </div>

                        <div className="text-center">
                          <div className="dr-title">
                            <a
                              className="text-dark fw-bold text-decoration-none"
                              href="#"
                            >
                              Paul Harold
                            </a>
                          </div>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pb-5 award-container">
            <img
              className="img-fluid shadow"
              src={images.award}
              alt="award cambridge hopistal "
            />
          </div>
        </div>

        <div id="prbuy" className="prbuy">
          <div className="container" data-aos="fade-up">
            <div className="section-titles">
              <h2>Health Insurance</h2>
              <p>
                Please join us, health insurance always brings many benefits
                when you are injured, reducing the burden you have to pay.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="box" data-aos="fade-up" data-aos-delay="100">
                  <h3>Stock Package</h3>
                  <h4>
                    <sup>$</sup>100<span> / Year</span>
                  </h4>
                  <ul>
                    <li>Provide aid</li>
                    <li>20% hospital fee support</li>
                    <li>Emergency vehicle support</li>
                    <li className="na">Quality doctor</li>
                    <li className="na">VIP room</li>
                  </ul>
                  <div className="btn-wrap">
                    <a href="#" className="btn-buy" onClick={handleBuyNowClick}>
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
                <div
                  className="box featured"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h3>Basic Package</h3>
                  <h4>
                    <sup>$</sup>200<span> / Year</span>
                  </h4>
                  <ul>
                    <li>Provide aid</li>
                    <li>45% hospital fee support</li>
                    <li>Emergency vehicle support</li>
                    <li>Quality doctor</li>
                    <li className="na">VIP room</li>
                  </ul>
                  <div className="btn-wrap">
                    <a href="#" className="btn-buy" onClick={handleBuyNowClick}>
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                <div className="box" data-aos="fade-up" data-aos-delay="300">
                  <h3>Advanced Package</h3>
                  <h4>
                    <sup>$</sup>300<span> / Year</span>
                  </h4>
                  <ul>
                    <li>Provide aid</li>
                    <li>55% hospital fee support</li>
                    <li>Emergency vehicle support</li>
                    <li>Quality doctor</li>
                    <li>VIP room</li>
                  </ul>
                  <div className="btn-wrap">
                    <a href="#" className="btn-buy" onClick={handleBuyNowClick}>
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                <div className="box" data-aos="fade-up" data-aos-delay="400">
                  <span className="advanced">VIP</span>
                  <h3>Ultimate Package</h3>
                  <h4>
                    <sup>$</sup>490<span> / Year</span>
                  </h4>
                  <ul>
                    <li>Provide aid</li>
                    <li>90% hospital fee support</li>
                    <li>Emergency vehicle support</li>
                    <li>Quality doctor</li>
                    <li>VIP room</li>
                  </ul>
                  <div className="btn-wrap">
                    <a href="#" className="btn-buy" onClick={handleBuyNowClick}>
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="faquest" className="faquest section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-titles">
              <h2>Asked Questioins</h2>
              <p>
                It takes great pains to benefit. His needs result from something
                that actually drives him away. Let them be what they want.
                Anyone whom anyone desires. And no one who hinders receives the
                others. Because he should flee in this office of convenience,
                which is here.
              </p>
            </div>

            <ul className="faquest-list">
              <li>
                <div
                  data-bs-toggle="collapse"
                  className="collapsed question"
                  href="#faquest1"
                >
                  Will it not be followed by a was for but a bed urn two?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div
                  id="faquest1"
                  className="collapse"
                  data-bs-parent=".faquest-list"
                >
                  <p>
                    The price of the product is very low. Time to target that
                    jar The pregnant woman will not be taken care of. Poisoned
                    the bed is a great fringilla urn porttitor rhoncus pure pain
                    no
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faquest2"
                  className="collapsed question"
                >
                  Let the chocolate burn for a variety of diseases now in the
                  throat kids? <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div
                  id="faquest2"
                  className="collapse"
                  data-bs-parent=".faquest-list"
                >
                  <p>
                    The pain should be followed by the education of the children
                    the inhabitants of the disease Sometimes it's just a matter
                    of time. Fringilla phasellus faucibus chocolate eleifend
                    until price It's a great asset for the kids. Maurice ultrice
                    eros in the course of the university mass tincidunt dui.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faquest3"
                  className="collapsed question"
                >
                  The pain should be followed by the education of the children
                  resident diseases?{" "}
                </div>
                <div
                  id="faquest3"
                  className="collapse"
                  data-bs-parent=".faquest-list"
                >
                  <p>
                    Eleifend mi in no place to worry about some basketball
                    medical arrows For the whole element of the pillow. Sem no
                    quiver diam be amet nisl suscepti. Rutrum land kids football
                    A bed of two valleys valley land Urn employee at the element
                    of easy football But who hates disease?
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faquest4"
                  className="collapsed question"
                >
                  And I hate the time of clinical trials. Are some of my
                  teenagers in the middle of nowhere?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div
                  id="faquest4"
                  className="collapse"
                  data-bs-parent=".faquest-list"
                >
                  <p>
                    The pain should be followed by the education of the children
                    the inhabitants of the disease Sometimes it's just a matter
                    of time. Fringilla phasellus faucibus chocolate eleifend
                    until price It's a great asset for the kids. Maurice ultrice
                    eros in the course of the university mass tincidunt dui.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faquest5"
                  className="collapsed question"
                >
                  It's time for the kids to have some salad and a tomato result?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div
                  id="faquest5"
                  className="collapse"
                  data-bs-parent=".faquest-list"
                >
                  <p>
                    It was a nuisance from the targets but it was an advantage
                    for the students. It is worth hanging on before. Now you can
                    even smile cartoons Let the fans take care of the coaching
                    it must be drunk. Pure pregnant who flatters the ugly course
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq6"
                  className="collapsed question"
                >
                  The crown of life is pure to adorn the palate. Varius or
                  quiver or Does the school need a computer now?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Laureet let it be a great course, it would be said, it would
                    be just. The whole life of Mauris ultricies is expected now
                    or There is no need for dyes unless it is important. Ugly
                    now but he needs a network. As the venerated earth in the
                    fear of vulputate football chocolate But it's a good idea
                    for kids ecstasy ecstasy fringilla phasellus faucibus Nibh
                    land The employee does not flatter the mass either.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
