import React, { Children } from 'react';
import { View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Color } from '../colors/Colors';
import { Icon } from '../icons/Icons';

///////////////////////////
/* Button */

export const Button = (props: any) => {
  const ButtonContainer = styled.TouchableHighlight`
    background-color: ${Color.primary};
    padding: 8px 20px;
    width: 100%;
    border-color: ${Color.primary};
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
    color: ${Color.white};
  `

  return (
    <ButtonContainer
      underlayColor='rgba(73,182,77,1,0.9)'
      onPress={props.onPress}
      style={props.style}
    >
      <ButtonLabel>
        {props.title}
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

  const { title, description, onPress, style, active, thumbnail } = props;

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
    font-weight: 600;
    font-size: 18px;
    color: ${active ? Color.white : Color.text};
    margin-bottom: 10px;
  `
  const ButtonItemDescription = styled.Text`
    font-weight: 400;
    font-size: 14px;
    color: ${active ? Color.white : Color.text};
    margin-bottom: 10px;
  `
  const ButtonButtonItemThumbnail = styled.ImageBackground`
    flex: 1;
    height: 180px;
  `;

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
        {thumbnail ? (
          <ButtonButtonItemThumbnail
            source={{uri: thumbnail}}
            resizeMode="cover"
            imageStyle={{ borderRadius: 10}}
          />
        ):null}
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

/* ButtonBox */
export const ButtonPlayer = (props: any) => {

  const { thumbnail, gender, onPress, style, active } = props;

  const ButtonPlayerImage = styled.ImageBackground`
    flex: 1;
    height: 180px;
  `;

  const ButtonPlayerContainer = styled.TouchableHighlight`
    flex: 1;
    padding: 20px;
    height: 180px;
  `;

  const ButtonPlayerContent = styled.View`
    display: flex;
  `;

  const ButtonPlayerGender = styled.View`
    backgroundColor: ${Color.green};
    borderRadius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    width: 140px;
  `
  const ButtonPlayerGenderLabel = styled.Text`
    font-weight: 400;
    font-size: 14px;
    color: ${active ? Color.white : Color.text};
  `

  return (
    <ButtonPlayerImage 
      source={{uri: props.thumbnail}}
      resizeMode="cover"
      imageStyle={{ borderRadius: 10}}
    > 
    <ButtonPlayerContainer
      underlayColor='rgba(73,182,77,1,0.9)'
      onPress={onPress}
    >
  
        <ButtonPlayerContent>
          <ButtonPlayerGender>
            <ButtonPlayerGenderLabel>{gender}</ButtonPlayerGenderLabel>
          </ButtonPlayerGender>
        </ButtonPlayerContent>
      
    </ButtonPlayerContainer>
    </ButtonPlayerImage>
  );
};

export const ButtonIcon = (props: any) => {
  const ButtonIconContainer = styled.TouchableHighlight`
    background-color: transparent;
    width: 42px;
    height: 42px;
    border-width: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  return (
    <ButtonIconContainer
      underlayColor='rgba(0,0,0,1,0.5)'
      onPress={props.onPress}
      style={props.style}
      variant={props.variant}
    >
      {props.children}
    </ButtonIconContainer>
  );
};