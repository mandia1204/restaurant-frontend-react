import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import InputText from '../controls/InputText';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const LoginForm = ({
  classes, values, handleChange, handleBlur, handleSubmit, isSubmitting, touched, errors,
}) => {
  const textProps = {
    onChange: handleChange, onBlur: handleBlur, errors, touched,
  };
  return (
    <form className={classes.container} onSubmit={handleSubmit} autoComplete="off">
      <h1>
        { 'Login please' }
      </h1>
      <Grid container direction="column">
        <Grid item>
          <InputText fieldName="userName" label="User name" value={values.userName} {...textProps} />
        </Grid>
        <Grid item>
          <InputText type="password" autoComplete="current-password" fieldName="password" label="Password" value={values.password} {...textProps} />
        </Grid>
        <Grid item>
          <Button color="primary" type="submit" disabled={isSubmitting}>
            { 'Login' }
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);
