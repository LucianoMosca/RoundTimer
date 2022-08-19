import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "react-native";

export const ModifierButton = styled(TouchableOpacity)`
  width: 50px;
  height: 50px;
  background-color: red;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: center;
`;

export const SaveButton = styled(TouchableOpacity)`
  width: 100px;
  height: 50px;
  background-color: red;
  margin: auto;
  margin-top: 5px;
  justify-content: center;
  align-items: center;

`;

export const EditButtonText = styled.Text`
font-size: ${(props) => props.theme.fontSizes.button}
align-self: center;
`;

export const EditContainer = styled.View`
  flex: 0.2;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: pink;
`;

export const TimeText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h2};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.ui.error};
  background-color: ${(props) => props.theme.colors.ui.success};
  align-items: center;
`;

export const EditTimerContainer = styled.View`
flex:1;
flex-direction: row;
justify-content: center;
background-color: orange;
`

