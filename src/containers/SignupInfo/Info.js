import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { TextField } from '../../components/fields';
import { Fluid, Responsive, Padding } from '../../components/layouts';
import { Box, Text, Divider, Snackbar } from '../../components';
import { FormTitle } from '../../components/titles';
import { PrimaryOutlinedButton } from '../../components/buttons';

import { sizes } from '../../theme';
import ROUTES from '../../constants/routes';
import { redirect } from '../../utils/navigation';

const Info = ({ hashKey }) => {
  const [copied, setCopied] = React.useState(false);

  const onCopyKey = () => {
    setCopied(true);
  };

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
              <TextField
                value={hashKey}
                type="text"
                endAdornment={
                  <InputAdornment position="end">
                    <CopyToClipboard text={hashKey} onCopy={onCopyKey}>
                      <IconButton size="medium" edge="end">
                        <FileCopyIcon fontSize="small" />
                      </IconButton>
                    </CopyToClipboard>
                  </InputAdornment>
                }
                label={<Text tid="SIGNUP.SUCCESS.KEY" />}
              />
            </KeySection>
            <Divider />
            <ButtonSubmit onClick={() => redirect(ROUTES.HOME)}>
              <Text tid="SIGNUP.SUCCESS.BUTTON" />
            </ButtonSubmit>
          </Block>
          <Snackbar tid="SIGNUP.SUCCESS.SNACKBAR_COPY" active={copied} onClose={() => setCopied(false)} />
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0;
`;

const Block = styled(Box)`
  padding: ${sizes.spacing(5)};
`;

export default Info;
