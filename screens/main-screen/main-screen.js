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
    context.first.round = 3;
    context.first.rest = 1;
    context.name = "first";

    navigation.navigate("Timer");
  };

  const bjjPressHandler = () => {
    context.second.round = 5;
    context.second.rest = 1;
    context.name = "second";

    navigation.navigate("Timer");
  };

  const mmaPressHandler = () => {
    context.third.round = 5;
    context.third.rest = 1;
    context.name = "third";

    navigation.navigate("Timer");
  };

  const fourthPressHandler = () => {
    context.third.round = 1;
    context.third.rest = 0.3;
    context.name = "third";

    navigation.navigate("Timer");
  };

  fourthPressHandler;
  return (
    <ThemeProvider theme={theme}>
      <Spacer position="top" size="xxl"></Spacer>
      <TitleContainer>
        <TitleText>CHOOSE A TIMER!</TitleText>
      </TitleContainer>

      <CardContainer>
        <Spacer position="top" size="large">
          <Pressable onPress={boxingPressHandler}>
            <TimerCard
              cardPosition={"first"}
              elevation={4}
              cardNameLabel={"BOXING"}
              cardTimeLabel={"3x1"}
              navigation={navigation}
            />
          </Pressable>
        </Spacer>
        <Spacer position="top" size="large">
          <Pressable onPress={bjjPressHandler}>
            <TimerCard
              cardPosition={"second"}
              elevation={4}
              cardNameLabel={"BJJ"}
              cardTimeLabel={"5x1"}
              navigation={navigation}
            />
          </Pressable>
        </Spacer>
        <Spacer position="top" size="large">
          <Pressable onPress={mmaPressHandler}>
            <TimerCard
              cardPosition={"third"}
              elevation={4}
              cardNameLabel={"MMA"}
              cardTimeLabel={"5x1"}
              navigation={navigation}
            />
          </Pressable>
        </Spacer>

        <Spacer position="top" size="large">
          <Pressable onPress={fourthPressHandler}>
            <TimerCard
              cardPosition={"forth"}
              elevation={4}
              cardNameLabel={"BJJ"}
              cardTimeLabel={"5x1"}
              navigation={navigation}
            />
          </Pressable>
        </Spacer>
      </CardContainer>
    </ThemeProvider>
  );
};
