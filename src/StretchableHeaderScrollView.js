import React, { useRef } from 'react';
import { View, ScrollView, Image, StyleSheet, Animated } from 'react-native';
import { DummyText } from './DummyText';
import TopNavigation from './TopNavigation';

export const animatedValueScrollY = new Animated.Value(0);

const StretchableHeaderScrollView = (props) => {
  const scrollA = animatedValueScrollY;
  console.log('[srollA]', scrollA);
  return (
    <View>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollA } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.bannerContainer}>
          <Animated.Image
            style={styles.banner(scrollA, props.imageHeight)}
            source={props.imageSource}
          />
          {props.contentView}
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
  },
  banner: (scrollA, imageHeight) => ({
    height: imageHeight,
    width: '200%',
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-imageHeight, 0, imageHeight, imageHeight + 1],
          outputRange: [
            -imageHeight / 2,
            1,
            imageHeight * 0.75,
            imageHeight * 0.75,
          ],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-imageHeight, 0, imageHeight, imageHeight + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
});

export default StretchableHeaderScrollView;
