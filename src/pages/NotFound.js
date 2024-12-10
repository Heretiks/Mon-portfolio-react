import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css'
import { Helmet } from 'react-helmet-async';

function NotFound({ from }) {
    return (
        <>
            <Helmet>
                <title>Erreur 404</title>
                <meta name="description" content="Désolé, la page que vous cherchez n'existe pas. Vérifiez l'URL ou retournez à la page d'accueil pour explorer mon portfolio de développeur web."/>
                <meta name="keywords" content="erreur 404, page non trouvée, portfolio développeur, page introuvable, site web"/>
            </Helmet>
            <div className="not-found-container">
                <h1 className="not-found-heading">Erreur 404: Page non trouvée</h1>
                <p className="not-found-text">Désolé, la page que vous cherchez n'existe pas.</p>
                <p className="not-found-text">
                    {from === '/projects' ?
                        <Link to="/projects" className="not-found-link">Retourner aux projets</Link> :
                        <Link to="/" className="not-found-link">Retourner à l'accueil</Link>
                    }
                </p>
            </div>

        </>
    );
}

export default NotFound;
