import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';

import { FORM_NAMES } from '../../constants';
import { LOGIN } from '../../constants/fields';

import { validate } from '../../validations/login';
import { login } from '../../actions/login';

import LoginForm from './Form';

class LoginContainer extends Component {
  login = (form) => {
    const { dispatch } = this.props;

    return dispatch(
      login({
        key: form[LOGIN.KEY],
        username: form[LOGIN.USERNAME],
        password: form[LOGIN.PASSWORD],
      }),
    );
  };

  isFormDisabled = () => {
    const { valid, pristine, submitting } = this.props;

    return !valid || pristine || submitting;
  };

  render() {
    const { submitting, handleSubmit, loading, errorMessage, statusError } = this.props;

    return (
      <form onSubmit={handleSubmit((form) => this.login(form))}>
        <LoginForm
          loading={loading || submitting}
          errorMessage={errorMessage}
          error={statusError}
          disabled={this.isFormDisabled()}
        />
      </form>
    );
  }
}

const loginForm = reduxForm({
  form: FORM_NAMES.LOGIN,
  validate,
});

const mapStateToProps = ({ login: { errorMessage, error, loading } }) => ({
  statusError: error,
  errorMessage,
  loading,
});

LoginContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  statusError: PropTypes.bool,
  valid: PropTypes.bool,
  loading: PropTypes.bool,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
};

export default compose(connect(mapStateToProps), loginForm)(LoginContainer);
