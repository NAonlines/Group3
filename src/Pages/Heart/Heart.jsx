import React from "react";
import "./Heart.css";
import images from "../../Assets/dataimg";
function Heart() {
  return (
    <div>
      <div id="wrapper" className="home-page">
        <section className="aboutUs">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <br />
                <div className="aligncenter">
                  <h2 className="aligncenter">Welcome to the Heart Center</h2>
                </div>
                <br />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img className="imgKhoi" src={images.khoi8} alt="" />
                <div className="space"></div>
              </div>
              <div className="col-md-6">
                <p>
                  <h5>
                    Welcome to the Heart Center, where we are dedicated to
                    providing exceptional cardiovascular care and promoting
                    heart health for individuals of all ages.
                  </h5>
                </p>
                <p>
                  {" "}
                  Our state-of-the-art facility is designed to offer
                  comprehensive services tailored to meet the unique needs of
                  each patient. At the Heart Center, we prioritize your
                  cardiovascular well-being, combining medical expertise,
                  cutting-edge technology, and a patient-centered approach.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-arrow-circle-right pr-10 colored"></i>{" "}
                    Cardiovascular Health Assessment
                  </li>
                  <li>
                    <i className="fa fa-arrow-circle-right pr-10 colored"></i>{" "}
                    Specialized Exercise Programs
                  </li>
                  <li>
                    <i className="fa fa-arrow-circle-right pr-10 colored"></i>{" "}
                    Nutritional Guidance
                  </li>
                  <li>
                    <i className="fa fa-arrow-circle-right pr-10 colored"></i>{" "}
                    Heart Disease Care
                  </li>
                  <li>
                    <i className="fa fa-arrow-circle-right pr-10 colored"></i>{" "}
                    Psychological Support and Counseling
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="txt-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="aligncenter">
                  <br />
                  <br />
                  <h1 className="aligncenter">We Care You</h1>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 wow fadeInUp animated">
                <div className="media service-box">
                  <div className="pull-left">
                    <div className="icon">
                      <i className="fa fa-heartbeat"></i>
                    </div>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">
                      Evaluation of Cardiovascular Health
                    </h4>
                    <p>
                      Cardiovascular centers typically conduct regular
                      assessments to evaluate the cardiovascular health of the
                      elderly. This includes monitoring blood pressure,
                      measuring blood glucose levels, and tracking risk factors
                      such as cholesterol.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 wow fadeInUp animated">
                <div className="media service-box">
                  <div className="pull-left">
                    <div className="icon">
                      <i className="fa fa-bicycle"></i>
                    </div>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">
                      Specialized Exercise Programs
                    </h4>
                    <p>
                      Elderly individuals are often encouraged to participate in
                      exercise programs tailored to their health conditions.
                      Gentle exercises like brisk walking, cycling, or yoga may
                      be integrated to improve cardiovascular health.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 wow fadeInUp animated">
                <div className="media service-box">
                  <div className="pull-left">
                    <div className="icon">
                      <i className="fa fa-balance-scale"></i>
                    </div>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">Nutritional Management</h4>
                    <p>
                      A quality and balanced diet play a crucial role in
                      maintaining cardiovascular health. The center can provide
                      guidance on suitable dietary plans for the elderly, aiding
                      in weight control and maintaining stable blood sugar
                      levels
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 wow fadeInUp animated">
                <div className="media service-box">
                  <div className="pull-left">
                    <div className="icon">
                      <i className="fa fa-stethoscope"></i>
                    </div>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">
                      Focus on Heart Disease Care
                    </h4>
                    <p>
                      For those with heart issues, the center provides focused
                      and comprehensive care, including regular monitoring and
                      management of treatments related to heart disease.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 col-sm-6 wow fadeInUp animated"
                data-wow-duration="300ms"
                data-wow-delay="400ms"
              >
                <div className="media service-box">
                  <div className="pull-left">
                    <div className="icon">
                      <i className="fa fa-user-md"></i>
                    </div>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">
                      Psychological Support and Counseling
                    </h4>
                    <p>
                      Caring for the elderly goes beyond physical aspects and
                      involves addressing psychological aspects. The center
                      offers psychological support, counseling, and education to
                      help the elderly and their families cope with and manage
                      cardiovascular conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="events">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="aligncenter">
                  <h2 className="aligncenter">Our Events</h2>
                </div>
                <br />
              </div>
            </div>
            <div className="row">
              {" "}
              {/*className="eventsLink" */}
              <div className="col-md-4">
                <div className="post3">
                  <img src={images.khoi9} alt="" />
                  <a href="#">
                    <time datetime="2019-03-01">
                      <span className="year">2019</span>
                      <span className="month">Feb</span>
                    </time>
                    <p>Doctors are heroes.</p>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="post3">
                  <img src={images.khoi10} alt="" />
                  <a href="#">
                    <time datetime="2019-03-01">
                      <span className="year">2019</span>
                      <span className="month">Dec</span>
                    </time>
                    <p>Meaningful gifts for Christmas</p>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="post3">
                  <img src={images.khoi11} alt="" />
                  <a href="#">
                    <time datetime="2019-03-01">
                      <span className="year">2019</span>
                      <span className="month">April</span>
                    </time>
                    <p>Small gift, big love</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="content">
          <div className="container">
            <div className="about">
              <div className="row">
                <div className="col-md-6">
                  <img src={images.khoi12} alt="" />
                  <div className="space"></div>
                </div>
                <div className="col-md-6">
                  <div className="about-logo">
                    <h3>
                      We are an awesome <span className="color">TEAM</span>
                    </h3>
                    <p>
                      "We are an exceptional team of cardiologists at the Heart
                      Center, collectively dedicated to providing outstanding
                      cardiovascular care. Our diverse and highly skilled group
                      of doctors collaborates seamlessly to ensure the
                      well-being of our patients."
                    </p>
                    <p>
                      "With a shared commitment to excellence, we bring together
                      our expertise, passion, and compassion to form an awesome
                      team focused on your heart health. Your cardiovascular
                      wellness is our top priority, and we take pride in working
                      together to deliver the highest quality care to each
                      individual we serve."
                    </p>
                    <a href="#" className="btn btn-color">
                      Read more
                    </a>
                  </div>
                </div>
                {/* <div className="col-md-6">
        
    </div> */}
              </div>
              <hr />
              <br />
              <div className="row">
                <div className="col-md-6">
                  <div className="block-heading-two">
                    <h3>
                      <span>Why Choose Us?</span>
                    </h3>
                  </div>
                  <p className="lead">
                    At the Heart Center, we understand that when it comes to
                    your cardiovascular health, choosing the right care is
                    paramount. Here are compelling reasons why you should choose
                    us for your heart care needs:
                  </p>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <h4>Expertise and Experience</h4>
                      <p>
                        Our center is staffed with a team of experienced and
                        highly skilled cardiologists who bring a wealth of
                        expertise in cardiovascular medicine. We are dedicated
                        to staying at the forefront of advancements in heart
                        care to provide you with the best possible treatment
                        options.
                      </p>
                    </li>
                    <li className="list-group-item">
                      <h4>Comprehensive Cardiovascular Services</h4>
                      <p>
                        From routine check-ups to specialized treatments, we
                        offer a comprehensive range of cardiovascular services.
                        Whether you're seeking preventive care or managing a
                        heart condition, our center is equipped to address all
                        your heart health needs under one roof.
                      </p>
                    </li>
                  </ul>
                  <p className="lead">
                    Choose the Heart Center for unparalleled cardiovascular care
                    where expertise meets compassion, and your heart's health is
                    our foremost concern. Your journey to a healthier heart
                    starts with us.
                  </p>
                </div>

                <div className="col-md-6">
                  <div className="block-heading-two">
                    <h3>
                      <span>Our Solution</span>
                    </h3>
                  </div>
                  <div className="timeline">
                    <div className="timeline-item">
                      <strong>2019</strong>
                      <p>
                        It is very important for the customer to pay attention
                        to the adipiscing process. It will happen that the
                        accusers simply do not know anything about the great
                        forgiveness of the wise man of repudiation. Please be
                        aware of what you are doing!
                      </p>
                    </div>
                    <div className="timeline-item">
                      <strong>2013</strong>
                      <p>
                        It is very important for the customer to pay attention
                        to the adipiscing process. It will happen, whence I will
                        come to the wise man of great repudiation. The
                        consequence of this is that they will be repulsed by
                        some trouble, and it will be more difficult than any
                        other!
                      </p>
                    </div>
                    <div>
                      <br />
                      <img src={images.khoi13} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <br />

              <div className="block-heading-six">
                <h4 className="bg-color">Our Team</h4>
              </div>
              <br />

              <div>
                <div className="row">
                  <div className="col-md-3 col-sm-6">
                    <div className="team-member">
                      <img src={images.khoi14} alt="" />

                      <h4>Johne Doe</h4>
                      <span className="deg">
                        <strong>Sr.Doctor</strong>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="team-member">
                      <img src={images.khoi15} alt="" />

                      <h4>Jennifer</h4>
                      <span className="deg">
                        <strong>Sr.Surgeon</strong>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="team-member">
                      <img src={images.khoi16} alt="" />

                      <h4>Christean</h4>
                      <span className="deg">
                        <strong>Manager</strong>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="team-member">
                      <img src={images.khoi17} alt="" />

                      <h4>Kerinele rase</h4>
                      <span className="deg">
                        <strong>Chairman</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Heart;
