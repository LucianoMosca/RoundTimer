import React from "react";
import { View, Text, Pressable } from "react-native";
import {
  StyledCard,
  CardContent,
  EditButton,
  TimeContainer,
  ButtonContainer,
} from "./timer-card-styles";

//This will be the card component in which the user will see the timer set preview
export const TimerCard = (round, rest) => {
  return (
    <StyledCard mode={"elevated"} round={round} rest={rest}>
      <CardContent>
        <TimeContainer>
          <Text>NOMBRE</Text>
        </TimeContainer>
        <TimeContainer>
          <Text>03:00</Text>
        </TimeContainer>

        <ButtonContainer>
          <EditButton>
            <Text> GO</Text>
          </EditButton>
        </ButtonContainer>
      </CardContent>
    </StyledCard>
  );
};
