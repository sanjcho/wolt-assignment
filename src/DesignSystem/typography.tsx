import styled from "styled-components/native";

import { Colors } from "./colors";

export const Title = styled.Text({
  fontFamily: "Roboto-Bold",
  fontSize: 24,
  lineHeight: 30,
  color: Colors.Black,
});
export const Regular = styled.Text({
  fontFamily: "Roboto-Regular",
  fontSize: 16,
  lineHeight: 22,
  color: Colors.Black,
});

export const RegularGrey = styled.Text({
  fontFamily: "Roboto-Regular",
  fontSize: 16,
  lineHeight: 22,
  color: Colors.Grey3,
});

export const Medium = styled.Text({
  fontFamily: "Roboto-Medium",
  fontSize: 16,
  lineHeight: 22,
  color: Colors.Black,
});
export const Success = styled.Text({
  fontFamily: "Roboto-Bold",
  fontSize: 12,
  lineHeight: 16,
  color: Colors.Green,
});

export enum ELineHeight {
  lh30 = 30,
  lh22 = 22,
  lh16 = 16,
}
