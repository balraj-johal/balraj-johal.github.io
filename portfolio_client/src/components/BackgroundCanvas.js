import { useEffect } from "react";
import { connect } from "react-redux";

function BackgroundCanvas(props) {

    // on mount, configure canavs elements

    // credit to: Slawomir Chodnicki
    // https://towardsdatascience.com/fun-with-html-canvas-lets-make-lava-lamp-plasma-e4b0d89fe778
    useEffect(() => {
        const CANVAS = document.getElementById("bg-canvas");
        const c = CANVAS.getContext("2d");
        
        const IMAGE_SIZE = 512;
        CANVAS.width = IMAGE_SIZE;
        CANVAS.height = IMAGE_SIZE;

        const IMAGE = c.createImageData(IMAGE_SIZE, IMAGE_SIZE);

        for (let i = 0; i < IMAGE.data.length; i += 4) {
            IMAGE.data[i] = 0; // R
            IMAGE.data[i + 1] = 0; // G
            IMAGE.data[i + 2] = 0; // B
            IMAGE.data[i + 3] = 255; // A
        }

        // size of our height maps
        const MAP_SIZE = 1024;

        // returns the distance of point x,y from the origin 0,0
        let distance = (x, y) => Math.sqrt(x * x + y * y);

        // init height map 1
        const HEIGHT_MAP_1 = [];
        for (let u = 0; u < MAP_SIZE; u++) {
            for (let v = 0; v < MAP_SIZE; v++) {
                // index of coordinate in height map array
                const i = u * MAP_SIZE + v;

                // u,v are coordinates with origin at upper left corner
                // cx and cy are coordinates with origin at the
                // center of the map
                const cx = u - MAP_SIZE / 2;
                const cy = v - MAP_SIZE / 2;

                // distance from middle of map
                const d = distance(cx, cy);

                // stretching so we get the desired ripple density on our map
                const stretch = (3 * Math.PI) / (MAP_SIZE / 2);

                // wavy height value between -1 and 1
                const ripple = Math.sin(d * stretch);

                // wavy height value normalized to 0..1
                const normalized = (ripple + 1) / 2;

                // height map value 0..128, integer
                HEIGHT_MAP_1[i] = Math.floor(normalized * 128);
            }
        }
        const HEIGHT_MAP_2 = [];
        for (let u = 0; u < MAP_SIZE; u++) {
            for (let v = 0; v < MAP_SIZE; v++) {
                const i = u * MAP_SIZE + v;
                const cx = u - MAP_SIZE / 2;
                const cy = v - MAP_SIZE / 2;

                // skewed distance as input to chaos field calculation,
                // scaled for smoothness over map distance
                const d1 = distance(0.8 * cx, 1.3 * cy) * 0.022;
                const d2 = distance(1.35 * cx, 0.45 * cy) * 0.022;

                const s = Math.sin(d1);
                const c = Math.cos(d2);
                // height value between -2 and +2
                const h = s + c;

                // height value between 0..1
                const normalized = (h + 2) / 4;
                // height value between 0..127, integer
                HEIGHT_MAP_2[i] = Math.floor(normalized * 127);
            }
        }

        // offsets for height maps
        // for now, we leave them at upper left corner

        let dx1 = 0;
        let dy1 = 0;

        let dx2 = 0;
        let dy2 = 0;

        // update our image data array with greyscale values
        // as per our height maps
        const updateImageData = () => {
            for (let u = 0; u < IMAGE_SIZE; u++) {
                for (let v = 0; v < IMAGE_SIZE; v++) {
                // indexes into height maps for pixel
                    const i = (u + dy1) * MAP_SIZE + (v + dx1);
                    const k = (u + dy2) * MAP_SIZE + (v + dx2);

                    // index for pixel in image data
                    // remember it's 4 bytes per pixel
                    const j = u * IMAGE_SIZE * 4 + v * 4;

                    // height value of 0..255
                    let h = HEIGHT_MAP_1[i] + HEIGHT_MAP_2[k];

                    // greyscale color according to height
                    let c = { r: h, g: h, b: h };

                    // set pixel data
                    IMAGE.data[j] = c.r;
                    IMAGE.data[j + 1] = c.g;
                    IMAGE.data[j + 2] = c.b;
                }
            }
        };
        
        // adjust height maps offsets
        const moveHeightMaps = (time) => {
            dx1 = Math.floor(
                // (cos(time * timescale * phaseshift) + 1 / 2) * 512
                (((Math.cos(time * 0.0001 + 0.4 + Math.PI) + 1) / 2) * MAP_SIZE) / 2
            );
            dy1 = Math.floor(
                (((Math.cos(time * 0.00015 - 0.1) + 1) / 2) * MAP_SIZE) / 2
            );
            dx2 = Math.floor(
                (((Math.cos(time * -0.0001 + 1.2) + 1) / 2) * MAP_SIZE) / 2
            );
            dy2 = Math.floor(
                (((Math.cos(time * -0.00015 - 0.8 + Math.PI) + 1) / 2) * MAP_SIZE) / 2
            );
        };

        const tick = time => {
            moveHeightMaps(time);
            updateImageData();
          
            c.putImageData(IMAGE, 0, 0);
          
            requestAnimationFrame(tick);
        };
          
        requestAnimationFrame(tick);

    }, [])

    return(
        <div>
            <canvas 
                id="bg-canvas"
            ></canvas>
        </div>
    )
}

const mapStateToProps = state => ({
    selectedItem: state.selectedItem
})

export default connect(
    mapStateToProps,
    {
    }
)(BackgroundCanvas);