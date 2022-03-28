import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useState } from "react";
import Details from "./Details";
import ThemeContext from "./themeContext";
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Orlando",
//       animal: "Hamster",
//       breed: "No ideea",
//     }),
//     React.createElement(Pet, {
//       name: "Perrito",
//       animal: "Crocodile",
//       breed: "Ask him",
//     }),
//     React.createElement(Pet, {
//       name: "Capricioso",
//       animal: "Flamingo",
//       breed: "Pink",
//     }),
//   ]);
// };

const App = () => {
  const theme = useState("darkblue");
  console.log(theme)
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
