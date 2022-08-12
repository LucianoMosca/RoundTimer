import React from "react";

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