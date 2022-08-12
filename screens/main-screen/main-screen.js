import React, { useEffect, useState, useContext } from "react";

import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Pressable,
} from "react-native";

import { theme } from "../../infrastructure/theme";
import { TimerCard } from "../../components/timer-card/timer-card";
import { Spacer } from "../../utils/spacer";
import { ThemeProvider } from "styled-components";
import { CardContainer, TitleText, TitleContainer } from "./main-screen-styles";
import { TimerContext } from "../../infrastructure/context/timer-context";

export const MainScreen = ({ navigation }) => {
  const context = useContext(TimerContext);

  const boxingPressHandler = () => {
    context.round = 3;
    context.rest = 1;
    navigation.navigate("Timer");
  };

  const bjjPressHandler = () => {
    context.round = 5;
    context.rest = 1;
    navigation.navigate("Timer");
  };

  const mmaPressHandler = () => {
    context.round = 5;
    context.rest = 1;
    navigation.navigate("Timer");
  };
  return (
    <ThemeProvider theme={theme}>
      <Spacer position="top" size="xxl"></Spacer>
     <TitleContainer><TitleText>CHOOSE A TIMER!</TitleText></TitleContainer>

      <CardContainer>
        <Spacer position="top" size="large">
          <Pressable onPress={boxingPressHandler}>
            <TimerCard
              elevation={4}
              cardNameLabel={"BOXING"}
              cardTimeLabel={"5x1"}
              navigation={navigation}
            />
          </Pressable>
        </Spacer>
        <Spacer position="top" size="large">
          <Pressable onPress={bjjPressHandler}>
            <TimerCard
              elevation={4}
              cardNameLabel={"BJJ"}
              cardTimeLabel={"5x1"}
            />
          </Pressable>
        </Spacer>
        <Spacer position="top" size="large">
          <Pressable onPress={mmaPressHandler}>
            <TimerCard
              elevation={4}
              cardNameLabel={"MMA"}
              cardTimeLabel={"5x1"}
            />
          </Pressable>
        </Spacer>

        <Spacer position="top" size="large">
          <Pressable onPress={boxingPressHandler}>
            <TimerCard
              elevation={4}
              cardNameLabel={"BJJ"}
              cardTimeLabel={"5x1"}
            />
          </Pressable>
        </Spacer>
      </CardContainer>
    </ThemeProvider>
  );
};
