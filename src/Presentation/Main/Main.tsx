import { initScheduleModule } from "@Modules/Schedule/scheduleModule";
import React from "react";

import { useInitialize } from "./hooks/useInitialize";
import { Container, PlatformSafeAreaView } from "./styles";

export const Main = () => {
  const { appReady } = useInitialize();
  if (!appReady) {
    return null;
  }

  const {
    Presentation,
    Model: { Schedule },
  } = initScheduleModule();

  return (
    <Container>
      <PlatformSafeAreaView>
        <Presentation.Schedule model={Schedule} />
      </PlatformSafeAreaView>
    </Container>
  );
};
