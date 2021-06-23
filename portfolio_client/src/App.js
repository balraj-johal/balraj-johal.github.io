import './App.css';

import { Provider } from "react-redux";
import store from "./store";
import { useEffect, useState } from 'react';

import TopNav from "./components/TopNav"
import SideNav from "./components/SideNav"
import ContentItem from "./components/ContentItem"
import ContentCarousel from "./components/ContentCarousel"
import Header from "./components/Header";

function App() {

    //check if we should render mobile version
    let [mobile, setMobile] = useState(false);
    let isMobile = () => {
        if (window.innerWidth <= 576) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }
    useEffect(() => {
        window.addEventListener('resize', isMobile);
        if (window.innerWidth <= 576) {
            setMobile(true);
        } else {
            setMobile(false);
        }
        
        return () => {
            window.removeEventListener('resize', isMobile);
        };
    })
    
    const MOVEMENT_SCALE = 10;
    document.onmousemove = handleMouseMove;
    //3D window effect
    function handleMouseMove(event) {
        let target = document.getElementById("moveTarget")
        const height = window.innerHeight;
        const width = window.innerWidth;
        if (width > 1300) {
            let yAxisDegree = event.pageX / width * 40 - 20;
            let xAxisDegree = event.pageY / height * -1 * 40 + 20;
            yAxisDegree = yAxisDegree/MOVEMENT_SCALE;
            xAxisDegree = xAxisDegree/MOVEMENT_SCALE;
            target.style.transform = `rotateY(${yAxisDegree}deg) rotateX(${xAxisDegree}deg)`;
            // Set the sheen position
            setSheenPosition(event.pageX / width, event.pageY / width);
        } else {
            target.style.transform = `rotateY(0deg) rotateX(0deg)`;
        }
    }
    function setSheenPosition(xRatio, yRatio) {
        // This creates a "distance" up to 400px each direction to offset the sheen
        const xOffset = 1 - (xRatio - 0.5) * 800;
        const yOffset = 1 - (yRatio - 0.5) * 800;
        let target = document.getElementById("moveTarget")
        target.style.setProperty('--sheenX', `${xOffset}px`)
        target.style.setProperty('--sheenY', `${yOffset}px`)
    }

    return (
        <Provider store={store}>
            <div className="app bg">
                <div className="main" id="moveTarget">
                    {(mobile) ? null : <SideNav mobile={mobile}></SideNav>}
                    <div className={`${(mobile) ? "mobile-wrap" : "right-bit" }`}>
                        <div className="top-wrap">
                            <Header></Header>
                            {(mobile) ?  <TopNav /> : null}
                        </div>
                        {(mobile) ? <ContentCarousel /> : <ContentItem />}
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default App;