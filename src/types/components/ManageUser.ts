import { Dispatch } from 'react';
import User, { Role } from '../User';

export interface FormValues {
  user: FormUser;
  continueAdding: boolean;
}

export interface FormUser extends User {
  roles: FormRole[];
}

export interface FormRole extends Role {
  selected: boolean;
}

export interface Props {
  match: any;
  user: User;
  dispatch: Dispatch<any>;
  isSubmitting: boolean;
  newId?: number;
  isEdit: boolean;
  roles: Role[];
}
