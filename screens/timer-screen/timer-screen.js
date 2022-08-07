import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Countdown } from "../../components/countdown/countdown";
import { ThemeProvider } from "styled-components";
import { theme } from "../../infrastructure/theme";
import { useKeepAwake } from "expo-keep-awake";
import { Timer } from "../../components/timer/timer";
import { Spacer } from "../../utils/spacer";


export const TimerScreen = ({ navigation, round = 0.3, rest=0.1}) => {
  useKeepAwake();
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>TimerScreen</Text>
      </View>
      <View>
      <Spacer position="top" size="xxl"></Spacer>
      <Spacer position="top" size="xxl"></Spacer>
        <Timer round={round} rest={rest} roundAmount={10}></Timer>
      </View>
    </ThemeProvider>
  );
};
