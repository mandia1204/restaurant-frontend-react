import React from 'react';
import TextField from '@mui/material/TextField';
import { SxProps } from '@mui/material/styles';
import get from 'lodash/get';

const textFieldStyles: SxProps = {
  ml: 1,
  mr: 1,
};

interface InputProps {
  fieldName: string;
  errors: any;
  touched: any;
  label: string;
  value: string;
  type?: string;
  autoComplete?: string;
  disabled?: boolean;
}

function InputText(props: InputProps) {
  const { errors, fieldName, touched, disabled, ...rest } = props;
  const fieldHasError = (field: string) => (field.indexOf('.') !== -1 ? get(touched, field) : touched[field])
    && (errors[field]
    && errors[field].length > 0);
  return (
    <TextField
      id={fieldName}
      error={fieldHasError(fieldName)}
      name={fieldName}
      sx={textFieldStyles}
      margin="normal"
      helperText={errors[fieldName]}
      disabled={disabled}
      {...rest}
    />
  );
}

export default InputText;
