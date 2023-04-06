import { DayRow } from "@Screens/Main/components/DayRow";
import { Header } from "@Screens/Main/components/Header";
import React from "react";
import { ScrollView } from "react-native";

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
            <DayRow dayName={"Monday"} workingHours={"10 AM - 6 PM"} />
            <DayRow dayName={"Tuesday"} workingHours={null} />
            <DayRow dayName={"Wednesday"} workingHours={"10 AM - 6 PM"} />
            <DayRow
              dayName={"Thursday"}
              label={"TODAY"}
              workingHours={"12 AM - 10 PM"}
            />
            <DayRow dayName={"Friday"} workingHours={"10 AM - 6 PM"} />
            <DayRow dayName={"Saturday"} workingHours={"10 AM - 6 PM"} />
            <DayRow dayName={"Sunday"} workingHours={"10 AM - 6 PM"} />
          </BodyContainer>
        </ScrollView>
      </PlatformSafeAreaView>
    </SafeAreaContainer>
  );
};
