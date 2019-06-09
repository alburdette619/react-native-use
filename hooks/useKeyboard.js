import { useEffect } from "react";
import { Keyboard } from "react-native";

export const KeyboardEventTypes = {
  KEYBOARD_WILL_SHOW: "keyboardWillShow",
  KEYBOARD_DID_SHOW: "keyboardDidShow",
  KEYBOARD_WILL_HIDE: "keyboardWillHide",
  KEYBOARD_DID_HIDE: "keyboardDidHide",
  KEYBOARD_WILL_CHANGE_FRAME: "keyboardWillChangeFrame",
  KEYBOARD_DID_CHANGE_FRAME: "keyboardDidChangeFrame"
};

const useKeyboard = (handlers = []) => {
  const typesArray = Array.isArray(types) ? types : [types];

  const handleStateChange = (newState, type) =>
    handlers[type] && handlers[type](newState);

  useEffect(() => {
    typesArray.forEach(type =>
      Keyboard.addListener(type, newState => handleStateChange(newState, type))
    );

    return () => typesArray.forEach(type => Keyboard.removeAllListeners(type));
  });
};

export default useKeyboard;
