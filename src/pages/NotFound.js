import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css'

function NotFound({ from }) {
    return (
        <div className="not-found-container">
            <h1 className="not-found-heading">404 - Page not found</h1>
            <p className="not-found-text">Sorry, the page you are looking for does not exist.</p>
            <p className="not-found-text">
                {from === '/projects' ?
                    <Link to="/projects" className="not-found-link">Go back to Projects</Link> :
                    <Link to="/" className="not-found-link">Go back to Home</Link>
                }
            </p>
        </div>
    );
}

export default NotFound;
