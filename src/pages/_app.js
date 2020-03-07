import App from 'next/app';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider as ReduxProvider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import '../utils/i18n';

import initStore from '../utils/redux';
import { setAutorizationHeader } from '../utils/request';
import { getCookie } from '../utils/cookie';

import { COOKIE_AUTH } from '../constants';

import routing from '../routes';

const isDev = process.env.NODE_ENV === 'development';

const themeLanding = {
  ...createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#FF782D',
        light: '#ff9357',
        dark: '#b2541f',
        contrastText: '#fff',
      },
    },
  }),
};

class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);
  }

  // Fetching serialized(JSON) store state
  static async getInitialProps({ Component, ctx }) {
    await routing(ctx);

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    const auth = await getCookie(COOKIE_AUTH, ctx);
    await setAutorizationHeader(auth.token);

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <ReduxProvider store={store}>
        <ThemeProvider theme={themeLanding}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ReduxProvider>
    );
  }
}

export default withRedux(initStore, { debug: isDev })(MyApp);
