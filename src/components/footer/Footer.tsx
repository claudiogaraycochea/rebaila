import React from 'react';
import { Text } from 'react-native';
import styled, { css } from 'styled-components';

export default function Header (props) {

  return (
    <Footer>
      <Text style={{fontWeight: 'bold', color: '#fff'}}>{props.title}</Text>
    </Footer>
  )
}

const Footer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  marginTop: 8px;
`;