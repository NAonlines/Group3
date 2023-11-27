import axios from 'axios';
import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../LoginPage/LoginPage.css';
import images from '../../Assets/dataimg';
import { getUsersAsync } from '../../Api/Users';
import { useAuth } from './AuthProvider';
const LoginPage = ({ onClose, onLoginSuccess }) => {
    const { login } = useAuth();
    const loginContainerRef = useRef();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [loginError, setLoginError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = (user) => {
        alert('Login Successfully');
        login(user);
        onLoginSuccess();
        navigate('/');
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        let isValid = true;
        let validationErrors = {};

        if (!formData.username) {
            isValid = false;
            validationErrors.username = 'Username is required';
        }

        if (!formData.password) {
            isValid = false;
            validationErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            isValid = false;
            validationErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const users = await getUsersAsync();
                const user = users.find((u) => u.username === formData.username);

                if (user) {
                    if (user.password === formData.password) {
                        handleLogin(user);
                    }
                } else {
                    setLoginError('Wrong username or password');
                }
            } catch (error) {
                console.log('Error fetching users:', error);
            }
        }
    };
    const fetchUsers = async () => {
        const users = await getUsersAsync();
        console.log('username', users);
    };

    fetchUsers();
    const handleSignupClick = () => {
        navigate("/signup")
        window.location.reload();
    };

    const handleCancelClick = () => {
        console.log('Cancel clicked');
        onClose();
    };


    return (
        <div className="row login-page-overlay min-vh-100">
            <div ref={loginContainerRef} className="row border rounded-5 p-3 bg-white shadow box-area col-md-8 login-container">
                <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
                    <div className="featured-image mb-3">
                        <img src={images.loginLogo} className="img-fluid login-logo-img" alt="Login Logo" style={{ width: '650px' }} />
                    </div>
                </div>
                <div className="col-md-6 right-box">
                    <div className="row align-items-center">
                        <div className="header-text mb-4 text-center">
                            <h2>Hello, Again!!</h2>
                            <p>We are happy to have you back.</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-3 form-floating form-loginl">
                                <input
                                    type="text"
                                    className="form-control form-login"
                                    id="floatingUsername"
                                    placeholder="Username"
                                    onChange={(event) => setFormData({ ...formData, username: event.target.value })}
                                    required
                                />
                                <label className="form-label label-login" htmlFor="floatingUsername">
                                    Username
                                </label>
                            </div>

                            <div className="row mb-3 form-floating form-loginl">
                                <input
                                    type="password"
                                    className="form-control form-login"
                                    id="floatingPassword"
                                    placeholder=""
                                    aria-describedby="passwordHelpBlock"
                                    onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                                    required
                                />
                                <label className="form-label label-login" htmlFor="floatingPassword">
                                    Password
                                </label>
                            </div>
                            <small>{loginError && <div className="text-danger small-text">{loginError}</div>}</small>
                            <div className="input-group mb-5 d-flex justify-content-between">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="formCheck" />
                                    <label htmlFor="formCheck" className="form-check-label text-secondary">
                                        <small>Remember Me</small>
                                    </label>
                                </div>
                                <div className="forgot">
                                    <small>
                                        <Link to="/signup" className="text-decoration-none">
                                            Forgot Password?
                                        </Link>
                                    </small>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <button className="btn btn btn-outline-success w-50 fs-6">Login</button>
                                <button type="button" onClick={handleCancelClick} className="btn btn btn-outline-danger w-50">
                                    Cancel
                                </button>
                            </div>
                            <div className="input-group mb-3">
                                <button className="btn btn-light w-100">
                                    <a href="/signup" className="text-decoration-none">
                                        <img className="google-icon" src={images.googleLogo} alt="Google Icon" />
                                        <small className="text-success fw-bold">Sign In with Google</small>
                                    </a>
                                </button>
                            </div>
                            <div className="row">
                                <small>
                                    Don't have an account?{' '}
                                    <button className="btn btn-outline-primary btn-sm" onClick={handleSignupClick}>

                                        Sign Up

                                    </button>
                                </small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;



