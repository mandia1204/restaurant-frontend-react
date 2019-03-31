// @ts-ignore
import { createReducer } from 'reduxsauce';
import Actions from '../actions/UserPageActions';
import FormState from '../../types/FormState';

const { Types } = Actions;
const INITIAL_STATE: FormState = { isSubmitting: false, status: 'init', newId: 0 };

interface ReduceMethod {
  (state: FormState, action: any): FormState;
}

const setFormSubmitting: ReduceMethod = (state, action) => ({ ...state, isSubmitting: action.isSubmitting });
const formSubmitSuccess: ReduceMethod = (state, action) => (
  { status: 'form_complete',
    error: '',
    isSubmitting: false,
    newId: action.newId,
  });
const clearForm: ReduceMethod = () => INITIAL_STATE;

export const UserPageReducer = createReducer(INITIAL_STATE,
  {
    [Types.SET_FORM_SUBMITTING]: setFormSubmitting,
    [Types.FORM_SUBMIT_SUCCESS]: formSubmitSuccess,
    [Types.CLEAR_FORM]: clearForm,
  });
