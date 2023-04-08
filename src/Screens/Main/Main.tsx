import React from "react";
import { ScrollView } from "react-native";

import { Body } from "./components/Body";
import { Header } from "./components/Header";
import { useInitialize } from "./hooks/useInitialize";
import {
  BodyContainer,
  PlatformSafeAreaView,
  SafeAreaContainer,
} from "./styles";

export const Main = () => {
  const { appReady } = useInitialize();
  if (!appReady) {
    return null;
  }

  return (
    <SafeAreaContainer>
      <PlatformSafeAreaView>
        <ScrollView>
          <BodyContainer>
            <Header />
            <Body />
          </BodyContainer>
        </ScrollView>
      </PlatformSafeAreaView>
    </SafeAreaContainer>
  );
};
