import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ExpansionPanelMaterial from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Text } from '../index';
import { colors } from '../../theme';

const DarkExpansion = ({ children, title, description }) => {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Text tid={title} />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{children || <Text tid={description} />}</ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

const ExpansionPanel = styled(ExpansionPanelMaterial)`
  && {
    background-color: ${colors.darkLight};
  }
`;

DarkExpansion.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default DarkExpansion;
