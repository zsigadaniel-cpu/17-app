import frozen from "../resources/frozen.mp3";
import bangarang from "../resources/bangarang.mp3";
import quemist from "../resources/quemist.mp3";
import Backlight from "../animated-components/Backlight";

import { useState, useEffect } from "react";
function MusicZoneMascot() {
  const [musicArray, setMusicArray] = useState([]);
  const colorsArray = [
    "rgba(255, 127, 80)",
    "rgba(0, 255, 255)",
    "rgba(255, 255, 0)",
    "rgba(128, 0, 128)",
    "rgba(70, 214, 70)",
    "rgba(57, 57, 214)",
    "rgba(228, 35, 35)",
    "rgba(255, 127, 80)",
    "rgba(0, 255, 255)",
    "rgba(255, 255, 0)",
    "rgba(128, 0, 128)",
    "rgba(70, 214, 70)",
    "rgba(57, 57, 214)",
    "rgba(228, 35, 35)",
    "rgba(255, 127, 80)",
    "rgba(0, 255, 255)",
    "rgba(255, 255, 0)",
    "rgba(128, 0, 128)",
    "rgba(70, 214, 70)",
    "rgba(57, 57, 214)",
    "rgba(228, 35, 35)",
    "rgba(255, 127, 80)",
    "rgba(0, 255, 255)",
    "rgba(255, 255, 0)",
    "rgba(128, 0, 128)",
    "rgba(70, 214, 70)",
    "rgba(57, 57, 214)",
    "rgba(228, 35, 35)",
    "rgba(128, 0, 128)",
    "rgba(70, 214, 70)",
    "rgba(57, 57, 214)",
    "rgba(228, 35, 35)",
    "rgba(255, 127, 80)",
    "rgba(0, 255, 255)",
    "rgba(255, 255, 0)",
    "rgba(128, 0, 128)",
    "rgba(70, 214, 70)",
    "rgba(57, 57, 214)",
    "rgba(228, 35, 35)",
    "rgba(255, 127, 80)",
    "rgba(0, 255, 255)",
    "rgba(255, 255, 0)",
    "rgba(128, 0, 128)",
    "rgba(70, 214, 70)",
    "rgba(57, 57, 214)",
    "rgba(228, 35, 35)",
    "rgba(255, 127, 80)",
    "rgba(0, 255, 255)",
    "rgba(255, 255, 0)",
    "rgba(128, 0, 128)",
    "rgba(70, 214, 70)",
    "rgba(57, 57, 214)",
    "rgba(228, 35, 35)",
    "rgba(255, 127, 80)",
    "rgba(0, 255, 255)",
    "rgba(255, 255, 0)",
    "rgba(128, 0, 128)",
    "rgba(70, 214, 70)",
    "rgba(57, 57, 214)",
    "rgba(228, 35, 35)",
    "rgba(128, 0, 128)",
    "rgba(70, 214, 70)",
    "rgba(57, 57, 214)",
    "rgba(228, 35, 35)",
    "rgba(255, 127, 80)",
    "rgba(0, 255, 255)",
    "rgba(255, 255, 0)",
    "rgba(128, 0, 128)",
    "rgba(70, 214, 70)",
    "rgba(57, 57, 214)",
    "rgba(228, 35, 35)",
    "rgba(255, 127, 80)",
    "rgba(0, 255, 255)",
    "rgba(255, 255, 0)",
    "rgba(128, 0, 128)",
    "rgba(70, 214, 70)",
    "rgba(57, 57, 214)",
    "rgba(228, 35, 35)",
    "rgba(255, 127, 80)",
    "rgba(0, 255, 255)",
    "rgba(255, 255, 0)",
    "rgba(128, 0, 128)",
    "rgba(70, 214, 70)",
    "rgba(57, 57, 214)",
    "rgba(228, 35, 35)",
    "rgba(255, 127, 80)",
    "rgba(0, 255, 255)",
    "rgba(255, 255, 0)",
    "rgba(128, 0, 128)",
    "rgba(70, 214, 70)",
    "rgba(57, 57, 214)",
    "rgba(228, 35, 35)",
    "rgba(128, 0, 128)",
    "rgba(70, 214, 70)",
    "rgba(57, 57, 214)",
    "rgba(228, 35, 35)",
    "rgba(255, 127, 80)",
    "rgba(0, 255, 255)",
    "rgba(255, 255, 0)",
    "rgba(128, 0, 128)",
    "rgba(70, 214, 70)",
    "rgba(57, 57, 214)",
    "rgba(228, 35, 35)",
    "rgba(255, 127, 80)",
    "rgba(0, 255, 255)",
    "rgba(255, 255, 0)",
    "rgba(128, 0, 128)",
    "rgba(70, 214, 70)",
    "rgba(57, 57, 214)",
    "rgba(228, 35, 35)",
    "rgba(255, 127, 80)",
    "rgba(0, 255, 255)",
    "rgba(255, 255, 0)",
    "rgba(128, 0, 128)",
    "rgba(70, 214, 70)",
    "rgba(57, 57, 214)",
    "rgba(228, 35, 35)",
    "rgba(255, 127, 80)",
    "rgba(0, 255, 255)",
    "rgba(255, 255, 0)",
    "rgba(128, 0, 128)",
    "rgba(70, 214, 70)",
    "rgba(57, 57, 214)",
    "rgba(228, 35, 35)",
    "rgba(128, 0, 128)",
    "rgba(70, 214, 70)",
    "rgba(57, 57, 214)",
    "rgba(228, 35, 35)",
  ];
  function getLightStyles(intensity, color) {
    const styles = {
      transformOrigin: "0 100%",
      transform: `scaleY(${(intensity / 1000) * 18})`,
      backgroundColor: color,
      boxShadow: `0px 3px 25px ${
        intensity - 250 > 0 ? intensity - 250 : 2
      }px ${color}`,
    };
    return styles;
  }

  function mascotStyles(intensity) {
    const styles = {
      transform: `scale(${(intensity / 1000) * 4})`,
    };
    return styles;
  }
  useEffect(() => {}, [musicArray]);
  return (
    <div className="mascot-container">
      {musicArray.map((musicElement, index) => (
        <div
          id={index}
          className="mascot"
          style={getLightStyles(musicElement, colorsArray[index])}
        ></div>
      ))}
      <Backlight music={musicArray[10]} />
      <div className="figure" style={mascotStyles(musicArray[5])}></div>
      <button
        onClick={() => {
          let audio = new Audio();
          audio.src = frozen;
          const audioContext = new AudioContext();
          audio.play();
          let audioSource = audioContext.createMediaElementSource(audio);
          let analyzer = audioContext.createAnalyser();
          audioSource.connect(analyzer);
          analyzer.connect(audioContext.destination);
          analyzer.fftSize = 128;
          const bufferLength = analyzer.frequencyBinCount;
          const dataArray = new Uint8Array(bufferLength);
          function animate() {
            analyzer.getByteFrequencyData(dataArray);
            setMusicArray([...dataArray]);
            requestAnimationFrame(animate);
          }
          animate();
        }}
        className="play"
      >
        DJ SPIN THAT SHIT
      </button>
    </div>
  );
}

export default MusicZoneMascot;
