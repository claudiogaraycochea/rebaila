import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { Container, Section, Row, H2, Text } from '../../../ui/ui';
import styled from 'styled-components';
import { Color } from '../../../ui/sources/colors/Colors';

export default function Home(props: any) { 
  const { navigation } = props;
  const [nextButton, setNextButton] = useState(true);

  return (
    <Container color={Color.grayDark}>
      <Section>
        <Row>
          <H2 color={Color.green}>Christina Aguilera - Can't hold us down</H2>
        </Row>
        <Row>
          <Text color={Color.white}>Vamos a visitar los hits del 2000 con una coreografia que tiene mucho groove, es muy urbana y se situa entre el hiphop y el commercial. Tendras que darlo todo!</Text>
        </Row>
        <Row>
          <View>
            <Text color={Color.white}>Nivel: </Text>
          </View>
          <View>
            <Text color={Color.green}>Avanzado</Text> 
          </View>
        </Row>
        <Row>
          <View>
            <Text color={Color.white}>Duración: </Text>
          </View>
          <View>
            <Text color={Color.green}>33 min</Text> 
          </View>
        </Row>
      </Section>
    </Container>
  );

}

const BgConainter = styled.View`
  display: flex;
  flex: 1;
`;