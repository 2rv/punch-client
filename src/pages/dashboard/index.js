import React, { Component } from 'react';

import { Page } from '../../components/layouts';
import Head from '../_head';

import { PAGE_TYPE } from '../../constants/static';
import { headerNavigatePath } from '../../actions/navigation';
import ROUTES from '../../constants/routes';

class HomePage extends Component {
  static async getInitialProps({ store }) {
    store.dispatch(headerNavigatePath(ROUTES.DASHBOARD));
    return {};
  }

  render() {
    return (
      <Page>
        <Head id={PAGE_TYPE.DASHBOARD} />
        Privated page
      </Page>
    );
  }
}

export default HomePage;
