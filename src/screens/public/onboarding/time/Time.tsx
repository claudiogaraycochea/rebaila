import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInterest } from '../../../../store/actions/userActions';
import { Container, Section, Row, H2, ButtonItems, ButtonItem, ButtonBottom } from '../../../../ui/ui';
import IItem from '../../../../models/item';
import { RootState } from '../../../../store/reducers/reducers';

export default function Experience(props: any) { 
  const { navigation } = props;
  const { time_by_sessions } = useSelector((state:RootState) => state.systemConstructor);
  const [itemSelected, setItemSelected] = useState('');
  const dispatch = useDispatch();

  // Update the "store" in redux and move to the next screen
  function handleButtonNext() {
    dispatch(setInterest({type: 'time_by_session', value: itemSelected}));
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
            {time_by_sessions.map((time_by_session: IItem) => (
              <ButtonItem key={time_by_session.id}
                onPress={()=>setItemSelected(time_by_session.tag)}
                active={(itemSelected === time_by_session.tag) ? true : false }
                title={time_by_session.title}
                description={time_by_session.description}
              />
            ))}
          </ButtonItems>
      </Section>
    </Container>
  );

}