import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInterest } from '../../../../store/actions/userActions';
import { Container, Section, Row, H2, ButtonItems, ButtonItem, ButtonBottom } from '../../../../ui/ui';
import IItem from '../../../../models/item';
import { RootState } from '../../../../store/reducers/reducers';

export default function Experience(props: any) { 
  const { navigation } = props;
  const { targets } = useSelector((state:RootState) => state.systemConstructor);
  const [itemSelected, setItemSelected] = useState('');
  const dispatch = useDispatch();

  // Update the "store" in redux and move to the next screen
  function handleButtonNext() {
    dispatch(setInterest({type: 'target', value: itemSelected}));
    navigation.navigate('Gender');
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
            {targets.map((target: IItem) => (
              <ButtonItem key={target.id}
                onPress={()=>setItemSelected(target.tag)}
                active={(itemSelected === target.tag) ? true : false }
                title={target.title}
                description={target.description}
              />
            ))}
          </ButtonItems>
      </Section>
    </Container>
  );

}