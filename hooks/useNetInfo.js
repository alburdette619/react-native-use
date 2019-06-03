import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";

const useNetInfo = () => {
  const [state, setState] = useState();
  const handleStateChange = state => setState(state);
  const getInitialState = async () => handleStateChange(await NetInfo.fetch());

  useEffect(() => {
    getInitialState();
  }, []);

  useEffect(() => {
    const unSub = NetInfo.addEventListener(handleStateChange);

    return () => unSub;
  });

  return state;
};

export default useNetInfo;
