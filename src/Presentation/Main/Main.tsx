import { initScheduleModule } from "@Modules/Schedule/scheduleModule";
import { ErrorBoundary } from "@Presentation/Main/components/ErrorBoundary";
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
        <ErrorBoundary>
          <Presentation.Schedule model={Schedule} />
        </ErrorBoundary>
      </PlatformSafeAreaView>
    </Container>
  );
};
