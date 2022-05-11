import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { FormikProps } from 'formik';
import { Auth } from '@aws-amplify/auth';
import { SxProps } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import InputText from '../controls/InputText';
import LoginCredentials from '../../types/LoginCredentials';

const containerStyle: SxProps = {
  display: 'flex',
  flexWrap: 'wrap',
  borderColor: 'red',
};

function LoginForm(props: FormikProps<LoginCredentials>) {
  const { handleChange, handleBlur, isSubmitting, values, handleSubmit, errors, touched } = props;
  const textProps = { onChange: handleChange, onBlur: handleBlur, errors, touched };
  return (
    <Box component="form" sx={containerStyle} onSubmit={handleSubmit} autoComplete="off">
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
          <div>
            <Button color="primary" variant="outlined" type="submit" disabled={isSubmitting}>
              Login
            </Button>
            <Button color="primary" variant="outlined" onClick={() => Auth.federatedSignIn()}>
              Login with Cognito
            </Button>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoginForm;
