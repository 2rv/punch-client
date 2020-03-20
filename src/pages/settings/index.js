import React, { Component } from 'react';
import styled from 'styled-components';

import { Page, Padding } from '../../components/layouts';
import Head from '../_head';
import { RefreshKey, LoginUpdate, Header } from '../../containers';

import { PAGE_TYPE } from '../../constants/static';
import { headerNavigatePath } from '../../actions/navigation';
import ROUTES from '../../constants/routes';
import { sizes } from '../../theme';
import { Text } from '../../components';
import { OutlinedButton } from '../../components/buttons';
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
        <Settings>
          <SettingItem>
            <RefreshKey />
          </SettingItem>
          <SettingItem>
            <LoginUpdate />
          </SettingItem>
          <SettingItem>
            <Padding>
              <ButtonLogout onClick={logOut}>
                <Text tid="NAVIGATION.SETTINGS.LOGOUT" />
              </ButtonLogout>
            </Padding>
          </SettingItem>
        </Settings>
      </Page>
    );
  }
}

const SettingItem = styled.div`
  &:not(:last-of-type) {
    margin-bottom: ${sizes.spacing(4)};
  }
`;

const ButtonLogout = styled(OutlinedButton)`
  width: 100%;
`;

const Settings = styled.div`
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

export default SettingsPage;
