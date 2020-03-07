import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Switch from '@material-ui/core/Switch';

import { Text } from '../index';

import { sizes } from '../../theme';

const Switcher = ({ checked, color, onChange, value = true, label, prefix, ...props }) => {
  return (
    <Container>
      <Prefix>
        <Text tid={prefix} />
      </Prefix>
      <Switch checked={checked} onChange={onChange} value={value} {...props} />
      <Label>
        <Text tid={label} />
      </Label>
    </Container>
  );
};

const Label = styled.span`
  margin-left: ${sizes.spacing(1)};
`;

const Prefix = styled.span`
  margin-left: ${sizes.spacing(2)};
`;

const Container = styled.div`
  && {
    transition: ${sizes.transition.default} opacity;
    margin: 0;
    display: flex;
    align-items: center;

    &:hover {
      opacity: ${sizes.opacity.default};
    }
  }
`;

Switcher.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  prefix: PropTypes.string,
  color: PropTypes.string,
};

export default Switcher;
