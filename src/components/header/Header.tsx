import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

export default function Header (props) {

  return (
    <Header>
      <Text style={{fontWeight: 'bold', color: '#fff'}}>{props.title}</Text>
    </Header>
  )
}

const HeaderCenter = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  marginTop: 8px;
`;