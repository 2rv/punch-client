import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Fluid, Responsive, Padding } from '../../components/layouts';
import { Box } from '../../components/cards';
import { FormTitle } from '../../components/titles';
import { Text, Loader, Alert } from '../../components';
import { OutlinedButton } from '../../components/buttons';

import { sizes } from '../../theme';

import DynamicFields from './DynamicFields';

const FormComponent = ({ disabled, loading, error }) => {
  return (
    <Fluid>
      <Container>
        <Padding>
          <Block>
            {loading && <Loader />}
            <FormTitle bordered tid="USER_REQUEST.FORM.TITLE" />
            {error && <AlertError tid={`ERROR.${error}`} />}
            <FieldSection>
              <DynamicFields />
            </FieldSection>
            <ButtonSubmit disabled={disabled} type="submit">
              <Text tid="USER_REQUEST.FORM.SUBMIT" />
            </ButtonSubmit>
          </Block>
        </Padding>
      </Container>
    </Fluid>
  );
};

FormComponent.propTypes = {
  error: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

const ButtonSubmit = styled(OutlinedButton)`
  width: 100%;
`;

const AlertError = styled(Alert)`
  margin-bottom: ${sizes.spacing(3)};
`;

const FieldSection = styled.div`
  margin-bottom: ${sizes.spacing(3)};
`;

const Block = styled(Box)`
  padding: ${sizes.spacing(5)};
`;

const Container = styled(Responsive)`
  max-width: 700px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0;
`;

export default FormComponent;
