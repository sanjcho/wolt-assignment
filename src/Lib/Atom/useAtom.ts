import { useEffect, useState } from "react";

import type { ReadonlyAtom } from "./types";

type Selector<T, K> = (state: T, prevValue?: K) => K;

export const defaultSelector = <T>(state: T) => state;

export const useAtom = <AtomState, SelectedState = AtomState>(
  passedAtom: ReadonlyAtom<AtomState>,
  select: Selector<AtomState, SelectedState> = defaultSelector as Selector<
    AtomState,
    SelectedState
  >,
  deps: readonly unknown[] = []
) => {
  const [state, setState] = useState<SelectedState>(() =>
    select(passedAtom.deref())
  );

  useEffect(() => {
    setState((value) => select(passedAtom.deref(), value));
    const listener = (next: AtomState) => {
      setState((prevValue) => select(next, prevValue));
    };

    passedAtom.addListener(listener);

    return () => {
      passedAtom.removeListener(listener);
    };
  }, deps);

  return state;
};
