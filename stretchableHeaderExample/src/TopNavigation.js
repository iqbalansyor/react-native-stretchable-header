import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
const BANNERHEIGHT = 350;
const HEIGHT = 44;

const TopNavigation = (props) => {
  const safeArea = useSafeArea();
  console.log(props);
  const {title, scrollA} = props;
  const isFloating = !!scrollA;
  const [isTransparent, setTransparent] = useState(isFloating);

  console.log('[safe area]', safeArea);

  useEffect(() => {
    if (!scrollA) {
      return;
    }

    const listenerId = scrollA.addListener((a) => {
      console.log('scrollA', a);
      const topNaviOffset = BANNERHEIGHT - HEIGHT - safeArea.top;
      isTransparent !== a.value < topNaviOffset &&
        setTransparent(!isTransparent);
    });

    return () => scrollA.removeListener(listenerId);
  });

  return (
    <>
      {/* <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
        // hidden={true}
      /> */}
      <View style={styles.container(safeArea, isFloating, isTransparent)}>
        <Text style={styles.title(isTransparent)}>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: (safeArea, isFloating, isTransparent) => ({
    paddingTop: safeArea.top,
    marginBottom: isFloating ? -HEIGHT - safeArea.top : 0,
    height: HEIGHT + safeArea.top,
    justifyContent: 'center',
    shadowOffset: {y: 0},
    backgroundColor: isTransparent ? '#0001' : '#FFF',
    shadowOpacity: isTransparent ? 0 : 0.5,
    elevation: isTransparent ? 0.01 : 5,
    zIndex: 100,
  }),
  title: (isTransparent) => ({
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: isTransparent ? '#FFF' : '#000000',
  }),
});

export default TopNavigation;
