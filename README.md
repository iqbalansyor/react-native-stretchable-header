[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

# React Native Stretchable Header

A React Native scrollable stretchable header component. **Works on iOS & Android.**

## Preview
[![rn-stretchable-header-2.gif](https://s7.gifyu.com/images/rn-stretchable-header-2.gif)](https://gifyu.com/image/c2dr)

## Installation
`npm install react-native-stretchable-header --save`

## Usage
Import **StretchableHeader** component:

```
import StretchableHeader from 'react-native-stretchable-header';
```

```
<StretchableHeader
  headerImageHeight={350}
  headerImageSource={require('./image.jpg')}
  contentView={renderContentView()}
/>
```

## Configuration

| prop | type/valid values | default | description |
| - | - | - | - |
| headerImageHeight | number | 100 | Height of header image |
| headerImageSource | ImageSourcePropType | null | Stretchable header image [RN image source](https://facebook.github.io/react-native/docs/images.html) |
| contentView | ReactElement | 100 | Height of header image |


## Scrolling Animation

You can use **animatedValueScrollY** for using the scrolling animation value of content offset Y.

```
import StretchableHeader, {animatedValueScrollY} from 'react-native-stretchable-header';
```

### With Navigation Bar

For instance, if you want to create navigation bar like preview below:

[![rn-stretchable-header.gif](https://s7.gifyu.com/images/rn-stretchable-header.gif)](https://gifyu.com/image/c2dn)

You can copy and use  **TopNavigation** from [Example](https://github.com/iqbalansyor/react-native-stretchable-header/tree/master/Example/src). Customize base on your needs.

## Demo Application
This repository contains a demo React Native application with a customizable example of the `StretchableHeader` component in use.

To use the demo application:

1) Clone this repository: `https://github.com/iqbalansyor/react-native-stretchable-header.git`
2) Navigate to the demo application: `cd path/to/this/repository/react-native-stretchable-header/Example`
3) Install demo application dependencies: `npm install`
4) For ios, run `cd ios && pod install && cd ..`
5) Run `npm run start` || `react-native run-android` || `react-native run-ios`

## Contact me
* **Iqbal Ansyori** - [ansyori.iqbal@gmail.com](mailto:ansyori.iqbal@gmail.com)

## Contributing
Feel free to try it out. Please submit a pull request with any features/fixes for the project.

## License
This project is licensed under the MIT License - see the [MIT Open Source Initiative](https://opensource.org/licenses/MIT) for details.
