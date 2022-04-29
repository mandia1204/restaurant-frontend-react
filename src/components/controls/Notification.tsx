import React, { SyntheticEvent } from 'react';
import clsx from 'clsx';
import CloseIcon from '@mui/icons-material/Close';
import { amber, green } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { NotificationWrapperProps, NotificationProps, NotificationState, variantIcon } from '../../types/components/Notification';

const { forwardRef, useImperativeHandle } = React;

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

function SnackbarContentWrapper(props: NotificationWrapperProps) {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
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
}

const Notification = forwardRef(({ autoHideDuration = 4000 }: NotificationProps, ref) => {
  const [state, setState] = React.useState<NotificationState>({ open: false, message: '', variant: 'info' });

  useImperativeHandle(ref, () => ({

    showNotification(message: string, variant: keyof typeof variantIcon) {
      setState({ open: true, message, variant });
    },
  }));

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
        horizontal: 'left',
      }}
      open={state.open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
    >
      <SnackbarContentWrapper
        onClose={onClose}
        variant={state.variant}
        message={state.message}
      />
    </Snackbar>
  );
});

export default Notification;
