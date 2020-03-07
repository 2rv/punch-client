import React from 'react';
import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import FileCopyIcon from '@material-ui/icons/FileCopy';

import { Divider, Tooltip } from '../../components';
import { sizes } from '../../theme';

import DynamicFields from './DynamicFields';

const FieldBlock = ({ index, name, removeAction, clearAction, fieldList, setFieldList, copyAction }) => {
  return (
    <Block>
      <Header>
        <Tooltip tid="USER_REQUEST.FORM.ACTION.COPY">
          <ActionButton onClick={copyAction} size="small">
            <FileCopyIcon />
          </ActionButton>
        </Tooltip>
        <Tooltip tid="USER_REQUEST.FORM.ACTION.CLEAR">
          <ActionButton onClick={clearAction} size="small">
            <DeleteOutlineIcon />
          </ActionButton>
        </Tooltip>
        <Tooltip tid="USER_REQUEST.FORM.ACTION.DELETE">
          <ActionButton onClick={removeAction} size="small">
            <DeleteIcon />
          </ActionButton>
        </Tooltip>
      </Header>
      <Divider />
      <BlockContnet>
        <DynamicFields setFieldList={(value) => setFieldList(value, index)} fieldList={fieldList[index]} name={name} />
      </BlockContnet>
    </Block>
  );
};

FieldBlock.propTypes = {};

const ActionButton = styled(IconButton)`
  &:not(:last-of-type) {
    margin-right: ${sizes.spacing(1)};
  }
`;

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
