import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Fluid, Responsive, Padding } from '../../components/layouts';
import { BlockTitle } from '../../components/titles';
import { Box } from '../../components/cards';

import { sizes } from '../../theme';

import Section from './Section';

const Response = ({ data }) => {
  const { request, response } = data;
  return (
    <Fluid>
      <Container>
        <Padding>
          <Content>
            {request && (
              <Block>
                <BlockTitle tid="USER_RESPONSE.REQUEST.TITLE" />
                <Section data={request} />
              </Block>
            )}
            {response && (
              <Block>
                <BlockTitle tid="USER_RESPONSE.RESPONSE.TITLE" />
                <Section data={response} />
              </Block>
            )}
          </Content>
        </Padding>
      </Container>
    </Fluid>
  );
};

Response.propTypes = {
  data: PropTypes.object.isRequired,
};

const Block = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: ${sizes.spacing(5)};
  }
`;

const Content = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  padding: ${sizes.spacing(5)};
`;

const Container = styled(Responsive)`
  max-width: 700px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0;
`;

export default Response;
