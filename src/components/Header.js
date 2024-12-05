import React from 'react';
import '../styles/global.css';

function Header() {
    return (
        <header className="header-container">
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
            <nav className="nav">
                <ul>
                    <li><a href="/about">Me découvrir</a></li>
                    <li><a href="/projects">Mes Projets</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
