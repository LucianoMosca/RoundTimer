import React from "react";

import {
  createStackNavigator,

} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { MainScreen } from "../../screens/main-screen/main-screen";
import { TimerScreen } from "../../screens/timer-screen/timer-screen";
import { EditScreen } from "../../screens/edit-screen/edit-screen";
const screens = {
  Main: {
    screen: MainScreen
  },
  Timer: {
    screen: TimerScreen
  },
  Edit: {
    screen: EditScreen
  }
}

const TimerStack = createStackNavigator(screens);

export default createAppContainer(TimerStack);