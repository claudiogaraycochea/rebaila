import React, {useState} from 'react';
import {View, Button, Text, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styled from 'styled-components/native';
import { Color } from '../colors/Colors';

export const InputDatePicker = (props: any) => {
  const [date, setDate] = useState<string>(props.value);
  const [mode, setMode] = useState<string>('date');
  const [show, setShow] = useState<boolean>(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(currentDate);
    props.onEndEditing(currentDate);
  };

  const InputLabel = styled.Text`
    backgroundColor: ${Color.grayLight};
    color: ${Color.gray};
    font-family: PoppinsSemiBold;
    font-size: 20px;
  `;

  const convertDate = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  const dataString = convertDate(date);

  return (
    <View style={{position: 'relative'}}>
      <View style={{borderColor: 'red', borderWidth: 1, opacity: 0, zIndex: 2}}>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      </View>
      <View style={{position: 'absolute', top: 4, zIndex: 1}}>
        <InputLabel>{date ? dataString : null}</InputLabel>
      </View>
    </View>
  );
};