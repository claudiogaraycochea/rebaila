import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Container } from '../../../../ui/ui';

export default function Home(props: any) { 
  const { navigation } = props;
  const [nextButton, setNextButton] = useState(true);
  return (
    <Container>
      <View>
        <Text>Player</Text>
        <Button
          title="Register"
          onPress={() => navigation.navigate('Experience')}
        />
      </View>
    </Container>
  );

}