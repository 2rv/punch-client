import React from 'react';
import styled from 'styled-components';
import { Field as ReduxField } from 'redux-form';
import PropTypes from 'prop-types';

import { Text, Divider } from '../../components';
import { TextField, SelectField } from '../../components/fields';

import { USER_REQUEST } from '../../constants/fields';
import { REQUEST_DATA_TYPE } from '../../constants/static';
import { sizes } from '../../theme';

import { fieldsValidation } from '../../validations/userRequest';

const SELECT_DATA = [
  {
    id: 0,
    value: REQUEST_DATA_TYPE.ID,
    tid: 'STATIC.REQUEST_DATA_TYPE.ID',
  },
  {
    id: 1,
    value: REQUEST_DATA_TYPE.NAME,
    tid: 'STATIC.REQUEST_DATA_TYPE.NAME',
  },
  {
    id: 2,
    value: REQUEST_DATA_TYPE.EMAIL,
    tid: 'STATIC.REQUEST_DATA_TYPE.EMAIL',
  },
  {
    id: 3,
    value: REQUEST_DATA_TYPE.PHONE,
    tid: 'STATIC.REQUEST_DATA_TYPE.PHONE',
  },
];

const DynamicFields = ({ name, fieldList = [], setFieldList }) => {
  const handleChangeFields = (event) => {
    setFieldList(event.target.value);
  };

  const isFieldListEmpty = () => {
    return !fieldList || fieldList.length === 0;
  };

  return (
    <Container>
      <FieldSection>
        {isFieldListEmpty() ? (
          <Text tid="USER_REQUEST.FORM.EMPTY" />
        ) : (
          fieldList.map((type, id) => (
            <FieldBlock key={id}>
              <ReduxField
                name={`${name}.${USER_REQUEST[type]}`}
                component={TextField}
                validate={fieldsValidation[USER_REQUEST[type]]}
                label={<Text tid={`USER_REQUEST.FORM.${type}`} />}
              />
            </FieldBlock>
          ))
        )}
      </FieldSection>
      <Divider />
      <SelectSection>
        <SelectField
          multiple
          onChange={handleChangeFields}
          value={fieldList}
          items={SELECT_DATA}
          label={<Text tid="USER_REQUEST.FORM.SELECT_FIELDS" />}
          placeholder={<Text tid="USER_REQUEST.FORM.SELECT_FIELDS" />}
        />
      </SelectSection>
    </Container>
  );
};

DynamicFields.propTypes = {
  name: PropTypes.string.isRequired,
};

const FieldSection = styled.div`
  margin-bottom: ${sizes.spacing(3)};
`;

const SelectSection = styled.div`
  margin-top: ${sizes.spacing(3)};
`;

const FieldBlock = styled.div`
  &:not(:last-of-type) {
    margin-bottom: ${sizes.spacing(3)};
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default React.memo(DynamicFields, () => true);
