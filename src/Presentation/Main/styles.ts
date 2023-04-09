import { Colors } from "@DesignSystem";
import { Platform, SafeAreaView as RNSafeAreaView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const PlatformSafeAreaView =
  Platform.OS === "android" ? SafeAreaView : RNSafeAreaView;
export const Container = styled.View({
  flex: 1,
  backgroundColor: Colors.Grey2,
  alignItems: "center",
});
