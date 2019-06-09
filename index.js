import useAccessibilityInfo from "./hooks/useAccessibilityInfo";
import useAppState from "./hooks/useAppState";
import useBackHandler from "./hooks/useBackHandler";
import useDimensions, { DimensionsTypes } from "./hooks/useDimensions";
import useGeolocation from "./hooks/useGeolocation";
import useKeyboard, { KeyboardEventTypes } from "./hooks/useKeyboard";
import useNetInfo from "./hooks/useNetInfo";

const types = {
  DimensionsTypes,
  KeyboardEventTypes
};

export {
  useAccessibilityInfo,
  useAppState,
  useBackHandler,
  useDimensions,
  useGeolocation,
  useKeyboard,
  useNetInfo,
  types
};
