import React from "react";

import { Spacer } from "../../utils/spacer";
import { theme } from "../../infrastructure/theme";
import { ThemeProvider } from "styled-components";
import { Editor } from "../../components/editor/editor";
import { TimerContext } from "../../infrastructure/context/timer-context";

export const EditScreen = () => {
    return (
      <ThemeProvider theme={theme}>
        <Spacer position={"top"} size={"xl"}></Spacer>
        <Editor roundOrRest={"roundEdittor"}></Editor>
        <Spacer position={"top"} size={"xl"}></Spacer>
        <Editor roundOrRest={"restEdittor"}></Editor>
      </ThemeProvider>
    
  );
};
