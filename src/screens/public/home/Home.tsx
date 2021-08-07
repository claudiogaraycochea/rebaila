import React, { useState } from 'react';
import { View } from 'react-native';
import { Container, Section, H1, Text, Button } from '../../../ui/ui';

export default function Home(props: any) { 
  const { navigation } = props;
  const [nextButton, setNextButton] = useState(true);
  return (
    <Container
      bottom={
        <View style={{marginBottom: 20}}>
          <Button
            title="Registar"
            color='primary'
            onPress={() => navigation.navigate('Experience')}
          />
        </View>
      }
    >
    </Container>
  );

}