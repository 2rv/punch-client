import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { sizes } from '../../theme';

import { Text, Divider } from '../index';

const FormTitle = ({ className, tid, withoutOffset, sideTid, sideAction }) => {
  return (
    <Container withoutOffset={withoutOffset} className={className}>
      <Content>
        <Title>
          <Text tid={tid} />
        </Title>
        {sideAction && (
          <SideButton onClick={sideAction}>
            <Text tid={sideTid} />
          </SideButton>
        )}
      </Content>
      <Divider />
    </Container>
  );
};

const SideButton = styled.div`
  font-size: 16px;
  margin-bottom: ${sizes.spacing(1)};
  cursor: pointer;
  transition: opacity ${sizes.transition.md};

  &:hover {
    opacity: ${sizes.opacity.md};
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Title = styled.span`
  margin-bottom: ${sizes.spacing(1)};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: ${sizes.spacing(6)};
  color: #fff;
  margin-bottom: ${(p) => (p.withoutOffset ? 0 : sizes.spacing(4))};
`;

FormTitle.propTypes = {
  className: PropTypes.string,
  sideTid: PropTypes.string,
  tid: PropTypes.string,
  withoutOffset: PropTypes.bool,
  sideAction: PropTypes.func,
};

export default FormTitle;
