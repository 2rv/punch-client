import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { sizes } from '../../theme';

import { Text, Divider } from '../index';

const FormTitle = ({ className, tid, withoutOffset }) => {
  return (
    <Container withoutOffset={withoutOffset} className={className}>
      <Content>
        <Title>
          <Text tid={tid} />
        </Title>
      </Content>
      <Divider />
    </Container>
  );
};

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Title = styled.span`
  margin-bottom: ${sizes.spacing(1)};
  font-size: 21px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: ${sizes.spacing(6)};
  color: #fff;
  margin-bottom: ${(p) => (p.withoutOffset ? 0 : sizes.spacing(5))};
`;

FormTitle.propTypes = {
  className: PropTypes.string,
  tid: PropTypes.string,
  withoutOffset: PropTypes.bool,
};

export default FormTitle;
