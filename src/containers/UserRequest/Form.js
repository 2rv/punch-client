import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field as ReduxField } from 'redux-form';

import { Fluid, Responsive, Padding } from '../../components/layouts';
import { Box } from '../../components/cards';
import { FormTitle } from '../../components/titles';
import { Text, Loader, Alert, Divider } from '../../components';
import { TextField } from '../../components/fields';
import { OutlinedButton } from '../../components/buttons';

import { USER_REQUEST } from '../../constants/fields';
import { sizes } from '../../theme';

import Response from './Response';
import DynamicFields from './DynamicFields';

const FormComponent = ({ disabled, data, loading, error, dataLoaded }) => {
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
            {dataLoaded && (
              <FooterBlock>
                <Divider />
                <DataBlock>
                  <Response data={data} />
                </DataBlock>
              </FooterBlock>
            )}
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
  dataLoaded: PropTypes.bool,
  data: PropTypes.object,
};

const FooterBlock = styled.div`
  margin-top: ${sizes.spacing(4)};
`;

const DataBlock = styled.div`
  margin-top: ${sizes.spacing(3)};
`;

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
  padding: 20px 20px;
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
