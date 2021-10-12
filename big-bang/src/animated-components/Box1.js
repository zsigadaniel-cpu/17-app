// import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

function Box1() {
  // const [animate, setAnimate] = useState(false);
  const x = useMotionValue(0);
  // const opacity = useTransform(x, [-100, 0, 100], [1, 0, 1]);
  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          x: [400, 300, 200, 100, 0],
        }}
        initial={{
          x: 100,
        }}
        // drag="x"
        // style={{ x, opacity }}
        // animate={{
        //   x: animate ? 1000 : 0,
        //   opacity: animate ? 1 : 0.2,
        //   rotate: animate ? 360 : 0,
        //   backgroundColor: animate ? "coral" : "darkblue",
        // }}
        // transition={{
        //   stiffness: 100,
        //   type: "spring",
        // }}
        // onClick={() => setAnimate(!animate)}
      >
        <h1>text</h1>
      </motion.div>
    </div>
  );
}

export default Box1;
