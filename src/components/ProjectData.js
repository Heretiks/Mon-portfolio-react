// WIP : Modifier les liens des projets, les descriptions, etc

import image1 from '../assets/projects/project1/Presentation-projet-1.webp'
import client1 from '../assets/projects/project1/Logo-projet-1.webp'

import image2 from '../assets/projects/project2/Presentation-projet-2.webp'
import client2 from '../assets/projects/project2/Logo-projet-2.png'

import image6 from '../assets/projects/project6/Presentation-projet-6.webp'
import SandSimulation from '../components/SandSimulation';
import client6 from '../assets/projects/project6/Logo-projet-6.png'

import image7 from '../assets/projects/project7/Presentation-projet-7.webp'
import client7 from '../assets/projects/project7/Logo-projet-7.png'

// Planners,
// Nespresso map,
// Daucy,
// Selection d'ailleurs,
// EPA Senart,
// AxeArchitecture,
// Areal,
// Novu,
// Gaz De Bordeaux,
// Chaptr,
// Prowein/WineParis,
// Adidas Arena app mobile
// ...

const projectsData = [
    {
        id: 1,
        name: 'The Gobeliners',
        date: '2024-06',
        technologies: ['React', 'ThreeJS', 'Directus'],
        description: "Realisation du nouveau site de l'entreprise TheGobeliners." +
            "Le site a pour objectif de présenter la nouvelle direction dans laquelle l'entreprise se dirige. " +
            "L'idée est de montrer les compétences de l'agence en 3D, installations évènementielles, jeux-vidéos, applications VR, etc " +
            'Le site est réalisé en collaboration avec LNR Agency pour le design, et développer par nos soins.',
        miniDescription: 'Realisation du nouveau site de l\'entreprise TheGobeliners.' +
            ' Principalement créer en ThreeJS, ce site montre aussi mes compétences en 3D.',
        image: image1,
        infos: ['En cours', 'The Gobeliners', 'Développeur 3D', 'LNR Agency'],
        client: client1,
        invertLogo: false,
        link: 'https://playground.staging.thegobeliners.pro/'
    },
    {
        id: 2,
        name: 'MCmsg Portfolio',
        date: '2024-06',
        technologies: ['React'],
        description: 'Réalisation d\'un portfolio pour une graphiste en collaboration avec elle. ' +
            'Le projet est principalement réalisé avec React. Il est inspiré de son art, ses goûts, son ADN. ' +
            'Il présente ses projets, ses recherches, de la photographie. ' +
            'Nous avons travaillé ensemble, pour combiner au mieux son ADN et mon expertise.',
        miniDescription: 'Réalisation d\'un portfolio pour une graphiste en collaboration avec elle.' +
            ' Le projet est principalement réalisé avec React. Il est inspiré de son art, ses goûts, son ADN.',
        image: image2,
        infos: ['2 semaines', 'MCmsg', 'Développeur', 'MCmsg'],
        client: client2,
        invertLogo: true,
        link: 'https://maellecamissogo.myportfolio.com/'
    },
    {
        id: 3,
        name: 'Planners',
        date: '2024',
        technologies: ['PHP, Symfony'],
        description: 'Maintenance et améliorations sur le site de Planners',
        miniDescription: 'Maintenance et améliorations sur le site de Planners',
        image: 'https://wallpapercave.com/wp/uvbYKAJ.jpg',
        infos: ['Régulier', 'Planners', 'Développeur', 'Planners'],
        link: 'https://planners.fr'
    },
    {
        id: 4,
        name: 'Daucy',
        date: '2024',
        technologies: ['Wordpress'],
        description: 'Maintenance et améliorations sur le site de Daucy',
        miniDescription: 'Maintenance et améliorations sur le site de Daucy',
        image: 'https://wallpapercave.com/wp/uvbYKAJ.jpg',
        infos: ['Régulier', 'Daucy', 'Développeur', 'Daucy'],
        link: 'https://daucy.fr'
    },
    {
        id: 5,
        name: 'Axe Architecture',
        date: '2024',
        technologies: ['Drupal'],
        description: 'Maintenance et améliorations sur le site de Axe Architecture',
        miniDescription: 'Maintenance et améliorations sur le site de Axe Architecture',
        image: 'https://wallpapercave.com/wp/uvbYKAJ.jpg',
        infos: ['Régulier', 'Daucy', 'Développeur', 'Daucy'],
        link: 'https://axearchitecture.com'
    },
    {
        id: 6,
        name: 'Sand Simulation',
        date: '2024-03',
        technologies: ['p5.js'],
        description: 'Une simulation de sable réalisée en p5.js. ' +
            'En cliquant sur la scène, vous créerez du sable, qui change de couleur avec le temps. ' +
            'Réalisé pour un défi quotidien personnel. Faites défiler et testez Sand Simulation !',
        miniDescription: 'Un daily challenge personnel, réalisé avec p5.js.' +
            ' Pas grand chose à savoir de plus, mais il faut essayer !',
        image: image6,
        infos: ['1 jour', 'Projet personnel', 'Développeur', 'Moi même'],
        client: client6,
        invertLogo: true,
        link: '/projects/3#the-project',
        component: SandSimulation
    },
    {
        id: 7,
        name: 'Platform Boy',
        date: '2023-02',
        technologies: ['Unity', 'C#'],
        description: 'Un platformer, créer pour le plaisir et pour découvrir Unity.' +
            ' Il s\'agit d\'un jeu de plateforme en 2D, dans lequel on doit survivre et atteindre la sortie.' +
            ' Il met les nerfs à l\'épreuve car il est façile de glisser... Mais c\'est un bon jeu croyez-moi !' +
            ' Bientôt dispo nulle part.',
        miniDescription: 'Un platformer, créer pour le plaisir et pour découvrir Unity.' +
            ' Il s\'agit d\'un jeu de plateforme en 2D, dans lequel on doit survivre et atteindre la sortie.',
        image: image7,
        infos: ['1 mois', 'Projet personnel', 'Développeur', 'Moi même'],
        client: client7,
        invertLogo: true,
        link: '/projects/4',
    },

];

export default projectsData;