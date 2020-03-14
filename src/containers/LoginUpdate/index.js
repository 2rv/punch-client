import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, change, formValueSelector } from 'redux-form';
import { compose } from 'redux';

import { FORM_NAMES } from '../../constants';
import { isLoaded, getData, isLoading, isError } from '../../utils/store';

import { validate } from '../../validations/loginUpdate';
import { loginUpdateData } from '../../actions/loginUpdate';
import { LOGIN_UPDATE } from '../../constants/fields';

import FormComponent from './Form';

class LoginUpdateContainer extends Component {
  componentDidMount() {
    const { authUsername, dispatch } = this.props;

    if (authUsername) {
      dispatch(change(FORM_NAMES.LOGIN_UPDATE, LOGIN_UPDATE.USERNAME, authUsername));
    }
  }

  refresh = (form) => {
    const { dispatch } = this.props;
    return dispatch(
      loginUpdateData({
        key: form[LOGIN_UPDATE.KEY],
        username: form[LOGIN_UPDATE.USERNAME],
        password: form[LOGIN_UPDATE.PASSWORD],
      }),
    );
  };

  isFormDisabled = () => {
    const { valid, pristine, submitting, username, password } = this.props;

    return !valid || pristine || submitting || (!username && !password);
  };

  isFormLoading = () => {
    const { submitting, isDataLoading } = this.props;

    return submitting || isDataLoading;
  };

  render() {
    const { data, isDataLoaded, handleSubmit, isDataError, errorMessage } = this.props;

    return (
      <form onSubmit={handleSubmit((form) => this.refresh(form))}>
        <FormComponent
          loaded={isDataLoaded}
          newKey={data.key}
          loading={this.isFormLoading()}
          errorMessage={errorMessage}
          error={isDataError}
          disabled={this.isFormDisabled()}
          data={data}
        />
      </form>
    );
  }
}

const loginUpdate = reduxForm({
  form: FORM_NAMES.LOGIN_UPDATE,
  validate,
});

const selector = formValueSelector(FORM_NAMES.LOGIN_UPDATE);

const mapStateToProps = ({
  loginUpdate: { data, errorMessage },
  auth: {
    user: { username: authUsername },
  },
  ...state
}) => ({
  errorMessage,
  isDataLoaded: isLoaded(data),
  isDataLoading: isLoading(data),
  isDataError: isError(data),
  data: getData(data, {}),
  authUsername,
  username: selector(state, LOGIN_UPDATE.USERNAME),
  password: selector(state, LOGIN_UPDATE.PASSWORD),
});

LoginUpdateContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  authUsername: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
  valid: PropTypes.bool,
  data: PropTypes.object.isRequired,
  submitting: PropTypes.bool,
  isDataLoading: PropTypes.bool,
  isDataLoaded: PropTypes.bool,
  isDataError: PropTypes.bool,
  pristine: PropTypes.bool,
};

export default compose(connect(mapStateToProps), loginUpdate)(LoginUpdateContainer);
