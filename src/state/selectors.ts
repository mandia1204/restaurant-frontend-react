import { AppStore } from '../types/AppStore';

export function selectAppState(store: AppStore) {
  return store.appState;
}

export function selectNotificationEvents(store: AppStore) {
  return store.events.notifications;
}

export function selectEvents(store: AppStore) {
  return store.events;
}
