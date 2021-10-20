import { withRouter } from "react-router-dom";
import MusicZoneMascot from "../animated-components/MusicZoneMascot";
import crowd from "../resources/crowd.png";

function MusicZone() {
  return (
    <div className="cant-contain-music">
      <h1>WELCOME TO THE MUSIC ZONE</h1>
      {/* <img className="crowd" src={crowd} alt="" /> */}
      <MusicZoneMascot />
    </div>
  );
}

export default withRouter(MusicZone);
