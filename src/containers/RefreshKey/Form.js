import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Fluid, Responsive, Padding } from '../../components/layouts';
import { Card } from '../../components/cards';
import { FormTitle } from '../../components/titles';
import { Text, Loader, Alert, Divider } from '../../components';
import { PrimaryOutlinedButton } from '../../components/buttons';

import { sizes } from '../../theme';

const FormComponent = ({ disabled, loading, error }) => {
  return (
    <Padding>
      <Block>
        {loading && <Loader />}
        <FormTitle bordered tid="REFRESH_KEY.FORM.TITLE" />
        {error && <AlertError tid={`ERROR.${error}`} />}
        <FieldSection>Test</FieldSection>
        <Divider />
        <ButtonSubmit disabled={disabled} type="submit">
          <Text tid="REFRESH_KEY.FORM.SUBMIT" />
        </ButtonSubmit>
      </Block>
    </Padding>
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

export default FormComponent;
