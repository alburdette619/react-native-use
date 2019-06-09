# useDimensions

React Native API 🎣 that adds event listener(s) for the `Dimsnsions` `change ` event.  Also, this will return the initial Dimensions when called.

### Types

##### DimensionsTypes

React Native has two dimensions, `screen` and `window`.  On iOS these are the same, but on Android the values returned are different.  From [the docs](https://facebook.github.io/react-native/docs/0.59/dimensions#get):

> For Android the `window` dimension will exclude the size used by the `status bar` (if not translucent) and `bottom navigation bar`

Any number of types can be requested, but defaults are set per Platform.

| Type   | **Defaults** |
| :----- | :----------- |
| SCREEN | Android      |
| WINDOW | Android, iOS |

### Usage

```javascript
import {useDimensions, types} from 'react-native-use'

const {DimensionsTypes} = types;
const {window: {height, width}} = useDimensions(DimensionsTypes.WINDOW);
```

