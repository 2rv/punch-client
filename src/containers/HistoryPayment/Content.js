import React from 'react';
import PropTypes from 'prop-types';

import CachedIcon from '@material-ui/icons/Cached';
import IconButton from '@material-ui/core/IconButton';

import { Padding } from '../../components/layouts';
import { ListTitle } from '../../components/titles';
import { Loader, Alert } from '../../components';

import SkeletonList from './Skeleton';
import CardList from './Сard';

const INFO_ERROR = 'BITCOIN_PAYMENT_LIST_IS_EMPTY';

const Content = ({ data, loading, loaded, error, errorMessage, updateData }) => {
  return (
    <Padding>
      <ListTitle
        tid="HISTORY_RESPONSE.LIST.TITLE"
        side={
          <IconButton onClick={updateData} size="small">
            <CachedIcon />
          </IconButton>
        }
      />
      {loading && <SkeletonList />}
      {loading && <Loader />}

      {loaded && <CardList items={data} />}

      {error && <Alert type={errorMessage === INFO_ERROR ? 'warning' : 'error'} tid={`ERROR.${errorMessage}`} />}
    </Padding>
  );
};

Content.propTypes = {
  data: PropTypes.object.isRequired,
  loaded: PropTypes.bool,
  updateData: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default Content;
