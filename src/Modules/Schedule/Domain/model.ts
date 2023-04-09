import { atom } from "@Lib";
import { EStateType, Model, State } from "@Modules/Schedule/Domain/types";

import type { ScheduleDTO, ScheduleRepo } from "../Repository/types";

const InitialState = {
  type: EStateType.Init,
  data: require("../../../../data.json") as ScheduleDTO,
  error: undefined,
};

export const initModel = (repo: ScheduleRepo): Model => {
  const mainAtom = atom<State>(InitialState);
  return {
    atom: mainAtom,
    fetchNewSchedule: async (url: string) => {
      try {
        mainAtom.swap((state) => ({
          ...state,
          type: EStateType.Loading,
        }));
        const newData = await repo.getFile(url);
        mainAtom.swap(() => ({
          type: EStateType.Loaded,
          data: newData,
          error: undefined,
        }));
      } catch {
        mainAtom.swap((state) => ({
          ...state,
          type: EStateType.Fail,
          error: `error while fetching new schedule`,
        }));
      }
    },
  };
};
