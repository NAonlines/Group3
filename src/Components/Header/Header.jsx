import React, { useEffect, useState } from 'react';
import '../Header/Header.css';
import myImg from '../Img/Logo-cmb.png'
import LoginPage from '../LoginPage/LoginPage';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Header() {
    const [isLoginVisible, setLoginVisible] = useState(false);
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/Users?username=${username}`)
            .then(res => setUserData(res.data))
            .catch(err => console.log(err));
    }, [username]);
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
            <div className="header-top d-none d-md-block">
                <div className="container-f">
                    <div className="row">
                        <div className="col-md-3">
                            <Link to='/'>
                                <img className="img-logo-1" src={myImg} alt="Cambrigde Hospital" />
                            </Link>

                        </div>
                        <div className="col-md-6">
                            <div className="font-top d-none d-lg-block">
                                <span className="fa fa-phone">Hotline: 617-665-1398</span>

                                <a className="fa fa-envelope" href="mailto:tenshiyami98.email@gmail.com">Email: Tenshiyami98@gmail.com</a>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-items-cente">
                            {username ? (
                                <div className='d-flex align-items-center'>
                                    <Link to='/payment' className='mx-1'>
                                        <button className="fa  fa-credit-card-alt sbtn btn btn-outline-dark btn-sm">
                                            Payment
                                        </button>
                                    </Link>
                                    {userData.map(user => (
                                        <div key={user.id}>
                                            <div className="space-font font-weight-normal">Hi! {user.username}</div>
                                        </div>
                                    ))}
                                    <span className="fa fa-sign-out text-danger mx-1 logout-cursor space-font " onClick={handleLogout}>Log out</span>
                                </div>


                            ) : (
                                <div>
                                    <Link to="/signup" className="sbtn btn btn-outline-primary btn-sm mx-2">
                                        Sign Up
                                    </Link>
                                    <button className="sbtn btn btn-outline-success btn-sm" onClick={handleLoginClick}>
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
                <nav className="navbar navbar-expand-md nav-color">
                    <div className="container">
                        <a className="navbar-brand d-md-none" href="#">
                            <img className="img-logo-1" src={myImg} alt="" />
                        </a>
                        <Link to="/" className="navbar-brand d-none d-md-block">
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
                                            <Link to="/registration" className="dropdown-item">Resgistration</Link>
                                            <a className="dropdown-item" href="#">Doctor Schedule</a>
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
                                        <a className="nav-link" href="#">CONTRACT US</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link 	d-md-none d-lg-block" href="#">ACADEMIC</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link 	d-md-none d-lg-block" href="#">VACANCIES</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link 	d-md-none d-lg-block" href="#">SUCCESS STORIES</a>
                                    </li>

                                    <div className="d-md-none">
                                        {username ? (
                                            <div>
                                                <Link to='/payment' className='mx-1'>
                                                    <button className="fa  fa-credit-card-alt sbtn btn btn-outline-dark btn-sm">
                                                        Payment
                                                    </button>
                                                </Link>

                                                <div className='container'>

                                                    {userData.map(user => (
                                                        <div key={user.id}>
                                                            <div className="font-weight-normal" >Hi! {user.username}</div>
                                                        </div>
                                                    ))}
                                                    <span className="fa fa-sign-out text-danger mx-1 logout-cursor " onClick={handleLogout}>Log out</span>
                                                </div>

                                            </div>


                                        ) : (
                                            <div>
                                                <Link to="/signup" className='mx-2' >
                                                    <button className="sbtn btn btn-outline-primary btn-sm">
                                                        Sign Up
                                                    </button>
                                                </Link>
                                                <button className="sbtn btn btn-outline-success btn-sm" onClick={handleLoginClick}>
                                                    Login
                                                </button>
                                                {isLoginVisible && <LoginPage onClose={closeLogin} onLoginSuccess={handleLoginSuccess} />}
                                            </div>
                                        )}
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
