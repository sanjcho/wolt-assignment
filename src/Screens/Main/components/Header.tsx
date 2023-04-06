import { Colors, ESize, ESpace, Title, ELineHeight } from "@DesignSystem";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Header = () => {
  return (
    <>
      <HeaderRow>
        <IconWrapper>
          <Ionicons name={"time"} color={Colors.Grey3} size={ESize.s24} />
        </IconWrapper>
        <Title numberOfLines={1}>{"Opening Hours"}</Title>
      </HeaderRow>
      <Delimiter />
    </>
  );
};

const HeaderRow = styled.View({
  flexDirection: "row",
});

const Delimiter = styled.View({
  borderBottomWidth: StyleSheet.hairlineWidth * 2,
  color: Colors.Black,
  flexDirection: "row",
  flexGrow: 1,
  marginTop: ESpace.s12,
});

const IconWrapper = styled.View({
  height: ELineHeight.lh30,
  justifyContent: "center",
  paddingHorizontal: ESpace.s4,
  marginRight: ESpace.s8,
});
