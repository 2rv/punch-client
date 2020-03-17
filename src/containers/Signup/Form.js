import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field as ReduxField } from 'redux-form';

import { Fluid, Responsive, Padding } from '../../components/layouts';
import { Box, Text, Loader, Alert } from '../../components';
import { FormTitle } from '../../components/titles';
import { PrimaryOutlinedButton } from '../../components/buttons';
import { TextField } from '../../components/fields';
import { sizes } from '../../theme';
import ROUTES from '../../constants/routes';
import { Captcha } from '../index';
import { redirect } from '../../utils/navigation';
import { SIGNUP } from '../../constants/fields';

const LoginForm = ({ disabled, submitting, error, errorMessage }) => {
  return (
    <Fluid>
      <Container>
        <Padding>
          <Block>
            <FormTitle
              tid="SIGNUP.FORM.TITLE"
              sideTid="SIGNUP.FORM.LOGIN_LINK"
              sideAction={() => redirect(ROUTES.LOGIN)}
            />
            <FieldSection>
              <ReduxField
                name={SIGNUP.CAPTCHA_VALUE}
                component={TextField}
                label={<Text tid="SIGNUP.FORM.CAPTCHA" />}
              />
              <CaptchaBlock>
                <Captcha />
              </CaptchaBlock>
            </FieldSection>
            <ButtonSubmit disabled={disabled} type="submit">
              <Text tid="SIGNUP.FORM.BUTTON_SUBMIT" />
            </ButtonSubmit>

            {submitting && <Loader />}
          </Block>
          {error && <AlertError tid={`ERROR.${errorMessage}`} />}
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

const CaptchaBlock = styled.div`
  margin-left: ${sizes.spacing(3)};
  display: flex;
  align-items: center;
  width: 200px;
`;

const ButtonSubmit = styled(PrimaryOutlinedButton)`
  width: 100%;
`;

const AlertError = styled(Alert)`
  margin-top: ${sizes.spacing(3)};
`;

const FieldSection = styled.div`
  margin-bottom: ${sizes.spacing(3)};
  display: flex;
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
  padding: ${sizes.spacing(5)};
`;

export default LoginForm;
