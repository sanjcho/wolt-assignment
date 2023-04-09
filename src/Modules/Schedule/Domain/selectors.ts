import { State } from "./types";

export const dataSelector = (state: State) => state.data;
export const stateTypeSelector = (state: State) => state.type;
