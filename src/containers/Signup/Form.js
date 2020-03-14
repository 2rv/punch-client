import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ClientCaptcha from 'react-client-captcha';

import { Fluid, Responsive, Padding } from '../../components/layouts';
import { Box, Text, Loader, Alert } from '../../components';
import { FormTitle } from '../../components/titles';
import { PrimaryOutlinedButton } from '../../components/buttons';
import { TextField } from '../../components/fields';
import { sizes, colors } from '../../theme';
import ROUTES from '../../constants/routes';

import { redirect } from '../../utils/navigation';

const LoginForm = ({ disabled, submitting, error, errorMessage }) => {
  const [code, setCode] = React.useState(null);
  const [inputCode, setInputCode] = React.useState(null);

  const isCaptchaError = inputCode === null ? false : code !== inputCode;
  const isDisabled = disabled || code !== inputCode;

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
              <TextField
                onChange={(e) => setInputCode(e.target.value)}
                value={inputCode}
                type="text"
                error={isCaptchaError}
                label={<Text tid="SIGNUP.FORM.CAPTCHA" />}
              />
              <CaptchaBlock>
                <ClientCaptcha
                  backgroundColor={colors.darkLight}
                  fontColor="#fff"
                  retry={false}
                  height={56}
                  width={120}
                  captchaCode={(captchaCode) => setCode(captchaCode)}
                />
              </CaptchaBlock>
            </FieldSection>
            <ButtonSubmit disabled={isDisabled} type="submit">
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
  border-radius: ${sizes.spacing(1)};
  overflow: hidden;
  margin-left: ${sizes.spacing(3)};
  display: flex;
  align-items: center;
  background-color: ${colors.darkLight};
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
