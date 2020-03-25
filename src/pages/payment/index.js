import React, { Component } from 'react';

import { Page } from '../../components/layouts';
import Head from '../_head';
import { Header, Payment } from '../../containers';

import { PAGE_TYPE } from '../../constants/static';
import { headerNavigatePath } from '../../actions/navigation';
import ROUTES from '../../constants/routes';

class SettingsPage extends Component {
  static async getInitialProps({ store }) {
    store.dispatch(headerNavigatePath(ROUTES.PAYMENT));
  }

  render() {
    return (
      <Page align="center">
        <Head id={PAGE_TYPE.PAYMENT} />
        <Header />
        <Payment />
      </Page>
    );
  }
}

export default SettingsPage;
