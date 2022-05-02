import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { withStyles, createStyles, WithStyles } from '@mui/styles';
import { Formik, FormikProps } from 'formik';
import { useParams } from 'react-router-dom';
import UserForm from './UserForm';
import { AppStore } from '../../../../types/AppStore';
import Actions from '../../../../state/actions/UserActions';
import PageActions from '../../../../state/actions/UserPageActions';
import { Props as PageProps, FormValues } from '../../../../types/components/ManageUser';
import ManageUserLogic from './ManageUserLogic';
import userFormValidation from './userFormValidation';
import { withRouter } from '../../../../util/withRouter';
import EventsActions from '../../../../state/actions/EventsActions';

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
    dispatch(EventsActions.Creators.sendNotification({ message, variant: 'success' }));
  };
  const addNewUserSuccess = ({ continueAdding, user }: FormValues, { roles }: Props) => {
    if (continueAdding) {
      formEl?.current?.resetForm({ values: ManageUserLogic.getFormStateReset(roles, continueAdding) });
      dispatch(PageActions.Creators.setNewId(''));
    } else {
      formEl?.current?.setValues({ user: { ...user, id: newId }, continueAdding: false });
      dispatch(PageActions.Creators.setIsEdit(true));
    }
    notifySuccess('User added successfully!');
  };

  const updateUserSuccess = () => {
    notifySuccess('User updated successfully!');
  };

  useEffect(() => () => {
    dispatch(PageActions.Creators.clearForm());
  }, []);

  useEffect(() => {
    if (userId) {
      dispatch(PageActions.Creators.setIsEdit(true));
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
    dispatch(PageActions.Creators.setFormSubmitting(true));
    const user = ManageUserLogic.formatUser(values.user);
    if (isEdit) {
      dispatch(Actions.Creators.updateUser(user));
    } else {
      dispatch(Actions.Creators.saveUser(user));
    }
  };

  // const alertMe = () => {
  //   dispatch(EventsActions.Creators.sendNotification({ message: 'just testing', variant: 'success' }));
  // };
  const { user, isSubmitting, classes, roles } = props;
  const formProps = { isEdit, roles, isSubmitting };
  const userRoles = ManageUserLogic.getUserRoles(roles, user.roles as string[]);
  return (
    <div className={classes.root}>
      {/* <button type="button" onClick={alertMe}>alert me</button> */}
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
