import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../../../store/actions/userActions';
import { Container, Section, Row, H2, ButtonBottom, Input, InputDate} from '../../../../ui/ui';

export default function Experience(props: any) { 
  const { navigation } = props;
  const [fullname, setFullname] = useState<string|undefined>(undefined);
  const [country, setCountry] = useState<string|undefined>(undefined);
  const [birth, setBirth] = useState<string|undefined>(new Date(1598051730000));
  const dispatch = useDispatch();

  // Update the "store" in redux and move to the next screen
  function handleButtonNext() {

    const data = {
      fullname,
      country,
      date_of_birth: birth
    }
    dispatch(setUserData(data));
    navigation.navigate('CreatePlanning');
  }

  const checkInputs = () => {
    if (((fullname!==undefined) && (fullname!==''))
      && ((country!==undefined) && (country!==''))) {
      return true;
    }
    return false;
  }

  function validateForm(name: string, value: string) {
    switch (name) {
      case 'fullname':
        setFullname(value);
        break;
      case 'country':
        setCountry(value);
        break;
      case 'birth':
        setBirth(value);
        break;
      default:
        break;
    }
  }

  return (
    <Container
      bottom={(checkInputs()) ? (
        <ButtonBottom
          title="Siguiente"
          onPress={handleButtonNext}
        />) : null
      }
    >
      <Section>
        <Row>
          <H2 align='center'>Ahora necesitamos algunos datos tuyos</H2>
        </Row>
        <Row>
          <Input 
            label='Nombre completo'
            type='text'
            value={fullname}
            placeholder=''
            onChangeText={(text: string)=> validateForm('fullname',text)}
          />
        </Row>
        <Row>
          <Input 
            label='Pais de residencia'
            type='text'
            value={country}
            placeholder=''
            onChangeText={(text: string)=> validateForm('country',text)}
          />
        </Row>
        <Row>
          <InputDate 
            label='Fecha de nacimiento'
            value={birth}
            onEndEditing={(data: string)=> validateForm('birth', data)}
          />
        </Row>
      </Section>
    </Container>
  );

}