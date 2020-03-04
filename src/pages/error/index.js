import React from 'react';

import { Page } from '../../components/layouts';
import Head from '../_head';

import { PAGE_TYPE } from '../../constants/static';
import { headerNavigatePath } from '../../actions/navigation';
import { GlobalMessage } from '../../components';

class ErrorPage extends React.Component {
  static async getInitialProps({ store }) {
    store.dispatch(headerNavigatePath(null));
    return {};
  }

  render() {
    return (
      <Page>
        <Head id={PAGE_TYPE.ERROR} />
        <GlobalMessage title="ERROR.PAGE.TITLE" subTitle="ERROR.PAGE.SUB_TITLE" />
      </Page>
    );
  }
}

export default ErrorPage;
