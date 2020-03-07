import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Fluid, Responsive, Padding } from '../../components/layouts';
import { Card } from '../../components/cards';
import { FormTitle } from '../../components/titles';
import { Text, Loader, Alert, Divider } from '../../components';
import { PrimaryOutlinedButton } from '../../components/buttons';

import { sizes } from '../../theme';

import FieldsBlocks from './FieldsBlocks';

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
              <FieldsBlocks />
            </FieldSection>
            <Divider />
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

const ButtonSubmit = styled(PrimaryOutlinedButton)`
  width: 100%;
  && {
    margin-top: ${sizes.spacing(3)};
  }
`;

const AlertError = styled(Alert)`
  margin-bottom: ${sizes.spacing(3)};
`;

const FieldSection = styled.div`
  margin-bottom: ${sizes.spacing(4)};
`;

const Block = styled(Card)`
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
