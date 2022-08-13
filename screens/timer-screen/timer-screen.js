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
  const context = useContext(TimerContext);
  console.log(context.name)
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Spacer position="top" size="xxl"></Spacer>
        <Spacer position="top" size="xxl"></Spacer>
        
        {context.name == "first" && (<Timer
            round={context.first.round}
            rest={context.first.rest}
            roundAmount={10}
            navigation={navigation}
          ></Timer>)}

          {context.name == "second" && (<Timer
            round={context.second.round}
            rest={context.second.rest}
            roundAmount={10}
            navigation={navigation}
          ></Timer>)}  

          {context.name == "third" && (<Timer
            round={context.third.round}
            rest={context.third.rest}
            roundAmount={10}
            navigation={navigation}
          ></Timer>)}  

           {context.name == "fourth" && (<Timer
            round={context.fourth.round}
            rest={context.fourth.rest}
            roundAmount={10}
            navigation={navigation}
          ></Timer>)}  
          {context.name == "fifth" && (<Timer
            round={context.fifth.round}
            rest={context.fifth.rest}
            roundAmount={10}
            navigation={navigation}
          ></Timer>)} 
     
      </View>
    </ThemeProvider>
  );
};
