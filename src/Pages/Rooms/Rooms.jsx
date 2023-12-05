import React, { useState, useEffect } from 'react';
import images from '../../Assets/dataimg';
import '../Rooms/Rooms.css';

function Roomss() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const imageContainer = document.querySelector('.phongbenh');
            const offset = imageContainer.getBoundingClientRect().top;

            setIsVisible(offset < window.innerHeight * 0.8);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <body>
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
            <div className="row g-2 text-center">
                <div className="col-12">
                    <div className="chinhsua">
                        <div className="row">
                            <div className="col-md-7">
                                <h1 className="tieude">
                                    HOSPITAL ROOM SERVICES </h1>
                                <h3 className='container text-start'>
                                    Laundry </h3>
                                <p className='container text-start'>
                                    Sheets and pillowcases will be changed every five days or when soiled. Fresh towels and face
                                    clothes will be provided daily. You may bring your own pillow and blanket from home, if you
                                    wish.
                                </p>
                                <h3 className='container text-start'>
                                    Medical staff available 24/24 Hours a day</h3>
                                <p className='container text-start' >
                                    The hospital implements a comprehensive care regime: Nurses serve 24/24
                                    Hours according to doctor's orders from infusions, injections, medications,
                                    serving meals at the bed to mobility support, hygiene ... When needed, just
                                    press the nursing call button, all your care needs will be met.
                                </p>
                                <h3 className="container text-start">
                                    Hospital security
                                </h3>
                                <p className='container text-start'>
                                    CHA Cambridge Hospital is responsible for ensuring your safety when visiting
                                    and being treated at the hospital. CCTV system works continuously,
                                    supporting security work in the hospital. Security guards are available
                                    24/24 Hours a day. If you have a request, please contact the hospital's
                                    security department by pressing the "0" key on the landline phone for
                                    assistance.
                                </p>
                            </div>
                            <div className="col-md-4">
                                <img className={`phongbenh ${isVisible ? 'visible' : ''}`} src={images.phongbenh} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Roomss;
