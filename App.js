import React from "react";

import { SafeArea } from "./utils/safeArea";
import { theme } from "./infrastructure/theme";

import styled, { ThemeProvider } from "styled-components";
import { MainScreen } from "./screens/main-screen/main-screen";
import Navigation from "./infrastructure/navigation/timer.navigator";
import { TimerScreen } from "./screens/timer-screen/timer-screen";

import { TimerContextProvider } from "./infrastructure/context/timer-context";
import { EditContextProvider } from "./infrastructure/context/edit-context";
const Container = styled.View`
  flex: 1;
`;

export default function App() {
  return (
    <SafeArea>
      <Container theme={theme}>
        <EditContextProvider>
          <TimerContextProvider>
            <Navigation headerMode="none" />
          </TimerContextProvider>
        </EditContextProvider>
      </Container>
    </SafeArea>
  );
}
