import {
  Colors,
  ERound,
  ESpace,
  EShadow,
  makeShadow,
  SCREEN_WIDTH,
} from "@DesignSystem";
import { Platform, SafeAreaView as RNSafeAreaView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const PlatformSafeAreaView =
  Platform.OS === "android" ? SafeAreaView : RNSafeAreaView;
export const SafeAreaContainer = styled.View({
  flex: 1,
  backgroundColor: Colors.Grey2,
  alignItems: "center",
});

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
