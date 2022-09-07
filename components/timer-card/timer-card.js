import React, {useContext} from "react";
import { View, Text, Pressable } from "react-native";
import { TimerContext } from "../../infrastructure/context/timer-context";
import { CountDownText } from "../countdown/countdown-styles";
import {
  StyledCard,
  CardContent,
  EditButton,
  TimeContainer,
  ButtonContainer,
} from "./timer-card-styles";

//This will be the card component in which the user will see the timer set preview
export const TimerCard = ({cardNameLabel, cardTimeLabel, navigation, cardPosition}) => {
  


  const context = useContext(TimerContext);
  const editPressHandler= () => {
    context.name = cardPosition;
    navigation.navigate("Edit");
  }
  return (
    <StyledCard mode={"elevated"}>
      <CardContent>
        <TimeContainer>
          <Text>{cardNameLabel}</Text>
        </TimeContainer>
        <TimeContainer>
          <Text>{cardTimeLabel}</Text>
        </TimeContainer>
       

        <ButtonContainer>
          <EditButton onPress={editPressHandler}>
            <Text>EDIT</Text>
          </EditButton>
        </ButtonContainer>
      </CardContent>
    </StyledCard>
  );
};
