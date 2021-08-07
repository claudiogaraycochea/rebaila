import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native';
import { setUserData } from '../../../../store/actions/userActions';
import { Container, Section, Row, H2, H3, Text, ButtonBottom } from '../../../../ui/ui';

export default function CreatePlanning(props: any) { 
  const { navigation } = props;
  const { interest } = useSelector(state => state.userConstructor);
  const [itemSelected, setItemSelected] = useState(false);
  const [fullname, setFullname] = useState();
  const [country, setCountry] = useState();
  const [birth, setBirth] = useState(new Date(1598051730000));
  const dispatch = useDispatch();

  // Update the "store" in redux and move to the next screen
  function handleButtonNext() {
    const data = {
      fullname,
      country,
      date_of_birth: birth
    }
    dispatch(setUserData(data));
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
          <H2>Creando tu planificación personal</H2>
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
          <H3>{interest.tyme_by_session}</H3>
        </Row>
      </Section>
    </Container>
  );

}