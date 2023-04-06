import { Platform } from "react-native";
import type { ShadowStyleIOS } from "react-native";

export enum EShadow {
  S = "S",
}

export const ShadowsSizes: Record<EShadow, number> = {
  [EShadow.S]: 2,
};

type ShadowIOS = ShadowStyleIOS & {
  shadowColor?: string;
  overflow: "visible";
};

type ShadowAndroid = {
  shadowColor?: string;
  elevation: string;
};

export type Shadow = ShadowIOS | ShadowAndroid;

export const DEFAULT_SHADOW_COLOR = Platform.select({
  android: "rgba(36, 40, 43, 0.8)",
  ios: "rgba(52,52,52, 0.14)",
});

const ShadowDictionaryIOS: Record<EShadow, ShadowStyleIOS> = {
  [EShadow.S]: {
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
  },
};

export const makeShadowIOS = (
  shadow: EShadow,
  shadowColor: string = DEFAULT_SHADOW_COLOR as string
): ShadowIOS => ({
  ...ShadowDictionaryIOS[shadow],
  shadowColor,
  overflow: "visible",
});

const makeShadowAndroid = (
  shadow: EShadow,
  shadowColor: string = DEFAULT_SHADOW_COLOR as string
): ShadowAndroid => ({
  elevation: `${ShadowsSizes[shadow]}`,
  shadowColor,
});

export const makeShadow = (
  shadow?: EShadow,
  color: string = DEFAULT_SHADOW_COLOR as string
): Shadow | object =>
  shadow
    ? Platform.select<Shadow>({
        ios: makeShadowIOS(shadow, color),
        android: makeShadowAndroid(shadow, color),
      }) || {}
    : {};
