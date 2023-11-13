import React, { useEffect, useState } from 'react';
import '../Header/Header.css';
import myImg from '../Img/Logo-cmb.png'
import LoginPage from '../LoginPage/LoginPage';
import { Link, useNavigate } from 'react-router-dom';
function Header() {
    const [isLoginVisible, setLoginVisible] = useState(false);
    const [username, setUsername] = useState('');

    const navigate = useNavigate();

    const handleLoginClick = () => {
        setLoginVisible(!isLoginVisible);
    };

    const closeLogin = () => {
        setLoginVisible(false);
    };

    const handleLoginSuccess = (loggedInUsername) => {
        setUsername(loggedInUsername);
        closeLogin();
    };

    const handleLogout = () => {
        setUsername('usernamer');
        navigate('/');
        window.location.reload();
    };


    return (
        <div>
            <div className="header-top d-none d-lg-block">
                <div className="container-f">
                    <div className="row">
                        <div className="col-md-3">
                            <Link to='/'>
                                <img className="img-logo-1" src={myImg} alt="Cambrigde Hospital" />
                            </Link>

                        </div>
                        <div className="col-md-6">
                            <div className="font-top">
                                <span className="fa fa-phone">Hotline: 617-665-1398</span>

                                <a className="fa fa-envelope" href="mailto:tenshiyami98.email@gmail.com">Email: Tenshiyami98@gmail.com</a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            {username ? (
                                <div>
                                    <button className="sbtn btn btn-outline-primary navbutton-top mx-2">
                                        Billing
                                    </button>
                                    <button className="sbtn btn btn-outline-danger navbutton-top" onClick={handleLogout}>
                                        Log Out
                                    </button>

                                </div>


                            ) : (
                                <div>
                                    <Link to="/signup" className="sbtn btn btn-outline-primary navbutton-top mx-2">
                                        Sign Up
                                    </Link>
                                    <button className="sbtn btn btn-outline-success navbutton-top" onClick={handleLoginClick}>
                                        Login
                                    </button>
                                    {isLoginVisible && <LoginPage onClose={closeLogin} onLoginSuccess={handleLoginSuccess} />}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-navbar">
                <nav className="navbar navbar-expand-lg nav-color">
                    <div className="container">
                        <a className="navbar-brand d-lg-none" href="#">
                            <img className="img-logo-1" src={myImg} alt="" />
                        </a>
                        <Link to="/" className="navbar-brand d-none d-lg-block">
                            <h4 className="font-home-h4 fw-bold">Home</h4>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <Link to='/'>
                                    <h5 className="container offcanvas-title" id="offcanvasNavbarLabel">
                                        <img className="img-logo-1" src={myImg} alt="Cambridge Hospital" />
                                    </h5>
                                </Link>
                                <button
                                    type="button"
                                    className="btn-close text-reset"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">ABOUT US</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            DEPARTMENT
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Helpdesk</a>
                                            <a className="dropdown-item" href="#">Resgistration</a>
                                            <a className="dropdown-item" href="#">Doctor Schedule</a>
                                            <a className="dropdown-item" href="#">Billing</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                            FACILITY
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Rooms</a>
                                            <a className="dropdown-item" href="#">ICU</a>
                                            <a className="dropdown-item" href="#">Medical Facility</a>
                                            <a className="dropdown-item" href="#">Other Facility</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                            SERVICES
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">General services</a>
                                            <a className="dropdown-item" href="#">Health Checkup</a>
                                            <a className="dropdown-item" href="#">Specialties</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                            CENTRES
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Diagnostic centre</a>
                                            <a className="dropdown-item" href="#">Cancer Centre</a>
                                            <a className="dropdown-item" href="#">Heart Centre</a>
                                            <a className="dropdown-item" href="#">Community Health Centre</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">ACADEMIC</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">CONTRACT US</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">VACANCIES</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">SUCCESS STORIES</a>
                                    </li>
                                    <div className="d-lg-none">
                                        <Link to="/signup" className='mx-2' >
                                            <button className='className="sbtn btn btn-outline-primary navbutton-top"'>
                                                Sign Up
                                            </button>
                                        </Link>
                                        <button className="sbtn btn btn-outline-success navbutton-top" onClick={handleLoginClick}>
                                            Login
                                        </button>
                                        {isLoginVisible && <LoginPage onClose={closeLogin} />}

                                    </div>
                                </ul>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;
