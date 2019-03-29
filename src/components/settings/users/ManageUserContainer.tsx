import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import { Formik, FormikProps } from 'formik';
import UserForm from './UserForm';
import User from '../../../types/User';
import FormState from '../../../types/FormState';
import { AppStore } from '../../../types/AppStore';
import Actions from '../../../state/actions/UserActions';
import PageActions from '../../../state/actions/UserPageActions';

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
});

interface Props extends WithStyles<typeof styles> {
  match: any;
  user: User;
  dispatch: Dispatch<any>;
  isSubmitting: boolean;
  newId?: number;
}

class ManageUserContainer extends Component<Props, {}> {
  validate = (user: User) => {
    const errors: any = {};

    if (!user.userName) errors.userName = 'User name required';
    if (!user.name) errors.name = 'Name required';

    return errors;
  }

  onSubmit = (user: User) => {
    const { dispatch } = this.props;
    dispatch(PageActions.Creators.setFormSubmitting(true));
    dispatch(Actions.Creators.saveUser(user));
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(PageActions.Creators.clearForm());
  }

  render() {
    const { match, user, isSubmitting, classes } = this.props;
    return (
      <div className={classes.root}>
        <h2>{match.params.userId > 0 ? 'Edit' : 'Add'} User</h2>
        <Formik
          enableReinitialize
          initialValues={user}
          render={(props: FormikProps<User>) => (<UserForm {...props} isSubmitting={isSubmitting} />)}
          onSubmit={this.onSubmit}
          validate={this.validate}
          validateOnChange={false}
        />
      </div>
    );
  }
}

const initUser = (): User => ({
  id: 0,
  name: '',
  userName: '',
  isAdmin: false,
});

const getUserId = (paramUserId: any, state: FormState) => {
  const nid = (state.newId && state.status === 'form_complete') ? state.newId : 0;
  if (!nid) {
    return paramUserId ? parseInt(paramUserId, 10) : 0;
  }
  return nid;
};

const getUser = (id: number, users: User[]) => (id ? users.filter(u => u.id === id)[0] : initUser());

const mapStateToProps = (state: AppStore, ownProps: Props) => {
  const { users, userPage } = state;
  const { match } = ownProps;
  const id = getUserId(match.params.userId, userPage);
  const user = getUser(id, users);
  return {
    user,
    isSubmitting: userPage.isSubmitting,
    newId: userPage.newId,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(ManageUserContainer));
