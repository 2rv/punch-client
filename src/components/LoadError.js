import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Fluid, Responsive, Padding } from './layouts';

import Alert from './Alert';

const LoadError = ({ message }) => {
  return (
    <Fluid>
      <Responsive>
        <Content>
          <Alert tid={`ERROR.${message}`} />
        </Content>
      </Responsive>
    </Fluid>
  );
};

const Content = styled(Padding)`
  padding-top: 100px;
  padding-top: 100px;
  height: 200px;
`;

LoadError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default LoadError;
