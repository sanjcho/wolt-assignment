import {
  Colors,
  ESize,
  ESpace,
  Medium,
  Regular,
  RegularGrey,
  Success,
} from "@DesignSystem";
import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

type Props = {
  dayName: string;
  label?: string;
  workingHours: string | null;
};

export const DayRow = ({ dayName, label, workingHours }: Props) => {
  return (
    <Row>
      <LeftSide>
        <Medium numberOfLines={1}>{dayName}</Medium>
        {label && <SuccessText numberOfLines={1}>{label}</SuccessText>}
      </LeftSide>
      {workingHours ? (
        <Regular>{workingHours}</Regular>
      ) : (
        <RegularGrey>Closed</RegularGrey>
      )}
    </Row>
  );
};

const Row = styled.View({
  flexDirection: "row",
  justifyContent: "space-between",
  height: ESize.s36,
  borderBottomWidth: StyleSheet.hairlineWidth * 2,
  borderColor: Colors.Grey2,
  alignItems: "center",
});

const LeftSide = styled.View({
  flexDirection: "row",
  alignItems: "center",
});

const SuccessText = styled(Success)({
  marginLeft: ESpace.s12,
});
