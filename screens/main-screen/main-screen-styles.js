import React from "react";

import styled from "styled-components";

export const CardContainer = styled.View`
  flex: 0.7;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.ui.success};
`;