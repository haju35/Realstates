import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
    const navigate = useNavigate();

    useEffect(() => {
        // Perform logout actions here (e.g., clear authentication tokens)
        onLogout(); // Clear the authentication state
        navigate('/login'); // Redirect to login page
    }, [navigate, onLogout]);

    return (
        <div className="container text-center mt-5">
            <h3>You have been logged out</h3>
            <p>Redirecting to login page...</p>
        </div>
    );
};

export default Logout;
