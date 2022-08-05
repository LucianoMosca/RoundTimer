import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Countdown } from "../../components/countdown/countdown";
import { ThemeProvider } from "styled-components";
import { theme } from "../../infrastructure/theme";
import { useKeepAwake } from "expo-keep-awake";
import { Timer } from "../../components/timer/timer";

export const TimerScreen = ({ navigation, onTimerEnd }) => {
  useKeepAwake();


  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>TimerScreen</Text>
      </View>
      <View>
        <Timer round={0.2} rest={0.1} roundAmount={10}></Timer>

        
      </View>
    </ThemeProvider>
  );
};
