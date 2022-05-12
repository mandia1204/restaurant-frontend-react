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

export function selectUsers(store: AppStore) {
  return store.users;
}

export function selectRoles(store: AppStore) {
  return store.roles;
}

export function selectSettingsMenuChanged(store: AppStore) {
  return store.events.settingsMenuChanged?.payload;
}
