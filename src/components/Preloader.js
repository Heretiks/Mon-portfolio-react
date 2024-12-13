import React, { useEffect, useState } from 'react';
import '../styles/global.css';
import logoJL from '../assets/logo-JL-noir.webp';

const Preloader = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`preloader ${isLoaded ? 'hidden' : ''}`}>
            <img
                className="preloader-logo animated-logo"
                src={logoJL}
                alt="Logo de Julien Larguier, le développeur du site"
            />
        </div>
    );
};

export default Preloader;
