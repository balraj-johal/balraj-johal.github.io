import './style/Root.css';

import { BrowserRouter as 
    Router,
    Route, 
    Switch, 
} from "react-router-dom";

import PortfolioRoot from './components/PortfolioRoot';
import ThreeScroller from './components/ThreeScroller';

function App() {


    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path={"/"} >
                        <PortfolioRoot />
                    </Route>
                    <Route exact path={"/three-scrolling"} >
                        <ThreeScroller />
                    </Route>
                </Switch>
            </Router>
        </div>

    )
}

export default App;