import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import { Formik, FormikProps } from 'formik';
import UserForm from './UserForm';
import { AppStore } from '../../../../types/AppStore';
import Actions from '../../../../state/actions/UserActions';
import PageActions from '../../../../state/actions/UserPageActions';
import { Props as PageProps, FormValues } from '../../../../types/components/ManageUser';
import ManageUserLogic from './ManageUserLogic';
import userFormValidation from './userFormValidation';

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
});

interface Props extends PageProps, WithStyles<typeof styles> { }

class ManageUserContainer extends Component<Props, {}> {
  form: Formik<FormValues>;

  onSubmit = (values: FormValues) => {
    const { dispatch, isEdit } = this.props;
    dispatch(PageActions.Creators.setFormSubmitting(true));
    const user = ManageUserLogic.formatUser(values.user);
    if (isEdit) {
      dispatch(Actions.Creators.updateUser(user));
    } else {
      dispatch(Actions.Creators.saveUser(user));
    }
  }

  componentDidMount() {
    const { match, dispatch } = this.props;
    if (match.params.userId) {
      dispatch(PageActions.Creators.setIsEdit(true));
    }
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(PageActions.Creators.clearForm());
  }

  componentDidUpdate(prevProps: Props) {
    const { newId, isEdit, status } = this.props;
    if (newId && newId !== prevProps.newId && status === 'form_submit_success' && !isEdit) {
      this.addNewUserSuccess(this.form.state.values, this.props);
    } else if (isEdit && status === 'form_submit_success') {
      this.updateUserSuccess();
    }
  }

  addNewUserSuccess = ({ continueAdding, user }: FormValues, { newId, roles, dispatch }: Props) => {
    if (continueAdding) {
      this.form.resetForm(ManageUserLogic.getFormStateReset(roles, continueAdding));
      dispatch(PageActions.Creators.setNewId(''));
    } else {
      this.form.setValues({ user: { ...user, id: newId }, continueAdding: false });
      dispatch(PageActions.Creators.setIsEdit(true));
    }
  }

  updateUserSuccess = () => {
  }

  render() {
    const { user, isSubmitting, classes, isEdit, roles } = this.props;
    const formProps = { isEdit, roles, isSubmitting };
    const userRoles = ManageUserLogic.getUserRoles(roles, user.roles as string[]);
    return (
      <div className={classes.root}>
        <h2>{isEdit ? 'Edit' : 'Add'} User</h2>
        <Formik
          ref={(node: Formik<FormValues>) => { this.form = node; }}
          initialValues={{ user: { ...user, roles: userRoles }, continueAdding: false }}
          render={(props: FormikProps<FormValues>) => (<UserForm {...props} {...formProps} />)}
          onSubmit={this.onSubmit}
          validate={userFormValidation}
          validateOnChange={false}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ users, userPage, roles }: AppStore, { match }: Props) => {
  const id = ManageUserLogic.getUserId(match.params.userId, userPage.newId);
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

export default connect(mapStateToProps)(withStyles(styles)(ManageUserContainer));
