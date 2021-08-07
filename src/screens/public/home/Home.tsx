import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { Container, H1, Text, } from '../../../ui/ui';

export default function Home(props: any) { 
  const { navigation } = props;
  const [nextButton, setNextButton] = useState(true);
  return (
    <Container
      bottom={(nextButton) ? (
        <View>
          <Button
            title="Register"
            onPress={() => navigation.navigate('Experience')}
          />
        </View>) : null
      }
    >
      <View>
        <Text>Home</Text>
      </View>
    </Container>
  );

}