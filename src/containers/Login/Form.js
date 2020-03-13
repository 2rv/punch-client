import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field as ReduxField } from 'redux-form';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { Fluid, Responsive, Padding } from '../../components/layouts';
import { Box, Text, Loader, Alert, Divider } from '../../components';
import { FormTitle } from '../../components/titles';
import { TextField } from '../../components/fields';
import { PrimaryOutlinedButton } from '../../components/buttons';
import { PrimaryTab } from '../../components/menus';

import { LOGIN } from '../../constants/fields';
import { sizes } from '../../theme';

const TAB_LIST = [
  { id: 0, tid: 'LOGIN.TAB.KEY' },
  { id: 1, tid: 'LOGIN.TAB.LOGIN' },
];

const LoginForm = ({ disabled, submitting, error, errorMessage }) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleChangeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <Fluid>
      <Container>
        <Padding>
          <Block>
            <FormTitle withoutOffset tid="LOGIN.FORM.TITLE" />
            <TabSection>
              <PrimaryTab items={TAB_LIST} active={activeTab} action={handleChangeTab} />
              <Divider />
            </TabSection>
            <FieldSection>
              {activeTab === 0 && (
                <FieldBlock name={LOGIN.KEY} component={TextField} label={<Text tid="LOGIN.FORM.KEY" />} />
              )}
              {activeTab === 1 && (
                <React.Fragment>
                  <FieldBlock name={LOGIN.USERNAME} component={TextField} label={<Text tid="LOGIN.FORM.USERNAME" />} />
                  <FieldBlock
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          size="medium"
                          onClick={() => setShowPassword(!showPassword)}
                          onMouseDown={(e) => e.preventDefault()}
                          edge="end"
                        >
                          {showPassword ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" />}
                        </IconButton>
                      </InputAdornment>
                    }
                    name={LOGIN.PASSWORD}
                    component={TextField}
                    label={<Text tid="LOGIN.FORM.PASSWORD" />}
                  />
                </React.Fragment>
              )}
            </FieldSection>
            <ButtonSubmit disabled={disabled} type="submit">
              <Text tid="LOGIN.FORM.BUTTON_SUBMIT" />
            </ButtonSubmit>
            {submitting && <Loader />}
            {error && <AlertError tid={`ERROR.${errorMessage}`} />}
          </Block>
        </Padding>
      </Container>
    </Fluid>
  );
};

LoginForm.propTypes = {
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  submitting: PropTypes.bool,
};

const TabSection = styled.div`
  margin-bottom: ${sizes.spacing(3)};
`;

const ButtonSubmit = styled(PrimaryOutlinedButton)`
  width: 100%;
`;

const AlertError = styled(Alert)`
  margin-top: ${sizes.spacing(2)};
`;

const FieldBlock = styled(ReduxField)`
  &:not(:last-of-type) {
    margin-bottom: ${sizes.spacing(2)};
  }
`;

const FieldSection = styled.div`
  margin-bottom: ${sizes.spacing(2)};
`;

const Container = styled(Responsive)`
  max-width: 600px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0;
`;

const Block = styled(Box)`
  padding: 20px 20px;
`;

export default LoginForm;
