# useAccessibilityInfo

React Native API 🎣 that adds an event listener for the `AccessibilityInfo` `change` event, and adds one for the `announcementFinished` on iOS.  Also, this will return the initial state from `AccessibilityInfo.fetch()` as well as the other methods for use with the API.

## Usage

```javascript
import {useAccessibilityInfo} from 'react-native-use'

const [
  {readerEnabled, announcement, success},
  setAccessibilityFocus,
  announceForAccessibility
] = useAccessibilityInfo();
```
