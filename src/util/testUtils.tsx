import React, { FC, ReactElement } from 'react';
// eslint-disable-next-line
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

require('../mocks/adapter.mock');
// eslint-disable-next-line
const { createAppStore } = require('../state/ConfigureStore');

// eslint-disable-next-line
const AllTheProviders: FC = ({ children } : any) => (
  <ThemeProvider theme={theme}>
    <Provider store={createAppStore()}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line
export * from '@testing-library/react';
export { customRender as render };
