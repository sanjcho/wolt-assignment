import {
  Colors,
  ERound,
  EShadow,
  ESize,
  ESpace,
  makeShadow,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "@DesignSystem";
import styled from "styled-components/native";

const TARGET_HORIZONTAL_SPACE = ESpace.s8;
const MIN_HORIZONTAL_SPACE = ESpace.s2;
const TARGET_SHEET_WIDTH = 350;
const [width, marginHorizontal] =
  SCREEN_WIDTH >= TARGET_SHEET_WIDTH + TARGET_HORIZONTAL_SPACE * 2
    ? [TARGET_SHEET_WIDTH, TARGET_HORIZONTAL_SPACE]
    : [SCREEN_WIDTH - MIN_HORIZONTAL_SPACE * 2, MIN_HORIZONTAL_SPACE];

export const BodyContainer = styled.View({
  padding: ESpace.s32,
  width,
  backgroundColor: Colors.White,
  borderRadius: ERound.r16,
  marginHorizontal,
  marginVertical: ESpace.s8,
  ...makeShadow(EShadow.S),
});

export const InputContainer = styled.View<{ isInputValid: boolean }>(
  ({ isInputValid }) => ({
    width,
    padding: ESpace.s12,
    backgroundColor: Colors.White,
    borderRadius: ERound.r16,
    borderColor: isInputValid ? Colors.Transparent : Colors.Danger,
    borderWidth: 1,
    marginHorizontal,
    marginVertical: ESpace.s8,
    ...makeShadow(EShadow.S),
  })
);

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: { alignItems: "center", minHeight: SCREEN_HEIGHT },
  contentOffset: { y: ESize.s60, x: 0 },
})({
  width: SCREEN_WIDTH,
});
