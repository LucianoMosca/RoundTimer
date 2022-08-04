import React, { useState } from "react";
import { View, Text } from "react-native";
import { Countdown } from "../../components/countdown/countdown";
import { ThemeProvider } from "styled-components";
import { theme } from "../../infrastructure/theme";
import { useKeepAwake } from "expo-keep-awake";
import { TimerButton, ButtonText } from "./timer-screen-styles";
import { Spacer } from "../../utils/spacer";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  0 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];


export const TimerScreen = ({ navigation, onTimerEnd }) => {
  useKeepAwake();

  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.2);

  const onEnd = () => {
   // Vibration.vibrate(PATTERN);
    setIsStarted(false);
    //setProgress(1);
    setMinutes(0.1);
    //onTimerEnd(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>TimerScreen</Text>
      </View>
      <View>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
         onEnd={onEnd}
        ></Countdown>
        <Spacer position="top" size="xl">
          
          <TimerButton onPress={() => {!isStarted? setIsStarted(true) : setIsStarted(false)}}>
          {!isStarted ?  <ButtonText >START</ButtonText> :  <ButtonText >PAUSE</ButtonText>}
           
          </TimerButton>
        </Spacer>
        <Spacer position="top" size="xl">
          <TimerButton onPress={() => onEnd()}>     
            <ButtonText >STOP</ButtonText>
          </TimerButton>
        </Spacer>
      </View>
    </ThemeProvider>
  );
};
