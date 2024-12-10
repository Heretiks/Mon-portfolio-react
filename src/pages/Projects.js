import React, {useEffect} from 'react';
import '../styles/global.css';
import Project from '../components/Project'
import projects from '../components/ProjectData';
import { Helmet } from 'react-helmet-async';

function Projects() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Mes Projets</title>
                <meta name="description"
                      content="Découvrez les projets réalisés par Julien Larguier, développeur web full stack. Des sites web sur mesure et des solutions JavaScript, React ou WordPress adaptées à vos besoins."/>
                <meta name="keywords"
                      content="projets web, développement web, solutions WordPress, JavaScript, React, portfolio, réalisations, Julien Larguier"/>
            </Helmet>
            <div className="projects-container">
                <div className="projects-title">
                    <h1>Mes projets</h1>
                </div>
                <div className="projects">
                    {projects.map(project => (
                        <Project
                            key={project.id}
                            id={project.id}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Projects;
