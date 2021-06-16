import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet"

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Orlando",
      animal: "Hamster",
      breed: "No ideea",
    }),
    React.createElement(Pet, {
      name: "Perrito",
      animal: "Crocodile",
      breed: "Ask him",
    }),
    React.createElement(Pet, {
      name: "Capricioso",
      animal: "Flamingo",
      breed: "Pink",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
