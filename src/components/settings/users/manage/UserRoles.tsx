import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { Field, FieldProps } from 'formik';
import { Role } from '../../../../types/User';

interface Props {
  userRoles: Role[];
}

const checkComponent = ({ field }: FieldProps) => (
  <Checkbox
    checked={field.value}
    onChange={field.onChange}
    name={field.name}
  />
);

const UserRoles = ({ userRoles }: Props) => (
  <List>
    {userRoles.map((role, index) => (
      <ListItem key={role.id} role={undefined} dense>
        <Field key={role.id} name={`user.roles.${index}.selected`} component={checkComponent} />
        <ListItemText primary={role.roleName} />
      </ListItem>
    ))}
  </List>
);

export default UserRoles;
