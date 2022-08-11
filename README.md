<img alt="React Native Animated" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-animated-component)

[![Animate any components with React Native Animated Component](https://img.shields.io/badge/-Animate%20any%20components%20with%20React%20Native%20Animated%20Component-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-animated-component)

[![npm version](https://img.shields.io/npm/v/react-native-animated-component.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-animated-component)
[![npm](https://img.shields.io/npm/dt/react-native-animated-component.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-animated-component)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<table>
 <tr>
    <td align="center"> 
       <img alt="React Native Animated"
        src="assets/Screenshots/react-native-animated.gif" />
    </td>
    <td align="center"> 
    <img alt="React Native Animated"
        src="assets/Screenshots/react-native-animated-component.gif" />
    </td>
   </tr>
</table>

# Installation

Add the dependency:

```bash
npm i react-native-animated-component
```

## Peer Dependencies

<i>Zero Dependencies</i>

# Usage

## Import

```jsx
import RNAnimated from "react-native-animated-component";
```

## Fundamental Usage

```jsx
<RNAnimated
  appearFrom="left"
  animationDuration={1300}
  style={{ alignItems: "center" }}
>
  {staticData.map(() => renderItem())}
</RNAnimated>
```

## Example Project 😍

You can checkout the example project 🥰

Simply run

- `npm i`
- `react-native run-ios/android`

should work of the example project.

# Configuration - Props

## Fundamentals

| Property          |    Type    | Default | Description                                                           |
| ----------------- | :--------: | :-----: | --------------------------------------------------------------------- |
| appearFrom        | AppearFrom | "left"  | The component will appear from that direction                         |
| animationDuration |   number   |   300   | change the animation duration                                         |
| style             | ViewStyle  | default | set or override the style object for the main container               |
| initialDelay      |   number   | default | change the initial delay of the appearing animation                   |
| delayInterval     |   number   |   200   | change the each children's delay interval in each appearing animation |

## Future Plans

- [x] ~~LICENSE~~
- [ ] More Animation Type
  - [x] ~~Opacity~~
  - [ ] Solid Movement
  - [ ] Scale
- [ ] Write an article about the lib on Medium

# Credit

Heavily inspired from [aarkalyk's awesome polls app](https://github.com/aarkalyk/react-native-polls-api-example)

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Animated is available under the MIT license. See the LICENSE file for more info.
