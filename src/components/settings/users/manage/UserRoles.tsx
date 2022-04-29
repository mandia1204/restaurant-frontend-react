import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
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

function UserRoles({ userRoles }: Props) {
  return (
    <List>
      {userRoles.map((role, index) => (
        <ListItem key={role.id} role={undefined} dense>
          <Field key={role.id} name={`user.roles.${index}.selected`} component={checkComponent} />
          <ListItemText primary={role.roleName} />
        </ListItem>
      ))}
    </List>
  );
}

export default UserRoles;
