import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field as ReduxField } from 'redux-form';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Padding } from '../../components/layouts';
import { Card } from '../../components/cards';
import { FormTitle } from '../../components/titles';
import { TextField } from '../../components/fields';
import { Text, Loader, Alert, Divider, Snackbar } from '../../components';
import { PrimaryOutlinedButton } from '../../components/buttons';
import { REFRESH_KEY } from '../../constants/fields';
import { sizes } from '../../theme';

const FormComponent = ({ disabled, loading, error, errorMessage, newKey, loaded }) => {
  const [copied, setCopied] = React.useState(false);

  const onCopyKey = () => {
    setCopied(true);
  };

  const IsFormDisabled = disabled || loaded;

  return (
    <Padding>
      <Block>
        {loading && <Loader />}
        <FormTitle bordered tid="REFRESH_KEY.FORM.TITLE" />
        {error && <AlertError tid={`ERROR.${errorMessage}`} />}
        <FieldSection>
          <FieldBlock
            disabled={loaded}
            name={REFRESH_KEY.OLD_KEY}
            component={TextField}
            label={<Text tid="REFRESH_KEY.FORM.OLD_KEY" />}
          />
          {loaded && (
            <TextField
              value={newKey}
              type="text"
              endAdornment={
                <InputAdornment position="end">
                  <CopyToClipboard text={newKey} onCopy={onCopyKey}>
                    <IconButton size="medium" edge="end">
                      <FileCopyIcon fontSize="small" />
                    </IconButton>
                  </CopyToClipboard>
                </InputAdornment>
              }
              label={<Text tid="REFRESH_KEY.FORM.NEW_KEY" />}
            />
          )}
        </FieldSection>
        <Divider />
        <ButtonSubmit disabled={IsFormDisabled} type="submit">
          <Text tid="REFRESH_KEY.FORM.SUBMIT" />
        </ButtonSubmit>
        <Snackbar tid="REFRESH_KEY.SNACKBAR_COPY" active={copied} onClose={() => setCopied(false)} />
      </Block>
    </Padding>
  );
};

FormComponent.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  newKey: PropTypes.string,
  errorMessage: PropTypes.string,
  loaded: PropTypes.bool,
  error: PropTypes.bool,
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

const FieldBlock = styled(ReduxField)`
  &:not(:last-of-type) {
    margin-bottom: ${sizes.spacing(3)};
  }
`;

const FieldSection = styled.div`
  margin-bottom: ${sizes.spacing(4)};
`;

const Block = styled(Card)`
  padding: ${sizes.spacing(5)};
`;

export default FormComponent;
