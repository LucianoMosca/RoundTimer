import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Pressable
} from "react-native";


import { theme } from "../../infrastructure/theme";
import { TimerCard } from "../../components/timer-card/timer-card";
import { Spacer } from "../../utils/spacer";
import { ThemeProvider } from "styled-components";
import { CardContainer } from "./main-screen-styles";


export const MainScreen = ({navigation}) => {
  return (

   // <Pressable onPress={navigation.navigate("Timer")}>
    <ThemeProvider theme={theme}>
      <Spacer position="top" size="xxl"></Spacer>
      <Spacer position="top" size="xxl"></Spacer>

    <CardContainer>
      
      <Spacer position="top" size="large">
        <TimerCard elevation={4} round={3} rest={1}></TimerCard>
      </Spacer>
      <Spacer position="top" size="large">
        <TimerCard></TimerCard>
      </Spacer>
      <Spacer position="top" size="large">
        <TimerCard></TimerCard>
      </Spacer>
      <Spacer position="top" size="large">
        <TimerCard></TimerCard>
      </Spacer>
    </CardContainer>
    </ThemeProvider>
   // </Pressable>

  );
};
