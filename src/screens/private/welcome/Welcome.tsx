import React, { useState } from "react";
import { View, Button } from "react-native";
import {
  Container,
  Section,
  Row,
  H1,
  Text,
  ButtonPlayer,
} from "../../../ui/ui";
import styled from "styled-components";
import { Color } from "../../../ui/sources/colors/Colors";

export default function Welcome(props: any) {
  const { navigation } = props;

  function handlePlayVideo(videoSrc: string) {
    navigation.navigate("Player", { videoSrc });
  }

  return (
    <Container color={Color.grayDark}>
      <Section>
        <Row>
          <ButtonPlayer
            gender={"Coreografias"}
            thumbnail={"https://xnextplay.com/rebaila/zumba.png"}
            onPress={() =>
              handlePlayVideo("https://xnextplay.com/rebaila/zumba-class-1.mp4")
            }
          />
        </Row>
        <Row>
          <H1 color={Color.green}>Christina Aguilera - Can't hold us down</H1>
        </Row>
        <Row>
          <Text color={Color.white}>
            Vamos a visitar los hits del 2000 con una coreografia que tiene
            mucho groove, es muy urbana y se situa entre el hiphop y el
            commercial. Tendras que darlo todo!
          </Text>
        </Row>
        <Row>
          <View>
            <Text color={Color.white}>Nivel: </Text>
          </View>
          <View>
            <Text color={Color.green}>Avanzado</Text>
          </View>
        </Row>
        <Row>
          <View>
            <Text color={Color.white}>Duración: </Text>
          </View>
          <View>
            <Text color={Color.green}>33 min</Text>
          </View>
        </Row>
      </Section>
    </Container>
  );
}

const BgConainter = styled.View`
  display: flex;
  flex: 1;
`;
