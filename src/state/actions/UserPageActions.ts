import { createActions } from 'reduxsauce';

interface UserPageActions {
  setFormSubmitting(isSubmitting: boolean): any;
  formSubmitSuccess(newId: string): any;
  clearForm(): any;
  setIsEdit(isEdit: boolean): any;
  setNewId(newId: string): any;
}

const { Types, Creators } = createActions<any, UserPageActions>({
  setFormSubmitting: ['isSubmitting'],
  formSubmitSuccess: ['newId'],
  clearForm: null,
  setIsEdit: ['isEdit'],
  setNewId: ['newId'],
}, { prefix: '' });

const Actions = {
  Types,
  Creators,
};

export default Actions;
