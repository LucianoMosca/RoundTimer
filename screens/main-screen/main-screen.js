import React, { useEffect, useState, useContext } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

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
//import { EditContext } from "../../infrastructure/context/edit-context";

export const MainScreen = ({ navigation }) => {

  const timerContext = useContext(TimerContext);
  //const editContext = useContext(EditContext);


  const boxingPressHandler = () => {



    //console.log("this console log is in main screen" + editContext)
   // timerContext.first.round = editContext.firstEditable.roundEdit;
   // timerContext.first.rest = editContext.firstEditable.restEdit;

    
    timerContext.name = "first";

    navigation.navigate("Timer");
  };

  const bjjPressHandler = () => {
    // timerContext.second.round = editContext.secondEditable.roundEdit;
    // timerContext.second.rest = editContext.secondEditable.restEdit;
    timerContext.name = "second";

    navigation.navigate("Timer");
  };

  const mmaPressHandler = () => {
    // timerContext.third.round = editContext.thirdEditable.roundEdit;
    // timerContext.third.rest = editContext.thirdEditable.restEdit;
    timerContext.name = "third";

    navigation.navigate("Timer");
  };

  const fourthPressHandler = () => {
    // timerContext.fourth.round = editContext.fourthEditable.roundEdit;
    // timerContext.fourth.rest = editContext.fourthEditable.restEdit;
    timerContext.name = "fourth";

    navigation.navigate("Timer");
  };

 
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
              cardPosition={"fourth"}
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
