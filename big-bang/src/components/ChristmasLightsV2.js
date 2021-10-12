import { motion, useDragControls } from "framer-motion";
import { useState } from "react";
import { ChristmasLightV2 } from "./ChristmasLightV2";
import { ChristmasLightSettings } from "./ChristmasLightSettings";
import { useChristmasLightsV2 } from "./useChristmasLightsV2";

function ChristmasLightsV2({ li }) {
  const [showSettings, setShowSettings] = useState(false);
  const dragControls = useDragControls();
  const {
    light,
    onSetIntensity,
    onSetSpeed,
    start,
    setStart,
  } = useChristmasLightsV2(li);
  function onDragStart(e, info) {
    if (!e.target.classList.contains("light")) {
      dragControls.componentControls.forEach((entry) => {
        entry.stop(e, info);
      });
    }
  }
  return (
    <motion.div
      className="lights-container-v2"
      drag
      dragControls={dragControls}
      onDragStart={onDragStart}
      dragConstraints={{ right: 1000, left: 10 }}
    >
      <ul className="lights">
        <ChristmasLightV2
          start={start}
          setStart={setStart}
          showSettings={showSettings}
          setShowSettings={setShowSettings}
          key={light.id}
          light={light}
        />
      </ul>
      <form
        className="settings-v2"
        style={{
          width: showSettings ? "auto" : 0,
        }}
      >
        <ChristmasLightSettings
          key={light.id}
          light={light}
          onSetIntensity={onSetIntensity}
          onSetSpeed={onSetSpeed}
        />
      </form>
    </motion.div>
  );
}

export default ChristmasLightsV2;
