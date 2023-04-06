import { Dimensions } from "react-native";

export enum ESize {
  s16 = 16,
  s24 = 24,
  s28 = 28,
  s32 = 32,
  s36 = 36,
}

export enum ESpace {
  s2 = 2,
  s4 = 4,
  s8 = 8,
  s12 = 12,
  s16 = 16,
  s20 = 20,
  s24 = 24,
  s28 = 28,
  s32 = 32,
}

export enum ERound {
  r16 = 16,
  r24 = 24,
}

export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;
