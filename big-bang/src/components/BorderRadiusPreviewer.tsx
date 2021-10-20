import { withRouter } from "react-router-dom";
import { motion } from "framer-motion";
import { useBorderRadiusLogic, borderPositions } from './useBorderRadiusLogic'

function BorderRadiusPreviewer() {
  const { borderRadiusInputHandler, copyToClipboard, borderRadius, buttonMessage, control } = useBorderRadiusLogic()

  return (
    <div className="border-radious-previewer-container container">
      <div className="border-radious-interface">
        <form className="top-box-values">
          {borderPositions[0].map((border) => (
            <input
              key={border.borderRadiusPosition}
              onInput={(e: React.SyntheticEvent) =>
                borderRadiusInputHandler(e.target as HTMLInputElement, border.position, border.borderRadiusPosition)
              }
              className="top-left"
              type="number"
              min="0"
            />
          ))}
        </form>
        <motion.div
          className="border-box-previewer"
          animate={control}
        ></motion.div>
        <form className="bottom-box-values">
          {borderPositions[1].map((border) => (
            <input
              key={border.borderRadiusPosition}
              onInput={(e: React.SyntheticEvent) =>
                borderRadiusInputHandler(e.target as HTMLInputElement, border.position, border.borderRadiusPosition)
              }
              className="top-left"
              type="number"
              min="0"
            />
          ))}
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
          border-radius: {borderRadius[0]}% {borderRadius[1]}% {borderRadius[2]}% {borderRadius[3]}%;
        </p>
      </div>
    </div>
  );
}

export default withRouter(BorderRadiusPreviewer);
