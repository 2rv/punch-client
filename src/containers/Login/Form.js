import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field as ReduxField } from 'redux-form';

import { Fluid, Responsive, Padding } from '../../components/layouts';
import { Box, Text, Loader, Alert } from '../../components';
import { FormTitle } from '../../components/titles';
import { TextField } from '../../components/fields';
import { PrimaryOutlinedButton } from '../../components/buttons';

import { LOGIN } from '../../constants/fields';
import { sizes } from '../../theme';

const LoginForm = ({ disabled, submitting, statusError, errorMessage }) => {
  return (
    <Fluid>
      <Container>
        <Padding>
          <Block>
            <FormTitle tid="LOGIN.FORM.TITLE" />
            {statusError && <AlertError tid={`ERROR.${errorMessage}`} />}
            <FieldSection>
              <FieldBlock name={LOGIN.KEY} component={TextField} label={<Text tid="LOGIN.FORM.KEY" />} />
            </FieldSection>
            <ButtonSubmit disabled={disabled} type="submit">
              <Text tid="LOGIN.FORM.BUTTON_SUBMIT" />
            </ButtonSubmit>
            {submitting && <Loader />}
          </Block>
        </Padding>
      </Container>
    </Fluid>
  );
};

LoginForm.propTypes = {
  statusError: PropTypes.bool,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  submitting: PropTypes.bool,
};

const ButtonSubmit = styled(PrimaryOutlinedButton)`
  width: 100%;
`;

const AlertError = styled(Alert)`
  margin-bottom: ${sizes.spacing(2)};
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
