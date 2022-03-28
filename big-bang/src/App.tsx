import "./scss/Main.scss";
import Navigation from "./Navigation";
import AnimationZone from "./components/AnimationZone";
import BinaryConvertor from "./components/BinaryConvertor"
import MusicZone from "./components/MuzicZone";
import BorderRadiusPreviewer from "./components/BorderRadiusPreviewer";
import ChristmasLights from "./components/ChristmasLights";
import UserList from "./components/UserList";
import { CandyCrush } from './candy-crush/CandyCrush'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import NoBsTs from "./react-nobs-ts/NoBsTs";
import AppWrapper from "./react-nobs-ts/NoBsTs";
import Reduxing from "./components/Redux";
import IncidentCounter from "./components/IncidentCounter";
import { Provider } from "react-redux";
import { store } from './components/Store';
import { DigitalClock } from "./components/DigitalClock";
import { GraphConcept } from './components/GraphConcept'
import Dragging from "./components/Dragging";
function App() {
  return (
    <div id="app">
      <Provider store={store}>
        <Router>
          <header>
            <div className="container header">
              <Link to="/">
                <h1 className="logo">Big Bang</h1>
              </Link>
              <Navigation />
            </div>
          </header>
          <Switch>
            <Route path="/binary-convertor">
              <BinaryConvertor />
            </Route>
            {/* <Route path="/animation-zone">
            <AnimationZone />
          </Route> */}
            <Route path="/music-zone">
              <MusicZone />
            </Route>
            <Route path="/border-radious-previewer">
              <BorderRadiusPreviewer />
            </Route>
            <Route path="/christmas-lights">
              <ChristmasLights />
            </Route>
            <Route path="/user-list">
              <UserList />
            </Route>
            <Route path="/candy-crush">
              <CandyCrush />
            </Route>
            <Route path="/no-bs-ts">
              <AppWrapper />
            </Route>
            <Route path="/reduxing">
              <Reduxing />
            </Route>
            <Route path="/incident-counter">
              <IncidentCounter />
            </Route>
            <Route path="/digital-clock">
              <DigitalClock />
            </Route>
            <Route path="/graph-concept">
              <GraphConcept />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
