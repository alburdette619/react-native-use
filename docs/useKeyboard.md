# useKeyboard

React Native API 🎣 that adds event listener(s) for `Keyboard` events.

## Types

### KeyboardEventTypes

React Native has six different event tyeps for the Keyboard API.

Any number of types can be requested, by default, none are subscribed to.  The following types can be used:

- KEYBOARD_WILL_SHOW
- KEYBOARD_DID_SHOW
- KEYBOARD_WILL_HIDE
- KEYBOARD_DID_HIDE
- KEYBOARD_WILL_CHANGE_FRAME
- KEYBOARD_DID_CHANGE_FRAME

## Usage

### Parameters

Pass in a single object who's keys are `KeyboardEventTypes` and values are handlers for the specific keyboard events requested.

```javascript
import {useKeyboard, types} from 'react-native-use'

const {KeyboardEventTypes} = types;

const handleKeyboardWillShow = () => console.log('Keyboard Will Show!')

const keyboardState = useKeyboard({
  KeyboardEventTypes.KEYBOARD_WILL_SHOW: handleKeyboardWillShow
});
```

