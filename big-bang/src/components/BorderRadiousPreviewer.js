import { withRouter } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const borderHolder = [0, 0, 0, 0];

function BorderRadiousPreviewer() {
  const control = useAnimation();
  const [border, setBorder] = useState(borderHolder);
  const [buttonMessage, setButtonMessage] = useState("");

  function copyToClipboard() {
    const copyText = document.querySelector(".border-css-values");
    navigator.clipboard.writeText(copyText.innerText);
    setButtonMessage("Value copied!");
    setTimeout(() => {
      setButtonMessage("");
    }, 1000);
  }

  return (
    <div className="border-radious-previewer-container container">
      <div className="border-radious-interface">
        <form className="top-box-values">
          <input
            onInput={(e) => {
              borderHolder[0] = e.target.value ? e.target.value : 0;
              setBorder([...borderHolder]);
              control.start({
                borderTopLeftRadius: e.target.value
                  ? e.target.value + "%"
                  : 0 + "%",
              });
            }}
            className="top-left"
            type="number"
            min="0"
          />
          <input
            onInput={(e) => {
              borderHolder[1] = e.target.value ? e.target.value : 0;
              setBorder([...borderHolder]);
              control.start({
                borderTopRightRadius: e.target.value
                  ? e.target.value + "%"
                  : 0 + "%",
              });
            }}
            className="top-right"
            type="number"
            min="0"
          />
        </form>
        <motion.div
          className="border-box-previewer"
          animate={control}
        ></motion.div>
        <form className="bottom-box-values">
          <input
            onInput={(e) => {
              borderHolder[3] = e.target.value ? e.target.value : 0;
              setBorder([...borderHolder]);
              control.start({
                borderBottomLeftRadius: e.target.value
                  ? e.target.value + "%"
                  : 0 + "%",
              });
            }}
            className="bottom-left"
            type="number"
            min="0"
          />
          <input
            onInput={(e) => {
              borderHolder[2] = e.target.value ? e.target.value : 0;
              setBorder([...borderHolder]);
              control.start({
                borderBottomRightRadius: e.target.value
                  ? e.target.value + "%"
                  : 0 + "%",
              });
            }}
            className="bottom-right"
            type="number"
            min="0"
          />
        </form>
      </div>
      <div className="copy-value-container">
        <button
          className="copy-border-style-btn"
          onClick={() => copyToClipboard()}
        >
          Copy border CSS style
        </button>
        <p className="copy-message">{buttonMessage}</p>
        <p className="border-css-values">
          border-radius: {border[0]}% {border[1]}% {border[2]}% {border[3]}%;
        </p>
      </div>
    </div>
  );
}

export default withRouter(BorderRadiousPreviewer);
