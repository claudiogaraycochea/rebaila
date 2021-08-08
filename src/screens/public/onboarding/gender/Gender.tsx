import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInterest } from '../../../../store/actions/userActions';
import { Container, Section, Row, H2, ButtonItems, ButtonItem, ButtonBottom } from '../../../../ui/ui';
import IItem from '../../../../models/item';
import { RootState } from '../../../../store/reducers/reducers';

export default function Gender(props: any) { 
  const { navigation } = props;
  const { genders } = useSelector((state:RootState) => state.systemConstructor);
  const [itemSelected, setItemSelected] = useState('');
  const dispatch = useDispatch();

  // Update the "store" in redux and move to the next screen
  function handleButtonNext() {
    dispatch(setInterest({type: 'gender', value: itemSelected}));
    navigation.navigate('Time');
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
          <H2 align='center'>¿Que necesitas experiencia tienes bailando?</H2>
        </Row>
          <ButtonItems>
            {genders.map((gender: IItem) => (
              <ButtonItem key={gender.id}
                onPress={()=>setItemSelected(gender.tag)}
                active={(itemSelected === gender.tag) ? true : false }
                title={gender.title}
                description={gender.description}
                thumbnail={gender.thumbnail}
              />
            ))}
          </ButtonItems>
      </Section>
    </Container>
  );

}