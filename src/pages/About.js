import React, {useEffect} from 'react';
import '../styles/global.css';
import maPhoto from '../assets/photo-de-profil.webp'

function About() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="about-container">
                <h1 className="about-title">A PROPOS</h1>
                <div className="about-photo-section">
                    <img src={maPhoto} alt="Représentation 3D de Julien Larguier"/>
                </div>
                <div className="text-section">
                    {/* WIP : modifier le texte du about me */}
                    <p className="about-paragraph">
                        Julien Larguier, 26ans, B3 Dev en alternance chez The Gobeliners (agence web, qui souhaite se diriger vers de la création de site internet 3D, interactif et évènementiel).
                        Lors de ma licence j’ai pu développer des compétences en algorithmie, en base de donnée, et en langage bas niveau tel que du C.
                        Cette année, grâce à mon alternance, je développe des compétences plus précises en PHP et Javascript principalement. Aussi j’ai dû apprendre sur les CMS (Content Management System) les plus connu tel que Wordpress, Drupal ou encore Prestashop.
                        Actuellement, notre projet principal est en ThreeJS, un framework Javascript permettant de faire de la 3D dans un site web.
                    </p>
                    <p className="about-paragraph">
                        J’ai d’abord réalisé un BTS en Domotique que j’ai obtenu en 2017. Par la suite j’ai eu 2 années d’expériences professionnelles dans le domaine de la domotique, dans des entreprises telles que Perrier, Veolia ou Repar’stores.
                        Cela m’a permis de me rendre compte que je voulais me concentrer sur le côté «programmation» de la domotique, j’ai donc décidé de reprendre les études en 2019 pour devenir développeur.
                        Après 3ans de licence, j’ai décidé de terminer ma formation en alternance car c’était difficile de retrouver une situation d’étudiant, c’est pourquoi j’ai rejoint une formation plus professionnalisante et avec alternance qui me permet de retrouver le monde du travail.
                        Passionné par la science et l’astronomie, j’aime regarder des décollages de fusée ou bien écouter des conférences comme TedX ou encore ThinkerView sur ces sujets-là.
                    </p>
                </div>
            </div>
            <div className="about-pro">
                <h1 className="about-pro-title">Pour la suite ?</h1>
                <p className="about-pro-paragraph">
                    Ayant eu le temps de mûrir mon projet durant mes années à la faculté et par mes expériences, je souhaiterai vivre de mon activité en freelance à l'avenir.
                    J'aimerai proposer mes services en tant que développeur full-stack. Aussi j’ai comme projet en commun, avec ma compagne qui est Directrice Artistique et graphiste, de créer notre «agence» pour proposer nos services en création digitale (site web, maquettes, applications, …) et print (flyers, cartes de visites, logo, …).
                    Cela permettra aussi de pouvoir créer un contact direct avec le client, répondre à ses besoins, qu’il soit un particulier ou une entreprise.
                </p>
                <br/><br/>
                <a href="https://fr.linkedin.com/in/julien-larguier-b3419a269" target={"_blank"} className="linkedIn-link" rel={"noreferrer"}>En savoir plus !</a>
            </div>
            <div className="about-lettre">
                <h1 className="about-lettre-title">Puis dans 10ans :</h1>
                <p className="about-lettre-text">
                    Cher Julien,
                    <br/><br/>
                    Salut à toi ! J'espère que tu liras cette lettre en étant heureux et en bonne santé, en plein épanouissement personnel et professionnel.
                    Actuellement, tu as 26 ans et tu es en alternance en tant que développeur web pour valider ton Bachelor3 Dev. Les défis et les succès que tu vis actuellement construiront ta vie dans les années à venir.
                    <br/><br/>
                    En ce moment, tu as cette passion dévorante pour le développement web, et tu as des rêves plein la tête. Tu envisages de devenir freelance fullstack ou même de créer ta propre entreprise aux côtés de ta copine, qui est une artiste talentueuse.
                    Ces aspirations, bien que parfois effrayantes, portent en elles l'énergie nécessaire pour créer quelque chose de grand.
                    <br/><br/>
                    Je me demande, où es-tu actuellement dans ta carrière de développeur ? As-tu atteint ton objectif de devenir freelance full-stack ?
                    Ou peut-être as-tu franchi une étape supplémentaire en créant ta propre entreprise avec Maëlle ?
                    <br/><br/>
                    N'oublie pas les moments qui t'ont mené jusqu’ici. Les heures passées à coder, les projets stimulants, les défis que tu as surmontés et les leçons que tu as apprises sont tous des éléments qui te forgent.
                    Sois fier du chemin que tu as parcouru, même s’il n’a pas été celui que tu pensais.
                    <br/><br/>
                    J'espère que tu as trouvé l'équilibre entre ta vie professionnelle et ta vie personnelle. Les projets que tu entreprends avec Maëlle ne sont pas seulement des défis professionnels, mais aussi des aventures.
                    Comment va votre entreprise commune ? Quels sont les moments marquants que vous avez vécus ensemble ?
                    <br/><br/>
                    Rappelle-toi de ne pas te laisser envahir par le stress et les doutes. Chaque défi est une opportunité de croissance, et chaque réussite est bonne à prendre.
                    <br/><br/>
                    Quoi qu'il en soit, je te fais confiance pour prendre les bonnes décisions et suivre le chemin le plus respectueux de tes valeurs et tes aspirations. Continue d'être passionné, curieux et persévérant.
                    <br/><br/>
                    Prends soin de toi et de ceux que tu aimes.
                    <br/><br/>
                    Bien à toi, Julien de 26 ans.
                </p>
            </div>
            <div className="about-chinese">
                <h1 className="about-chinese-title">Ou autrement :</h1>
                <p className="about-chinese-text">
                    Si j’étais un animal, je serais un chat, parce que c’est paisible, calme, libre et dors beaucoup.
                    <br/><br/>
                    Si j’étais un objet, je serais une couette lestée, parce que c’est le meilleur allié du sommeil.
                    <br/><br/>
                    Si j’étais une série, je serais Big Bang Theory, parce que pas prise de tête, drôle, mais intelligent.
                    <br/><br/>
                    Si j’étais un plat, je serais des lasagnes, parce que c’est réconfortant, que cela se partage.
                    <br/><br/>
                    Si j’étais un pays, je serais soit la Nouvelle-Zélande, parce que c’est un pays calme, de beaux paysages, mais aussi une culture importante.
                    <br/><br/>
                    Si j’étais un livre, je serais 1984 de Georges Orwell OU La Planète Des Singes de Pierre Boulle, parce que j’aime les réflexions philosophiques et sociétales que cela nous force à avoir.
                    <br/><br/>
                    Si j’étais un jeu vidéo, je serais Counter-Strike 2, parce que c’est bien plus complexe, stratégique et complet qu’on peut le penser.
                </p>
            </div>
        </>
    );
}

export default About;
