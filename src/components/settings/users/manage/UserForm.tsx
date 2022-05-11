import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { FormikProps } from 'formik';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';
import InputText from '../../../controls/InputText';
import { FormValues } from '../../../../types/components/ManageUser';
import UserRoles from './UserRoles';

interface Props {
  isEdit: boolean;
  errors: any;
}

function UserForm(props: FormikProps<FormValues> & Props) {
  const { handleChange, handleBlur, isSubmitting, isEdit, values, handleSubmit, errors, touched } = props;
  const textProps = { onChange: handleChange, onBlur: handleBlur, errors, touched };
  const { user } = values;
  return (
    <Box
      sx={{ display: 'flex',
        flexWrap: 'wrap' }}
      component="form"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
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
          <span className="validation-error">{errors['user.roles']}</span>
          <UserRoles userRoles={user.roles} />
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
    </Box>
  );
}

export default UserForm;
