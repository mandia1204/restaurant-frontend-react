import React from 'react';
import Button from '@mui/material/Button';
import { Auth } from '@aws-amplify/auth';
import jwtParser from '../../util/jwtParser';

interface CognitoState {
  userName: string;
  department: string;
  email: string;
  groups: string;
  exp: string;
  roles: string;
  preferredRole: string;
  accessKeyId?: string;
  secretKey?: string;
  sessionToken?: string; // for temporal security credentials
}

class CognitoUserInfo extends React.Component<any, CognitoState> {
  // eslint-disable-next-line react/state-in-constructor
  state: CognitoState;

  constructor(props: any) {
    super(props);
    this.state = { userName: '', department: '', email: '', groups: '', exp: '', roles: '', preferredRole: '', sessionToken: '', accessKeyId: '', secretKey: '' };
  }

  getUserInfo = async (): Promise<CognitoState | null> => {
    const user = await Auth.currentSession();
    if (!user) {
      return Promise.resolve(null);
    }
    const idToken = jwtParser.parse(user.getIdToken().getJwtToken()) as any;
    const accessToken = jwtParser.parse(user.getAccessToken().getJwtToken());
    const refreshToken = user.getRefreshToken();
    // eslint-disable-next-line
    console.log(idToken, accessToken, refreshToken);

    return {
      userName: idToken['cognito:username'],
      department: idToken['custom:department'],
      email: idToken.email,
      groups: idToken['cognito:groups'] ? idToken['cognito:groups'].join(',') : '',
      exp: new Date(idToken.exp * 1000).toLocaleString(),
      roles: idToken['cognito:roles'].join(),
      preferredRole: idToken['cognito:preferred_role'],
    };
  };

  getCredentials = async () => {
    const credentials = await Auth.currentCredentials();

    return {
      accessKeyId: credentials.accessKeyId,
      secretKey: credentials.secretAccessKey,
      sessionToken: credentials.sessionToken,
    };
  };

  async componentDidMount() {
    const userInfo = await this.getUserInfo();
    const credentials = await this.getCredentials();
    if (userInfo && credentials) {
      this.setState({ ...userInfo, ...credentials });
    }
  }

  render() {
    const { userName, department, email, groups, exp, accessKeyId, secretKey, roles, preferredRole, sessionToken } = this.state;
    return (
      <div>
        <div>User Name:</div>
        <div>{userName}</div>
        <div>Department:</div>
        <div>{department}</div>
        <div>Email:</div>
        <div>{email}</div>
        <div>Groups:</div>
        <div>{groups}</div>
        <div>Roles:</div>
        <div>{roles}</div>
        <div>Preferred Role:</div>
        <div>{preferredRole}</div>
        <div>Token expiration:</div>
        <div>{exp}</div>
        <div>Access key:</div>
        <div>{accessKeyId}</div>
        <div>Secret key:</div>
        <div>{secretKey}</div>
        <div>Session token:</div>
        <div>{sessionToken}</div>
        <Button color="primary" onClick={() => Auth.signOut()}>
          Logout
        </Button>
      </div>

    );
  }
}

export default CognitoUserInfo;
