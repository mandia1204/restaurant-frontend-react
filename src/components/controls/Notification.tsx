import React, { forwardRef, SyntheticEvent, useEffect } from 'react';
import clsx from 'clsx';
import CloseIcon from '@mui/icons-material/Close';
import { amber, green } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { NotificationWrapperProps, NotificationProps, NotificationState, variantIcon, NotificationMainState, NotificationMainProps } from '../../types/components/Notification';
import { selectNotificationEvents } from '../../state/selectors';

const useStyles1 = makeStyles((theme: Theme) => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const SnackbarContentWrapper = forwardRef((props: NotificationWrapperProps, ref : any) => {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (

    <SnackbarContent
      ref={ref}
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={(
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      )}
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
});

function NotificationMain({ autoHideDuration, message, variant }: NotificationMainProps) {
  const [state, setState] = React.useState<NotificationMainState>({ open: true });
  const onClose = (event?: SyntheticEvent<any> | Event, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }
    setState({ ...state, open: false });
  };
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={state.open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
    >
      <SnackbarContentWrapper
        onClose={onClose}
        variant={variant}
        message={message}
      />
    </Snackbar>
  );
}

function Notification({ autoHideDuration = 4000 }: NotificationProps) {
  const [state, setState] = React.useState<NotificationState>({ queue: [] });
  const event = useSelector(selectNotificationEvents);
  useEffect(() => {
    if (event) {
      // eslint-disable-next-line
      console.log('notification :>> ', event);
      setState((st) => ({ queue: [...st.queue, { id: event.id, message: event.payload.message, variant: event.payload.variant }] }));
    }
  }, [event]);
  return (
    <div>
      {state.queue.map((item) => <NotificationMain key={item.id} autoHideDuration={autoHideDuration} message={item.message} variant={item.variant} />)}
    </div>
  );
}

export default Notification;
