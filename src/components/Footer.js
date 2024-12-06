import React, {useEffect, useState} from 'react';
import '../styles/global.css';

function Footer() {

    // const [isDarkMode, setIsDarkMode] = useState(
    //     sessionStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
    // );
    //
    // useEffect(() => {
    //     const currentTheme = sessionStorage.getItem('theme');
    //     if (currentTheme === 'dark') {
    //         sessionStorage.setItem('theme', 'dark');
    //         document.body.classList.add('dark');
    //     } else {
    //         document.body.classList.remove('dark');
    //         sessionStorage.setItem('theme', 'light');
    //     }
    // }, [isDarkMode]);

    // function setDarkMode(e) {
    //     //e.preventDefault();
    //
    //     // Realiser un changement mode clair/ mode sombre ici
    //     // const newMode = !isDarkMode;
    //     // setIsDarkMode(!isDarkMode);
    //     // sessionStorage.setItem('theme', newMode ? 'dark' : 'light');
    //     // console.log(sessionStorage.getItem('theme'));
    //     // document.body.classList.toggle('dark', newMode);
    //
    //
    //     console.log('avant :', sessionStorage.getItem('theme'));
    //     if (sessionStorage.getItem('theme') === 'light') {
    //         sessionStorage.setItem('theme', 'dark');
    //         document.body.classList.toggle('dark');
    //         console.log('dark if');
    //
    //         setIsDarkMode('dark');
    //     } else {
    //         sessionStorage.setItem('theme', 'dark');
    //         document.body.classList.toggle('dark');
    //         console.log('light if');
    //
    //         setIsDarkMode('light');
    //     }
    //     console.log('apres : ', sessionStorage.getItem('theme'));
    //
    // }


    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Vérifier d'abord le sessionStorage
        const storedTheme = sessionStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme === 'dark';
        }
        // Si rien dans le sessionStorage, vérifier la préférence du système
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        // Appliquer le thème
        if (isDarkMode) {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
        // Sauvegarder le thème dans sessionStorage
        sessionStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

        // Mettre à jour les icônes
        // updateIcons();
        const sunIcon = document.getElementById('sun-icon');
        const moonIcon = document.getElementById('moon-icon');

        if (isDarkMode) {
            sunIcon.classList.add('active');
            moonIcon.classList.remove('active');
        } else {
            sunIcon.classList.remove('active');
            moonIcon.classList.add('active');
        }
    }, [isDarkMode]);

    function toggleDarkMode() {
        setIsDarkMode(prevMode => !prevMode);
    }

    // function updateIcons() {
    //     const sunIcon = document.getElementById('sun-icon');
    //     const moonIcon = document.getElementById('moon-icon');
    //
    //     if (isDarkMode) {
    //         sunIcon.classList.remove('active');
    //         moonIcon.classList.add('active');
    //     } else {
    //         sunIcon.classList.add('active');
    //         moonIcon.classList.remove('active');
    //     }
    // }






    function scrollToTop(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_inner">
                    <div className="c-footer">
                        <div className="layout">
                            <div className="layout_item w-50 newsletter_title">
                                <h3>Be curious.</h3>
                            </div>

                            <div className="layout_item w-25 menu-list">
                                <nav className="c-nav-tool">
                                    <h4 className="c-nav-tool_title">Menu</h4>
                                    <ul className="c-nav-tool_list">
                                        <li>
                                            <a href="/" className="c-link">Accueil</a>
                                        </li>

                                        <li>
                                            <a href="/about" className="c-link">Me découvrir</a>
                                        </li>

                                        <li>
                                            <a href="/projects" className="c-link">Mes Projets</a>
                                        </li>

                                        <li>
                                            <a href="/contact" className="c-link">Me contacter</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <div className="layout c-2">
                            <div className="layout_item w-25 social-media">
                                <ul className="flex">
                                    <li>
                                        {/* WIP : remplir les liens des reseaux */}
                                        <a href="/">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32"
                                                 height="32">
                                                <path fill="none" d="M0 0h24v24H0z"/>
                                                <path
                                                    d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32"
                                                 height="32">
                                                <path fill="none" d="M0 0h24v24H0z"/>
                                                <path
                                                    d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32"
                                                 height="32">
                                                <path fill="none" d="M0 0h24v24H0z"/>
                                                <path
                                                    d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32"
                                                 height="32">
                                                <path fill="none" d="M0 0h24v24H0z"/>
                                                <path
                                                    d="m21 2h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-18a1 1 0 0 0 -1-1zm-3.281 8.725c-.109.011-.219.016-.328.017a3.571 3.571 0 0 1 -2.991-1.613v5.493a4.061 4.061 0 1 1 -4.06-4.06c.085 0 .167.008.251.013v2a2.067 2.067 0 1 0 -.251 4.119 2.123 2.123 0 0 0 2.16-2.045l.02-9.331h1.914a3.564 3.564 0 0 0 3.285 3.182z"/>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="layout_item w-25">
                                <button className="dark-mode-button" onClick={toggleDarkMode}>

                                    {/*
                                    ici mettre deux svg correspondant au mode clair et mode sombre,
                                    et afficher celui qui correspond au style qui n'est pas actuellement affiché
                                    */}

                                    {/* SVG Soleil */}
                                    <svg id="sun-icon" className={`icon ${isDarkMode ? 'active' : ''}`} xmlns="http://www.w3.org/2000/svg"
                                         width="30" height="30"
                                         viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                         strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="5"></circle>
                                        <line x1="12" y1="1" x2="12" y2="3"></line>
                                        <line x1="12" y1="21" x2="12" y2="23"></line>
                                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                        <line x1="1" y1="12" x2="3" y2="12"></line>
                                        <line x1="21" y1="12" x2="23" y2="12"></line>
                                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                    </svg>

                                    {/* SVG Lune */}
                                    <svg id="moon-icon" className={`icon ${!isDarkMode ? 'active' : ''}`} xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                         viewBox="0 0 24 24" fill="black" stroke="currentColor"
                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                    </svg>

                                </button>
                                <button className="scroll-to-top-button" onClick={scrollToTop}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
                                        <path fill="none" d="M0 0h24v24H0z"/>
                                        <path
                                            d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 10h3l-4-4-4 4h3v4h2v-4z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_copyright">
                    <p>&copy; 2024 Julien Larguier.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
