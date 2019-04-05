import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { FormikProps } from 'formik';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';
import InputText from '../../../controls/InputText';
import { FormValues } from '../../../../types/components/ManageUser';
import UserRoles from './UserRoles';
import { Role } from '../../../../types/User';

const styles = createStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

interface Props extends WithStyles<typeof styles> {
  isEdit: boolean;
  roles: Role[];
}

const UserForm = (props: FormikProps<FormValues> & Props) => {
  const { classes, handleChange, handleBlur, isSubmitting, isEdit, values, handleSubmit, errors, touched, roles } = props;
  const textProps = { onChange: handleChange, onBlur: handleBlur, errors, touched };
  const { user } = values;
  return (
    <form className={classes.container} onSubmit={handleSubmit} autoComplete="off">
      <Grid container direction="column">
        <Grid item>
          <InputText disabled fieldName="user.id" label="Id" value={user.id.toString()} {...textProps} />
        </Grid>
        <Grid item>
          <InputText disabled={isSubmitting} fieldName="user.userName" label="User name" value={user.userName} {...textProps} />
        </Grid>
        <Grid item>
          <InputText disabled={isSubmitting} fieldName="user.name" label="Name" value={user.name} {...textProps} />
        </Grid>
        <Grid item>
          <h3>Roles</h3>
          <UserRoles roles={roles} userRoles={user.roles} />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={(<Checkbox disabled={isSubmitting} name="user.isAdmin" checked={user.isAdmin} onChange={handleChange} />)}
            label="Is Admin"
          />
        </Grid>
        <Grid item>
          <Button color="primary" type="submit" disabled={isSubmitting}>Save</Button>
          <Button color="primary">
            <Link to="/settings/users">Cancel</Link>
          </Button>
          { isSubmitting ? <CircularProgress /> : ''}
          { !isEdit ? (
            <FormControlLabel
              control={(<Checkbox name="continueAdding" checked={values.continueAdding} onChange={handleChange} />)}
              label="Continue Adding"
            />
          ) : ''}
        </Grid>
      </Grid>
    </form>
  );
};

export default withStyles(styles)(UserForm);
