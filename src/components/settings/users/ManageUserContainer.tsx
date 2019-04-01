import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import { Formik, FormikProps } from 'formik';
import UserForm from './UserForm';
import User from '../../../types/User';
import { AppStore } from '../../../types/AppStore';
import Actions from '../../../state/actions/UserActions';
import PageActions from '../../../state/actions/UserPageActions';
import { Props as PageProps, FormValues, State } from '../../../types/components/ManageUser';

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
});

interface Props extends PageProps, WithStyles<typeof styles> { }

class ManageUserContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isEdit: props.match.params.userId > 0 };
  }

  validate = ({ user }: FormValues) => {
    const errors: any = {};

    if (!user.userName) errors.userName = 'User name required';
    if (!user.name) errors.name = 'Name required';

    return errors;
  }

  onSubmit = (values: FormValues) => {
    const { dispatch } = this.props;
    const { isEdit } = this.state;

    dispatch(PageActions.Creators.setFormSubmitting(true));
    if (isEdit) {
      dispatch(Actions.Creators.updateUser(values.user));
    } else {
      dispatch(Actions.Creators.saveUser(values.user));
    }
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(PageActions.Creators.clearForm());
  }

  componentDidUpdate(prevProps: Props) {
    const { newId } = this.props;
    const { isEdit } = this.state;
    if (newId !== prevProps.newId && !isEdit) {
      this.setState({
        isEdit: true,
      });
    }
  }

  render() {
    const { user, isSubmitting, classes } = this.props;
    const { isEdit } = this.state;

    return (
      <div className={classes.root}>
        <h2>{isEdit ? 'Edit' : 'Add'} User</h2>
        <Formik
          enableReinitialize
          initialValues={{ user, continueAdding: false }}
          render={(props: FormikProps<FormValues>) => (<UserForm {...props} isSubmitting={isSubmitting} />)}
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

const getUserId = (paramUserId: string, newId: number) => {
  if (!newId) {
    return paramUserId ? parseInt(paramUserId, 10) : 0;
  }
  return newId;
};

const getUser = (id: number, users: User[]) => (id ? users.filter(u => u.id === id)[0] : initUser());

const mapStateToProps = ({ users, userPage }: AppStore, { match }: Props) => {
  const id = getUserId(match.params.userId, userPage.newId);
  const user = getUser(id, users);

  return {
    user,
    isSubmitting: userPage.isSubmitting,
    newId: userPage.newId,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(ManageUserContainer));
