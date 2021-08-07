import React from 'react';
import styled from 'styled-components/native';
import { Color } from '../colors/Colors';

/* Text */
export const H1 = styled.Text`
  font-family: PoppinsBold;
  font-size: 32px;
  font-weight: bold;
  flex: 1;
`;

export const H2 = (props: any) => {
  const H2Container = styled.Text`
    font-family: PoppinsBold;
    font-size: 24px;
    padding-bottom: 5px;
    flex: 1;
    font-weight: bold;
    color: ${(props.color) ? `${props.color}` : Color.text};
  `;

  return (
    <H2Container>
      {props.children}
    </H2Container>
  )
}

export const H3 = styled.Text`
  font-family: PoppinsBold;
  font-size: 16px;
  text-align: center;
  flex: 1;
  font-weight: bold;
`;

export const Text = (props: any) => {
  const TextContainer = styled.Text`
    font-family: PoppinsRegular;
    font-size: 16px;
    color: ${(props.color) ? `${props.color}` : Color.text};
  `;

  return (
    <TextContainer>
      {props.children}
    </TextContainer>
  )
}