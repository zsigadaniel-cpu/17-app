import { withRouter } from "react-router-dom";
import { useState, useEffect } from "react";

let binaryArray: number[] = [];
let counter = 0;
const testForBinaryRegex = /\b[01]+\b/;

function BinaryConvertor() {
  const [binaryTextOutput, setBinaryTextOutput] = useState<string | number[] | number>();
  const [binaryInput, setBinaryInput] = useState<string>();
  const [binaryConvertor, setBinaryConvertor] = useState("Binary to decimal");
  const [switchCheck, setSwitchCheck] = useState(true);

  useEffect(() => {
    if (!binaryInput) {
      return;
    } else if (binaryInput.length > 8) {
      setBinaryTextOutput("Accepting only up to 8 digits binary numbers");
      return;
    } else if (!switchCheck) {
      binaryArray = [];
      const binaryOutput = overloader(parseInt(binaryInput));
      setBinaryTextOutput(binaryOutput.reverse());
      return;
    }

    if (testForBinaryRegex.test(binaryInput as string)) {
      overloader(binaryInput as string);
    } else {
      setBinaryTextOutput("Please enter a binary number");
    }

    function overloader(valueNumber: number): number[];
    function overloader(valueString: string): void;
    function overloader(value: unknown): number[] | void {
      if (typeof value === 'string') {
        let found = overloader(counter).reverse().join("");
        if (value !== found) {
          counter++;
          binaryArray = [];
          overloader(value);
        } else {
          setBinaryTextOutput(counter);
          counter = 0;
        }
      } else if (typeof value === "number") {
        if (value === 0) {
          return [0];
        } else if (value % 2 === 1) {
          binaryArray.push(1);
        } else {
          binaryArray.push(0);
        }
        let devider = Math.floor(value / 2);
        overloader(devider);
        return binaryArray;
      }
    }
  }, [binaryInput]);

  function conversionInitiator(e: React.SyntheticEvent) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      "convert-value": { value: string }
    }
    if (!target["convert-value"].value) {
      setBinaryTextOutput("Please enter a number...");
      return;
    }
    setBinaryInput(target["convert-value"].value);
  }

  function switcher(e: React.SyntheticEvent) {
    e.preventDefault();
    if (switchCheck) {
      setBinaryConvertor("Decimal to binary");
      setSwitchCheck(false);
    } else {
      setBinaryConvertor("Binary to decimal");
      setSwitchCheck(true);
    }
  }

  return (
    <div className="binary-calculator-container container">
      <h1 className="binary-calculator">{binaryConvertor}</h1>
      <form className="binary-calculator__form" onSubmit={conversionInitiator}>
        <input name="convert-value" className="form__input" type="number" />
        <div className="form__buttons">
          <button type="submit" className="form__submit">
            Convert!
          </button>
          <button className="switch form__submit" onClick={switcher}>
            Switch!
          </button>
        </div>
      </form>
      <h2 className="binary-calculator__output">
        Output: {binaryTextOutput}
      </h2>
    </div>
  );
}

export default withRouter(BinaryConvertor);
