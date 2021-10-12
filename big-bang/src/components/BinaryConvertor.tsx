import { withRouter } from "react-router-dom";
import { useState, useEffect } from "react";

let binaryArray: number[] = [];
let counter = 0;
const testForBinaryRegex = /\b[01]+\b/;

function BinaryConvertor() {
  const [binaryTextOutput, setBinaryTextOutput] = useState<string | number[] | number>();
  const [binaryInput, setBinaryInput] = useState<string | number>();
  const [binaryConvertor, setBinaryConvertor] = useState("Binary to decimal");
  const [switchCheck, setSwitchCheck] = useState(true);

  useEffect(() => { }, [binaryTextOutput]);
  useEffect(() => {
    if (!binaryInput) {
      return;
    } else if (binaryInput.toString.length > 8) {
      setBinaryTextOutput("Accepting only up to 8 digits binary numbers");
      return;
    } else if (!switchCheck) {
      binaryArray = [];
      const binaryOutput = guessBinary(binaryInput as number);
      setBinaryTextOutput(binaryOutput.reverse());
      return;
    }

    if (testForBinaryRegex.test(binaryInput as string)) {
      outputBinary(binaryInput as string);
    } else {
      setBinaryTextOutput("Please enter a binary number");
    }

    function outputBinary(value: string) {
      let found = guessBinary(counter).reverse().join("");
      if (value !== found) {
        counter++;
        binaryArray = [];
        outputBinary(value);
      } else {
        setBinaryTextOutput(counter);
        counter = 0;
      }
    }

    function guessBinary(value: number) {
      if (value === 0) {
        return [];
      } else if (value as number % 2 === 1) {
        binaryArray.push(1);
      } else {
        binaryArray.push(0);
      }
      let devider = Math.floor(value as number / 2);
      guessBinary(devider);
      return binaryArray;
    }
  }, [binaryInput]);

  function eventCatcher(e: React.SyntheticEvent) {
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
      <form className="binary-calculator__form" onSubmit={eventCatcher}>
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
