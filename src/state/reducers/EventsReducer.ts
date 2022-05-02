import { createReducer } from 'reduxsauce';
import Actions from '../actions/EventsActions';
import { AppEvents } from '../../types/Events';

const { Types } = Actions;
const INITIAL_STATE: AppEvents = {
  notifications: null,
};

interface ReduceMethod {
  (state: AppEvents, action: any): AppEvents;
}

const sendNotification: ReduceMethod = (state, action) => ({ ...state, notifications: action.ev });

export const EventsReducer = createReducer(
  INITIAL_STATE,
  {
    [Types.SEND_NOTIFICATION]: sendNotification,
  },
);
