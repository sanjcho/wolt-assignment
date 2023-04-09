import { parseSchedule, useAtom } from "@Lib";
import React, { useMemo } from "react";

import { Body } from "./components/Body";
import { Fail } from "./components/Fail";
import { FullscreenLoader } from "./components/FullscreenLoader";
import { Header } from "./components/Header";
import { UrlInput } from "./components/UrlInput";
import { useInputUrl } from "./hooks/useInputUrl";
import { BodyContainer, ScrollContainer } from "./styles";
import { dataSelector, stateTypeSelector } from "../Domain/selectors";
import { EStateType, Model } from "../Domain/types";

type Props = {
  model: Model;
};
const _Schedule: React.FC<Props> = ({ model }) => {
  const { atom, fetchNewSchedule } = model;
  const state = useAtom(atom);
  const { isInputValid, onChangeText, onSubmitPress } =
    useInputUrl(fetchNewSchedule);
  const [data, stateType] = useMemo(
    () => [dataSelector(state), stateTypeSelector(state)],
    [state]
  );
  const bodyData = useMemo(() => {
    return parseSchedule(data);
  }, [data]);

  return (
    <>
      <ScrollContainer>
        <UrlInput
          onChangeText={onChangeText}
          isInputValid={isInputValid}
          onSubmitPress={onSubmitPress}
        />
        <BodyContainer>
          <Header />
          {stateType === EStateType.Fail ? <Fail /> : <Body data={bodyData} />}
        </BodyContainer>
      </ScrollContainer>
      <FullscreenLoader isLoading={stateType === EStateType.Loading} />
    </>
  );
};
export const Schedule = React.memo(_Schedule);
