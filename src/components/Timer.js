import React, { useState } from 'react';
import { Text, View, StyleSheet, Vibration } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from './CountDown';
import { RoundedButton } from './RoundedButton';
import {Timing} from '../features/Timing'
import { spacing } from '../utils_/sizes';
import { colors } from '../utils_/colors';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

const Timer = ({ focusSubject, clearSubject, onTimerEnd}) => {
   useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);
  const onProgress = (p) => {
    setProgress(Math.max(0, Math.min(1, p))); // Ensures value is clamped
  };

const onEnd=(reset) => { 
  Vibration.vibrate(PATTERN);
  setIsStarted(false);
  setProgress(1);
  reset();
  onTimerEnd(focusSubject)
};

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
        />
      </View>
      <View style={{ paddingTop: spacing.xxl }}>
        <Text style={styles.title}> Focusing on: </Text>
        <Text style={styles.task}> {focusSubject} </Text>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.yellowOrange}
          style={{ height: spacing.sm }}
        />
      </View>
       <View style={styles.timingWrapper}> <Timing onChangeTime={setMinutes}/> </View>
      
      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.clearbuttonWrapper}> 
      <RoundedButton size={50} title="-" onPress={clearSubject}/> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
  timingWrapper: {
    flex: 0.1,
    flexDirection: 'row',
    paddingTop: spacing.xxl,
    paddingLeft: spacing.xxl,
    
  },
  clearbuttonWrapper: {
    flexDirection: 'row',
   justifyContent: 'center',
  }
});
export default Timer;
