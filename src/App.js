import React, {useEffect, useState} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

import Index from './pages/Index';
import About from './pages/About';
import Projects from './pages/Projects';
import Project from './components/Project';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound'

import Headerv2 from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {

    const [isLoading, setIsLoading] = useState(null);
    const location = useLocation(); // Récupère le chemin actuel
    const [hasLoadedBefore, setHasLoadedBefore] = useState(false);

    useEffect(() => {
        // Vérifie si le site a déjà été chargé auparavant
        const alreadyLoaded = sessionStorage.getItem('siteLoaded');
        if (!alreadyLoaded) {
            sessionStorage.setItem('siteLoaded', 'true');
        }
        setHasLoadedBefore(!!alreadyLoaded); // Transforme en booléen

        const lenis = new Lenis({
            duration: 1.2, // Durée du scroll
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Fonction d'adoucissement
            smooth: true, // Active le scroll fluide
            effect: true, // Active les effets (parallax, ...)
            touch: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    useEffect(() => {
        // Vérifie si le Preloader doit s'afficher
        const isFirstLoad = !hasLoadedBefore;
        const isHomePage = location.pathname === '/';

        if (isFirstLoad || isHomePage) {
            setIsLoading(true);
            const fakeDataFetch = () => {
                setTimeout(() => {
                    setIsLoading(false);
                }, 4000); // Simulation d'un chargement
            };
            fakeDataFetch();
        } else {
            setIsLoading(false); // Pas de Preloader pour les autres pages si ce n'est pas le premier chargement
        }
    }, [location.pathname, hasLoadedBefore]);

    if (isLoading === null) {
        return null;
    }

    return (
        <>
            {isLoading && <Preloader />}
            <div className={isLoading ? "loading" : ""}>
                <Headerv2 />
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:idB" element={<Project />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/not-found" element={<NotFound from="/projects" />} />
                    <Route path="*" element={<NotFound from="/" />} />
                </Routes>
                <Footer />
            </div>
        </>
    );

}

export default App;
