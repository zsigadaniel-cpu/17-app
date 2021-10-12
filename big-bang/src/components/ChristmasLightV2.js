function getLightStyles(light) {
  const boxShadow = {
    boxShadow: `0px 3px 25px ${light.intensity}px ${light.color}`,
  };
  return boxShadow;
}
export const ChristmasLightV2 = ({
  light,
  start,
  setStart,
  showSettings,
  setShowSettings,
}) => (
  <li
    className={`light ${light.id}`}
    onClick={() => {
      setStart(!start);
    }}
    onDoubleClick={() => {
      setShowSettings(!showSettings);
    }}
    style={getLightStyles(light)}
  ></li>
);
