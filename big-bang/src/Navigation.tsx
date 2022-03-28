import { Link } from "react-router-dom";
import useBinaryTextEffect from "./useBinaryTextEffect";
import { useState } from "react";

const binaryConverter = "Binary Converter";

function Navigation() {
  const [converter, setConverter] = useState(false);
  const [binaryText] = useBinaryTextEffect([converter, binaryConverter]);

  function changeToBinary() {
    setConverter(true);
  }

  function changeToText() {
    setConverter(false);
  }

  return (
    <nav className="nav-container">
      <ul className="nav-container__nav">
        <li className="nav__element">
          <Link
            to="/binary-convertor"
            onMouseEnter={() => changeToBinary()}
            onMouseLeave={() => changeToText()}
          >
            {binaryText}
          </Link>
        </li>
        {/* <li className="nav__element">
          <Link to="/animation-zone">Animation Zone</Link>
        </li> */}
        <li className="nav__element">
          <Link to="/music-zone">Music Zone</Link>
        </li>
        <li className="nav__element">
          <Link to="/border-radious-previewer">Border Radius Previewer</Link>
        </li>
        <li className="nav__element">
          <Link to="/christmas-lights">Christmas Lights</Link>
        </li>
        <li className="nav__element">
          <Link to="/user-list">User List</Link>
        </li>
        {/* <li className="nav__element">
          <Link to="/candy-crush">Candy Crush</Link>
        </li> */}
        <li className="nav__element">
          <Link to="/no-bs-ts">No BS TS</Link>
        </li>
        {/* <li className="nav__element">
          <Link to="/reduxing">Redux</Link>
        </li> */}
        <li className="nav__element">
          <Link to="/incident-counter">Incident Counter</Link>
        </li>
        <li className="nav__element">
          <Link to="/digital-clock">Digital Clock</Link>
        </li>
        <li className="nav__element">
          <Link to="/graph-concept">Graph Concept</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
