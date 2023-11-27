import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../Components/LoginPage/AuthProvider';
import LoginPage from './LoginPage';

const AuthRoute = ({ component: Component, ...props }) => {
    const { user } = useAuth();
    const [loginClosed, setLoginClosed] = useState(false);

    const handleLoginSuccess = () => {
        setLoginClosed(true);
    };

    const handleClose = () => {
        setLoginClosed(true);
    };

    if (!user && !loginClosed) {
        alert("Please login to access this page.")
        return <LoginPage onClose={handleClose} onLoginSuccess={handleLoginSuccess} />;
    }

    if (!user) {
        return <Navigate to="/signup" />;
    }

    return <Component {...props} />;
};

export default AuthRoute;
