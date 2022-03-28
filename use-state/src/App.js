// import ReactDOM from "react-dom";
// import React from "react";

// let stateValue;

// const useState = (initialValue) => {
//   if (stateValue === undefined) {
//     stateValue = initialValue;
//   }
//   const setValue = (newValue) => {
//     stateValue = newValue;
//   };
//   return [stateValue, setValue];
// };

// const App = () => {
//   const [countA, setCountA] = useState(1);
//   return (
//     <div>
//       <div>
//         <h1>Count A: {countA}</h1>
//         <button onClick={() => setCountA(countA - 1)}>Substract</button>
//         <button onClick={() => setCountA(countA + 1)}>Add</button>
//       </div>
//       <div>
//         <h1>Count B: -1</h1>
//         <button>Substract</button>
//         <button>Add</button>
//       </div>
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById("root"));
