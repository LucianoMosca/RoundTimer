import React from "react";
import { View, TouchableOpacity } from "react-native";
import {Card, Button} from "react-native-paper"
import styled from "styled-components";



export const EditButton = styled(TouchableOpacity)`
background-color: ${(props) => props.theme.colors.ui.error};
height: 90%;
width: 50px;
justify-content: center;
padding: 9px;
border-radius: 10px;
`


export const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  width: 95%;
  height: 70px;
  align-self: center;
  padding: 5px;
`;

export const CardContent = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: ${(props) => props.theme.sizes[0]};

`;

export const TimeContainer = styled.View`
justify-content: center;
background-color: blue;
width: 55px;

`
export const ButtonContainer = styled.View`
justify-content: center;

`

