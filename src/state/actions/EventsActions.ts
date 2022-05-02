import { createActions } from 'reduxsauce';
import { NotificationMessage } from '../../types/components/Notification';

interface EventsActions {
  sendNotification(ev: NotificationMessage): any;
}

const { Types, Creators } = createActions<any, EventsActions>({
  sendNotification: (ev: NotificationMessage): any => {
    const id = `msg:${Math.floor(Math.random() * 10000)}`;
    return { type: 'SEND_NOTIFICATION', ev: { id, payload: ev } };
  },
}, { prefix: '' });

const Actions = {
  Types,
  Creators,
};

export default Actions;
