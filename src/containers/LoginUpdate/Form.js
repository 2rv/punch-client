import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field as ReduxField } from 'redux-form';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { Padding } from '../../components/layouts';
import { Card } from '../../components/cards';
import { FormTitle } from '../../components/titles';
import { TextField } from '../../components/fields';
import { Text, Loader, Alert, Divider } from '../../components';
import { PrimaryOutlinedButton } from '../../components/buttons';
import { LOGIN_UPDATE } from '../../constants/fields';
import { sizes } from '../../theme';

const FormComponent = ({ disabled, loading, error, errorMessage, loaded }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Padding>
      <Block>
        {loading && <Loader />}
        <FormTitle bordered tid="LOGIN_UPDATE.FORM.TITLE" />
        <FieldSection>
          <FieldBlock name={LOGIN_UPDATE.KEY} component={TextField} label={<Text tid="LOGIN_UPDATE.FORM.KEY" />} />
          <FieldBlock
            name={LOGIN_UPDATE.USERNAME}
            component={TextField}
            label={<Text tid="LOGIN_UPDATE.FORM.USERNAME" />}
          />
          <FieldBlock
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  size="medium"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                >
                  {showPassword ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" />}
                </IconButton>
              </InputAdornment>
            }
            name={LOGIN_UPDATE.PASSWORD}
            component={TextField}
            label={<Text tid="LOGIN_UPDATE.FORM.PASSWORD" />}
          />
        </FieldSection>
        <Divider />
        <ButtonSubmit disabled={disabled} type="submit">
          <Text tid="LOGIN_UPDATE.FORM.SUBMIT" />
        </ButtonSubmit>
      </Block>
      {error && <AlertError tid={`ERROR.${errorMessage}`} />}
      {loaded && <AlertError type="success" tid="LOGIN_UPDATE.ALERT.SUCCEESS" />}
    </Padding>
  );
};

FormComponent.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
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
  margin-top: ${sizes.spacing(3)};
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
