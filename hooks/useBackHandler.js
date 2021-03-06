import { useEffect } from "react";
import { BackHandler } from "react-native";

const useBackHandler = handleBackPress => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
  });

  return BackHandler.exitApp;
};

export default useBackHandler;
