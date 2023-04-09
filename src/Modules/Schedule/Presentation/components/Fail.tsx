import { ESpace, Regular } from "@DesignSystem";
import React from "react";
import styled from "styled-components/native";
export const Fail = () => {
  return (
    <FailContainer>
      <Regular>
        Sorry, but your url returns bad responce. Please, double check it and
        try again.
      </Regular>
    </FailContainer>
  );
};

const FailContainer = styled.View({
  alignItems: "center",
  justifyContwnt: "center",
  flex: 1,
  padding: ESpace.s12,
});
