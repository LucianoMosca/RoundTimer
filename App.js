import React from "react";

import { SafeArea } from "./utils/safeArea";
import { theme } from "./utils/theme";

import styled, { ThemeProvider } from "styled-components";
import { MainScreen } from "./screens/main-screen/main-screen";
import { Navigation } from "./infrastructure/navigation";
import { TimerScreen } from "./screens/timer-screen/timer-screen";
const Container = styled.View`
  flex: 1;
`;

export default function App() {
  return (
    <SafeArea>
      <Container theme ={theme}>     
          <MainScreen/>
      </Container>
    </SafeArea>
  );
}
