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
export const TimerCard = () => {
  return (
   

      <StyledCard mode={"elevated"}>
        <CardContent>
          <TimeContainer>
            <Text>NOMBRE</Text>
          </TimeContainer>
          <TimeContainer>
            <Text>03:00</Text>
          </TimeContainer>

          <ButtonContainer>
            <EditButton>
              <Text>EDIT</Text>
            </EditButton>
          </ButtonContainer>
        </CardContent>
      </StyledCard>

  );
};
