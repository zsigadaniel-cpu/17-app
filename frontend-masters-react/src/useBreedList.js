import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }
    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");
      const result = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const resultData = await result.json();
      localCache[animal] = resultData.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
      console.log(localCache);
    }
  }, [animal]);

  return [breedList, status];
}
