import React, { Component } from 'react';

import { Page } from '../../components/layouts';
import Head from '../_head';
import { SignupInfo } from '../../containers';

import { PAGE_TYPE } from '../../constants/static';
import { headerNavigatePath } from '../../actions/navigation';
import ROUTES from '../../constants/routes';

class LoginPage extends Component {
  static async getInitialProps({ store }) {
    store.dispatch(headerNavigatePath(ROUTES.LOGIN));
    return {};
  }

  render() {
    return (
      <Page>
        <Head id={PAGE_TYPE.SIGNUP_SUCCESS} />
        <SignupInfo />
      </Page>
    );
  }
}

export default LoginPage;
