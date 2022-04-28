import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

function LoginForm({
  classes, loginData, handleChange, handleBlur, handleSubmit, isSubmitting, touched, errors, //eslint-disable-line
}) {
  return (
    <form className={classes.container} onSubmit={handleSubmit} autoComplete="off">
      <h1>
        Login please
      </h1>
      <Grid container direction="column">
        <Grid item>
          <TextField
            label="User name"
            name="userName"
            className={classes.textField}
            value={loginData.userName}
            onChange={handleChange}
            onBlur={handleBlur}
            margin="normal"
          />
        </Grid>
        <Grid item>
          <TextField
            label="Password"
            name="password"
            className={classes.textField}
            value={loginData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            autoComplete="current-password"
            margin="normal"
          />
        </Grid>
        { touched.userName && errors.userName && (
          <div>
            {errors.userName}
          </div>
        )}
        { touched.password && errors.password && (
          <div>
            {errors.password}
          </div>
        )}
        <Grid item>
          <Button color="primary" type="submit" disabled={isSubmitting}>
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default withStyles(styles)(LoginForm);
