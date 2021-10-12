export const ChristmasLightSettings = ({
  light,
  onSetIntensity,
  onSetSpeed,
  onSetColor,
  onSetDelay,
}) => {
  return (
    <div className={light.id}>
      <input
        type="range"
        min="0"
        max="100"
        className="spread-slider"
        onChange={onSetIntensity(light.id)}
      />
      <input
        type="range"
        min="0"
        max="10"
        className="speed-slider"
        onChange={onSetSpeed(light.id)}
      />
      <input
        type="text"
        className="color-input"
        onChange={onSetColor(light.id)}
      />
      <input
        type="number"
        className="delay-input"
        onChange={onSetDelay(light.id)}
      />
    </div>
  );
};
