import { FormValues } from '../../../../types/components/ManageUser';

const validate = ({ user }: FormValues) => {
  const errors: any = {};

  if (!user.userName) errors['user.userName'] = 'User name required';
  if (!user.name) errors['user.name'] = 'Name required';
  if (!user.roles.some((r) => r.selected)) errors['user.roles'] = 'Select at least one role.';
  return errors;
};

export default validate;
