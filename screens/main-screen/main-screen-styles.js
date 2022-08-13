import React from "react";
import { View, TouchableOpacity } from "react-native";

import styled from "styled-components";

export const CardContainer = styled.View`
  flex: 0.7;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.ui.success};
`;

export const TitleText = styled.Text`
font-size: ${(props) => props.theme.fontSizes.h3}
`

export const TitleContainer = styled.Text`
background-color: pink;
text-align: center;
`



export const EditButton = styled(TouchableOpacity)`
background-color: ${(props) => props.theme.colors.ui.error};

justify-content: center;
padding: 9px;
border-radius: 10px;
`

export const CardSubContainer = styled.View`
flex: 0.2;
flex-direction: row;
width: 100%;
justify-content: space-between;
background-color: violet;
`