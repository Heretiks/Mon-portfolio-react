import React, { useEffect } from 'react';
import {Link, Navigate, useParams} from 'react-router-dom';
import projects from '../components/ProjectData';
import '../styles/global.css';

function Project({ id }) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const {idB} = useParams();
    let isProjectPage = false;

    let project;
    if (idB) {
        project = projects[idB-1];
        isProjectPage = true;
    } else {
        project = projects[id-1];
    }

    if (!project) {
        return <Navigate to="/not-found" replace />;
    }

    const { name, date, technologies, description, miniDescription, image, link, infos, client, invertLogo, component } = project;

    // Si page détail projet
    if (isProjectPage) {
        // WIP : manque à ajouter la vidéo si le projet ne contient pas de composant
        return (
            <div className="project-full">
                <div className="project-summary-full">
                    <div className="project-summary-details-full">
                        <h2 className="project-summary-title">
                            <a href={link} target={component ? undefined : "_blank"} rel={'noreferrer'}>
                                {name}
                            </a>
                        </h2>
                        <div className="project-description-full">
                            <p>{date}</p>
                            <p>-</p>
                            <p>{technologies.join(', ')}</p>
                        </div>
                    </div>
                    <div className={`project-summary-client-full ${invertLogo ? 'to-invert' : ''}`}>
                        <img src={client} alt="Logo du client pour lequel le projet est réalisé" />
                    </div>
                </div>

                <div className="project-details-full">
                    <div className="description">
                        <p className="description-text" >{description}</p>
                        <div className="project-links-full">
                            <button className="project-link-full">
                                {component ? (
                                    <a href="#the-project">Voir le site</a>
                                ) : (
                                    <Link to={link} target={"_blank"}>
                                        Voir le site
                                    </Link>
                                )}
                            </button>
                        </div>
                    </div>
                    <img className="site-image" src={image} alt={`Page d'acceuil du site de ${name}`} />
                </div>

                <div className="project-more-details">
                    <div className="point">
                        <div className="point-info">
                            <p className="point-info-type">Durée : </p>
                            {infos[0]}
                        </div>
                    </div>
                    <div className="point">
                        <div className="point-info">
                            <p className="point-info-type">Client : </p>
                            {infos[1]}
                        </div>
                    </div>
                    <div className="point">
                        <div className="point-info">
                            <p className="point-info-type">Rôle : </p>
                            {infos[2]}
                        </div>
                    </div>
                    <div className="point">
                        <div className="point-info">
                            <p className="point-info-type">D-A : </p>
                            {infos[3]}
                        </div>
                    </div>
                </div>

                {component && (
                    <div id="the-project">
                        {React.createElement(component)}
                    </div>
                )}
            </div>
        );
    }
    // Si page listing projets
    else {
        return (
            <div className="project">
                <Link to={`/projects/${id}`} className="project-summary">
                    {/*WIP : Link à mettre sur le H2 seulement, et div a la place de Link*/}
                    <h2 className="project-name">{name}</h2>
                    <p>{date}</p>
                    <p>{technologies.join(', ')}</p>
                </Link>
                <div className="project-details">
                    <Link to={`/projects/${id}`} className={'project-img'}>
                        <img  src={image} alt={`Page d'acceuil du site de ${name}`} />
                    </Link>

                    <p className="project-mini-description">{miniDescription}</p>
                    <div className="project-links">
                        <button className="project-link">
                            <Link to={link} target={"_blank"} rel={'noreferrer'}>Site</Link>
                        </button>
                        <button className="project-link">
                            <Link to={`/projects/${id}`}>Détails</Link>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;

// Version avant la version actuelle, le choix on affiche le composant (SandSimulation) ou pas sur la page détail projet, j'ai refacto en mieux, faut tester a 100%
// // Si projet contient un composant (actuellement que pour SandSimulation)
// if (component) {
//     return (
//         <div className="project-full">
//             <div className="project-summary-full">
//                 <div className="project-summary-details-full">
//                     <h3>
//                         <a href={link} rel={'noreferrer'}>{name}</a>
//                     </h3>
//                     <div className="project-description-full">
//                         <p>{date}</p>
//                         <p>-</p>
//                         <p>{technologies.join(', ')}</p>
//                     </div>
//                 </div>
//                 <div id={project.name} className="project-summary-client-full">
//                     <img src={client} alt="Logo client"/>
//                 </div>
//             </div>
//             <div className="project-details-full">
//                 <div className="descritpion">
//                     <p>{description}</p>
//                     <div className="project-links-full">
//                         <button className="project-link-full">
//                             {/* WIP : le href ???? */}
//                             <a href="#the-project">Voir le site</a>
//                         </button>
//                     </div>
//                 </div>
//                 {/* WIP : Voir pour mettre une mini-vidéo du site à la place de l'image ? */}
//                 <img src={image} alt={name}/>
//             </div>
//             <div className="project-more-details">
//                 {/* WIP : pour présenter le projet : mettre quelques screens simplement ? (certains ont 0 détails) : */}
//                 {/* sans details : https://bruno-simon.com/ / https://www.lauren-waller.com/work / https://brittanychiang.com/#projects */}
//                 {/* avec details : https://www.rammaheshwari.com/project-2 / https://p5aholic.me/projects/ / https://itssharl.ee/fr/work */}
//                 {/* WIP : demander un retour sur ça */}
//                 <div className="point">
//                     <div className="point-info"><p className="point-info-type">Durée : </p>{infos[0]}</div>
//                 </div>
//                 <div className="point">
//                     <div className="point-info"><p className="point-info-type">Client : </p>{infos[1]}</div>
//                 </div>
//                 <div className="point">
//                     <div className="point-info"><p className="point-info-type">Rôle : </p>{infos[2]}</div>
//                 </div>
//                 <div className="point">
//                     <div className="point-info"><p className="point-info-type">Détails : </p>{infos[3]}</div>
//                 </div>
//             </div>
//             <div id="the-project">
//                 <SandSimulation />
//             </div>
//         </div>
//     );
// }
// // Si pas de composant (tous les projets qui mènent à un site réel)
// else {
//     return (
//         <div className="project-full">
//             <div className="project-summary-full">
//                 {/* WIP : ajouter un 'symbole' en after qui montre que c'est un lien */}
//                 {/* WIP : faire pareil dans la liste des projets ? */}
//                 <div className="project-summary-details-full">
//                     <h3>
//                         <a href={link} target={"_blank"} rel={'noreferrer'}>{name}</a>
//                     </h3>
//                     <div className="project-description-full">
//                         <p>{date}</p>
//                         <p>-</p>
//                         <p>{technologies.join(', ')}</p>
//                     </div>
//                 </div>
//                 <div className="project-summary-client-full">
//                     <img src={client} alt="Logo client"/>
//                 </div>
//             </div>
//             <div className="project-details-full">
//                 <div className="descritpion">
//                     <p>{description}</p>
//                     <div className="project-links-full">
//                         <button className="project-link-full">
//                             <Link to={link} target={"_blank"}>Voir le site</Link>
//                         </button>
//                     </div>
//                 </div>
//                 {/* WIP : Voir pour mettre une mini-vidéo du site à la place de l'image ? */}
//                 <img src={image} alt={name}/>
//             </div>
//             <div className="project-more-details">
//                 {/* WIP : pour présenter le projet : mettre quelques screens simplement ? (certains ont 0 détails) : */}
//                 {/* sans details : https://bruno-simon.com/ / https://www.lauren-waller.com/work / https://brittanychiang.com/#projects */}
//                 {/* avec details : https://www.rammaheshwari.com/project-2 / https://p5aholic.me/projects/ / https://itssharl.ee/fr/work */}
//                 {/* WIP : demander un retour sur ça */}
//                 <div className="point">
//                     <div className="point-info"><p className="point-info-type">Durée : </p>{infos[0]}</div>
//                 </div>
//                 <div className="point">
//                     <div className="point-info"><p className="point-info-type">Client : </p>{infos[1]}</div>
//                 </div>
//                 <div className="point">
//                     <div className="point-info"><p className="point-info-type">Rôle : </p>{infos[2]}</div>
//                 </div>
//                 <div className="point">
//                     <div className="point-info"><p className="point-info-type">Détails : </p>{infos[3]}</div>
//                 </div>
//             </div>
//         </div>
//     );
// }
