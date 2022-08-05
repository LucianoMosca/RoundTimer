import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

export const TimerButton = styled(TouchableOpacity)`
  border-radius: ${(props) => props.theme.sizes[0]};
  height: 70px;
  width: 200px;
  background-color: ${(props) => props.theme.colors.ui.error};
  margin: auto;
`;

export const ButtonText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h4};
  font-weight: ${(props) => props.theme.fontWeights.bold}
  margin: auto;
`;
