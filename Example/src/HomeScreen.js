import React from 'react';
import {StatusBar, Image, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import StretchableHeader, {
  animatedValueScrollY,
} from 'react-native-stretchable-header';
import {
  TitleText,
  Subtitle1,
  Subtitle2,
  Subtitle3,
  Subtitle4,
  Subtitle5,
} from './DummyText';
import TopNavigation from './TopNavigation';

const renderContentView = () => {
  return (
    <View style={{backgroundColor: 'white', paddingTop: 8, paddingBottom: 16}}>
      <TitleText />
      <Subtitle1 />
      <Subtitle2 />
      <Subtitle3 />
      <Subtitle4 />
      <Subtitle5 />
    </View>
  );
};

const HomeScreen = () => {
  return (
    <>
      <TopNavigation title="Home" scrollA={animatedValueScrollY} />
      <StretchableHeader
        headerImageHeight={350}
        headerImageSource={require('./image.jpg')}
        contentView={renderContentView()}
      />
    </>
  );
};

export default HomeScreen;
