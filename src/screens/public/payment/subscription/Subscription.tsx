import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserData } from "../../../../store/actions/userActions";
import {
  Container,
  Section,
  Row,
  Col,
  H2,
  H3,
  ButtonBottom,
  ButtonBox,
  Input,
} from "../../../../ui/ui";
import { Link } from "@react-navigation/native";
import { Text } from "react-native";
import PaymentStripe from "../../../../components/payment/paymentStripe/PaymentStripe";

export default function Experience(props: any) {
  const { navigation } = props;
  const state = useSelector((state) => state.userConstructor);
  const [itemSelected, setItemSelected] = useState(false);
  const [fullname, setFullname] = useState();
  const [country, setCountry] = useState();
  const [birth, setBirth] = useState(new Date(1598051730000));
  const dispatch = useDispatch();

  // Update the "store" in redux and move to the next screen
  function handleButtonNext() {
    navigation.navigate("Welcome");
  }

  const checkInputs = () => {
    return true;
  };

  return (
    <Container
      bottom={
        checkInputs() ? (
          <ButtonBottom title="Siguiente" onPress={handleButtonNext} />
        ) : null
      }
    >
      <Section>
        <Row>
          <H2 align="center">Subscripción a Rebaila</H2>
        </Row>
        <Row>
          <ButtonBox
            onPress={() => console.log("test")}
            active={false}
            title={"79,99€ Anual"}
            description={"Se te cargarán 79,99€/año desde el 21/07/2021"}
          />
        </Row>
        <Row>
          <Link to="">Ver mas planes</Link>
        </Row>
      </Section>
      <Section>
        <Row>
          <Col>
            <Text>Cantidad a pagar</Text>
          </Col>
          <Col align="flex-end">
            <Text>79,99€</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Text>Ahorro anual</Text>
          </Col>
          <Col align="flex-end">
            <Text>39,89€</Text>
          </Col>
        </Row>
      </Section>
      <Section>
        <Row>
          <Col>
            <Text>Pago hoy</Text>
          </Col>
          <Col align="flex-end">
            <Text>79,99€ 0€</Text>
          </Col>
        </Row>
      </Section>
      <Section>
        <Row>
          <Col>
            <H3>Crédito / Débito</H3>
          </Col>
        </Row>
        <Row>
          <PaymentStripe>eeee</PaymentStripe>
        </Row>
      </Section>
    </Container>
  );
}
