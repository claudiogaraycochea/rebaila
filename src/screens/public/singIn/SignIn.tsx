import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { Container } from "../../../ui/ui";

export default function SignIn(props: any) {
  const { navigation } = props;
  const [nextButton, setNextButton] = useState(false);

  return (
    <Container
      bottom={
        nextButton ? (
          <View>
            <Text>NextButton1111</Text>
          </View>
        ) : null
      }
    >
      <View>
        <Text>SignIn1111</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </Container>
  );
}
