import React, { useEffect, useState } from "react";
import "../Header/Header.css";
import LoginPage from "../LoginPage/LoginPage";
import SearchBar from "../Searchbar/SearchBar";
import images from "../../Assets/dataimg";
import { Link, useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import { useAuth } from "../LoginPage/AuthProvider";

function Header({ onClose }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = () => setDropdownOpen(!isDropdownOpen);
  const handleClose = () => setDropdownOpen(false);

  const { user, login, logout, setIsLoginModalOpen, setUser } = useAuth();
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [isFixed, setIsFixed] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  useEffect(() => {
    if (user && user.username) {
      setUsername(user.username);
    }

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > 200 && currentScrollPos < prevScrollPos) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [user, prevScrollPos]);
  const navigate = useNavigate();
  const handleLoginClick = () => {
    setLoginVisible(!isLoginVisible);
  };

  const closeLogin = () => {
    setLoginVisible(false);
  };

  const handleLoginSuccess = (username) => {
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    setUsername("");
    logout();
  };
  const handHomeClick = () => {
    navigate("/");
  };
  const handPaymentClick = () => {
    navigate("/payment");
  };
  const handRegistrationClick = () => {
    navigate("/registration");
  };
  const handleSignupClick = () => {
    navigate("/signup");
    window.location.reload();
  };
  const handleSpcialtiesClick = () => {
    navigate("/specialties");
  };
  const hnadleAcademicClick = () => {
    navigate("/academic");
  };
  const handleContactusClick = () => {
    navigate("/contactus");
  };
  const handleSuccessstoriesClick = () => {
    navigate("/successtories");
  };
  const handleVancanciesClick = () => {
    navigate("/vancancies");
  };
  const handleIcuClick = () => {
    navigate("/icu");
  };
  const handleRoomsClick = () => {
    navigate("/rooms");
  };
  const handleOtherClick = () => {
    navigate("/other");
  };
  const handleHeathchechkupClick = () => {
    navigate("/heathchechkup");
  };
  const handleAboutClick = () => {
    navigate("/aboutus");
  };
  const handleGeneralClick = () => {
    navigate("/general");
  };
  const handleMedicalClick = () => {
    navigate("/medical");
  };
  const handleHelpdeskClick = () => {
    navigate("/helpdesk");
  };
  const handleDoctorscheduleClick = () => {
    navigate("/doctorschedule");
  };
  const handleHeartCentreClick = () => {
    navigate("/heartcentre");
  };
  const handleCancerCentreClick = () => {
    navigate("/cancercentre");
  };
  const handleCommunityHealthClick = () => {
    navigate("/communityHealth");
  };
  const handleDiagnosticCentreClick = () => {
    navigate("/diagnosticcentre");
  };
  return (
    <div>
      <header className="header-top d-none d-md-block">
        <div className="container-fluid ">
          <div className="row">
            <div className="text-center col-md-3">
              <Link to="/">
                <img
                  className="img-logo-1"
                  src={images.logo}
                  alt="Cambrigde Hospital"
                />
              </Link>
            </div>
            <div className="text-center col-md-6">
              <div className="font-top d-none d-lg-block">
                <span className="fa fa-phone">Hotline: 617-665-1398</span>

                <a
                  className="fa fa-envelope"
                  href="mailto:tenshiyami98.email@gmail.com"
                >
                  Email: Hopistal@gmail.com
                </a>
              </div>
            </div>
            <div className="col-md-3 text-center">
              {user ? (
                <div>
                  <div class="btn-group">
                    <button type="button" class="btn btn-primary">
                      Hello! {username.username}
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          role="button"
                          onClick={handRegistrationClick}
                        >
                          Registration
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          role="button"
                          onClick={handPaymentClick}
                        >
                          Payment
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item text-danger"
                          role="button"
                          onClick={handleLogout}
                        >
                          Log out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div>
                  <button
                    className="sbtn btn btn-outline-primary btn-sm mx-2"
                    onClick={handleSignupClick}
                  >
                    Sign Up
                  </button>
                  <button
                    className="sbtn btn btn-outline-success btn-sm"
                    onClick={handleLoginClick}
                  >
                    Login
                  </button>
                  {isLoginVisible && (
                    <LoginPage
                      onClose={closeLogin}
                      onLoginSuccess={handleLoginSuccess}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <nav
        className={`navbar navbar-expand-md navbar-expand-lg navbar-expand-xl navbar-light header-navbar shadow  ${
          isFixed ? "fixed-top" : ""
        }`}
      >
        <div className="container">
          <a className="navbar-brand d-md-none">
            <img
              className="img-logo-1"
              src={images.logo}
              alt="Cambridge Hospital"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end custom-opacity"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="row offcanvas-header">
              <div className="col-12">
                <div className="row mb-5">
                  <div className="col-10 text-start">
                    <div
                      className="container offcanvas-title"
                      id="offcanvasNavbarLabel"
                    >
                      <img
                        className="img-logo-1"
                        src={images.logo}
                        role="button"
                        onClick={handHomeClick}
                        alt="Cambridge Hospital"
                      />
                    </div>
                  </div>
                  <div className="col-1 text-end">
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="d-md-none text-center">
                      {user ? (
                        <div>
                          <button className="fa   fa-calendar-plus-o sbtn btn btn-outline-primary btn-sm mx-2">
                            Registration
                          </button>
                          <button className="fa  fa-credit-card-alt sbtn btn btn-outline-primary btn-sm">
                            Payment
                          </button>

                          <div className="container">
                            Hello! {username.username}
                            <span
                              className="fa fa-sign-out text-danger mx-1 logout-cursor "
                              onClick={handleLogout}
                            >
                              Log out
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <button
                            onClick={handRegistrationClick}
                            className="sbtn btn btn-outline-primary btn-sm mx-2"
                          >
                            Sign Up
                          </button>
                          <button
                            className="sbtn btn btn-outline-success btn-sm"
                            onClick={handleLoginClick}
                          >
                            Login
                          </button>
                          {isLoginVisible && (
                            <LoginPage
                              onClose={closeLogin}
                              onLoginSuccess={handleLoginSuccess}
                            />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="offcanvas-body pt-2">
              <ul className="navbar-nav me-auto my-2 my-lg-0">
                <li className="nav-item d-none d-md-block text-center">
                  <h4
                    className="font-home-h4 fw-bold"
                    role="button"
                    onClick={handHomeClick}
                  >
                    Home
                  </h4>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={handleAboutClick}
                    role="button"
                  >
                    ABOUT US
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    DEPARTMENT
                  </a>
                  <div className="dropdown-menu">
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={handleHelpdeskClick}
                    >
                      Helpdesk
                    </a>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={handRegistrationClick}
                    >
                      Registration
                    </a>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={handleDoctorscheduleClick}
                    >
                      Doctor Schedule
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    FACILITY
                  </a>
                  <div className="dropdown-menu">
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={handleRoomsClick}
                    >
                      Rooms
                    </a>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={handleIcuClick}
                    >
                      ICU
                    </a>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={handleMedicalClick}
                    >
                      Medical Facility
                    </a>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={handleOtherClick}
                    >
                      Other Facility
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    SERVICES
                  </a>
                  <div className="dropdown-menu">
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={handleGeneralClick}
                    >
                      General Services
                    </a>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={handleHeathchechkupClick}
                    >
                      Health Checkup
                    </a>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={handleSpcialtiesClick}
                    >
                      Specialties
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    CENTRES
                  </a>
                  <div className="dropdown-menu">
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={handleDiagnosticCentreClick}
                    >
                      Diagnostic Centre
                    </a>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={handleCancerCentreClick}
                    >
                      Cancer Centre
                    </a>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={handleHeartCentreClick}
                    >
                      Heart Centre
                    </a>
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={handleCommunityHealthClick}
                    >
                      Community Health Centre
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    role="button"
                    onClick={handleContactusClick}
                  >
                    CONTRACT US
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link 	d-ms-none d-md-block"
                    role="button"
                    onClick={hnadleAcademicClick}
                  >
                    ACADEMIC
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link 	d-md-none d-lg-block"
                    role="button"
                    onClick={handleVancanciesClick}
                  >
                    VACANCIES
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link 	d-md-none d-lg-block"
                    role="button"
                    onClick={handleSuccessstoriesClick}
                  >
                    SUCCESS STORIES
                  </a>
                </li>
              </ul>
              <form
                className="d-flex d-md-none d-xxl-block justify-content-center"
                role="search"
              >
                <SearchBar />
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
