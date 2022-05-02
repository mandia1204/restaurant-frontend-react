export interface AppEvent {
  payload: any;
  id: string;
}

export interface AppEvents {
  notifications: AppEvent | null;
}
