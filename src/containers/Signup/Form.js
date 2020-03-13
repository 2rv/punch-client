import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field as ReduxField } from 'redux-form';

import { Fluid, Responsive, Padding } from '../../components/layouts';
import { Box, Text, Loader, Alert } from '../../components';
import { FormTitle } from '../../components/titles';
import { PrimaryOutlinedButton } from '../../components/buttons';
import { sizes } from '../../theme';
import ROUTES from '../../constants/routes';

import { redirect } from '../../utils/navigation';

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
            {/* <FieldSection></FieldSection> */}
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

const ButtonSubmit = styled(PrimaryOutlinedButton)`
  width: 100%;
`;

const AlertError = styled(Alert)`
  margin-top: ${sizes.spacing(3)};
`;

const FieldSection = styled.div`
  margin-bottom: ${sizes.spacing(3)};
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
