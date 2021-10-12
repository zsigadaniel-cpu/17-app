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
        <li className="nav__element">
          <Link to="/animation-zone">Animation Zone</Link>
        </li>
        <li className="nav__element">
          <Link to="/music-zone">Music Zone</Link>
        </li>
        <li className="nav__element">
          <Link to="/border-radious-previewer">Border Radious Previewer</Link>
        </li>
        <li className="nav__element">
          <Link to="/christmas-lights">Christmas Lights</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
