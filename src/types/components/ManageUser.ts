import { Dispatch } from 'react';
import User, { Role } from '../User';

export interface FormValues {
  user: User;
  continueAdding: boolean;
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
