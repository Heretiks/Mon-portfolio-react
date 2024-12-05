import React, {useEffect} from 'react';
import '../styles/global.css';
import Project from '../components/Project'
import projects from '../components/ProjectData';

function Projects() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="projects-container">
                <div className="projects-title"><h1>Mes projets</h1></div>
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
