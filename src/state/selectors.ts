import { AppStore } from "../types/AppStore";

export function selectAppState(store: AppStore) {
  return store.appState;
}