import { Colors, ESize, Title } from "@DesignSystem";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import React from "react";

import { useInitialize } from "./hooks/useInitialize";
import { Container } from "./styles";

export const Main = () => {
  const { appReady } = useInitialize();
  if (!appReady) {
    return null;
  }
  return (
    <Container>
      <Title>Open up App.js to start working on your app!1111</Title>
      <Ionicons name={"time"} color={Colors.Grey3} size={ESize.s24} />
      <StatusBar style="auto" />
    </Container>
  );
};
