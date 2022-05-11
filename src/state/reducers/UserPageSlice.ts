import { createSlice } from '@reduxjs/toolkit';
import FormState from '../../types/FormState';

const INITIAL_STATE: FormState = { isSubmitting: false, status: 'init', newId: '', isEdit: false };

const userPageSlice = createSlice({
  name: 'userPage',
  initialState: INITIAL_STATE,
  reducers: {
    setFormSubmitting(state, action) {
      state.isSubmitting = action.payload;
      state.status = action.payload ? '' : state.status;
    },
    formSubmitSuccess(state, action) {
      state.status = 'form_submit_success';
      state.error = '';
      state.isSubmitting = false;
      state.newId = action.payload;
    },
    clearForm() {
      return INITIAL_STATE;
    },
    setIsEdit(state, action) {
      state.isEdit = action.payload;
    },
    setNewId(state, action) {
      state.newId = action.payload;
    },
  },
});

export const { setFormSubmitting, formSubmitSuccess, clearForm, setIsEdit, setNewId } = userPageSlice.actions;
export default userPageSlice.reducer;
