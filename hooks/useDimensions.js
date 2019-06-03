import { useEffect, useState } from "react";
import { Dimensions, Platform } from "react-native";

export const DimensionsTypes = {
  SCREEN: "screen",
  WINDOW: "window"
};

const defaultTypes = Platform.select({
  ios: [DimensionsTypes.WINDOW],
  android: Object.values(DimensionsTypes)
});

const useDimensions = (types = defaultTypes) => {
  const typesArray = Array.isArray(types) ? types : [types];

  const getDimensions = () =>
    typesArray.reduce((acc, type) => {
      return { ...acc, [type]: Dimensions.get(type) };
    }, {});

  const initialState = getDimensions();
  const [state, setState] = useState(initialState);
  const handleStateChange = () => setState(getDimensions());

  useEffect(() => {
    Dimensions.addEventListener("change", handleStateChange);

    return () => Dimensions.removeEventListener("change", handleStateChange);
  });

  return state;
};

export default useDimensions;
