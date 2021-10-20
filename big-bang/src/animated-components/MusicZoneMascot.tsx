import { musicColors } from "../resources/musicColors"
import { useMusicInitializer } from '../components/useMusicInitializer'
import quemist from "../resources/quemist.mp3";
import bangarang from "../resources/bangarang.mp3";
import Backlight from "./Backlight";

function MusicZoneMascot() {
  const { musicArray, initiator } = useMusicInitializer(bangarang);

  function getLightStyles(intensity: number, color: string) {
    const styles = {
      transformOrigin: "0 100%",
      transform: `scaleY(${(intensity / 1000) * 18})`,
      backgroundColor: color,
      boxShadow: `0px 3px 25px ${intensity - 250 > 0 ? intensity - 250 : 2
        }px ${color}`,
    };
    return styles;
  }

  function mascotStyles(intensity: number) {
    const styles = {
      transform: `scale(${(intensity / 1000) * 4})`,
    };
    return styles;
  }

  return (
    <div className="mascot-container">
      {musicArray.map((musicElement, index) => (
        <div
          key={index}
          className="mascot"
          style={getLightStyles(musicElement as number, musicColors[index])}
        ></div>
      ))}
      {/* <Backlight music={musicArray[10] as number} /> */}
      <div className="figure" style={mascotStyles(musicArray[5] as number)}></div>
      <button
        onClick={() => {
          initiator();
        }}
        className="play"
      >
        DJ SPIN THAT SHIT
      </button>
    </div>
  );
}

export default MusicZoneMascot;
