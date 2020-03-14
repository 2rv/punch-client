import React, { Component } from 'react';
import styled from 'styled-components';

import { Page } from '../../components/layouts';
import Head from '../_head';
import { RefreshKey, Header } from '../../containers';

import { PAGE_TYPE } from '../../constants/static';
import { headerNavigatePath } from '../../actions/navigation';
import ROUTES from '../../constants/routes';
import { sizes } from '../../theme';

class SettingsPage extends Component {
  static async getInitialProps({ store }) {
    store.dispatch(headerNavigatePath(ROUTES.HOME));
  }

  render() {
    return (
      <Page>
        <Head id={PAGE_TYPE.SETTINGS} />
        <Header />
        <Settings>
          <SettingItem>
            <RefreshKey />
          </SettingItem>
          <SettingItem>
            <RefreshKey />
          </SettingItem>
        </Settings>
      </Page>
    );
  }
}

const SettingItem = styled.div`
  &:not(:last-of-type) {
    margin-bottom: ${sizes.spacing(3)};
  }
`;

const Settings = styled.div`
  max-width: 700px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${sizes.sectionOffsetSmall} 0;
  margin: 0 auto;
`;

export default SettingsPage;
