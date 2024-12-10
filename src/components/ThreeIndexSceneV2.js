import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Model from '../assets/model.glb'
import Treadmill from '../assets/treadmill_proform.glb'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function ThreeIndexSceneV2() {

    const refContainer = useRef(null);
    const controlsRef = useRef(null);

    function handleResize(camera, renderer, scene)  {
        let newWidth = window.innerWidth;
        let newHeight = window.innerHeight;

        if (camera instanceof THREE.PerspectiveCamera) {
            camera.aspect = newWidth / newHeight;
            camera.zoom = Math.min(1, (newWidth / newHeight) * 2 ) ;
            camera.updateProjectionMatrix();
        }

        if (renderer) {
            renderer.setSize(newWidth, newHeight)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
        }

        renderer.render(scene, camera);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        let scene = new THREE.Scene();
        scene.background = new THREE.Color(0, 0, 0);
        let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(1, 2, 4);

        let renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        refContainer.current.appendChild(renderer.domElement);

        const light1 = new THREE.PointLight(0xff0000, 10, 300);
        const light2 = new THREE.PointLight(0xff00ff, 20, 300);
        const light3 = new THREE.PointLight(0x0000ff, 15, 300);
        light1.position.set(2, 4, -2);
        light2.position.set(-2, 4, 2);
        light3.position.set(0, 4, 0);
        light2.castShadow = true;
        light3.castShadow = true;
        light1.shadow.mapSize.set(2048,2048);
        light2.shadow.mapSize.set(2048,2048);
        light3.shadow.mapSize.set(2048,2048);
        scene.add(light1, light2, light3);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.5;
        controls.autoRotate= true;
        controls.enableZoom = false;
        controls.maxPolarAngle = (Math.PI/2) - 0.1;
        controlsRef.current = controls;

        if (isTouchDevice) {
            renderer.domElement.style.pointerEvents = 'none';
            controls.enabled = false;
        }

        const loader = new GLTFLoader();
        let mixer = new THREE.AnimationMixer();
        loader.load(
            Model,
            (gltf) => {
                gltf.scene.traverse((child) => {
                    if (child.isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });

                const model = gltf.scene.children[0];
                model.position.y = 0.2;

                mixer = new THREE.AnimationMixer( gltf.scene );
                const anim = gltf.animations[0];
                mixer.clipAction(anim).play();
                scene.add(model);
            },
            undefined,
            (error) => {
                console.error('Erreur lors du chargement du Perso', error);
            }
        );

        loader.load(
            Treadmill,
            (gltf) => {
                gltf.scene.traverse((child) => {
                    if (child.isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });

                const model = gltf.scene;
                model.rotation.y = -Math.PI;
                model.scale.set(1.3, 1.2, 1.5);
                model.position.z = 0.2;
                scene.add(model);
            },
            undefined,
            (error) => {
                console.error('Erreur lors du chargement du Tapis', error);
            }
        )

        const geom = new THREE.PlaneGeometry(100, 100, 2, 2);
        const mat = new THREE.MeshStandardMaterial({
            color: 0x444444,
            side: THREE.DoubleSide,
            shadowSide: THREE.DoubleSide
        });
        const plane = new THREE.Mesh(geom, mat);
        plane.receiveShadow = true;
        plane.castShadow = false;
        plane.rotation.x = (Math.PI/2);
        scene.add(plane);

        let clock = new THREE.Clock();

        let animate = function () {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            controls.update();
            controlsRef.current.update();
            let delta = clock.getDelta();
            mixer.update(delta);
        };

        animate();

        window.addEventListener('resize', () => handleResize(camera, renderer, scene));
        handleResize(camera, renderer, scene)

        // const pingIcon = document.createElement('div');
        // pingIcon.innerHTML = 'Aide';
        // pingIcon.style.position = 'absolute';
        // pingIcon.style.top = '110px';
        // pingIcon.style.left = '10px';
        // pingIcon.style.fontSize = '18px';
        // pingIcon.style.color = 'var(--dark)';
        // pingIcon.style.background = 'var(--main)';
        // pingIcon.style.borderRadius = '10px';
        // pingIcon.style.padding = '5px 10px';
        // pingIcon.style.cursor = 'pointer';
        // pingIcon.addEventListener('mouseenter', () => {
        //     pingIcon.style.backgroundColor = 'var(--main-hover)';
        //     pingIcon.style.transform = 'scale(1.1)';
        // });
        // pingIcon.addEventListener('mouseleave', () => {
        //     pingIcon.style.backgroundColor = 'var(--main)';
        //     pingIcon.style.transform = 'scale(1)';
        // });
        // refContainer.current.appendChild(pingIcon);

        // const popup = document.createElement('div');
        // popup.innerHTML = `Clic gauche pour tourner autour<br/>Clic droit pour se déplacer<br/>Molette pour zoomer/dézoomer (si zoom activé)`;
        // popup.style.position = 'absolute';
        // popup.style.top = '50%';
        // popup.style.left = '50%';
        // popup.style.transform = 'translate(-50%, -50%)';
        // popup.style.padding = '20px';
        // popup.style.background = 'var(--main)';
        // popup.style.color = 'var(--dark)';
        // popup.style.borderRadius = '10px';
        // popup.style.display = 'none';
        // popup.style.zIndex = '999';
        // pingIcon.addEventListener('click', () => {
        //     popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
        // });

        // const closeIcon = document.createElement('div');
        // closeIcon.innerHTML = 'X';
        // closeIcon.style.position = 'absolute';
        // closeIcon.style.top = '-8px';
        // closeIcon.style.right = '-8px';
        // closeIcon.style.fontSize = '22px';
        // closeIcon.style.background = 'white';
        // closeIcon.style.color = 'var(--dark)';
        // closeIcon.style.borderRadius = '25px';
        // closeIcon.style.padding = '0 10px';
        // closeIcon.style.cursor = 'pointer';
        // closeIcon.addEventListener('click', () => {
        //     popup.style.display = 'none';
        // });

        // popup.appendChild(closeIcon);
        // refContainer.current.appendChild(popup);

        return () => {
            renderer.dispose();
        };
    }, []);

    return (
        <div ref={refContainer}></div>
    );
}

export default ThreeIndexSceneV2;
