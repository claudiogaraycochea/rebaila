import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInterest } from "../../../../store/actions/userActions";
import {
  Container,
  Section,
  Row,
  H2,
  ButtonItems,
  ButtonItem,
  ButtonBottom,
} from "../../../../ui/ui";

export default function Gender(props: any) {
  const { navigation } = props;
  const { genders } = useSelector((state) => state.systemConstructor);
  const [itemSelected, setItemSelected] = useState("");
  const dispatch = useDispatch();

  // Update the "store" in redux and move to the next screen
  function handleButtonNext() {
    dispatch(setInterest({ type: "gender", value: itemSelected }));
    navigation.navigate("Time");
  }

  return (
    <Container
      bottom={
        itemSelected ? (
          <ButtonBottom title="Siguiente" onPress={handleButtonNext} />
        ) : null
      }
    >
      <Section>
        <Row>
          <H2 align="center">¿Que necesitas experiencia tienes bailando?</H2>
        </Row>
        <ButtonItems>
          {genders.map((experience) => (
            <ButtonItem
              key={experience.id}
              onPress={() => setItemSelected(experience.tag)}
              active={itemSelected === experience.tag ? true : false}
              title={experience.title}
              description={experience.description}
              thumbnail={experience.thumbnail}
            />
          ))}
        </ButtonItems>
      </Section>
    </Container>
  );
}
