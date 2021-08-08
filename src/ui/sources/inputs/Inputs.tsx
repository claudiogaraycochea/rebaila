import React from "react";
import { View, Text, TextInput } from "react-native";
import styled from "styled-components/native";
import { Color } from "../colors/Colors";
import { InputDatePicker } from "./InputDatePicker";
import validate from "./validate";

/* Input 
  Ex:
  <Input
    label='Firstname'
    type=''
    value={firstname}
    placeholder='Firstname'
    onChangeText={(text)=> setFirstname(text)}
    min={2}
  />
*/

export const Input = (props: any) => {
  let value = props.value;

  validate.type = props.type;
  validate.min = props.min;

  const InputContainer = styled.TextInput`
    backgroundcolor: ${Color.grayLight};
    color: ${Color.gray};
    padding: 10px 20px;
    width: 100%;
    font-family: PoppinsSemiBold;
    font-size: 20px;
    border: 0px solid ${Color.grayLight};
    border-radius: 10px;
  `;

  return (
    <View style={{ width: "100%" }}>
      {props.label ? (
        <Text style={{ marginBottom: 10 }}>{props.label}</Text>
      ) : null}
      <InputContainer
        defaultValue={value}
        secureTextEntry={props.type === "password" ? true : false}
        placeholder={props.placeholder}
        style={validate.styleCheckValueInit(value)}
        onChange={(event) => {
          value = event.nativeEvent.text;
        }}
        onEndEditing={() => props.onChangeText(value)}
      ></InputContainer>
    </View>
  );
};

export const InputDate = (props: any) => {
  const { onEndEditing, value } = props;
  const InputContainer = styled.View`
    backgroundcolor: ${Color.grayLight};
    color: ${Color.gray};
    padding: 10px 20px;
    width: 100%;
    font-family: PoppinsSemiBold;
    font-size: 20px;
    border: 0px solid ${Color.grayLight};
    border-radius: 10px;
  `;

  return (
    <View style={{ width: "100%" }}>
      {props.label ? (
        <Text style={{ marginBottom: 10 }}>{props.label}</Text>
      ) : null}
      <InputContainer>
        <InputDatePicker
          value={value}
          onEndEditing={(data: any) => onEndEditing(data)}
        />
      </InputContainer>
    </View>
  );
};
