import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const RedirectIfNotAuthenticated = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('accessToken');

        if (!token) {
            navigate('/login'); // Enter here where to redirect if NOT logged in
        }
    }, [navigate]);

    return children;
};

export const RedirectIfAuthenticated = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('accessToken');

        if (token) {
            navigate('/'); // Enter here where to redirect if logged in
        }
    }, [navigate]);

    return children;
};
