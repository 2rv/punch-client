import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { sizes } from '../../theme';

const SectionLayout = ({ children, offset, className, padding = false, margin = true, id }) => {
  return (
    <Section id={id} offset={offset} paddingOffset={padding} marginOffset={margin} className={className}>
      {children}
    </Section>
  );
};

SectionLayout.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  padding: PropTypes.bool,
  margin: PropTypes.bool,
  offset: PropTypes.bool,
  id: PropTypes.string,
};

const Section = styled.section`
  ${({ paddingOffset, offset }) =>
    paddingOffset &&
    css`
      @media all and (min-width: 1000px) {
        padding-top: ${offset || sizes.sectionOffset};
        padding-bottom: ${offset || sizes.sectionOffset};
      }

      @media all and (max-width: 999px) {
        padding-top: ${offset || sizes.sectionOffsetSmall};
        padding-bottom: ${offset || sizes.sectionOffsetSmall};
      }
    `}

  ${({ marginOffset, offset }) =>
    marginOffset &&
    css`
      @media all and (min-width: 1000px) {
        margin-top: ${offset || sizes.sectionOffset};
        margin-bottom: ${offset || sizes.sectionOffset};
      }

      @media all and (max-width: 999px) {
        margin-top: ${offset || sizes.sectionOffsetSmall};
        margin-bottom: ${offset || sizes.sectionOffsetSmall};
      }
    `}
`;

export default SectionLayout;
