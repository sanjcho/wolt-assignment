import { Atom, Listener } from "@Lib";

export const atom = <S>(initialState: S): Atom<S> => {
  let value = initialState;
  let listeners = [] as Listener<S>[];

  const transactionFn = (next: S) => {
    if (next === value) {
      return;
    }

    const prev = value;
    value = next;
    listeners.forEach((listener) => listener(next, prev));
  };

  const thisAtom: Atom<S> = {
    listenersCount: () => listeners.length,
    deref: () => value,
    reset: (next: S) => {
      transactionFn(next);

      return thisAtom;
    },
    swap: (updater, ...args) => {
      const next = updater(value, ...args);
      transactionFn(next);

      return thisAtom;
    },
    addListener: (listener: Listener<S>) => {
      listeners.push(listener);

      return thisAtom;
    },
    removeListener: (listener: Listener<S>) => {
      listeners = listeners.filter((l) => l !== listener);

      return thisAtom;
    },
    toString: () => `Atom(${JSON.stringify(value)})`,
    subscribe: (listener) => {
      thisAtom.addListener(listener);

      return () => thisAtom.removeListener(listener);
    },
  };

  return thisAtom;
};
