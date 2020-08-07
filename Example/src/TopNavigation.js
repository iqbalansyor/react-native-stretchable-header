import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
const HEADER_HEIGHT = 350;
const HEIGHT = 44;

const TopNavigation = (props) => {
  const safeArea = useSafeArea();
  console.log(props);
  const {title, scrollAnimatedValue} = props;
  const isFloating = !!scrollAnimatedValue;
  const [isTransparent, setTransparent] = useState(isFloating);

  useEffect(() => {
    if (!scrollAnimatedValue) {
      return;
    }

    const listenerId = scrollAnimatedValue.addListener((a) => {
      const topNaviOffset = HEADER_HEIGHT - HEIGHT - safeArea.top;
      isTransparent !== a.value < topNaviOffset &&
        setTransparent(!isTransparent);
    });

    return () => scrollAnimatedValue.removeListener(listenerId);
  });

  return (
    <>
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
