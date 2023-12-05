import React from 'react'
import './Community_health.css';
import images from '../../Assets/dataimg'
function Community_health() {
  return (
    <div>
       <div class="container-fluid services py-5">
            <div class="container py-5">
                <div class="mx-auto text-center mb-5" >
                    <p class="fs-4 text-uppercase text-center text-primary">Welcome to the Community Health Centre!</p>
                    <h1 class="display-3">Comprehensive Healthcare Services</h1>
                </div>
                <div class="row g-4">
                    <div class="col-lg-6">
                        <div class="services-item bg-light border-4 border-end border-primary rounded p-4">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <div class="services-content text-end">
                                        <h3>Advanced Medical Imaging Devices</h3>
                                        <p>We utilize state-of-the-art medical imaging machines such as MRI, CT scanners, and ultrasound machines for accurate and swift diagnostics. This helps us devise precise and effective treatment plans.</p>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="services-img d-flex align-items-center justify-content-center rounded">
                                        <img src={images.khoi20} class="img-fluid rounded" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="services-item bg-light border-4 border-start border-primary rounded p-4">
                            <div class="row align-items-center">
                                <div class="col-4">
                                    <div class="services-img d-flex align-items-center justify-content-center rounded">
                                        <img src={images.khoi21} class="img-fluid rounded" alt=""/>
                                    </div>
                                </div>
                                <div class="col-8">
                                    <div class="services-content text-start">
                                        <h3>Health Monitoring Devices</h3>
                                        <p>We have health monitoring devices such as blood pressure monitors, heart rate monitors, and glucose monitoring devices. These tools aid in monitoring patients' health conditions and enable timely interventions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="services-item bg-light border-4 border-end border-primary rounded p-4">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <div class="services-content text-end">
                                        <h3>Automated Diagnostic Systems</h3>
                                        <p>We integrate automated diagnostic systems to process and analyze test results quickly and accurately. This reduces waiting times and ensures precise diagnostic outcomes.</p>
                                       
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="services-img d-flex align-items-center justify-content-center rounded">
                                        <img src={images.khoi22} class="img-fluid rounded" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="services-item bg-light border-4 border-start border-primary rounded p-4">
                            <div class="row align-items-center">
                                <div class="col-4">
                                    <div class="services-img d-flex align-items-center justify-content-center rounded">
                                        <img src={images.khoi23} class="img-fluid rounded" alt=""/>
                                    </div>
                                </div>
                                <div class="col-8">
                                    <div class="services-content text-start">
                                        <h3>Robot-Assisted Surgery Systems</h3>
                                        <p>We utilize robot-assisted surgery systems to enhance accuracy during surgical procedures. These robots help minimize patient trauma and reduce recovery time post-surgery.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="services-item bg-light border-4 border-end border-primary rounded p-4">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <div class="services-content text-end">
                                        <h3>Electronic Health Records System</h3>
                                        <p>We implement an electronic health records system to efficiently manage patients' medical information. This enhances connectivity between different departments and provides continuous and collaborative care.</p>
                                      
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="services-img d-flex align-items-center justify-content-center rounded">
                                        <img src={images.khoi24} class="img-fluid rounded" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="services-item bg-light border-4 border-start border-primary rounded p-4">
                            <div class="row align-items-center">
                                <div class="col-4">
                                    <div class="services-img d-flex align-items-center justify-content-center rounded">
                                        <img src={images.khoi25}  class="img-fluid rounded" alt=""/>
                                    </div>
                                </div>
                                <div class="col-8">
                                    <div class="services-content text-start">
                                        <h3>Mobile Medical Equipment</h3>
                                        <p>To ensure convenient and flexible healthcare, we deploy mobile medical equipment such as emergency medical vehicles and mobile clinics. This helps us reach inaccessible areas and provide healthcare services to everyone.</p>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid about py-5">
            <div class="container py-5">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-5">
                        <div class="video">
                            <img src={images.khoi26} class="img-fluid rounded" alt=""/>
                                <img src={images.khoi28} class="img-fluid rounded" alt=""/>
                                <img src={images.khoi35} class="img-fluid rounded" alt=""/>
                                <img src={images.khoi36} class="img-fluid rounded" alt=""/>
                                <img src={images.khoi37} class="img-fluid rounded" alt=""/>
                          
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <p class="fs-4 text-uppercase text-primary">Supporting Health Equity</p>
                        <h1 class="display-4 mb-4">Community Health Center Initiatives for Financial Accessibility and Holistic Patient Support</h1>
                        
                        <div class="row g-4">
                            <div class="col-md-6">
                                <div class="d-flex align-items-center">
                                    <i class="fa fa-handshake-o fa-3x text-primary"></i>
                                    <div class="ms-4">
                                        <h5 class="mb-2">Financial Accessibility for Low-Income Individuals</h5>
                                        <p class="mb-0">Community Health Centers often implement policies and programs to ensure that individuals with limited financial means can still access essential healthcare services. This may include sliding fee scales, discounted services, or financial assistance programs that alleviate the financial burden on low-income patients, making quality healthcare more accessible.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex align-items-center">
                                    <i class="fa fa-heart fa-3x text-primary"></i>
                                    <div class="ms-4">
                                        <h5 class="mb-2">Holistic Support for Vulnerable Populations</h5>
                                        <p class="mb-0"> Beyond medical care, Community Health Centers may have initiatives to support patients facing economic challenges. This could involve connecting patients with resources such as food assistance programs, housing support, or employment services. By addressing social determinants of health, these centers contribute to the overall well-being of individuals and families in the community.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex align-items-center">
                                    <i class="fa fa-cutlery fa-3x text-primary"></i>
                                    <div class="ms-4">
                                        <h5 class="mb-2">Food Assistance Programs</h5>
                                        <p class="mb-0"> Community Health Centers often collaborate with local food banks and nutrition programs to ensure that patients facing food insecurity have access to nutritious meals. By addressing the basic need for proper nutrition, these programs contribute to better health outcomes and overall well-being.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex align-items-center">
                                    <i class="fa fa-home fa-3x text-primary"></i>
                                    <div class="ms-4">
                                        <h5 class="mb-2">Housing Support Services</h5>
                                        <p class="mb-0"> Recognizing the impact of stable housing on health, some Community Health Centers may offer assistance in accessing affordable housing options. This support helps create a foundation for individuals and families to lead healthier lives, reducing the stress associated with housing instability.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex align-items-center">
                                    <i class="fa fa-black-tie fa-3x text-primary"></i>
                                    <div class="ms-4">
                                        <h5 class="mb-2">Employment Services</h5>
                                        <p class="mb-0"> To empower patients economically, Community Health Centers may provide assistance in job placement, skill development, or connecting individuals with employment opportunities. By addressing economic challenges, these centers contribute to the long-term stability and health of the community they serve.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex align-items-center">
                                    <i class="fa fa-graduation-cap fa-3x text-primary"></i>
                                    <div class="ms-4">
                                        <h5 class="mb-2">The Community Health Center's program for school-going children</h5>
                                        <p class="mb-0"> Is a comprehensive initiative designed to prioritize and enhance the health and well-being of our younger community members. Focused on fostering a healthy lifestyle and instilling positive health habits from an early age, our program integrates a range of services and activities. These include regular health check-ups, vaccinations, and health education sessions tailored specifically for children. The program also extends its reach beyond the clinic by collaborating with local schools to implement wellness programs, nutrition education, and physical activity initiatives. By creating a supportive and educational environment, the Community Health Center aims to empower children with the knowledge and habits necessary for a lifetime of good health.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="my-4">In conclusion, the initiatives undertaken by the Community Health Center to improve financial accessibility and provide holistic patient support reflect our unwavering commitment to creating a healthier and more equitable community. By implementing sliding fee scales, discounted services, and financial assistance programs, we aim to ensure that individuals, regardless of their financial means, can access essential healthcare services.
                        </p>
                        <p class="mb-4">Additionally, our focus on comprehensive patient support goes beyond medical care, addressing social determinants of health. Initiatives such as food assistance programs, housing support, and employment services demonstrate our dedication to the overall well-being of our community members. Through these endeavors, the Community Health Center strives to make a lasting impact, fostering a community where everyone has the opportunity to lead a healthy and fulfilling life.
                        </p>
                       
                    </div> 
                </div>
            </div>
        </div>
        <div class="container-fluid team py-5">
            <div class="container py-5">
                <div class="text-center mx-auto mb-5" >
                    <p class="fs-4 text-uppercase text-primary">Leading the Way in Healthcare</p>
                    <h1 class="display-4 mb-4">Profiles of 4 Outstanding Doctors at the Community Health Center.</h1>
                </div>
                <div class="row g-4">
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="team-item">
                            <div class="team-img rounded-top">
                                <img src={images.khoi31} class="img-fluid w-100 rounded-top bg-light" alt=""/>
                            </div>
                            <div class="team-text rounded-bottom text-center p-4">
                                <h3 class="text-white">Dr. Angela</h3>
                                <p class="mb-0 text-white">Dr. Angela is a renowned expert in women's and children's health. She has spearheaded numerous campaigns supporting reproductive health and prenatal care, ensuring thousands of women experience safe and healthy pregnancies.</p>
                            </div>
                            <div class="team-social">
                                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i class="fa fa-twitter"></i></a>
                                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i class="fa fa-facebook-official"></i></a>
                                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i class="fa fa-linkedin"></i></a>
                                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle" href="#"><i class="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="team-item">
                            <div class="team-img rounded-top">
                                <img src={images.khoi30} class="img-fluid w-100 rounded-top bg-light" alt=""/>
                            </div>
                            <div class="team-text rounded-bottom text-center p-4">
                                <h3 class="text-white">Dr. Jonathan</h3>
                                <p class="mb-0 text-white">Dr. Jonathan is celebrated for his research and implementation of cancer screening programs. His contributions have helped the community detect potentially life-threatening illnesses early, significantly improving the chances of successful treatment.</p>
                            </div>
                            <div class="team-social">
                                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i class="fa fa-twitter"></i></a>
                                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i class="fa fa-facebook-official"></i></a>
                                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i class="fa fa-linkedin"></i></a>
                                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle" href="#"><i class="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="team-item">
                            <div class="team-img rounded-top">
                                <img src={images.khoi32} class="img-fluid w-100 rounded-top bg-light" alt=""/>
                            </div>
                            <div class="team-text rounded-bottom text-center p-4">
                                <h3 class="text-white">Dr. Maria </h3>
                                <p class="mb-0 text-white">Dr. Maria has led initiatives for patient care across diverse ethnicities and languages, creating a culturally rich and accessible healthcare environment for all.</p>
                            </div>
                            <div class="team-social">
                                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i class="fa fa-twitter"></i></a>
                                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i class="fa fa-facebook-official"></i></a>
                                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i class="fa fa-linkedin"></i></a>
                                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle" href="#"><i class="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="team-item">
                            <div class="team-img rounded-top">
                                <img src={images.khoi34} class="img-fluid w-100 rounded-top bg-light" alt=""/>
                            </div>
                            <div class="team-text rounded-bottom text-center p-4">
                                <h3 class="text-white">Dr. Richard </h3>
                                <p class="mb-0 text-white">Dr. Richard, an expert in cardiology, has successfully implemented community education programs on healthy lifestyles and cardiovascular disease management, contributing to the overall improvement of community heart health.</p>
                            </div>
                            <div class="team-social">
                                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i class="fa fa-twitter"></i></a>
                                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i class="fa fa-facebook-official"></i></a>
                                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i class="fa fa-linkedin"></i></a>
                                <a class="btn btn-light btn-light-outline-0 btn-square rounded-circle" href="#"><i class="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Community_health
