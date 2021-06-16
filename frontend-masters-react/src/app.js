const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

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
