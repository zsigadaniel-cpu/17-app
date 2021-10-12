import { useEffect, useState } from "react";

const fixLightIntensity = (light) => ({
  ...light,
  reversal:
    parseFloat(light.intensity.toFixed(1)) >= light.intensityLimit
      ? true
      : parseFloat(light.intensity.toFixed(1)) <= 0
      ? false
      : light.reversal,
});

const reverseLight = (light) => ({
  ...light,
  intensity: light.reversal
    ? (light.intensity -= light.speed)
    : (light.intensity += light.speed),
});

export const useChristmasLightsV2 = (lightInput) => {
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);
  const [light, setLight] = useState(lightInput);

  useEffect(() => {
    const lightsAnimation = requestAnimationFrame(() => {
      if (start) {
        setTimer((timer) => timer + 1);
        setLight((light) => fixLightIntensity(light));
        setLight((light) => reverseLight(light));
      }
    });
    if (!start) {
      setLight((light) => ({ ...light, intensity: 0 }));
      cancelAnimationFrame(lightsAnimation);
    }
    return () => {
      cancelAnimationFrame(lightsAnimation);
    };
  }, [start, timer]);

  const onSetIntensity = (lightId) => (event) => {
    const { value } = event.target;
    setLight((light) => ({
      ...light,
      intensityLimit: lightId === light.id ? value : light.intensityLimit,
    }));
  };

  const onSetSpeed = (lightId) => (event) => {
    const { value } = event.target;
    setLight((light) => ({
      ...light,
      speed: lightId === light.id ? parseInt(value) : light.speed,
    }));
  };

  return {
    setLight,
    light,
    onSetIntensity,
    onSetSpeed,
    start,
    setStart,
  };
};
