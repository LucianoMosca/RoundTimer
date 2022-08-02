import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { MainScreen } from "../../screens/main-screen/main-screen";
import { TimerScreen } from "../../screens/timer-screen/timer-screen";

const TimerStack = createStackNavigator();

export const TimerNavigator = () => {
  return (
    <NavigationContainer>
      <TimerStack.Navigator
      
        screenOptions={{
          headerShown:false,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      >
        <TimerStack.Screen name="Main" component={MainScreen} />
        <TimerStack.Screen name="Timer" component={TimerScreen} />
      </TimerStack.Navigator>
    </NavigationContainer>
  );
};
