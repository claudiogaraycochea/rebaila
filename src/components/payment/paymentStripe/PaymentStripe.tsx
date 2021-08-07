import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import { Row, Input } from '../../../ui/ui';

export default function PaymentStripe (props) {
  const [cardNumber, setCardNumber] = useState();
  const [cardCVC, setCardCVC] = useState();

  function validateForm(name, value) {
    switch (name) {
      case 'cardNumber':
        setCardNumber(value);
        break;
      case 'cardCVC':
        setCardCVC(value);
        break;
      default:
        break;
    }
  }

  return (
    <View>
      <Row>
        <Input 
          label='Numero de tarjeta'
          type='text'
          value={cardNumber}
          placeholder='0000 0000 0000 0000'
          onChangeText={(text: any)=> validateForm('cardNumber',text)}
        />
      </Row>
      <Row>
        <Input 
          label='CVC'
          type='text'
          value={cardCVC}
          placeholder='00-00'
          onChangeText={(text: any)=> validateForm('cardCVC',text)}
        />
      </Row>
    </View>
  )
}
