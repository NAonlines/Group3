import React, { useEffect, useRef } from 'react';
import images from '../../Assets/dataimg';
import '../HomePage/HomePage.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

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

function HomePage() {

    return (
        <div>
            <div className="homepage">
                <div className="row">

                    <div className="col-12 slide-home" >
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="7500">
                                    <video key={1} className="img-fluid " autoPlay loop muted>
                                        <source src={images.videoslide1} type="video/mp4" />
                                    </video>
                                    <div className="carousel-caption d-none d-md-block position-absolute top-0 start-50 translate-middle">
                                        <h1>
                                            Wellcome to Cambridge Hospital
                                        </h1>
                                    </div>

                                </div>

                                <div className="carousel-item" data-bs-interval="7500">
                                    <video key={2} className="img-fluid " autoPlay loop muted>
                                        <source src={images.videoslide2} type="video/mp4" />
                                    </video>
                                    <div className="carousel-caption d-none d-md-block">
                                        <p className="text-light fw">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </div>
                                </div>

                                <div className="carousel-item" data-bs-interval="7500">
                                    <video key={3} className="img-fluid " autoPlay loop muted>
                                        <source src={images.videoslide3} type="video/mp4" />
                                    </video>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row text-center text-caretopeople ">
                    <div className="col-12 overflow-visiblecontainer pb-3 pt-3 bg-warning-subtle">
                        <div className="row">
                            <div className="col-md-3">
                                <img className="caretopeople" src={images.logan2} alt="cart to people" />
                            </div>
                            <div className="col-md-3 fw-bold">
                                Find and Get Care
                            </div>
                            <div className="col-md-3 fw-bold">
                                Pay Bill
                            </div>
                            <div className="col-md-3 fw-bold">
                                Work at CHA
                            </div>
                        </div>
                    </div>
                </div>

                <div className="departments">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <div className="section-title mt-5">
                                    <h1 className="fw-bold">Our Qualified Doctors</h1>
                                </div>
                                <div className="section-subtitle text-secondary fw-bold mb-5">Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 dr-zoom p-5">
                                <div className="dept-slider-container-outer ">
                                    <div className="dept-slider-container col-lg-12">
                                        <OwlCarousel className="owl-theme" {...carouselOptions}>
                                            <div className="dr-item">
                                                <div className="card dr-zoom">
                                                    <img className="dr-img" src={images.doctor1} alt="doctor cambridge hospital" />
                                                    <div className="dr-img-info">
                                                        <a href="mailto:example@gmail.com"><i className="fa  fa-envelope fa-2x text-danger"></i></a>
                                                        <a href="https://www.facebook.com"><i className="fa  fa-facebook fa-2x text-primary"></i></a>
                                                        <a href="https://www.twitter.com"><i className="fa  fa-twitter fa-2x text-info"></i></a>
                                                    </div>

                                                </div>

                                                <div className="text-center">
                                                    <div className="dr-title"><a className="text-dark fw-bold text-decoration-none" href="#">Helga Patricia</a></div>
                                                </div>

                                            </div>

                                            <div className="dr-item">
                                                <div className="card dr-zoom">
                                                    <img className="dr-img" src={images.doctor2} alt="doctor cambridge hospital" />
                                                    <div className="dr-img-info">
                                                        <a href="mailto:example@gmail.com"><i className="fa  fa-envelope fa-2x text-danger"></i></a>
                                                        <a href="https://www.facebook.com"><i className="fa  fa-facebook fa-2x text-primary"></i></a>
                                                        <a href="https://www.twitter.com"><i className="fa  fa-twitter fa-2x text-info"></i></a>
                                                    </div>

                                                </div>

                                                <div className="text-center">
                                                    <div className="dr-title"><a className="text-dark fw-bold text-decoration-none" href="#">Hypatia Anna</a></div>
                                                </div>
                                            </div>

                                            <div className="dr-item">
                                                <div className="card dr-zoom">
                                                    <img className="dr-img" src={images.doctor3} alt="doctor cambridge hospital" />
                                                    <div className="dr-img-info">
                                                        <a href="mailto:example@gmail.com"><i className="fa  fa-envelope fa-2x text-danger"></i></a>
                                                        <a href="https://www.facebook.com"><i className="fa  fa-facebook fa-2x text-primary"></i></a>
                                                        <a href="https://www.twitter.com"><i className="fa  fa-twitter fa-2x text-info"></i></a>
                                                    </div>

                                                </div>

                                                <div className="text-center">
                                                    <div className="dr-title"><a className="text-dark fw-bold text-decoration-none" href="#">Smith Harry</a></div>
                                                </div>
                                            </div>

                                            <div className="dr-item">
                                                <div className="card dr-zoom">
                                                    <img className="dr-img" src={images.doctor4} alt="doctor cambridge hospital" />
                                                    <div className="dr-img-info">
                                                        <a href="mailto:example@gmail.com"><i className="fa  fa-envelope fa-2x text-danger"></i></a>
                                                        <a href="https://www.facebook.com"><i className="fa  fa-facebook fa-2x text-primary"></i></a>
                                                        <a href="https://www.twitter.com"><i className="fa  fa-twitter fa-2x text-info"></i></a>
                                                    </div>

                                                </div>

                                                <div className="text-center">
                                                    <div className="dr-title"><a className="text-dark fw-bold text-decoration-none" href="#">Wilson Roy</a></div>
                                                </div>
                                            </div>
                                            <div className="dr-item">
                                                <div className="card dr-zoom">
                                                    <img className="dr-img" src={images.doctor5} alt="doctor cambridge hospital" />
                                                    <div className="dr-img-info">
                                                        <a href="mailto:example@gmail.com"><i className="fa  fa-envelope fa-2x text-danger"></i></a>
                                                        <a href="https://www.facebook.com"><i className="fa  fa-facebook fa-2x text-primary"></i></a>
                                                        <a href="https://www.twitter.com"><i className="fa  fa-twitter fa-2x text-info"></i></a>
                                                    </div>

                                                </div>

                                                <div className="text-center">
                                                    <div className="dr-title"><a className="text-dark fw-bold text-decoration-none" href="#">Alexandra Aubrey</a></div>
                                                </div>
                                            </div>
                                            <div className="dr-item">
                                                <div className="card dr-zoom">
                                                    <img className="dr-img" src={images.doctor6} alt="doctor cambridge hospital" />
                                                    <div className="dr-img-info">
                                                        <a href="mailto:example@gmail.com"><i className="fa  fa-envelope fa-2x text-danger"></i></a>
                                                        <a href="https://www.facebook.com"><i className="fa  fa-facebook fa-2x text-primary"></i></a>
                                                        <a href="https://www.twitter.com"><i className="fa  fa-twitter fa-2x text-info"></i></a>
                                                    </div>

                                                </div>

                                                <div className="text-center">
                                                    <div className="dr-title"><a className="text-dark fw-bold text-decoration-none" href="#">Joseph Cadell</a></div>
                                                </div>
                                            </div>
                                            <div className="dr-item">
                                                <div className="card dr-zoom">
                                                    <img className="dr-img" src={images.doctor7} alt="doctor cambridge hospital" />
                                                    <div className="dr-img-info">
                                                        <a href="mailto:example@gmail.com"><i className="fa  fa-envelope fa-2x text-danger"></i></a>
                                                        <a href="https://www.facebook.com"><i className="fa  fa-facebook fa-2x text-primary"></i></a>
                                                        <a href="https://www.twitter.com"><i className="fa  fa-twitter fa-2x text-info"></i></a>
                                                    </div>

                                                </div>

                                                <div className="text-center">
                                                    <div className="dr-title"><a className="text-dark fw-bold text-decoration-none" href="#">Blanche Martha</a></div>
                                                </div>
                                            </div>
                                            <div className="dr-item">
                                                <div className="card dr-zoom">
                                                    <img className="dr-img" src={images.doctor8} alt="doctor cambridge hospital" />
                                                    <div className="dr-img-info">
                                                        <a href="mailto:example@gmail.com"><i className="fa  fa-envelope fa-2x text-danger"></i></a>
                                                        <a href="https://www.facebook.com"><i className="fa  fa-facebook fa-2x text-primary"></i></a>
                                                        <a href="https://www.twitter.com"><i className="fa  fa-twitter fa-2x text-info"></i></a>
                                                    </div>

                                                </div>

                                                <div className="text-center">
                                                    <div className="dr-title"><a className="text-dark fw-bold text-decoration-none" href="#">Paul Harold</a></div>
                                                </div>
                                            </div>

                                        </OwlCarousel>
                                    </div>
                                    {/* <div className="dept-slider-nav"><i className="fa fa-chevron-right" aria-hidden="true"></i></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mb-5 mt-5 award-container">
                    <img className="img-fluid" src={images.award} alt="award cambridge hopistal " />
                </div>

            </div>
        </div>
    );
}

export default HomePage;
