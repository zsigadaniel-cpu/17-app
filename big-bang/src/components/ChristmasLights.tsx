import { withRouter } from "react-router-dom";
import { ChristmasLight } from "./ChristmasLight";
import { ChristmasLightSettings } from "./ChristmasLightSettings";
import ChristmasLightsV2 from "./ChristmasLightsV2";
import { defaultLights, useChristmasLights } from "./useChristmasLights";

function ChristmasLights() {
  const {
    lights,
    setStart,
    start,
    onSetIntensity,
    onSetSpeed,
    onSetColor,
    onSetDelay,
  } = useChristmasLights(defaultLights);

  return (
    <div className="lights-container container">
      <ul className="lights">
        {lights.map((light) => (
          <ChristmasLight key={light.id} light={light} />
        ))}
      </ul>
      <form className="settings">
        {lights.map((light) => (
          <ChristmasLightSettings
            key={light.id}
            light={light}
            onSetIntensity={onSetIntensity}
            onSetSpeed={onSetSpeed}
            onSetColor={onSetColor}
            onSetDelay={onSetDelay}
          />
        ))}
        <button
          className="toggle"
          onClick={(e) => {
            e.preventDefault();
            setStart(!start);
          }}
        >
          ON/OFF
        </button>
      </form>
      {/* {defaultLights.map((light) => (
        <ChristmasLightsV2 key={light.id} li={light} />
      ))} */}
    </div>
  );
}

export default withRouter(ChristmasLights);
