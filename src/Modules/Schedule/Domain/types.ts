import { ReadonlyAtom } from "@Lib";

import { ScheduleDTO } from "../Repository/types";

export type Model = {
  atom: ReadonlyAtom<State>;
  fetchNewSchedule: (url: string) => Promise<void>;
};
export enum EStateType {
  Init = "init",
  Loading = "Loading",
  Loaded = "Loaded",
  Fail = "Fail",
}

export type State = {
  type: EStateType;
  data: ScheduleDTO;
  error: string | undefined;
};
