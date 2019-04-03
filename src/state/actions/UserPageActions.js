import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  setFormSubmitting: ['isSubmitting'],
  formSubmitSuccess: ['newId'],
  clearForm: null,
  setIsEdit: ['isEdit'],
  setNewId: ['newId'],
}, {});

const Actions = {
  Types,
  Creators,
};

export default Actions;
