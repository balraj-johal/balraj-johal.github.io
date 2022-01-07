import { useEffect } from "react";

import * as THREE from "three";

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import skBack from "../res/skybox/back.png";
import skBottom from "../res/skybox/bottom.png";
import skFront from "../res/skybox/front.png";
import skLeft from "../res/skybox/left.png";
import skRight from "../res/skybox/right.png";
import skTop from "../res/skybox/top.png";

function ThreeScroller(props) {

    // on component mount, setup Three.JS components
    useEffect(() => {
        // set up scene
        const SCENE = new THREE.Scene();
        const CAMERA = new THREE.PerspectiveCamera(
            75, 
            window.innerWidth/window.innerHeight, 
            0.1, 
            15000
        );

        const RENDERER = new THREE.WebGL1Renderer({
            canvas: document.querySelector("#three-canvas-bg")
        })
        RENDERER.setPixelRatio( window.devicePixelRatio );
        RENDERER.setSize( window.innerWidth, window.innerHeight );

        CAMERA.position.setZ(30);

        // add controls
        let controls = new OrbitControls( CAMERA, RENDERER.domElement );
        // controls.autoRotate = true;
        // controls.update();

        // set up lighting
        const POINT_LIGHT = new THREE.PointLight(0xffffff);
        POINT_LIGHT.position.set(15, 10, 10);
        SCENE.add(POINT_LIGHT);
        const AMBIENT_LIGHT = new THREE.AmbientLight(0xffffff);
        SCENE.add(AMBIENT_LIGHT);

        const LIGHT_HELPER = new THREE.PointLightHelper(POINT_LIGHT);
        SCENE.add(LIGHT_HELPER);

        // add skybox
        // -- create material array
        const front = new THREE.TextureLoader().load(skFront);
        const back = new THREE.TextureLoader().load(skBack);
        const up = new THREE.TextureLoader().load(skTop);
        const down = new THREE.TextureLoader().load(skBottom);
        const right = new THREE.TextureLoader().load(skRight);
        const left = new THREE.TextureLoader().load(skLeft);
        const texArray = [right, left, up, down, front, back];
        const skMaterialArray = texArray.map(texture => {
            // note texture is displayed on backside here
            return new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
        });
        
        let skSize = 5000;
        const skGeometry = new THREE.BoxGeometry(skSize, skSize, skSize);
        const skybox = new THREE.Mesh(skGeometry, skMaterialArray);
        SCENE.add(skybox);

        // add torus
        const TORUS_GEOMETRY = new THREE.TorusGeometry( 10, 3, 14, 100 );
        const TORUS_MATERIAL = new THREE.MeshStandardMaterial({color: 0xFF6347});
        const TORUS_MESH = new THREE.Mesh(TORUS_GEOMETRY, TORUS_MATERIAL);
        SCENE.add(TORUS_MESH);

        const starGroup = new THREE.Group();
        function addStar() {
            let starGeometry = new THREE.SphereGeometry(0.25, 6, 6);
            let starMaterial = new THREE.MeshStandardMaterial({color: 0xffffff});
            const star = new THREE.Mesh(starGeometry, starMaterial);
            // set star to random coordinates in range +- 100
            let range = 200;
            star.position.set(
                THREE.MathUtils.randFloatSpread(range), 
                THREE.MathUtils.randFloatSpread(range), 
                THREE.MathUtils.randFloatSpread(range)
            );
            starGroup.add(star);
        } 
        // populate scene with stars
        let noOfStars = 200;
        Array(noOfStars).fill().forEach(addStar);
        SCENE.add(starGroup);

        // main tick loop
        function anim() {
            requestAnimationFrame(anim);

            TORUS_MESH.rotation.y += 0.025;
            starGroup.rotation.y += 0.0005;

            if (!document.hidden) {
                controls.update();
                RENDERER.render(SCENE, CAMERA);
            }
        }
        anim();

    }, [])

    return(
        <div className="scroller-root">
            <canvas id="three-canvas-bg">

            </canvas>
        </div>
    )
}

export default ThreeScroller;