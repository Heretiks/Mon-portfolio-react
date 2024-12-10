import React, {useState} from 'react';
import '../styles/global.css';

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
                        <input className="checkbox" type="checkbox" name="" id="" checked={isChecked} onChange={toggleMenu} />
                        <div className="hamburger-lines" onClick={toggleMenu}>
                            <span className={`line line1 ${isChecked ? 'active' : ''}`}></span>
                            <span className={`line line2 ${isChecked ? 'active' : ''}`}></span>
                            <span className={`line line3 ${isChecked ? 'active' : ''}`}></span>
                        </div>
                        <a className="logo" href="/">
                            <span className="letter1">L</span>
                            <span className="letter2">r</span>
                            <span className="letter3">g</span>
                            <span className="letter4">&nbsp;</span>
                            <span className="letter5">C</span>
                            <span className="letter6">o</span>
                            <span className="letter7">r</span>
                            <span className="letter8">p</span>
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
