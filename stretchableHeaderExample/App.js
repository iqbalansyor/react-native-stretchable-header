import React from 'react';
import {StatusBar, Image} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import HomeScreen from './src/HomeScreen';

const App = () => {
  return (
    <>
      <SafeAreaProvider>
        {/* <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}> */}
        <StatusBar
          barStyle="dark-content"
          backgroundColor="white"
          translucent
        />
        <HomeScreen />
        {/* </SafeAreaView> */}
      </SafeAreaProvider>
    </>
  );
};

export default App;
