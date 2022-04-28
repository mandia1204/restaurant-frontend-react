import Amplify from '@aws-amplify/auth';

export const configureAuth = () => {
  Amplify.configure({
    Auth: {
      // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
      identityPoolId: '',

      // REQUIRED - Amazon Cognito Region
      region: 'us-east-2',

      // OPTIONAL - Amazon Cognito Federated Identity Pool Region
      // Required only if it's different from Amazon Cognito Region
      // identityPoolRegion: 'XX-XXXX-X',

      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: '',

      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolWebClientId: '',

      // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
      mandatorySignIn: false,

      // OPTIONAL - Configuration for cookie storage
      // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
      cookieStorage: {
        // REQUIRED - Cookie domain (only required if cookieStorage is provided)
        domain: 'localhost',
        // OPTIONAL - Cookie path
        path: '/',
        // OPTIONAL - Cookie expiration in days
        expires: 365,
        // OPTIONAL - Cookie secure flag
        // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
        secure: false,
      },

      // OPTIONAL - customized storage object
      // storage: new MyStorage(),

      // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
      authenticationFlowType: 'USER_SRP_AUTH',

      // OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers
      // clientMetadata: { myCustomKey: 'myCustomValue' },

      // OPTIONAL - Hosted UI configuration
      oauth: {
        domain: '',
        scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin', 'http://localhost:5000/read'],
        redirectSignIn: 'http://localhost:8080/info',
        redirectSignOut: 'http://localhost:8080/login',
        responseType: 'code', // or 'token', note that REFRESH token will only be generated when the responseType is code
      },
    },
  });
};

// You can get the current config object
// const currentConfig = Auth.configure(null);
// Auth.signIn()
