import React, { useEffect, useState, useContext } from "react";
import { View, Text } from "react-native";
import { Countdown } from "../../components/countdown/countdown";
import { ThemeProvider } from "styled-components";
import { theme } from "../../infrastructure/theme";
import { useKeepAwake } from "expo-keep-awake";
import { Timer } from "../../components/timer/timer";
import { Spacer } from "../../utils/spacer";
import { TimerContext } from "../../infrastructure/context/timer-context";

export const TimerScreen = ({ navigation }) => {
  useKeepAwake();
  const context = useContext(TimerContext)
  
  return (
    <ThemeProvider theme={theme}>
      
      <View>
      <Spacer position="top" size="xxl"></Spacer>
      <Spacer position="top" size="xxl"></Spacer>
        <Timer round={context.round} rest={context.rest} roundAmount={10} navigation={navigation}></Timer>
      </View>
    </ThemeProvider>
  );
};
