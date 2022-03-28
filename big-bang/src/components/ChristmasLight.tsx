import { lightElement } from './useChristmasLights'

function getLightStyles(light: lightElement) {
  const boxShadow = {
    boxShadow: `0px 3px 50px ${light.intensity}px ${light.color}`,
    background: light.color,
  };
  return boxShadow;
}
export const ChristmasLight = ({ light }: { light: lightElement }) => (
  <li className={`light ${light.id}`} style={getLightStyles(light)}></li>
);
