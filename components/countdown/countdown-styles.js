import React from "react";
import styled from "styled-components";

export const CountDownText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.timer};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.ui.error};
  background-color: ${(props) => props.theme.colors.ui.success};
  margin: auto;
  margin-top: 40%;
`;
/*const styles = StyleSheet.create({
    text: {
      fontSize: sizes.xxxl,
      fontWeight: 'bold',
      color: colors.text,
      padding: sizes.lg,
      backgroundColor: colors.gum,
    },
  });*/
