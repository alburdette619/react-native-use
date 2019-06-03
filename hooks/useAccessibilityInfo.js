import { useState, useEffect } from "react";
import { AccessibilityInfo, Platform } from "react-native";

const useAccessibilityInfo = () => {
  const [state, setState] = useState();
  const { setAccessibilityFocus, announceForAccessibility } = AccessibilityInfo;

  const handleStateChange = newState => setState({ ...state, ...newState });
  const getInitialState = async () =>
    handleStateChange({ readerEnabled: await AccessibilityInfo.fetch() });

  useEffect(() => {
    getInitialState();
  }, []);

  useEffect(() => {
    AccessibilityInfo.addEventListener("change", enabled =>
      handleStateChange({ readerEnabled: enabled })
    );

    if (Platform.OS === "ios") {
      AccessibilityInfo.addEventListener(
        "announcementFinished",
        handleStateChange
      );
    }

    return () => {
      AccessibilityInfo.removeEventListener("change", handleStateChange);

      if (Platform.OS === "ios") {
        AccessibilityInfo.removeEventListener(
          "announcementFinished",
          handleStateChange
        );
      }
    };
  });

  return [state, setAccessibilityFocus, announceForAccessibility];
};

export default useAccessibilityInfo;
