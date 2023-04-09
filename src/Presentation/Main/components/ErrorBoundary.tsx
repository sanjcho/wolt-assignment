import { Regular } from "@DesignSystem";
import React, { Component, ErrorInfo, ReactNode } from "react";
import styled from "styled-components/native";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <CenterContainer>
          <Regular>Sorry.. some error has occurred. Please, try again</Regular>
        </CenterContainer>
      );
    }

    return this.props.children;
  }
}

const CenterContainer = styled.View({
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
});
