import axios from 'axios';
import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../LoginPage/LoginPage.css'
import googleicon from '../Img/Google.png'
import Loginlogo from '../Img/Login5.png'
const LoginPage = ({ onClose, onLoginSuccess }) => {
    const loginContainerRef = useRef();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(true);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        let isValid = true;
        let validationErrors = {};

        if (!formData.username) {
            isValid = false;
            validationErrors.username = "Username is required";
        }

        if (!formData.password) {
            isValid = false;
            validationErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            isValid = false;
            validationErrors.password = "Password must be at least 6 characters";
        }

        setErrors(validationErrors);
        setValid(isValid);

        axios.get('http://localhost:8000/Users/', formData)
            .then(result => {
                result.data.map(user => {
                    if (user.username === formData.username) {
                        if (user.password === formData.password) {
                            alert("Login Successfully")
                            onLoginSuccess(user.username);
                            navigate("/")
                            onClose();
                        } else {
                            isValid = false;
                            validationErrors.password = "Wrong password"
                        }
                    }
                    else if (formData.username !== "") {
                        isValid = false;
                        validationErrors.username = "Wrong username or password"
                    }
                })
                setErrors(validationErrors);
                setValid(isValid);
            })
            .catch(err => { console.log("Axios error:", err); })
    };
    const handleSignupClick = () => {
        window.location.reload()
    }
    const handleCancelClick = () => {
        onClose();
    };

    return (
        <div class="row login-page-overlay">
            <div ref={loginContainerRef} class="row border rounded-5 p-3 bg-white shadow box-area col-md-8 login-container">
                <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
                    <div class="featured-image mb-3">
                        <img src={Loginlogo} className="img-fluid" />                    </div>
                </div>
                <div class="col-md-6 right-box">
                    <div class="row align-items-center">
                        <div class="header-text mb-4">
                            <h2>Hello,Again!!</h2>
                            <p>We are happy to have you back.</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div class="row input-group mb-3">
                                <small>{errors.username && <div className="text-danger">{errors.username}</div>}</small>

                                <input type="text" class="form-control form-control-lg bg-light fs-6" placeholder="Username"
                                    onChange={(event) => setFormData({ ...formData, username: event.target.value })} />

                            </div>
                            <div class="row input-group mb-1">
                                <input type="password" class="form-control form-control-lg bg-light fs-6" placeholder="Enter your password"
                                    aria-describedby="passwordHelpBlock"
                                    onChange={(event) => setFormData({ ...formData, password: event.target.value })} />
                                <small>{errors.password && <div className="text-danger">{errors.password}</div>}</small>
                            </div>
                            <div class="input-group mb-5 d-flex justify-content-between">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="formCheck" />
                                    <label for="formCheck" class="form-check-label text-secondary"><small>Remember Me</small></label>
                                </div>
                                <div class="forgot">
                                    <small><a href="/signup">Forgot Password?</a></small>
                                </div>
                            </div>
                            <div class="input-group mb-3">
                                <button class="btn btn-lg btn-outline-success w-50 fs-6">Login</button>
                                <button type="button" onClick={handleCancelClick}
                                    className="btn btn-outline-danger w-50 btn-lg">
                                    Cancel
                                </button>
                            </div>
                            <div class="input-group mb-3">
                                <button class="btn btn-lg btn-light w-100">
                                    <a href="/signup"><img className="google-icon" src={googleicon} /></a>
                                    <small>Sign In with Google</small>
                                </button>
                            </div>
                            <div class="row">
                                <small>Don't have account? <Link to="/signup">
                                    <button className="btn btn-outline-primary btn-ms" onClick={handleSignupClick} >
                                        Sign Up
                                    </button>
                                </Link></small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
