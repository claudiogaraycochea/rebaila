import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducers/reducers';
import { Container, Section, Row, H2, H3, Text, ButtonBottom, Icon } from '../../../../ui/ui';

export default function CreatePlanning(props: any) { 
  const { navigation } = props;
  const { interest } = useSelector((state:RootState) => state.userConstructor);

  // Update the "store" in redux and move to the next screen
  function handleButtonNext() {
    navigation.navigate('Subscription');
  }

  return (
    <Container
      bottom={
        <ButtonBottom
          title="Siguiente"
          onPress={handleButtonNext}
        />
      }
    >
      <Section>
        <Row>
          <H2 align='center'>Creando tu planificación personal</H2>
        </Row>
        <Row style={{flexDirection:'column', alignItems: 'center'}}>
          <Icon.IconLoadingPercentage />
        </Row>
        <Row style={{flexDirection:'column'}}>
          <Text>Tu experiencia</Text>
          <H3>{interest.experience}</H3>
        </Row>
        <Row style={{flexDirection:'column'}}>
          <Text>Objetivo</Text>
          <H3>{interest.target}</H3>
        </Row>
        <Row style={{flexDirection:'column'}}>
          <Text>Intereses</Text>
          <H3>{interest.gender}</H3>
        </Row>
        <Row style={{flexDirection:'column', }}>
          <Text>Tiempo por sesión</Text>
          <H3>{interest.time_by_session}</H3>
        </Row>
      </Section>
    </Container>
  );
}