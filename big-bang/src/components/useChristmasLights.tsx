import { useState, useEffect } from "react";

export type lightElement = {
  id: string,
  speed: number,
  delay: number | string,
  intensity: number,
  reversal: boolean,
  color: string,
  intensityLimit: number
}

export const defaultLights: lightElement[] = [
  {
    id: "red",
    speed: 1,
    delay: 0,
    intensity: 0,
    reversal: false,
    color: "rgb(219, 1, 61)",
    intensityLimit: 40,
  },
  {
    id: "blue",
    speed: 2,
    delay: 0,
    intensity: 0,
    reversal: false,
    color: "rgba(57, 57, 214)",
    intensityLimit: 40,
  },
  {
    id: "green",
    speed: 3,
    delay: 0,
    intensity: 0,
    reversal: false,
    color: "rgba(70, 214, 70)",
    intensityLimit: 40,
  },
  {
    id: "purple",
    speed: 4,
    delay: 0,
    intensity: 0,
    reversal: false,
    color: "rgba(128, 0, 128)",
    intensityLimit: 40,
  },
  {
    id: "yellow",
    speed: 5,
    delay: 0,
    intensity: 0,
    reversal: false,
    color: "rgba(255, 255, 0)",
    intensityLimit: 40,
  },
  {
    id: "cyan",
    speed: 6,
    delay: 0,
    intensity: 0,
    reversal: false,
    color: "rgba(0, 255, 255)",
    intensityLimit: 40,
  },
  {
    id: "coral",
    speed: 7,
    delay: 0,
    intensity: 0,
    reversal: false,
    color: "rgba(255, 127, 80)",
    intensityLimit: 40,
  },
];

const fixLightIntensity = (light: lightElement) => ({
  ...light,
  reversal:
    light.intensity >= light.intensityLimit
      ? true
      : light.intensity <= 0
        ? false
        : light.reversal,
});

const reverseLight = (light: lightElement) => ({
  ...light,
  intensity: light.reversal
    ? (light.intensity -= light.speed)
    : (light.intensity += light.speed),
});

export const useChristmasLights = (initialLights: lightElement[]) => {
  const [start, setStart] = useState(false);
  const [lights, setLights] = useState(initialLights);
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const lightsAnimation = requestAnimationFrame(() => {
      if (start) {
        setTimer((timer) => timer + 1);
        setLights((currentLights) =>
          currentLights.map(fixLightIntensity).map(reverseLight)
        );
      }
    });

    if (!start) {
      setLights((currentLights) =>
        currentLights.map((light) => ({
          ...light,
          intensity: light.delay ? parseInt(light.delay as string) : 0,
        }))
      );
      cancelAnimationFrame(lightsAnimation);
    }
    return () => {
      cancelAnimationFrame(lightsAnimation);
    };
  }, [start, timer]);


  const onSetIntensity = (lightId: string, event: React.SyntheticEvent) => {
    const { value } = event.target as typeof event.target & {
      value: string
    }
    setLights((currentLights) =>
      currentLights.map((light) => ({
        ...light,
        intensityLimit: lightId === light.id ? parseInt(value) : light.intensityLimit,
      }))
    );
  };

  const onSetSpeed = (lightId: string, event: React.SyntheticEvent) => {
    const { value } = event.target as typeof event.target & {
      value: string
    }
    return setLights((currentLights) =>
      currentLights.map((light) => ({
        ...light,
        speed: lightId === light.id ? parseInt(value) : light.speed,
      }))
    );
  };

  const onSetColor = (lightId: string, event: React.SyntheticEvent) => {
    const { value } = event.target as typeof event.target & {
      value: string
    }
    setLights((currentLights) =>
      currentLights.map((light, index) => ({
        ...light,
        color:
          lightId === light.id
            ? value
              ? value
              : defaultLights[index].color
            : light.color,
      }))
    );
  };

  const onSetDelay = (lightId: string, event: React.SyntheticEvent) => {
    const { value } = event.target as typeof event.target & {
      value: string
    }
    setLights((currentLights) =>
      currentLights.map((light, index) => ({
        ...light,
        delay:
          lightId === light.id
            ? value
              ? value
              : defaultLights[index].delay
            : light.delay,
      }))
    );
  };

  return {
    onSetIntensity,
    onSetSpeed,
    onSetColor,
    onSetDelay,
    lights,
    setStart,
    start,
  };
};
