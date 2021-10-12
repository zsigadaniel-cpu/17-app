import { motion } from "framer-motion";

function Box3() {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVariant}
        animate="visible"
        initial="hidden"
      >
        {[1, 2, 3].map((box, index) => {
          return (
            <motion.li
              key={index}
              className="boxItem"
              variants={listVariant}
            ></motion.li>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Box3;
