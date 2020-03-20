import React, { Component } from 'react';

import { Page } from '../../components/layouts';
import Head from '../_head';
import { Header, HistoryResponse } from '../../containers';

import { PAGE_TYPE } from '../../constants/static';
import { headerNavigatePath } from '../../actions/navigation';
import ROUTES from '../../constants/routes';

class SettingsPage extends Component {
  static async getInitialProps({ store }) {
    store.dispatch(headerNavigatePath(ROUTES.HISTORY));
  }

  render() {
    return (
      <Page>
        <Head id={PAGE_TYPE.HISTORY} />
        <Header />
        <HistoryResponse />
      </Page>
    );
  }
}

export default SettingsPage;
