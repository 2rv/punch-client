import React, { Component } from 'react';

import { Page } from '../../components/layouts';
import Head from '../_head';
import { Signup } from '../../containers';

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
      <Page align="center">
        <Head id={PAGE_TYPE.SIGNUP} />
        <Signup />
      </Page>
    );
  }
}

export default LoginPage;
