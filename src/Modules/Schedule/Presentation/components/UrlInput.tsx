import { Input } from "@DesignSystem";
import React from "react";

import { InputContainer } from "../styles";

type Props = {
  onChangeText: (val: string) => void;
  isInputValid: boolean;
  onSubmitPress: () => Promise<void>;
};
const _UrlInput: React.FC<Props> = ({
  onChangeText,
  isInputValid,
  onSubmitPress,
}) => {
  return (
    <InputContainer isInputValid={isInputValid}>
      <Input onChangeText={onChangeText} onSubmitEditing={onSubmitPress} />
    </InputContainer>
  );
};

export const UrlInput = React.memo(_UrlInput);
