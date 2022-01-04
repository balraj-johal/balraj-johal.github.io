import { useEffect } from "react";
import { connect } from "react-redux";

import * as THREE from "three";

function ThreeScroller(props) {

    // on component mount, setup Three.JS components
    useEffect(() => {
        const SCENE = new THREE.Scene();
        const CAMERA = new THREE.PerspectiveCamera(
            75, 
            window.innerWidth/window.innerHeight, 
            0.1, 
            1000
        );

        const RENDERER = new THREE.WebGL1Renderer({
            canvas: document.querySelector("#three-canvas-bg")
        })

        RENDERER.setPixelRatio( window.devicePixelRatio );
        RENDERER.setSize( window.innerWidth, window.innerHeight );

        CAMERA.position.setZ(30);

        RENDERER.render(SCENE, CAMERA);
    }, [])

    return(
        <div className="scroller-root">
            <canvas id="three-canvas-bg">

            </canvas>
        </div>
    )
}

export default ThreeScroller;