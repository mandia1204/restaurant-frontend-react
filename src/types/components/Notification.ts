import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';

export const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

export interface NotificationWrapperProps {
  className?: string;
  message?: string;
  onClose?: () => void;
  variant: keyof typeof variantIcon;
}

export interface NotificationProps {
  autoHideDuration?: number;
}

export interface NotificationMainProps extends NotificationProps {
  message: string;
  variant: keyof typeof variantIcon;
}

export interface NotificationMainState {
  open: boolean;
}

export interface NotificationMessage {
  message: string;
  variant: keyof typeof variantIcon;
}

export interface NotificationQueueItem extends NotificationMessage {
  id: string
}

export interface NotificationState {
  queue: NotificationQueueItem[]
}
