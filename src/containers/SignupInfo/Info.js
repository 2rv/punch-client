import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CopyField } from '../../components/fields';
import { Fluid, Responsive, Padding } from '../../components/layouts';
import { Box, Text, Divider } from '../../components';
import { FormTitle } from '../../components/titles';
import { PrimaryOutlinedButton } from '../../components/buttons';

import { sizes } from '../../theme';
import ROUTES from '../../constants/routes';
import { redirect } from '../../utils/navigation';

const Info = ({ hashKey }) => {
  return (
    <Fluid>
      <Container>
        <Padding>
          <Block>
            <FormTitle tid="SIGNUP.SUCCESS.TITLE" />
            <InfoText>
              <Text tid="SIGNUP.SUCCESS.INFO_TEXT" />
            </InfoText>
            <KeySection>
              <CopyField value={hashKey} fieldTid="SIGNUP.SUCCESS.KEY" alertTid="SIGNUP.SUCCESS.SNACKBAR_COPY" />
            </KeySection>
            <Divider />
            <ButtonSubmit onClick={() => redirect(ROUTES.LOGIN)}>
              <Text tid="SIGNUP.SUCCESS.BUTTON" />
            </ButtonSubmit>
          </Block>
        </Padding>
      </Container>
    </Fluid>
  );
};

Info.propTypes = {
  hashKey: PropTypes.string.isRequired,
};

const InfoText = styled.p`
  margin-bottom: ${sizes.spacing(3)};
  font-size: 16px;
  line-height: 1.5em;
`;

const ButtonSubmit = styled(PrimaryOutlinedButton)`
  width: 100%;
`;

const KeySection = styled.div`
  margin-bottom: ${sizes.spacing(3)};
`;

const Container = styled(Responsive)`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Block = styled(Box)`
  padding: ${sizes.spacing(5)};
`;

export default Info;
