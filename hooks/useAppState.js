import { useEffect, useState } from "react";
import { AppState } from "react-native";

const useAppState = () => {
  const [state, setState] = useState(AppState.currentState);
  const handleStateChange = state => setState(state);

  useEffect(() => {
    AppState.addEventListener("change", handleStateChange);

    return () => AppState.removeEventListener("change", handleStateChange);
  });

  return state;
};

export default useAppState;
