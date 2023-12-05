import React, { useState } from 'react';
import '../Medical/Medical.css';
import images from '../../Assets/dataimg';

function Medical() {
    const [activeIndex, setActiveIndex] = useState(0);

    const PortfolioFilter = () => {
        const handleButtonClick = (index) => {
            setActiveIndex(index);
        };

        return (
            <div className="text-center">
                <div className="portfolio-filter mb-40">
                    <button className={activeIndex === 0 ? 'active' : ''} onClick={() => handleButtonClick(0)}>
                        Show all
                    </button>
                    <button className={activeIndex === 1 ? 'active' : ''} onClick={() => handleButtonClick(1)}>
                        Care
                    </button>
                    <button className={activeIndex === 2 ? 'active' : ''} onClick={() => handleButtonClick(2)}>
                        Item
                    </button>
                </div>
            </div>
        );
    };

    return (
        <body>
            <div>
                <div id="root">
                    <section className="breadcrumb-bg pt-200 pb-180 page_header_bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9 col-md-9">
                                    <div className="page-title">
                                        <p className="small-text pb-15">We are here for your care.</p>
                                        <h2>CHA Cambridge</h2>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-3 col-md-3 d-flex justify-content-start justify-content-md-end align-items-center">
                                    <div className="page-breadcumb">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb ">
                                                <li className="breadcrumb-item"><a href="/" previewlistener="true">Home</a></li>
                                                <li className="breadcrumb-item active" aria-current="page">Blog</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


                <section className="portfolio-area pt-120 pb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <PortfolioFilter />
                            </div>
                        </div>
                        <div id="portfolio-grid" className="row row-portfolio">
                            {/* Care Section */}
                            {activeIndex === 0 || activeIndex === 1 ? (
                                <>
                                    <div className="col-lg-4 col-md-6 grid-item">
                                        {/* Hình ảnh cho Care */}
                                        <div className="portfolio-item mb-30">
                                            <div className="portfolio-wrapper">
                                                <div className="portfolio-image">
                                                    <img src={images.p1} alt="" width="376" height="376" />
                                                    <div className="view-icon">
                                                    </div>
                                                </div>
                                                <div className="portfolio-caption">
                                                    <h4> Modern Hospital Beds - Optimal Safety and Comfort</h4>
                                                    <p>Introducing our state-of-the-art modern hospital bed, enhancing the healthcare experience. With ergonomic design, waterproof materials, and flexible adjustments, these beds maximize comfort for patients. The modern control system and integrated medical technology make monitoring and treatment a seamless process for healthcare providers. Aimed at creating the safest and most convenient environment for patients, our modern hospital beds stand as the top choice for advanced medical facilities.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 grid-item">
                                        {/* Hình ảnh khác cho Care */}
                                        <div className="portfolio-item mb-30">
                                            <div className="portfolio-wrapper">
                                                <div className="portfolio-image">
                                                    <img src={images.p2} alt="" width="376" height="376" />
                                                    <div className="view-icon">
                                                    </div>
                                                </div>
                                                <div className="portfolio-caption">
                                                    <h4>Oxygen</h4>
                                                    <p>Hospital oxygen cylinders are crucial components in the medical field, playing a decisive role in delivering oxygen to patients. Designed to maintain safe and efficient oxygen levels, these devices serve various medical situations, from operating rooms to emergency departments. The oxygen cylinders are connected to medical oxygen supply systems, ensuring that patients receive an adequate supply of oxygen to sustain respiratory function. With their high-quality design and safety features, hospital oxygen cylinders play a vital role in ensuring effective and reliable healthcare.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 grid-item">
                                        {/* Hình ảnh khác cho Care */}
                                        <div className="portfolio-item mb-30">
                                            <div className="portfolio-wrapper">
                                                <div className="portfolio-image">
                                                    <img src={images.p3} alt="" width="376" height="376" />
                                                    <div className="view-icon">
                                                    </div>
                                                </div>
                                                <div className="portfolio-caption">
                                                    <h4>The hemodialysis</h4>
                                                    <p>
                                                        The hemodialysis machine plays a pivotal role in healthcare, especially for those with compromised kidney function. This advanced technology effectively filters and purifies blood, mimicking the natural role of healthy kidneys. It removes waste products and excess fluids, contributing to the overall well-being of patients with renal diseases. Continuous innovations in design have led to improved efficiency and ease of use, making hemodialysis machines crucial in managing kidney-related conditions and enhancing patients' quality of life.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            ) : null}

                            {/* Item Section */}
                            {activeIndex === 0 || activeIndex === 2 ? (
                                <>
                                    <div className="col-lg-4 col-md-6 grid-item">
                                        {/* Hình ảnh cho Item */}
                                        <div className="portfolio-item mb-30">
                                            <div className="portfolio-wrapper">
                                                <div className="portfolio-image">
                                                    <img src={images.p4} alt="" width="376" height="376" />
                                                    <div className="view-icon">
                                                    </div>
                                                </div>
                                                <div className="portfolio-caption">
                                                    <h4>The ECMO machine</h4>
                                                    <p>The ECMO machine, or Extracorporeal Membrane Oxygenation, is a life-saving medical device used in critical care situations. It provides temporary support for patients with severe heart or lung failure by pumping and oxygenating their blood outside the body. ECMO serves as a vital bridge, allowing damaged organs to rest and heal. This sophisticated technology has proven instrumental in cases where conventional treatments fall short, offering a lifeline to patients facing life-threatening conditions.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 grid-item">
                                        {/* Hình ảnh khác cho Item */}
                                        <div className="portfolio-item mb-30">
                                            <div className="portfolio-wrapper">
                                                <div className="portfolio-image">
                                                    <img src={images.p5} alt="" width="376" height="376" />
                                                    <div className="view-icon">
                                                    </div>
                                                </div>
                                                <div className="portfolio-caption">
                                                    <h4>The insulin</h4>
                                                    <p>The insulin pump is a compact, portable device designed to simplify and enhance the management of diabetes. This innovative device delivers a continuous and customizable supply of insulin to individuals with diabetes, mimicking the natural release of insulin by the pancreas. By providing precise insulin doses, the pump helps regulate blood sugar levels more effectively than traditional injections. Its user-friendly features contribute to improved convenience and flexibility in diabetes care, offering individuals greater control over their glucose levels for a healthier and more active lifestyle.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 grid-item">
                                        {/* Hình ảnh khác cho Item */}
                                        <div className="portfolio-item mb-30">
                                            <div className="portfolio-wrapper">
                                                <div className="portfolio-image">
                                                    <img src={images.p6} alt="" width="376" height="376" />
                                                    <div className="view-icon">
                                                    </div>
                                                </div>
                                                <div className="portfolio-caption">
                                                    <h4>A walking frame</h4>
                                                    <p>
                                                        A walking frame, also known as a walker, is a mobility aid designed to assist individuals in walking and maintaining balance. It typically consists of a metal or aluminum frame with four legs, providing stability and support. Walkers are commonly used by people with mobility challenges, such as the elderly or those recovering from injuries or surgeries. The user grips the walker's handles, lifts it slightly, and moves it forward, taking steps within the frame. This device offers increased stability and confidence, aiding individuals in regaining or maintaining their ability to walk independently.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : null}
                        </div>
                    </div>
                </section>
            </div>
        </body>
    );
}

export default Medical;
