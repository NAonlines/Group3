import React from 'react'
import images from '../../Assets/dataimg';
import '../ICU/ICU.css';

function ICU() {
    return (
        <body>
            <div id="__next">
                <div className="page-title-area bg-1">
                    <div className="d-table">
                        <div className="image-container">
                            <img className='heart img-fluid' src={images.heart} alt="" />
                            <div className="text-overlay">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="page-title-content">
                                            <h2 className="active" _msttexthash="2277236" _msthash="425">Services CHA Cambridge</h2>
                                            <ul>
                                                <li>
                                                    <a href="/" _msttexthash="44122" _msthash="426" previewlistener="true">Nhà</a>
                                                </li>
                                                <li className="active" _msttexthash="2277236" _msthash="427">Services CHA Cambridge</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="first-facility-area services-page-one">
                    <div className="dichvu">
                        <div className="container" >
                            <div className="row justify-content-center">
                                <div className="col-md-4 col-sm-6">
                                    <div className="first-facility-item">
                                        <div className="icon">
                                            <i className="fa fa-handshake-o fa-5x" aria-hidden="true"></i>
                                        </div>
                                        <div className="content">
                                            <h3 className="active">Special Service</h3>
                                            <p>
                                                Help protect the health of ourselves and our families. Early detection of disease risks will help us take timely treatment measures when examined at the hospital.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="first-facility-item">
                                        <div className="icon">
                                            <i className="fa fa-clock-o fa-5x" aria-hidden="true"></i>
                                        </div>
                                        <div className="content">
                                            <h3 className="active">24/7 Advanced Care</h3>
                                            <p>
                                                Because health crises can happen at any time of the day or night,we provide 24/7 medical services and guarantee you will be seen as quickly as possible.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="first-facility-item">
                                        <div className="icon">
                                            <i className="fa fa-check fa-5x" aria-hidden="true"></i>
                                        </div>
                                        <div className="content">
                                            <h3 className="active">Get Result Online</h3>
                                            <p>
                                                If patients choose this service, will not have to take a full day off work to go to the doctor, do not waste time in traffic, do not have to sit in waiting rooms with people who may have infectious diseases.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="second-facility-area pt-100 pb-70">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <div className="second-facility-item">
                                    <img className="icon2" src={images.bacsi} alt="Image" />
                                    <h3 className="active">Qualified Doctors</h3>
                                    <p>
                                        They have completed a medical degree and can have up to nine years' of working experience as a hospital doctor, depending on their specialty, or up to five years working and gaining experience to become a general practitioner (GP).
                                        All junior doctors work under the supervisor of a senior doctor.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="second-facility-item">
                                    <img className="icon2" src={images.capcuu} alt="Image" />
                                    <h3 className="active">Emergency Ambulance</h3>
                                    <p>
                                        Safe hospitalization of patients with severe conditions - all ambulance vehicles are equipped with high-tech medical and diagnostic equipment, and are staffed by experienced specialists who will provide assistance in various medical situations, including resuscitation and emergency treatment.
                                        Call: 617-665-1398
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="second-facility-item">
                                    <img className="icon2" src={images.maytinh} alt="Image" />
                                    <h3 className="active">Leading Technology</h3>
                                    <p>
                                        The diagnosis must be accurate and fast. The patient will recover quickly, leading to the shortest treatment time. Reducing treatment time is reducing treatment costs. Therefore, CHA Cambridge medical machinery and equipment system is focused on investing with the most modern machines, suitable for current and future needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="emergency-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="emergency-content ptb-100">
                                    <h2>Emergency? For any Help Contact Us Now</h2>
                                    <p>During emergencies, quick and efficient assistance is vital. Our dedicated team is at your service around the clock, ready to provide immediate support. Whether you're facing a medical crisis or have general questions, your well-being is our top priority. Feel free to contact us; we're here to ensure your safety and health.</p>
                                    <p> Don't hesitate - we're just a call away.</p>
                                    <ul>
                                        <li className="active"><i className="bx bx-phone-call"></i><span>Call Now</span>
                                            <h3>+617-665-1398</h3>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-8 col-sm-10 pr-0">
                                <div className="emergency-img">
                                    <img src={images.love} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={images.dep} alt="" className="img-fluid" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Surgery Dep</h3>
                                <p>...</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={images.chill} alt="" className="img-fluid" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Childcare Dep</h3>
                                <p>...</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={images.cardiology} alt="" className="img-fluid" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Cardiology Dep</h3>
                                <p>...</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div> */}

            </div>
        </body>


    )
}

export default ICU;