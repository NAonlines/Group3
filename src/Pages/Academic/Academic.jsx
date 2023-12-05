import React from "react";
import "./Academic.css";
import images from "../../Assets/dataimg";
function Academic() {
  return (
    <div>
      {/* Programs and Pathways for Learners */}
      <div className="programs text-center">
        <div className="text-center mx-auto py-5">
          <h1 className="display-4">Programs and Pathways for Learners</h1>
        </div>
        <hr></hr>
        <div className="container-xxl">
          <div className="container py-3 px-lg-1">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid wow fadeInUp"
                  data-wow-delay="0.1s"
                  src={images.Academic1}
                />
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h1>M.D. Programs and Pathways</h1>
                <p>
                  Our M.D. and dual degree programs combine our I-EXPLORE
                  curriculum, hands-on training, and groundbreaking research and
                  innovative pre-medical and medical pathway programs.
                </p>
                <div className="expo g-4">
                  <a href="">Explore More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="container-xxl">
          <div className="container py-3 px-lg-1">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid wow fadeInUp"
                  data-wow-delay="0.1s"
                  src={images.Academic2}
                />
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h1>Residencies and Fellowships</h1>
                <p>
                  Our nationally recognized residency and fellowship programs
                  and renowned faculty seek to optimally prepare our residents
                  and fellows to live a life of impact. Our residents and
                  fellows are vital partners in helping us deliver leading-edge
                  care that is transforming the health of the communities we
                  serve.
                </p>
                <div className="expo g-4">
                  <a href="">Explore More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="container-xxl">
          <div className="container py-3 px-lg-1">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid wow fadeInUp"
                  data-wow-delay="0.1s"
                  src={images.Academic3}
                />
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h1>Other Health Degree Programs</h1>
                <p>
                  All of our master’s and doctorate programs provide
                  comprehensive, dynamic curriculum and research training.
                  Students learn about the health needs of our local and global
                  communities and develop the skills to pursue a wide range of
                  impactful health care careers.{" "}
                </p>
                <div className="expo g-4">
                  <a href="">Explore More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="container-xxl">
          <div className="container py-3 px-lg-1">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid wow fadeInUp"
                  data-wow-delay="0.1s"
                  src={images.Academic4}
                />
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h1>Training and Certificate Programs</h1>
                <p>
                  Our three clinical and translational research-based training
                  and certificate programs include our Clinical Laboratory
                  Scientist Training program, Stem Cell Training program and
                  Mentored Clinical Research Training program. Each of these
                  programs provides an accelerated pathway for our learners to
                  achieve certificates in their respective subject areas.
                </p>
                <div className="expo g-4">
                  <a href="">Explore More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="container-xxl">
          <div className="container py-3 px-lg-1">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid wow fadeInUp"
                  data-wow-delay="0.1s"
                  src={images.Academic5}
                />
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h1>Continuing Medical Education Program</h1>
                <p>
                  The Office of Continuing Medical Education at UC Davis Health
                  improves competence, performance and clinical outcomes through
                  excellence in the co-creation, delivery and evaluation of
                  health education. Our program includes an expansive range of
                  activities designed for primary care, specialist education and
                  faculty development activities.{" "}
                </p>
                <div className="expo g-4">
                  <a href="">Explore More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div
                  id="myCarousel"
                  className="carousel slide testimonial_Carousel "
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="container">
                        <div className="carousel-caption ">
                          <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-12 margin_boot">
                              <div className="test_box1">
                                <figure>
                                  <img src={images.Logoacademic} alt="#" />
                                </figure>
                                <h4> Siaalya </h4>
                              </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-12">
                              <div className="test_box">
                                <p>
                                  I’ve been fortunate to have had mentors who
                                  modeled the act of envisioning a future that
                                  might not yet exist. It’s my goal to do the
                                  same for others.
                                </p>
                                <p>
                                  — Angelica Martin, a 2023 School of Medicine
                                  graduate and current resident
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Live and Learn in a Vibrant Community */}
      <section className="blog_section layout_padding">
        <div className="container ">
          <div className="text-center mx-auto py-5">
            <h1 className="display-4">Live and Learn in a Vibrant Community</h1>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mx-auto col-12 col-sm-6 col-md-3">
              <div className="box">
                <div className="img-box">
                  <img src={images.Academicp1} alt="" />
                </div>
                <div className="detail-box text-center">
                  <h5>Why Choose UC Davis School of Medicine?</h5>
                  <p>
                    As one of the nation’s leading medical schools and research
                    institutions – we rank in the top 10 for family medicine,
                    primary care and diversity – we are transforming health care
                    and improving lives.
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mx-auto col-12 col-sm-6 col-md-3">
              <div className="box">
                <div className="img-box">
                  <img src={images.Academicp2} alt="" />
                </div>
                <div className="detail-box text-center">
                  <h5>Living in Sacramento</h5>
                  <p>
                    The Sacramento region is a dynamic location offering an
                    abundance of local farmer’s markets, nationally acclaimed
                    restaurants that offer farm-to-fork cuisine, a variety of
                    outdoor recreational sports, family-friendly events, art and
                    culture.
                  </p>
                  <a href="">Explore our Community</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mx-auto col-12 col-sm-6 col-md-3">
              <div className="box">
                <div className="img-box">
                  <img src={images.Academicp3} alt="" />
                </div>
                <div className="detail-box text-center">
                  <h5>An Inclusive Learning Environment</h5>
                  <p>
                    As one of the most diverse medical schools in the nation, we
                    are building a health care workforce that reflects the rich
                    vibrancy and diversity of our communities.
                    <br />
                    <br />
                    <br />
                  </p>
                  <a href="">Learn more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* World-className Training */}
      <div className="world container py-5">
        <div className="row gx-5">
          <div className="col-lg-6 py-5 layout_padding text-center col-12 col-sm-6 col-md-3">
            <div className="py-5">
              <h1 className="display-5 text mb-4">World-class Training</h1>
              <p className="text mb-0">
                We believe in putting our values into action through the power
                of groundbreaking education, research, clinical care, and
                community partnership to transform and improve lives. Our
                collaborative community is committed to academic excellence and
                creating an inclusive learning environment in which everyone can
                thrive.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="appointment-form h-100 d-flex flex-column justify-content-center">
              <div className="wok">
                <h4 className="text">Mission</h4>
                <p className="text mb-0">
                  Delivering tomorrow's health care today, we are transforming
                  lives by improving health through the combined power of
                  education, research, clinical care, and community.
                </p>
                <br />
                <h4 className="text">Our Values</h4>
                <p className="text mb-0">
                  Integrity, Respect, Diversity, Equity, Inclusion, Excellence,
                  Trust
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Further Learner Resources */}
      <section className="service_section layout_padding">
        <div className="container">
          <div className="text-center mx-auto py-5">
            <h1 className="display-4">Further Learner Resources</h1>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src={images.aca1} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Office of Student and Resident Diversity</h5>
                  <a href="">
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src={images.aca2} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Graduate Medical Education</h5>
                  <a href="">
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src={images.aca3} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Continuing Medical Education</h5>
                  <a href="">
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Academic;
