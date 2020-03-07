import React from 'react';
import styled from 'styled-components';
import { Field as ReduxField } from 'redux-form';

import { Text, Divider } from '../../components';
import { TextField, SelectField, Switcher } from '../../components/fields';

import { USER_REQUEST } from '../../constants/fields';
import { REQUEST_DATA_TYPE } from '../../constants/static';
import { sizes } from '../../theme';

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

const DynamicFields = () => {
  const [fieldList, setFieldList] = React.useState([]);
  const [switchList, setSwitchList] = React.useState({});

  const handleChangeFields = (event) => {
    setFieldList(event.target.value);
  };

  const handleChangeSwitcher = (e, value, type) => {
    setSwitchList({
      ...switchList,
      [type]: value,
    });
  };

  const isFieldListEmpty = () => {
    return fieldList.length === 0;
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
                name={USER_REQUEST[type]}
                component={TextField}
                label={<Text tid={`USER_REQUEST.FORM.${type}`} />}
              />
              <Switcher
                onChange={(e, v) => handleChangeSwitcher(e, v, type)}
                prefix="USER_REQUEST.FORM.SWITCHER.PREFIX"
                label="USER_REQUEST.FORM.SWITCHER.SUFIX"
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

DynamicFields.propTypes = {};

const FieldSection = styled.div`
  margin-bottom: ${sizes.spacing(3)};
`;

const SelectSection = styled.div`
  margin-top: ${sizes.spacing(3)};
`;

const FieldBlock = styled.div`
  display: grid;
  grid-column-gap: ${sizes.spacing(2)};
  grid-row-gap: ${sizes.spacing(1)};

  @media all and (min-width: 480px) {
    grid-template-columns: 4fr 1fr;
    grid-template-areas: '. .';
  }

  &:not(:last-of-type) {
    margin-bottom: ${sizes.spacing(3)};
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default DynamicFields;
