import "./scss/Main.scss";
import Navigation from "./Navigation";
import AnimationZone from "./components/AnimationZone";
import BinaryConvertor from "./components/BinaryConvertor"
import MusicZone from "./components/MuzicZone";
import BorderRadiusPreviewer from "./components/BorderRadiusPreviewer";
import ChristmasLights from "./components/ChristmasLights";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div id="app">
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
          <Route path="/animation-zone">
            <AnimationZone />
          </Route>
          <Route path="/music-zone">
            <MusicZone />
          </Route>
          <Route path="/border-radious-previewer">
            <BorderRadiusPreviewer />
          </Route>
          <Route path="/christmas-lights">
            <ChristmasLights />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
