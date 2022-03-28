import { withRouter } from "react-router-dom";
import Box1 from "../animated-components/Box1";
import Box2 from "../animated-components/Box2";
import Box3 from "../animated-components/Box3";
import Box4 from "../animated-components/Box4";
import Box5 from "../animated-components/Box5";

function AnimationZone() {
  return (
    <div className="animations-container">
      <h1>WELCOME TO THE ANIMATION ZONE</h1>
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
      <Box5 />
    </div>
  );
}

export default withRouter(AnimationZone);
