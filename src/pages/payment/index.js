import React, { Component } from 'react';

import { Page, Responsive } from '../../components/layouts';
import Head from '../_head';
import { Header, PaymentAddress, HistoryPayment } from '../../containers';
import { SectionGrid } from '../../components/grids';

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
        <Responsive layout="small">
          <SectionGrid>
            <PaymentAddress />
            <HistoryPayment />
          </SectionGrid>
        </Responsive>
      </Page>
    );
  }
}

export default SettingsPage;
