import React from 'react';
import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { Divider } from '../../components';
import { sizes } from '../../theme';

import DynamicFields from './DynamicFields';

const FieldBlock = ({ index, name, removeAction, fieldList, setFieldList }) => {
  return (
    <Block>
      <Header>
        <IconButton onClick={removeAction} size="small">
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Header>
      <Divider />
      <BlockContnet>
        <DynamicFields setFieldList={(value) => setFieldList(value, index)} fieldList={fieldList[index]} name={name} />
      </BlockContnet>
    </Block>
  );
};

FieldBlock.propTypes = {};

const Header = styled.div`
  margin-bottom: ${sizes.spacing(1)};
  display: flex;
  justify-content: flex-end;
`;

const Block = styled.div`
  width: 100%;
  &:not(:last-of-type) {
    margin-bottom: ${sizes.spacing(3)};
  }
`;

const BlockContnet = styled.div`
  padding: ${sizes.spacing(3)} 0;
`;

export default FieldBlock;
