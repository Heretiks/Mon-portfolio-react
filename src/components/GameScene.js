// ThreeScene.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const GameScene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;

        // Scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x87ceeb);

        // Camera setup
        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
        camera.position.set(0, 5, 10);

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        mount.appendChild(renderer.domElement);

        // OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        // Light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
        directionalLight.position.set(10, 10, 10);
        scene.add(directionalLight);

        // Plane
        const planeGeometry = new THREE.PlaneGeometry(100, 100);
        const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -Math.PI / 2;
        scene.add(plane);

        // Sphere
        const sphereGeometry = new THREE.SphereGeometry(1, 16, 16);
        const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.material.map = new THREE.TextureLoader().load('./assets/projects/project4/image.png');
        sphere.position.y = 1;
        scene.add(sphere);

        // Event listeners for keyboard
        let moveForward = false, moveBackward = false, moveLeft = false, moveRight = false;

        const onDocumentKeyDown = (event) => {
            switch (event.key) {
                case 'z':
                    moveForward = true;
                    break;
                case 's':
                    moveBackward = true;
                    break;
                case 'q':
                    moveLeft = true;
                    break;
                case 'd':
                    moveRight = true;
                    break;
                default:
                    break;
            }
        };
        const onDocumentKeyUp = (event) => {
            switch (event.key) {
                case 'z':
                    moveForward = false;
                    break;
                case 's':
                    moveBackward = false;
                    break;
                case 'q':
                    moveLeft = false;
                    break;
                case 'd':
                    moveRight = false;
                    break;
                default:
                    break;
            }
        };
        const onWindowResize = () => {
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        };

        document.addEventListener('keydown', onDocumentKeyDown);
        document.addEventListener('keyup', onDocumentKeyUp);
        window.addEventListener('resize', onWindowResize);

        const animate = () => {
            requestAnimationFrame(animate);

            let speed = 0.01;
            let direction = new THREE.Vector3();

            if (moveForward) direction.z -= speed;
            if (moveBackward) direction.z += speed;
            if (moveLeft) direction.x -= speed;
            if (moveRight) direction.x += speed;

            // TODO - rotation de la sphère
            if (direction.length() > 0) {
                direction.normalize();
                sphere.position.add(direction);
            }

            controls.update();
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            mount.removeChild(renderer.domElement);
            window.removeEventListener('resize', onWindowResize);
            document.removeEventListener('keydown', onDocumentKeyDown);
            document.removeEventListener('keyup', onDocumentKeyUp);
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default GameScene;
