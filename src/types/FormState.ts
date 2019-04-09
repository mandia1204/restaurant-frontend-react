interface FormState {
  isSubmitting: boolean;
  status: string;
  error?: string;
  newId: string;
  isEdit: boolean;
}

export default FormState;
