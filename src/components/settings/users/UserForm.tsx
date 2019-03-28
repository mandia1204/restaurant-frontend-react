import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { FormikProps } from 'formik';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputText from '../../controls/InputText';
import User from '../../../types/User';

const styles = createStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

const UserForm = (props: FormikProps<User> & WithStyles<typeof styles>) => {
  const { classes, handleChange, handleBlur, isSubmitting, values, handleSubmit, errors, touched } = props;
  const textProps = { onChange: handleChange, onBlur: handleBlur, errors, touched };
  return (
    <form className={classes.container} onSubmit={handleSubmit} autoComplete="off">
      <Grid container direction="column">
        <Grid item>
          <InputText fieldName="userName" label="User name" value={values.userName} {...textProps} />
        </Grid>
        <Grid item>
          <InputText fieldName="name" label="Name" value={values.name} {...textProps} />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={(<Checkbox name="isAdmin" checked={values.isAdmin} onChange={handleChange} />)}
            label="Is Admin"
          />
        </Grid>
        <Grid item>
          <Button color="primary" type="submit" disabled={isSubmitting}>
            { 'Save' }
          </Button>
          <Button color="primary">
            { 'Cancel' }
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default withStyles(styles)(UserForm);
