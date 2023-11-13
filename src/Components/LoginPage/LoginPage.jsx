import axios from 'axios';
import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../LoginPage/LoginPage.css'
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

    const handleCancelClick = () => {
        onClose();
    };

    return (
        <div className="container mt-5">
            <div ref={loginContainerRef} className="row justify-content-center login-page-overlay">
                <div className="col-md-6 login-container">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="text-center text-success fw-bold">Login</h3>
                        </div>
                        {
                            valid ? <></> :
                                <span className="text-danger">
                                    {/* Please enter username and password */}
                                </span>
                        }
                        <div className="card-body form-login">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        placeholder="Enter your username"
                                        onChange={(event) => setFormData({ ...formData, username: event.target.value })}
                                    />
                                    {errors.username && <div className="text-danger">{errors.username}</div>}

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="inputPassword5"
                                        placeholder="Enter your password"
                                        aria-describedby="passwordHelpBlock"
                                        onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                                    />
                                    {errors.password && <div className="text-danger">{errors.password}</div>}
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">
                                        Login
                                    </button>
                                    <button type="button" onClick={handleCancelClick} className="btn btn-secondary">
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
