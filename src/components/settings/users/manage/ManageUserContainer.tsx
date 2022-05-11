import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { withStyles, createStyles, WithStyles } from '@mui/styles';
import { Formik, FormikProps } from 'formik';
import { useParams } from 'react-router-dom';
import UserForm from './UserForm';
import { AppStore } from '../../../../types/AppStore';
import { updateUser } from '../../../../state/reducers/UsersSlice';
import { setNewId, setIsEdit, clearForm, setFormSubmitting } from '../../../../state/reducers/UserPageSlice';
import { sendNotification } from '../../../../state/reducers/EventsSlice';
import { Props as PageProps, FormValues } from '../../../../types/components/ManageUser';
import ManageUserLogic from './ManageUserLogic';
import userFormValidation from './userFormValidation';
import { withRouter } from '../../../../util/withRouter';

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
});

interface Props extends PageProps, WithStyles<typeof styles> { }

function ManageUserContainer(props: Props) {
  const { userId } = useParams();
  const { dispatch } = props;
  const formEl = useRef<FormikProps<any>>(null);
  const { newId, isEdit, status } = props;

  const notifySuccess = (message: string) => {
    dispatch(sendNotification({ message, variant: 'success' }));
  };
  const addNewUserSuccess = ({ continueAdding, user }: FormValues, { roles }: Props) => {
    if (continueAdding) {
      formEl?.current?.resetForm({ values: ManageUserLogic.getFormStateReset(roles, continueAdding) });
      dispatch(setNewId(''));
    } else {
      formEl?.current?.setValues({ user: { ...user, id: newId }, continueAdding: false });
      dispatch(setIsEdit(true));
    }
    notifySuccess('User added successfully!');
  };

  const updateUserSuccess = () => {
    notifySuccess('User updated successfully!');
  };

  useEffect(() => () => {
    dispatch(clearForm());
  }, []);

  useEffect(() => {
    if (userId) {
      dispatch(setIsEdit(true));
    }
  }, [userId]);

  useEffect(() => {
    if (newId && status === 'form_submit_success' && !isEdit) {
      addNewUserSuccess(formEl?.current?.values, props);
    } else if (isEdit && status === 'form_submit_success') {
      updateUserSuccess();
    }
  }, [newId, status]);

  const onSubmit = (values: FormValues) => {
    dispatch(setFormSubmitting(true));
    const user = ManageUserLogic.formatUser(values.user);
    dispatch(updateUser(user));
  };

  const { user, isSubmitting, classes, roles } = props;
  const formProps = { isEdit, roles, isSubmitting };
  const userRoles = ManageUserLogic.getUserRoles(roles, user.roles as string[]);
  return (
    <div className={classes.root}>
      <h2>{isEdit ? 'Edit' : 'Add'} User</h2>
      <Formik
        innerRef={formEl}
        initialValues={{ user: { ...user, roles: userRoles }, continueAdding: false }}
        onSubmit={onSubmit}
        validate={userFormValidation}
        validateOnChange={false}
      >
        {(fprops) => (
          <UserForm {...fprops} {...formProps} />
        )}
      </Formik>
    </div>
  );
}

const mapStateToProps = ({ users, userPage, roles }: AppStore, props: any) => {
  const id = ManageUserLogic.getUserId(props.router.params.userId, userPage.newId);
  const user = ManageUserLogic.getUser(id, users);
  return {
    user,
    isSubmitting: userPage.isSubmitting,
    newId: userPage.newId,
    isEdit: userPage.isEdit,
    status: userPage.status,
    roles,
  };
};

export default withStyles(styles)(withRouter(connect(mapStateToProps)(ManageUserContainer)));
