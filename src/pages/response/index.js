import React, { Component } from 'react';

import { Page } from '../../components/layouts';
import Head from '../_head';
import { UserResponse } from '../../containers';

import { PAGE_TYPE } from '../../constants/static';
import { headerNavigatePath } from '../../actions/navigation';
import ROUTES from '../../constants/routes';

class ResponsePage extends Component {
  static async getInitialProps({ store }) {
    store.dispatch(headerNavigatePath(ROUTES.RESPONSE));
    return {};
  }

  render() {
    return (
      <Page>
        <Head id={PAGE_TYPE.HOME} />
        <UserResponse />
      </Page>
    );
  }
}

export default ResponsePage;
