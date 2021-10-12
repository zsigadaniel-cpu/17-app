import { motion } from "framer-motion";

function Box4() {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          scale: [1, 1.5, 1.5, 1, 1],
          rotate: [0, 0, 270, 270, 0],
        }}
        transition={{
          duration: 2,
        }}
      ></motion.div>
    </div>
  );
}

export default Box4;
