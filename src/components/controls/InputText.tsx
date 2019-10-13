import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import get from 'lodash/get';

const styles = ({ spacing }: Theme) => createStyles({
  textField: {
    marginLeft: spacing(),
    marginRight: spacing(),
  },
});

interface InputProps {
  classes: any;
  fieldName: string;
  errors: any;
  touched: any;
  label: string;
  value: string;
  type?: string;
  autoComplete?: string;
  disabled?: boolean;
}

const InputText = (props: InputProps) => {
  const { errors, fieldName, touched, classes, disabled, ...rest } = props;
  const fieldHasError = (field: string) => (field.indexOf('.') !== -1 ? get(touched, field) : touched[field])
    && (errors[field]
    && errors[field].length > 0);
  return (
    <TextField
      error={fieldHasError(fieldName)}
      name={fieldName}
      className={classes.textField}
      margin="normal"
      helperText={errors[fieldName]}
      disabled={disabled}
      {...rest}
    />
  );
};

export default withStyles(styles)(InputText);
