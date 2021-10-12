function getLightStyles(light) {
  const boxShadow = {
    boxShadow: `0px 3px 50px ${light.intensity}px ${light.color}`,
    background: light.color,
  };
  return boxShadow;
}
export const ChristmasLight = ({ light }) => (
  <li className={`light ${light.id}`} style={getLightStyles(light)}></li>
);
