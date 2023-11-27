import React from 'react'
import images from '../../Assets/dataimg'
function Home() {
    return (
        <div classNameName="Row container">
            <div classNameName="col-12">
                <div classNameName="row">
                    <div className="col-12 slide-home">
                        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <video className="img-fluid-custom " autoPlay loop muted>
                                        <source src={images.videoslide1} type="video/mp4" />
                                    </video>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>
                                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                                        </p>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <video className="img-fluid-custom " autoPlay loop muted>
                                        <source src={images.videoslide2} type="video/mp4" />
                                    </video>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <video className="img-fluid-custom " autoPlay loop muted>
                                        <source
                                            src={images.videoslide3}
                                            type="video/mp4"
                                        />
                                    </video>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button> */}
                        </div>
                    </div>
                    {/* <div classNameName="col-12">
                        <div
                            id="carouselVideoExample"
                            className="carousel slide carousel-fade"
                            data-mdb-ride="carousel"
                        >
                            <div className="carousel-indicators">
                                <button
                                    type="button"
                                    data-mdb-target="#carouselVideoExample"
                                    data-mdb-slide-to="0"
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                ></button>
                                <button
                                    type="button"
                                    data-mdb-target="#carouselVideoExample"
                                    data-mdb-slide-to="1"
                                    aria-label="Slide 2"
                                ></button>
                                <button
                                    type="button"
                                    data-mdb-target="#carouselVideoExample"
                                    data-mdb-slide-to="2"
                                    aria-label="Slide 3"
                                ></button>
                            </div>

                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <video className="img-fluid" autoPlay loop muted>
                                        <source src={images.videoslide1} type="video/mp4" />
                                    </video>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>
                                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                                        </p>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <video className="img-fluid" autoPlay loop muted>
                                        <source src={images.videoslide2} type="video/mp4" />
                                    </video>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <video className="img-fluid" autoPlay loop muted>
                                        <source
                                            src={images.videoslide3}
                                            type="video/mp4"
                                        />
                                    </video>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-mdb-target="#carouselVideoExample"
                                data-mdb-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-mdb-target="#carouselVideoExample"
                                data-mdb-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div> */}
                </div>
                <div classNameName="row">
                    <div classNameName="col-md-6 card test-home">
                        Welcome Bridge Health

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home