import { localStorageProxy } from "../lib/localStorage"
import { reactive } from "vue";

import { Logger } from "../lib/Logger";

function loadPersistedData(state) {
  const draftState = reactive({ ...state });
  Object.keys(draftState).forEach((key) => {
    const storedData = localStorageProxy.getItem(`hobi-${key}`);

    if (storedData) {
      draftState[key] = storedData;
    }
  });
  return { ...draftState };
}

function persistData(name, value) {
  Logger.logInfo("[PersistComponentState] Add item to localStorage:", name, value);
  localStorageProxy.setItem(`hobi-${name}`, value);
}

function resetPersistedData(state) {
  Object.keys(state).forEach((key) => {
    localStorageProxy.removeItem(`hobi-${key}`);
  });
}

export function usePersistComponentState() {
  return {
    loadPersistedData,
    persistData,
    resetPersistedData,
  };
}
