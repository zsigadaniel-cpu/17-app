import { motion } from "framer-motion";


function Backlight(props: { music: number }) {
  const boxShadow = {
    boxShadow: `22px 10px 75px ${props.music * 2}px rgba(0, 255, 255, 0.72)`,
  };
  return (
    <div className="backlight-container">
      <motion.div
        className="backlight"
        style={boxShadow}
        initial={{
          x: 600,
          y: 200,
        }}
      ></motion.div>
    </div>
  );
}


export default Backlight;
