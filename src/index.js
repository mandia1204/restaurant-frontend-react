/*eslint-disable no-unused-vars*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const title = 'Dashboard';

ReactDOM.render(
  <div>
    <h3>{title}</h3>
    <App />
    <Button>mybutton22</Button>
    <TextField
          id="number"
          label="Number"
          type="number"
          className="oli"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
    />
  </div>,
  document.getElementById('app')
);

if(process.env.NODE_ENV === 'development') {
  module.hot.accept();
}

