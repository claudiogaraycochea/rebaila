import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInterest } from '../../../../store/actions/userActions';
import { Container, Section, Row, H2, ButtonItems, ButtonItem, ButtonBottom } from '../../../../ui/ui';

export default function Experience(props: any) { 
  const { navigation } = props;
  const { time_by_sessions } = useSelector(state => state.systemConstructor);
  const [itemSelected, setItemSelected] = useState('');
  const dispatch = useDispatch();

  // Update the "store" in redux and move to the next screen
  function handleButtonNext() {
    dispatch(setInterest({type: 'tyme_by_session', value: itemSelected}));
    navigation.navigate('UserData');
  }

  return (
    <Container
      bottom={(itemSelected) ? (
        <ButtonBottom
          title="Siguiente"
          onPress={handleButtonNext}
        />) : null
      }
    >
      <Section>
        <Row>
          <H2 align='center'>¿Cual es tu principal objetivo?</H2>
        </Row>
          <ButtonItems>
            {time_by_sessions.map((experience) => (
              <ButtonItem key={experience.id}
                onPress={()=>setItemSelected(experience.tag)}
                active={(itemSelected === experience.tag) ? true : false }
                title={experience.title}
                description={experience.description}
              />
            ))}
          </ButtonItems>
      </Section>
    </Container>
  );

}