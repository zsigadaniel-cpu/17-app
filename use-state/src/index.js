import ReactDOM from "react-dom";
import React from "react";

let callIndex = -1;
const stateValues = [];

const useState = (initialValue) => {
  callIndex++;

  const currentCallIndex = Number(callIndex);
  if (stateValues[currentCallIndex] === undefined) {
    stateValues[currentCallIndex] = initialValue;
  }
  const setValue = (newValue) => {
    stateValues[currentCallIndex] = newValue;
    renderApp();
  };
  return [stateValues[currentCallIndex], setValue];
};

const App = () => {
  const [countA, setCountA] = useState(1);
  const [countB, setCountB] = useState(-1);
  return (
    <div>
      <div>
        <h1>Count A: {countA}</h1>
        <button onClick={() => setCountA(countA - 1)}>Substract</button>
        <button onClick={() => setCountA(countA + 1)}>Add</button>
      </div>
      <div>
        <h1>Count B: {countB}</h1>
        <button onClick={() => setCountB(countB - 1)}>Substract</button>
        <button onClick={() => setCountB(countB + 1)}>Add</button>
      </div>
    </div>
  );
};

const renderApp = () => {
  callIndex = -1;
  ReactDOM.render(<App />, document.getElementById("root"));
};

renderApp();
let cw = "";
function r(param) {
  cw = param;
  let hold = cw;
  function p() {
    console.log(hold.cat);
  }
  return [hold, p];
}

const O = {
  cat: "cat",
};

const [w, s] = r(O);
O.cat = "tort";
const [d, a] = r(O);

console.log(r("cat"));
// setInterval(() => {
//   s();
// }, 1000);
a();


