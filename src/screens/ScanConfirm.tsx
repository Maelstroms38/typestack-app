import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  PanResponder,
  Easing,
  InputAccessoryView,
  TextInput,
  Dimensions,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

/** keep typescript happy */
const noop = () => {};
// setInterval custom hook by Dan Abramov
function useInterval(
  callback: () => void,
  delay: number | null | false,
  immediate?: boolean
) {
  const savedCallback = useRef(noop);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  });

  // Execute callback if immediate is set.
  useEffect(() => {
    if (!immediate) return;
    if (delay === null || delay === false) return;
    savedCallback.current();
  }, [immediate]);

  // Set up the interval.
  useEffect(() => {
    if (delay === null || delay === false) return undefined;
    const tick = () => savedCallback.current();
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default function ScanConfirm(props) {
  const { navigation } = props;
  const [value, onChangeText] = useState('');
  const inputAccessoryViewID = 'InputID';
  const animation = useRef(new Animated.Value(0));
  const [progress, setProgress] = useState(0);
  const [delay, setDelay] = useState(null);
  const translateY = new Animated.Value(0);
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: Animated.event([null, { dy: translateY }]),
    onPanResponderRelease: (e, { vx, dy }) => {
      Animated.spring(translateY, {
        toValue: 0,
        bounciness: 2
      }).start(() => {
        if (dy < -100) {
          setDelay(200);
        }
      });
    }
  });

  useInterval(() => {
    // update progress until 100
    if (progress < 100) {
      setProgress(progress + 20);
    } else {
      navigation.navigate('ScanConfirm');
    }
  }, delay);

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 200,
      easing: Easing.ease
    }).start();
  }, [progress]);

  const width = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp'
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{ transform: [{ translateY: translateY }] }}
        {...panResponder.panHandlers}
      >
        <View style={styles.header}>
          <Text style={{ color: '#d3d3d3' }}>Personal Task</Text>
        </View>
        <TextInput
          placeholder="Task title..."
          placeholderTextColor="rgba(1,1,1,0.25)"
          inputAccessoryViewID={inputAccessoryViewID}
          style={styles.input}
          autoCorrect={false}
          autoFocus
          autoCapitalize="none"
          multiline
          onChangeText={text => onChangeText(text)}
          value={value}
        />
        {Platform.OS == 'ios' ? (
          <InputAccessoryView nativeID={inputAccessoryViewID}>
            <View style={styles.progressBar}>
              <Animated.View
                style={[
                  StyleSheet.absoluteFill,
                  { backgroundColor: '#8BED4F', width }
                ]}
              />
            </View>
            <View style={styles.keyboardView}>
              <Ionicons
                style={styles.upIcon}
                name="md-arrow-dropup"
                size={17.5}
                color="#fff"
              />
              <Text style={{ color: '#d3d3d3' }}>Swipe up to create task</Text>
            </View>
          </InputAccessoryView>
        ) : null}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(32, 52, 120)',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  input: {
    width: width - 40,
    fontSize: 28,
    color: '#fff'
  },
  header: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  saveIcon: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: 'rgba(1,1,1,0.25)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  upIcon: {
    left: 20,
    position: 'absolute'
  },
  keyboardView: {
    height: 60,
    width,
    backgroundColor: 'rgba(1,1,1,0.25)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  progressBar: {
    flexDirection: 'row',
    height: 5,
    width: '100%',
    backgroundColor: 'transparent'
  }
});
