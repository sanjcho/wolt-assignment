import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH } from "@DesignSystem";
import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

type Props = {
  isLoading: boolean;
};
const _FullscreenLoader: React.FC<Props> = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }
  return (
    <AbsoluteBlock>
      <ActivityIndicator />
    </AbsoluteBlock>
  );
};

export const FullscreenLoader = React.memo(_FullscreenLoader);

const AbsoluteBlock = styled.View({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  alignItems: "stretch",
  justifyContent: "center",
  alignSelf: "stretch",
  backgroundColor: Colors.Grey3Transparent,
});
