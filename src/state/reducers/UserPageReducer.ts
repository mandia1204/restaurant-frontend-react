// @ts-ignore
import { createReducer } from 'reduxsauce';
import Actions from '../actions/UserPageActions';
import FormState from '../../types/FormState';

const { Types } = Actions;
const INITIAL_STATE: FormState = { isSubmitting: false, status: 'init', newId: '', isEdit: false };

interface ReduceMethod {
  (state: FormState, action: any): FormState;
}

const setFormSubmitting: ReduceMethod = (state, action) => ({ ...state, isSubmitting: action.isSubmitting });
const formSubmitSuccess: ReduceMethod = (state, action) => (
  {
    ...state,
    status: 'form_complete',
    error: '',
    isSubmitting: false,
    newId: action.newId,
  });
const clearForm: ReduceMethod = () => INITIAL_STATE;
const setIsEdit: ReduceMethod = (state, action) => ({ ...state, isEdit: action.isEdit });
const setNewId: ReduceMethod = (state, action) => ({ ...state, newId: action.newId });

export const UserPageReducer = createReducer(INITIAL_STATE,
  {
    [Types.SET_FORM_SUBMITTING]: setFormSubmitting,
    [Types.FORM_SUBMIT_SUCCESS]: formSubmitSuccess,
    [Types.CLEAR_FORM]: clearForm,
    [Types.SET_IS_EDIT]: setIsEdit,
    [Types.SET_NEW_ID]: setNewId,
  });
