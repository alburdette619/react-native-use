# useBackHandler

React Native API 🎣 that adds an event listener for the `BackHandler` `hardwareBackPress` event given a callback to use.

## Usage

```javascript
import {useBackHandler} from 'react-native-use'

const handleBackPress = () => {
  this.goBack();
  return true;
}

useBackHandler(handleBackPress);
```
