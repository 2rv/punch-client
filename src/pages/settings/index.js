import React, { Component } from 'react';
import styled from 'styled-components';

import { Page, Padding } from '../../components/layouts';
import Head from '../_head';
import { RefreshKey, LoginUpdate, Header } from '../../containers';

import { PAGE_TYPE } from '../../constants/static';
import { headerNavigatePath } from '../../actions/navigation';
import ROUTES from '../../constants/routes';
import { Text } from '../../components';
import { SectionGrid } from '../../components/grids';
import { OutlinedButton } from '../../components/buttons';
import { Responsive } from '../../components/layouts';
import { logOut } from '../../actions/login';

class SettingsPage extends Component {
  static async getInitialProps({ store }) {
    store.dispatch(headerNavigatePath(ROUTES.SETTINGS));
  }

  render() {
    return (
      <Page align="center">
        <Head id={PAGE_TYPE.SETTINGS} />
        <Header />
        <Responsive layout="small">
          <SectionGrid>
            <RefreshKey />
            <LoginUpdate />
            <Padding>
              <ButtonLogout onClick={logOut}>
                <Text tid="NAVIGATION.SETTINGS.LOGOUT" />
              </ButtonLogout>
            </Padding>
          </SectionGrid>
        </Responsive>
      </Page>
    );
  }
}

const ButtonLogout = styled(OutlinedButton)`
  width: 100%;
`;

export default SettingsPage;
