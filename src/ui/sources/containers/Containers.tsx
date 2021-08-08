import React from "react";
import { View, ScrollView } from "react-native";
import styled from "styled-components/native";
import { Color } from "../colors/Colors";

///////////////////////////
/* Container */

export const Container = (props: any) => {
  const { backgroundImage, noBorder, color } = props;

  const ContainerScroll = styled.ScrollView`
    padding: 0;
  `;

  const ContainerView = styled.View`
    flex: 1;
    width: 100%;
  `;

  const bgColor = color ? `${color}` : Color.white;

  return (
    <View
      style={{
        display: "flex",
        height: "100%",
      }}
    >
      <ContainerView
        style={{
          backgroundColor: bgColor,
        }}
      >
        <ContainerScroll
          style={{
            flex: 1,
            padding: 20,
          }}
        >
          {props.children}
          <View style={{ height: 30 }}></View>
        </ContainerScroll>
        <View
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            padding: 10,
          }}
        >
          {props.bottom}
        </View>
      </ContainerView>
    </View>
  );
};

///////////////////////////
/* Section */

export const Section = (props: any) => {
  const SectionContainer = styled.View`
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  `;

  return (
    <SectionContainer style={props.style}>{props.children}</SectionContainer>
  );
};

///////////////////////////
/* Row */

export const Row = (props: any) => {
  const RowContainer = props.type
    ? styled.View`
        display: flex;
        flex-direction: row;
        /*align-items: center;
      justify-content: center;*/
        align-items: flex-start;
        border-bottom-color: ${Color.grayHighlight};
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom-width: 1px;
        margin-left: -20px;
        margin-right: -20px;
      `
    : styled.View`
        margin-bottom: 20px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        /*align-items: center;
      justify-content: center;*/
      `;

  return (
    <RowContainer style={props.style} width={props.width} align={props.align}>
      {props.children}
    </RowContainer>
  );
};

///////////////////////////
/* Col */

export const Col = (props: any) => {
  const ColContainer = styled.View`
    display: flex;
    align-items: ${props.align ? props.align : "flex-start"};
    ${props.width ? `width: ` + props.width + `%` : `flex: 1 `};
  `;
  return (
    <ColContainer style={props.style} width={props.width} align={props.align}>
      {props.children}
    </ColContainer>
  );
};
