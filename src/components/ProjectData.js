// WIP : Modifier les liens des projets, les descriptions, etc

import image1 from '../assets/projects/project1/image.png'
import client1 from '../assets/projects/project1/client.png'

import image2 from '../assets/projects/project2/image.png'
import client2 from '../assets/projects/project2/client.png'

import image3 from '../assets/projects/project3/image.png'
import SandSimulation from '../components/SandSimulation';

import image4 from '../assets/projects/project4/image.png'


const projectsData = [
    {
        id: 1,
        name: 'TheGobeliners',
        date: '2024-06',
        technologies: ['React', 'ThreeJS', 'Directus'],
        description: "Realisation du nouveau site de l'entreprise TheGobeliners." +
            "Le site a pour objectif de présenter la nouvelle direction dans laquelle l'entreprise se dirige. " +
            "L'idée est de montrer les compétences dans la 3D, les installations évènementielles, jeux-vidéos, applications VR, ... " +
            'Le site est réalisé en collaboration avec LNR Agency pour le design, et développer par nos soins.',
        miniDescription: 'Realisation du nouveau site de l\'entreprise TheGobeliners.' +
            ' Principalement créer en ThreeJS, ce site montre aussi mes compétences en 3D.',
        image: image1,
        infos: ['En cours', 'The Gobeliners', 'Développeur Principal', 'Graphisme par LNR Agency'],
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
        infos: ['2 semaines', 'MCmsg', 'Développeur', 'Collab avec MCmsg'],
        client: client2,
        invertLogo: true,
        link: 'https://maellecamissogo.myportfolio.com/'
    },
    {
        id: 3,
        name: 'Sand Simulation',
        date: '2024-03',
        technologies: ['p5.js'],
        description: 'Une simulation de sable réalisée en p5.js. ' +
            'En cliquant sur la scène, vous créerez du sable, qui change de couleur avec le temps. ' +
            'Réalisé pour un défi quotidien personnel. Faites défiler et testez Sand Simulation !',
        miniDescription: 'Un daily challenge personnel, réalisé avec p5.js.' +
            ' Pas grand chose à savoir de plus, mais il faut essayer !',
        image: image3,
        infos: ['1 jour', 'Projet personnel', 'Développeur', 'Daily challenge'],
        client: 'LrgCorp',
        invertLogo: true,
        link: '/projects/3#the-project',
        component: SandSimulation
    },
    {
        id: 4,
        name: 'Platform Boy',
        date: '2023-02',
        technologies: ['Unity', 'C#'],
        description: 'Un platformer, créer pour le plaisir et pour découvrir Unity.' +
            ' Il s\'agit d\'un jeu de plateforme en 2D, dans lequel on doit survivre et atteindre la sortie.' +
            ' Il met les nerfs à l\'épreuve car il est façile de glisser... Mais c\'est un bon jeu croyez-moi !' +
            ' Bientôt dispo nulle part.',
        miniDescription: 'Un platformer, créer pour le plaisir et pour découvrir Unity.' +
            ' Il s\'agit d\'un jeu de plateforme en 2D, dans lequel on doit survivre et atteindre la sortie.',
        image: image4,
        infos: ['1 mois', 'Projet personnel', 'Développeur', 'Pour apprendre'],
        client: 'LrgCorp',
        invertLogo: true,
        link: '',
    },
    // {
    //     id: 5,
    //     name: 'Project 5',
    //     date: '2023-08',
    //     technologies: ['ThreeJS'],
    //     description: 'Description du projet 4.',
    //     miniDescription: 'miniDescription du projet 2.',
    //     image: 'https://wallpapercave.com/wp/uvbYKAJ.jpg',
    //     infos: ['1 month', 'John Doe', 'Developer', 'Devellopement'],
    //     link: 'https://google.com'
    // },
    // {
    //     id: 6,
    //     name: 'Project 6',
    //     date: '2023-08',
    //     technologies: ['ThreeJS'],
    //     description: 'Description du projet 5.',
    //     miniDescription: 'miniDescription du projet 2.',
    //     image: 'https://wallpapercave.com/wp/uvbYKAJ.jpg',
    //     infos: ['1 month', 'John Doe', 'Developer', 'Graphism and Devellopement'],
    //     link: 'https://google.com'
    // },
];

export default projectsData;