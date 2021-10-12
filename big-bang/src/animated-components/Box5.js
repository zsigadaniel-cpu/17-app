import { motion, useAnimation } from "framer-motion";

function Box5() {
  const control = useAnimation();

  return (
    <div className="box-container">
      <div className="buttons">
        <button
          onClick={() => {
            control.start({
              x: 1000,
              transition: { duration: 1 },
            });
          }}
        >
          Move Right
        </button>
        <button
          onClick={() => {
            control.start({
              x: 0,
              transition: { duration: 1 },
            });
          }}
        >
          Move Left
        </button>
        <button
          onClick={() => {
            control.start({
              borderRadius: "50%",
              transition: { duration: 1 },
            });
          }}
        >
          Circle
        </button>
        <button
          onClick={() => {
            control.start({
              borderRadius: 0,
              transition: { duration: 1 },
            });
          }}
        >
          Square
        </button>
        <button
          onClick={() => {
            control.stop();
          }}
        >
          Stop
        </button>
      </div>
      <motion.div className="box" animate={control}></motion.div>
    </div>
  );
}

export default Box5;
