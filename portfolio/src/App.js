import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { selectItem } from "./actions/actions";

import './App.css';

import SideNav from "./components/SideNav"
import ContentItem from "./components/ContentItem"
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";

function App() {
    const movementScaler = 10;
    document.onmousemove = handleMouseMove;

    function handleMouseMove(event) {
        let target = document.getElementById("moveTarget")
        const height = window.innerHeight;
        const width = window.innerWidth;
        if (width > 1300) {
            let yAxisDegree = event.pageX / width * 40 - 20;
            let xAxisDegree = event.pageY / height * -1 * 40 + 20;
            yAxisDegree = yAxisDegree/movementScaler;
            xAxisDegree = xAxisDegree/movementScaler;
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
            <div className="app bg" style={{perspective: "800px"}}>
                <div className="main" id="moveTarget">
                    <SideNav></SideNav>
                    <div className="right-bit">
                        <Header></Header>
                        <ContentItem></ContentItem>
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default App;