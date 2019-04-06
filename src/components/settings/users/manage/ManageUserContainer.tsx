import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import { Formik, FormikProps } from 'formik';
import UserForm from './UserForm';
import User, { Role } from '../../../../types/User';
import { AppStore } from '../../../../types/AppStore';
import Actions from '../../../../state/actions/UserActions';
import PageActions from '../../../../state/actions/UserPageActions';
import { Props as PageProps, FormValues } from '../../../../types/components/ManageUser';

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
});

interface Props extends PageProps, WithStyles<typeof styles> { }

const initUser = (): User => ({
  id: 0,
  name: '',
  userName: '',
  isAdmin: false,
  roles: [],
});

class ManageUserContainer extends Component<Props, {}> {
  form: Formik<FormValues>;

  validate = ({ user }: FormValues) => {
    const errors: any = {};

    if (!user.userName) errors['user.userName'] = 'User name required';
    if (!user.name) errors['user.name'] = 'Name required';
    return errors;
  }

  formatUser = (user: any) => ({
    ...user,
    roles: user.roles
      .filter((u: any) => u.selected).map((u: any) => ({ id: u.id })),
  });

  onSubmit = (values: FormValues) => {
    const { dispatch, isEdit } = this.props;
    dispatch(PageActions.Creators.setFormSubmitting(true));
    const user = this.formatUser(values.user);
    if (isEdit) {
      dispatch(Actions.Creators.updateUser(user));
    } else {
      dispatch(Actions.Creators.saveUser(user));
    }
  }

  componentDidMount() {
    const { match, dispatch } = this.props;
    if (match.params.userId > 0) {
      dispatch(PageActions.Creators.setIsEdit(true));
    }
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(PageActions.Creators.clearForm());
  }

  componentDidUpdate(prevProps: Props) {
    const { newId, isEdit, roles, dispatch } = this.props;
    const { continueAdding, user } = this.form.state.values;

    if (newId && newId !== prevProps.newId && !isEdit) {
      if (continueAdding) {
        const resetUser = { ...initUser(), roles: this.getUserRoles(roles, []) };
        this.form.resetForm({ user: resetUser, continueAdding });
        dispatch(PageActions.Creators.setNewId(0));
      } else {
        this.form.setValues({ user: { ...user, id: newId }, continueAdding: false });
        dispatch(PageActions.Creators.setIsEdit(true));
      }
    }
  }

  getUserRoles = (roles: Role[], userRoles: Role[]) => (roles.map(r => ({
    ...r, selected: userRoles.some(e => e.id === r.id),
  })));

  render() {
    const { user, isSubmitting, classes, isEdit, roles } = this.props;
    const formProps = { isEdit, roles, isSubmitting };
    const userRoles = this.getUserRoles(roles, user.roles);
    return (
      <div className={classes.root}>
        <h2>{isEdit ? 'Edit' : 'Add'} User</h2>
        <Formik
          ref={(node: Formik<FormValues>) => { this.form = node; }}
          initialValues={{ user: { ...user, roles: userRoles }, continueAdding: false }}
          render={(props: FormikProps<FormValues>) => (<UserForm {...props} {...formProps} />)}
          onSubmit={this.onSubmit}
          validate={this.validate}
          validateOnChange={false}
        />
      </div>
    );
  }
}

const getUserId = (paramUserId: string, newId: number) => {
  if (!newId) {
    return paramUserId ? parseInt(paramUserId, 10) : 0;
  }
  return newId;
};

const getUser = (id: number, users: User[]) => (id ? users.filter(u => u.id === id)[0] : initUser());

const mapStateToProps = ({ users, userPage, roles }: AppStore, { match }: Props) => {
  const id = getUserId(match.params.userId, userPage.newId);
  const user = getUser(id, users);
  return {
    user,
    isSubmitting: userPage.isSubmitting,
    newId: userPage.newId,
    isEdit: userPage.isEdit,
    roles,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(ManageUserContainer));
