import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
//import BaseCharacter from '../assets/BaseCharacter.gltf';
import Model from '../assets/model.glb'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function ThreeIndexScene() {
    const refContainer = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        let scene = new THREE.Scene();
        scene.background = new THREE.Color(1, 0.745, 0.596);
        let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(1, 2, 7);
        camera.lookAt(0, 3, 0);

        let renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        refContainer.current.appendChild(renderer.domElement);

        let ambientLight = new THREE.AmbientLight(0xffffff, 1);
        const light = new THREE.PointLight(0xffffff, 10, 1);
        light.position.set(0, 5, 5);
        light.castShadow = true;

        scene.add(ambientLight);
        scene.add(light);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.minDistance = 2;
        controls.maxDistance = 10;
        controls.enableDamping = true;
        controls.dampingFactor = 0.5;
        controls.autoRotate= true;


        const sphereGeometry = new THREE.SphereGeometry(0.1, 32, 32);
        const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
        const sphere2Material = new THREE.MeshPhongMaterial({ color: 0xffffff });
        const sphere3Material = new THREE.MeshPhongMaterial({ color: 0xffffff });
        const sphere4Material = new THREE.MeshPhongMaterial({ color: 0xffffff });
        const sphere5Material = new THREE.MeshPhongMaterial({ color: 0xffffff });
        const sphere6Material = new THREE.MeshPhongMaterial({ color: 0xffffff });
        const sphere7Material = new THREE.MeshPhongMaterial({ color: 0xffffff });
        const sphere8Material = new THREE.MeshPhongMaterial({ color: 0xffffff });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial); // Rouge
        const sphere2 = new THREE.Mesh(sphereGeometry, sphere2Material); // Vert
        const sphere3 = new THREE.Mesh(sphereGeometry, sphere3Material); // Bleu
        const sphere4 = new THREE.Mesh(sphereGeometry, sphere4Material); // Jaune
        const sphere5 = new THREE.Mesh(sphereGeometry, sphere5Material); // Cyan
        const sphere6 = new THREE.Mesh(sphereGeometry, sphere6Material); // Gris
        const sphere7 = new THREE.Mesh(sphereGeometry, sphere7Material); // Noir
        const sphere8 = new THREE.Mesh(sphereGeometry, sphere8Material); // Bleu/Vert

        scene.add(sphere, sphere2, sphere3, sphere4, sphere5, sphere6, sphere7, sphere8);

        function updateSphereOrbit() {
            const time = Date.now() * 0.01;

            const orbitRadius = 2;
            const orbitSpeed1 = 0.03;
            const orbitSpeed2 = 0.02;
            const orbitSpeed3 = 0.04;
            const orbitSpeed4 = 0.03;
            const orbitSpeed5 = 0.05;
            const orbitSpeed6 = 0.02;
            const orbitSpeed7 = 0.04;
            const orbitSpeed8 = 0.05;


            const x1 = Math.sin(time * orbitSpeed1) * orbitRadius;
            const y1 = Math.cos(time * orbitSpeed1) * orbitRadius;
            const z1 = Math.sin(time * orbitSpeed1) * orbitRadius;
            sphere.position.set(x1, y1+1.5, z1);

            const x2 = Math.sin(time * orbitSpeed2) * orbitRadius;
            const y2 = Math.cos(time * orbitSpeed2) * orbitRadius;
            const z2 = Math.cos(time * orbitSpeed2) * orbitRadius;
            sphere2.position.set(-x2, y2+1.5, z2);

            const x3 = Math.cos(time * orbitSpeed3) * orbitRadius;
            const y3 = Math.cos(time * orbitSpeed3) * orbitRadius;
            const z3 = Math.sin(time * orbitSpeed3) * orbitRadius;
            sphere3.position.set(x3, y3+1.5, -z3);

            const x4 = Math.cos(time * orbitSpeed4) * orbitRadius;
            const y4 = Math.sin(time * orbitSpeed4) * orbitRadius;
            const z4 = Math.cos(time * orbitSpeed4) * orbitRadius;
            sphere4.position.set(-x4, y4+1.5, -z4);

            const x5 = Math.cos(time * orbitSpeed5) * orbitRadius;
            const y5 = Math.cos(time * orbitSpeed5) * orbitRadius;
            const z5 = Math.sin(time * orbitSpeed5) * orbitRadius;
            sphere5.position.set(x5, y5, z5);

            const x6 = Math.sin(time * orbitSpeed6) * orbitRadius;
            const y6 = Math.sin(time * orbitSpeed6) * orbitRadius;
            const z6 = Math.cos(time * orbitSpeed6) * orbitRadius;
            sphere6.position.set(-x6, y6+1.5, z6);

            const x7 = Math.sin(time * orbitSpeed7) * orbitRadius;
            const y7 = Math.sin(time * orbitSpeed7) * orbitRadius;
            const z7 = Math.cos(time * orbitSpeed7) * orbitRadius;
            sphere7.position.set(-x7, y7+1.5, -z7);

            const x8 = Math.cos(time * orbitSpeed8) * orbitRadius;
            const y8 = Math.sin(time * orbitSpeed8) * orbitRadius;
            const z8 = Math.sin(time * orbitSpeed8) * orbitRadius;
            sphere8.position.set(x8, y8+1.5, z8);
        }

        const loader = new GLTFLoader();
        let y = 0;
        loader.load(
            Model,
            (gltf) => {
                const model = gltf.scene.children[0];
                model.castShadow = true;
                //model.geometry.scale(2,2,2);
                console.log(model);
                scene.add(model);

                let animate = function () {
                    const time = Date.now() * 0.001;
                    y = Math.sin(time) * 0.2;
                    model.position.y = y;
                    requestAnimationFrame(animate);
                    renderer.render(scene, camera);
                };

                animate();
            },
            undefined,
            (error) => {
                console.error('Erreur lors du chargement du modèle GLTF', error);
            }
        );

        let animate = function () {
            updateSphereOrbit();
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            controls.update()
        };

        animate();

        return () => {
            scene.remove(ambientLight);
            renderer.dispose();
        };
    }, []);

    return (
        <>
            <div ref={refContainer}></div>
        </>
    );
}

export default ThreeIndexScene;
