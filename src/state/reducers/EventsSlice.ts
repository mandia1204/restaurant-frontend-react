import { createSlice, createAction } from '@reduxjs/toolkit';
import { AppEvents } from '../../types/Events';

const INITIAL_STATE: AppEvents = {
  notifications: null,
  settingsMenuChanged: null,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState: INITIAL_STATE,
  reducers: {
    sendNotification(state, action) {
      state.notifications = action.payload;
    },
    updateSettingsMenu(state, action) {
      state.settingsMenuChanged = action.payload;
    },
  },
});

export const sendNotification = createAction('events/sendNotification', (ev) => {
  const id = `msg:${Math.floor(Math.random() * 10000)}`;
  return { payload: { id, payload: ev } };
});

export const { updateSettingsMenu } = eventsSlice.actions;

export default eventsSlice.reducer;
