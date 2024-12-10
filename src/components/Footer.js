import React, {useEffect, useState} from 'react';
import '../styles/global.css';

function Footer() {

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
                                        <a href="https://www.linkedin.com/in/julien-larguier-b3419a269/" target="_blank" rel="noopener noreferrer">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                 fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd"
                                                      d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                                                      clipRule="evenodd"/>
                                                <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.malt.fr/profile/julienlrg?" target="_blank" rel="noopener noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32"
                                                 height="32">
                                                <path fill="none" d="M0 0h24v24H0z"/>
                                                <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/Heretiks" target="_blank" rel="noopener noreferrer">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                 fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd"
                                                      d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                                                      clipRule="evenodd"/>
                                            </svg>

                                        </a>
                                    </li>
                                    {/*<li>*/}
                                    {/*    <a href="https://linktr.ee" target="_blank" rel="noopener noreferrer">*/}
                                    {/*        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32"*/}
                                    {/*             height="32">*/}
                                    {/*            <path fill="none" d="M0 0h24v24H0z"/>*/}
                                    {/*            <path*/}
                                    {/*                d="m21 2h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-18a1 1 0 0 0 -1-1zm-3.281 8.725c-.109.011-.219.016-.328.017a3.571 3.571 0 0 1 -2.991-1.613v5.493a4.061 4.061 0 1 1 -4.06-4.06c0-.085z"/>*/}
                                    {/*        </svg>*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
                                </ul>
                            </div>


                            <div className="layout_item w-25">
                                <button className="dark-mode-button" onClick={toggleDarkMode}>

                                    {/*
                                    ici mettre deux svg correspondant au mode clair et mode sombre,
                                    et afficher celui qui correspond au style qui n'est pas actuellement affiché
                                    */}

                                    {/* SVG Soleil */}
                                    <svg id="sun-icon" className={`icon ${isDarkMode ? 'active' : ''}`}
                                         xmlns="http://www.w3.org/2000/svg"
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
                                    <svg id="moon-icon" className={`icon ${!isDarkMode ? 'active' : ''}`}
                                         xmlns="http://www.w3.org/2000/svg" width="30" height="30"
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
