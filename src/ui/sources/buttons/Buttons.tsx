import React from 'react';
import { View } from 'react-native';
import styled, { css } from 'styled-components';
import { Color } from '../colors/Colors';

///////////////////////////
/* Button */

const getBgColor = (variant) => {
  switch(variant) {
    case 'primary':
      return Color.primary
    default:
      return Color.normal
  }
}

const getTextColor = (variant) => {
  switch(variant) {
    case 'primary':
      return Color.white
    default:
      return Color.white
  }
}

export const Button = (props) => {
  const ButtonContainer = styled.TouchableHighlight`
    background-color: ${props => (props.variant) ? getBgColor(props.variant) : Color.normal};
    padding: 8px 20px;
    width: 100%;
    border-color: ${props => (props.variant) ? getTextColor(props.variant) : Color.primary};
    border-radius: 10px;
    border-width: 0;
    align-self: center;
    shadow-color: #000;
    shadow-offset: {width: 0, height: 0};
    shadow-opacity: 0.25;
    shadow-radius: 2;
    shadow-offset: 0px 2px;
  `
  const ButtonLabel = styled.Text`
    font-weight: 700;
    align-self: center;
    font-size: 16px;
    padding: 10px;
    font-size: 16px;
    color: ${props => (props.variant) ? getTextColor(props.variant) : Color.primary};
  `

  return (
    <ButtonContainer
      underlayColor='rgba(73,182,77,1,0.9)'
      onPress={props.onPress}
      style={props.style}
      variant={props.variant}
    >
      <ButtonLabel variant={props.variant}>
        {props.children}
      </ButtonLabel>
    </ButtonContainer>
  );
};

/* / Button */

///////////////////////////
/* ButtonBox Items */
///////////////////////////
/* ButtonItems */
export const ButtonItems = styled.View`
  margin-bottom: 20px;
`;

/* ButtonItem */
export const ButtonItem = (props) => {

  const { title, description, onPress, style, active } = props;

  const ButtonItemContainer = styled.TouchableHighlight`
    margin-left: -20px;
    margin-right: -20px;
    position: relative;
    borderTopColor: ${Color.grayHighlight};
    borderTopWidth: 1px;
    padding: 20px;
    backgroundColor: ${active ? Color.primary : Color.white};
  `;

  const ButtonItemContent = styled.View`
    display: flex;
    flex-direction: column;
  `
  const ButtonItemTitle = styled.Text`
    font-weight: 900;
    font-size: 18px;
    color: ${active ? Color.white : Color.text};
  `
  const ButtonItemDescription = styled.Text`
    font-weight: 400;
    font-size: 14px;
    color: ${active ? Color.white : Color.text};
  `

  return (
    <ButtonItemContainer
      underlayColor='rgba(73,182,77,1,0.9)'
      onPress={onPress}
    >
      <ButtonItemContent>
        <ButtonItemTitle>
          {title}
        </ButtonItemTitle>
        <ButtonItemDescription>
          {description}
        </ButtonItemDescription>
      </ButtonItemContent>
    </ButtonItemContainer>
  );
};

export const ButtonBottom = (props) => {
  const { title, onPress } = props;

  const ButtonBottomContainer = styled.TouchableHighlight`
    margin-left: -20px;
    margin-right: -20px;
    margin-bottom: -10px;
    position: relative;
    backgroundColor: ${Color.primary};
    color: ${Color.white};
    padding: 40px 40px;
  `;

  const ButtonBottomContent = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `

  const ButtonBottomLabel = styled.Text`
    font-weight: 700;
    font-size: 16px;
    color: ${Color.white};
  `

  return (
    <ButtonBottomContainer
      underlayColor='rgba(73,182,77,1,0.9)'
      onPress={onPress}
    >
      <ButtonBottomContent>
        <ButtonBottomLabel>
          {title}
        </ButtonBottomLabel>
      </ButtonBottomContent>
    </ButtonBottomContainer>
  );
};

/* ButtonBox */
export const ButtonBox = (props: any) => {

  const { title, description, onPress, style, active } = props;

  const ButtonBoxContainer = styled.TouchableHighlight`
    flex: 1;
    padding: 20px;
    backgroundColor: ${active ? Color.primary : Color.primary};
    borderRadius: 20px;
  `;

  const ButtonBoxContent = styled.View`
    display: flex;
    flex-direction: column;
  `
  const ButtonBoxTitle = styled.Text`
    font-weight: 900;
    font-size: 18px;
    color: ${active ? Color.white : Color.white};
    margin-bottom: 10px;
  `
  const ButtonBoxDescription = styled.Text`
    font-weight: 400;
    font-size: 14px;
    color: ${active ? Color.white : Color.white};
  `

  return (
    <ButtonBoxContainer
      underlayColor='rgba(73,182,77,1,0.9)'
      onPress={onPress}
    >
      <ButtonBoxContent>
        <ButtonBoxTitle>
          {title}
        </ButtonBoxTitle>
        <ButtonBoxDescription>
          {description}
        </ButtonBoxDescription>
      </ButtonBoxContent>
    </ButtonBoxContainer>
  );
};