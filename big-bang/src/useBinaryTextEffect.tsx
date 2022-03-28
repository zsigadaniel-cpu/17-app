import { useState, useEffect } from "react";

export default function useBinaryTextEffect(binaryProps: [boolean, string]) {
  const [converter, setConverter] = useState(false);
  const condition = binaryProps[0];
  const navigationText = binaryProps[1];

  const [
    navigationElementBinaryText,
    setNavigationElementBinaryText,
  ] = useState<(string | number)[]>(navigationText.split(""));

  useEffect(() => {
    if (condition) {
      toBinaryEffect();
    } else {
      toTextEffect();
    }

    function toBinaryEffect() {
      setConverter(true);
      let counter = -1;
      const binaryText = [...navigationElementBinaryText];
      function changeText() {
        counter++;
        if (counter < binaryText.length - 1 && !converter) {
          requestAnimationFrame(changeText);
        }
        binaryText[counter] = Math.floor(Math.random() * 2);
        setNavigationElementBinaryText([...binaryText]);
      }
      changeText();
    }

    function toTextEffect() {
      setConverter(false);
      let counter = -1;
      const binaryTextCopy = [...navigationElementBinaryText];
      const binaryText = navigationText.split("");
      function changeText() {
        counter++;
        if (counter < binaryTextCopy.length - 1 && converter) {
          requestAnimationFrame(changeText);
        }
        binaryTextCopy[counter] = binaryText[counter];
        setNavigationElementBinaryText([...binaryTextCopy]);
      }
      changeText();
    }
  }, [condition]);

  return [navigationElementBinaryText];
}
