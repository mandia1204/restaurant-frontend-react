import React from 'react';
import ListItem from '@mui/material/ListItem';
import { SxProps } from '@mui/material/styles';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
  onClick?: any;
  sx?: SxProps;
}

export default function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to, onClick, sx } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'innerRef' | 'to'>>(
      (itemProps, ref) => (
        <RouterLink to={to} {...itemProps} ref={ref} />
      ),
    ),
    [to],
  );

  return (
    <ListItem sx={sx} onClick={onClick} button component={renderLink}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItem>
  );
}
