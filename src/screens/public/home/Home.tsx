import React from 'react';
import { View } from 'react-native';
import { Container, Button } from '../../../ui/ui';

export default function Home(props: any) { 
  const { navigation } = props;

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