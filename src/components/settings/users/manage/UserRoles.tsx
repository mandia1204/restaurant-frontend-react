import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { Role } from '../../../../types/User';

interface Props {
  roles: Role[];
  userRoles: Role[];
}

const UserRoles = ({ roles, userRoles }: Props) => (
  <List>
    {roles.map(role => (
      <ListItem key={role.id} role={undefined} dense>
        <Checkbox
          checked={userRoles.some(r => r.id === role.id)}
          tabIndex={-1}
          disableRipple
        />
        <ListItemText primary={role.roleName} />
      </ListItem>
    ))}
  </List>
);

export default UserRoles;
