import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  ButtonText,
  ModifierButton,
  EditContainer,
  EditButtonText,
  TimeText,
  EditTimerContainer,
} from "./edit-screen-styles";
import { Spacer } from "../../utils/spacer";
import { theme } from "../../infrastructure/theme";
import { ThemeProvider } from "styled-components";

export const EditScreen = () => {
  const [subject, setSubject] = useState(null);

  const [stringMinutes, setStringMinutes] = useState("00");
  const [stringSeconds, setStringSeconds] = useState("00");

  const [edittableMinutes, setEdittableMinutes] = useState(0);

  const [edittableSeconds, setEdittableSeconds] = useState(0);

  const pad = (num) => {
    if (num < 10) {
      return "0" + num.toString();
    } else {
      return num.toString();
    }
  };
  const plusPressHandler = () => {
    if (subject == "minutes") {
      setEdittableMinutes(edittableMinutes + 1);
      if (edittableMinutes > 58) {
        setEdittableMinutes(0);
      }
    } else {
      setEdittableSeconds(edittableSeconds + 10);
      if (edittableSeconds >40) {
        setEdittableSeconds(0);
      }
    }
    setStringMinutes(pad(edittableMinutes));
  };

  const minusPressHandler = () => {
    if (subject == "minutes") {
      setEdittableMinutes(edittableMinutes - 1);
      if (edittableMinutes < 2) {
        setEdittableMinutes(59);
      }
    } else {
      setEdittableSeconds(edittableSeconds - 10);
      if (edittableSeconds < 2) {
        setEdittableSeconds(50);
      }
    }
  };

  // console.log(edittableMinutes);
  //console.log(edittableSeconds);

  useEffect(() => {

    setTimeout(()=>{
      setSubject("seconds");
    },0)
    
  }, []);
  console.log(subject);

  useEffect(() => {
    setStringMinutes(pad(edittableMinutes));
  }, [edittableMinutes]);

  useEffect(() => {
    setStringSeconds(pad(edittableSeconds));
  }, [edittableSeconds]);

  console.log(edittableSeconds);
  console.log(stringSeconds);

  return (
    <ThemeProvider theme={theme}>
      <EditContainer>
        <ModifierButton onPress={minusPressHandler}>
          <EditButtonText>-</EditButtonText>
        </ModifierButton>

        <EditTimerContainer>
          <TimeText>{stringMinutes}</TimeText>
          
          <TimeText>:{stringSeconds}</TimeText>
        </EditTimerContainer>

        <ModifierButton onPress={plusPressHandler}>
          <EditButtonText>+</EditButtonText>
        </ModifierButton>
      </EditContainer>
    </ThemeProvider>
  );
};
