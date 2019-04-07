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

const checkChange = ({ field, form }: FieldProps) => (e: React.ChangeEvent<any>) => {
  form.setFieldTouched(field.name, true, true);
  field.onChange(e);
};

const checkComponent = ({ field, form }: FieldProps) => (
  <Checkbox
    checked={field.value}
    onChange={checkChange({ field, form })}
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
