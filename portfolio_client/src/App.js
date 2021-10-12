import './style/App.css';

import { Provider } from "react-redux";
import store from "./store";
import { useEffect, useState } from 'react';

import TopNav from "./components/TopNav"
import SideNav from "./components/SideNav"
import ContentItem from "./components/ContentItem"
import ContentCarousel from "./components/ContentCarousel"
import Header from "./components/Header";

function App() {
    // is app width of mobile dimension?
    let [mobile, setMobile] = useState(false);

    //check if we should render mobile version
    let updateMobileState = () => {
        if (window.innerWidth <= 768) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }
    useEffect(() => {
        window.addEventListener('resize', updateMobileState);
        // TODO: test if below if statement is redundant
        if (window.innerWidth <= 768) {
            setMobile(true);
        } else {
            setMobile(false);
        }
        
        return () => {
            window.removeEventListener('resize', updateMobileState);
        };
    }, [])
    
    /*
        Transform the main site element following the mouse cursor

        NOTE: only is in effect at widths > 1300px
    */
    const MOVEMENT_SCALER = 10;
    document.onmousemove = handleMouseMove;

    function handleMouseMove(event) {
        let target = document.getElementById("transformTarget")
        const height = window.innerHeight;
        const width = window.innerWidth;
        if (width > 1300) {
            // transform the main element with respect to mouse position/window dimensions
            let yAxisDegree = event.pageX / width * 40 - 20;
            let xAxisDegree = event.pageY / height * -1 * 40 + 20;
            yAxisDegree = yAxisDegree/MOVEMENT_SCALER;
            xAxisDegree = xAxisDegree/MOVEMENT_SCALER;
            target.style.transform = `rotateY(${yAxisDegree}deg) rotateX(${xAxisDegree}deg)`;
            // Set the sheen position
            setSheenPosition(event.pageX / width, event.pageY / width);
        } else {
            target.style.transform = `rotateY(0deg) rotateX(0deg)`;
        }
    }
    // translate the sheen effect over the main element
    function setSheenPosition(xRatio, yRatio) {
        // This creates a "distance" up to 400px each direction to offset the sheen
        const xOffset = 1 - (xRatio - 0.5) * 800;
        const yOffset = 1 - (yRatio - 0.5) * 800;
        let target = document.getElementById("transformTarget")
        target.style.setProperty('--sheenX', `${xOffset}px`)
        target.style.setProperty('--sheenY', `${yOffset}px`)
    }

    // render App with different layout dependant on width
    if (mobile) {
        // render mobile layout
        return (
            <Provider store={store}>
                <div className="app bg">
                    <div className="main transformTargetMobileFix" id="transformTarget">
                        <div className="mobile-wrap">
                            <div className="top-wrap">
                                <Header />
                                <TopNav />
                            </div>
                            <ContentCarousel />
                        </div>
                    </div>
                </div>
            </Provider>
        );
    } else {
        // render fullscreen layout
        return (
            <Provider store={store}>
                <div className="app bg">
                    <div className="main" id="transformTarget">
                        <SideNav />
                        <div className="right-bit">
                            <div className="top-wrap">
                                <Header />
                            </div>
                            <ContentItem />
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;