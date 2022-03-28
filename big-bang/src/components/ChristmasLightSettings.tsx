import { lightElement } from './useChristmasLights'

type func = (text: string, e: React.SyntheticEvent) => void

export const ChristmasLightSettings = ({ light, onSetIntensity, onSetSpeed, onSetColor, onSetDelay }: {
  light: lightElement,
  onSetIntensity: func,
  onSetSpeed: func,
  onSetColor: func,
  onSetDelay: func,
}) => {
  return (
    <div className={light.id}>
      <input
        type="range"
        min="0"
        max="100"
        className="spread-slider"
        onChange={(event) => onSetIntensity(light.id, event)}
      />
      <input
        type="range"
        min="0"
        max="10"
        className="speed-slider"
        onChange={(event) => onSetSpeed(light.id, event)}
      />
      <input
        type="text"
        className="color-input"
        onChange={(event) => onSetColor(light.id, event)}
      />
      <input
        type="number"
        className="delay-input"
        onChange={(event) => onSetDelay(light.id, event)}
      />
    </div>
  );
};
