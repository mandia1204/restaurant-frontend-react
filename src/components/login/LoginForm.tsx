import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { FormikProps } from 'formik';
import { Auth } from '@aws-amplify/auth';
import InputText from '../controls/InputText';
import LoginCredentials from '../../types/LoginCredentials';

const styles = createStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

const LoginForm = (props: FormikProps<LoginCredentials> & WithStyles<typeof styles>) => {
  const { classes, handleChange, handleBlur, isSubmitting, values, handleSubmit, errors, touched } = props;
  const textProps = { onChange: handleChange, onBlur: handleBlur, errors, touched };
  return (
    <form className={classes.container} onSubmit={handleSubmit} autoComplete="off">
      <h1>
        Login please
      </h1>
      <Grid container direction="column">
        <Grid item>
          <InputText fieldName="userName" label="User name" value={values.userName} {...textProps} />
        </Grid>
        <Grid item>
          <InputText
            type="password"
            autoComplete="current-password"
            fieldName="password"
            label="Password"
            value={values.password}
            {...textProps}
          />
        </Grid>
        <Grid item>
          <Button color="primary" type="submit" disabled={isSubmitting}>
            Login
          </Button>
        </Grid>
      </Grid>
      <Button color="primary" onClick={() => Auth.federatedSignIn()}>
            Login with Cognito
      </Button>
    </form>
  );
};

export default withStyles(styles)(LoginForm);
