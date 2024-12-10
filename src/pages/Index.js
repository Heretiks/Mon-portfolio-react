import React from 'react';
//import GameScene from '../components/GameScene';
//import ThreeIndexScene from '../components/ThreeIndexScene';
import ThreeIndexSceneV2 from '../components/ThreeIndexSceneV2';
import '../styles/global.css';
import { Helmet } from 'react-helmet-async';

function Index() {

    return (
        <>
            <Helmet>
                <title>Julien Larguier</title>
                <meta name="description"
                      content="Portfolio de Julien Larguier, développeur web full-stack spécialisé dans la création de sites sur mesure, JavaScript, React, WordPress et plus. Découvrez mes projets et mon expertise en développement."/>
                <meta name="keywords"
                      content="développeur web, full-stack, JavaScript, React, WordPress, création de sites, développement web, Julien Larguier, portfolio développeur, freelance web, solutions web sur mesure"/>
            </Helmet>
            <ThreeIndexSceneV2/>
            {/*<GameScene />*/}
        </>
    );
}

export default Index;
