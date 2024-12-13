import React, {useState} from 'react';
import '../styles/global.css';
import logoJL from '../assets/logo-JL-noir.webp'

function Header() {
    const [isChecked, setIsChecked] = useState(false);

    const toggleMenu = () => {
        setIsChecked(!isChecked);
    };

    return (
        <header className="header-container">
            <nav>
                <div className={`navbar ${isChecked ? 'menu-active' : ''}`}>
                    <div className={`nav-container ${isChecked ? 'requires-no-scroll' : ''}`}>
                        <input className="checkbox" type="checkbox" name="" id="" checked={isChecked}
                               onChange={toggleMenu}/>
                        <div className="hamburger-lines" onClick={toggleMenu}>
                            <span className={`line line1 ${isChecked ? 'active' : ''}`}></span>
                            <span className={`line line2 ${isChecked ? 'active' : ''}`}></span>
                            <span className={`line line3 ${isChecked ? 'active' : ''}`}></span>
                        </div>
                        <a className="logo" href="/">
                            <span className="letter1">
                                <img src={logoJL} alt="Logo de Julien Larguier, le développeur du site"/>
                            </span>
                        </a>
                    </div>

                    <div className={`menu-items ${isChecked ? 'menu-active' : ''}`}>
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/about">Me découvrir</a></li>
                        <li><a href="/projects">Mes projets</a></li>
                        <li><a href="/contact">Me contacter</a></li>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
