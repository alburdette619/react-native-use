# useGeolocation

React Native API 🎣 for the use of `navigator.geolocation`.  It will return the initial state from `getCurrentPosition`.  Watching can be setup as well.  

### Usage

##### Parameters 

Passed in as a single object with the following keys

| Parameter Key | Required             | Default Value |
| ------------- | -------------------- | ------------- |
| success       | <ul><li>[x]</li><li> | -             |
| error         | <ul><li>[x]</li><li> | -             |
| options       | <ul><li>[]</li><li>  | {}            |
| shouldWatch   | <ul><li>[]</li><li>  | False         |



```javascript
import {useGeolocation} from 'react-native-use'

const success = location => console.log(location)
const error = err => console.log(err)

useGeolocation({success, error, options: {enableHighAccuracy: true}, shouldWatch: true});
```

