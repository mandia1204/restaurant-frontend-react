import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import { Formik, FormikActions, FormikProps } from 'formik';
import UserForm from './UserForm';
import User from '../../../types/User';
import { AppStore } from '../../../types/AppStore';

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
});

interface Props extends WithStyles<typeof styles> {
  match: any;
  user: User;
}

class ManageUserContainer extends Component<Props, {}> {
  validate = (user: User) => {
    const errors: any = {};

    if (!user.userName) {
      errors.userName = 'User name required';
    }
    if (!user.name) {
      errors.name = 'Name required';
    }
    return errors;
  }

  onSubmit = (user: User, { setSubmitting }: FormikActions<User>) => {
    console.log('user submitted:', user); //eslint-disable-line
    console.log('user submitted:', setSubmitting);//eslint-disable-line
  }

  render() {
    const { match, user, classes } = this.props;
    return (
      <div className={classes.root}>
        <h2>{match.params.userId > 0 ? 'Edit' : 'Add'} User</h2>
        <Formik
          initialValues={user}
          render={(props: FormikProps<User>) => (<UserForm {...props} />)}
          onSubmit={this.onSubmit}
          validate={this.validate}
          validateOnChange={false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: AppStore, ownProps: Props) => {
  const { users } = state;
  const { match } = ownProps;
  const user = users.filter(u => u.id === parseInt(match.params.userId, 10))[0];
  return {
    user,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(ManageUserContainer));
