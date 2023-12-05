import React from 'react';
import './Other.css';
import images from '../../Assets/dataimg';


function Facility() {

    return (
        <body>
            <div className="facility">
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

                <section className="blog-area pt-120 pb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <article className="postbox post format-image mb-40">
                                    <div className="postbox__thumb">
                                        <a href="/blogDetails" previewlistener="true">
                                            <img src={images.b1} alt="blog img" />
                                        </a>
                                    </div>
                                    <div className="postbox__text p-50">
                                        <div className="post-meta mb-15">
                                            <span>
                                                <i className="far fa-calendar-check"></i> September 15, 2021
                                            </span>
                                        </div>
                                        <h3 className="blog-title">
                                            <p previewlistener="true">
                                                Welcome to Good Health Care CHA Cambridge
                                            </p>
                                        </h3>
                                        <div className="post-text mb-20">
                                            <p>
                                                We take pride in being a modern and comprehensive healthcare center, committed to providing top-notch healthcare services to the community. With a team of professional doctors and healthcare staff, we continuously strive to meet every healthcare need of our patients.
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article className="postbox post format-video mb-40">
                                    <div className="postbox__video">
                                        <video width="100%" height="auto" controls style={{ maxWidth: '100%' }}>
                                            <source src={images.b2} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>



                                    <div className="postbox__text p-50">
                                        <div className="post-meta mb-15">
                                            <span>
                                                <i className="far fa-calendar-check"></i> September 15, 2021
                                            </span>
                                        </div>
                                        <h3 className="blog-title">
                                            <p previewlistener="true" >
                                                Our facility is equipped with the most advanced medical equipment and state-of-the-art technology
                                            </p>
                                        </h3>
                                        <div className="post-text mb-20">
                                            <p>
                                                Our facility is equipped with state-of-the-art medical equipment and modern technology to ensure that every treatment and diagnosis is carried out with precision and safety. Furthermore, the comfortable and friendly atmosphere at our facility aims to provide a positive and comfortable healthcare experience for all patients.
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                {/* <article className="postbox post format-gallery mb-40">
                                    <ImageSlider images={[images.b3]} />

                                    <div className="postbox__text p-50">
                                        <div className="post-meta mb-15">
                                            <span>
                                                <i className="far fa-calendar-check"></i> September 15, 2021
                                            </span>
                                            <span>
                                                <a href="/blogDetails" previewlistener="true">
                                                    <i className="far fa-user"></i> Diboli B. Joly
                                                </a>
                                            </span>
                                            <span>
                                                <a href="/blogDetails" previewlistener="true">
                                                    <i className="far fa-comments"></i> 23 Comments
                                                </a>
                                            </span>
                                        </div>
                                        <h3 className="blog-title">
                                            <a href="/blogDetails" previewlistener="true">
                                                The well-known health website has quite a collection of blogs.
                                            </a>
                                        </h3>
                                        <div className="post-text mb-20">
                                            <p>
                                                There's a good chance Everyday Health is the most appropriately named blog on this list because it focuses on the health topics that consistently affect a wide range of people. They also get kudos for addressing the emotional challenges folks face when managing conditions.
                                            </p>
                                        </div>
                                        <div className="read-more mt-30">
                                            <a className="primary_btn theme-btn" href="/blogDetails" previewlistener="true">read more</a>
                                        </div>
                                    </div>
                                </article> */}

                                <article className="postbox post format-audio mb-40">
                                    <div className="postbox__audio">
                                        <video width="100%" height="auto" controls style={{ maxWidth: '100%' }}>
                                            <source src={images.b6} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>


                                    <div className="postbox__text p-50">
                                        <div className="post-meta mb-15">
                                            <span>
                                                <i className="far fa-calendar-check"></i> September 15, 2021
                                            </span>
                                        </div>
                                        <h3 className="blog-title">
                                            <p previewlistener="true">
                                                CHA Cambridge -- They've Got You!
                                            </p>
                                        </h3>
                                        <div className="post-text mb-20">
                                            <p>
                                                We offer a wide range of diverse healthcare services, from regular check-ups and disease treatments to comprehensive health care programs. Our team of physicians and healthcare experts is always ready to listen and support you on your journey to maintaining and improving your health.
                                            </p>
                                            <p>
                                                We warmly welcome you to Good Health Care CHA Cambrigde- a place where you can trust in professionalism, attentiveness, and quality in every healthcare service. Let us take care of and accompany you on your healthcare journey.
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </body >

    );
}

export default Facility;
