import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';

import { FORM_NAMES } from '../../constants';
import { SIGNUP } from '../../constants/fields';

import { validate } from '../../validations/signup';
import { signup } from '../../actions/signup';
import { getData } from '../../utils/store';

import SignupForm from './Form';

class SignupContainer extends Component {
  signup = (form) => {
    const { dispatch, captcha } = this.props;

    return dispatch(
      signup({
        captchaId: captcha.id,
        captchaValue: form[SIGNUP.CAPTCHA_VALUE],
      }),
    );
  };

  isFormDisabled = () => {
    const { valid, submitting, pristine } = this.props;
    return !valid || submitting || pristine;
  };

  render() {
    const { submitting, handleSubmit, errorMessage, statusError } = this.props;

    return (
      <form onSubmit={handleSubmit((form) => this.signup(form))}>
        <SignupForm
          submitting={submitting}
          errorMessage={errorMessage}
          error={statusError}
          disabled={this.isFormDisabled()}
        />
      </form>
    );
  }
}

const loginForm = reduxForm({
  form: FORM_NAMES.SIGNUP,
  validate,
});

const mapStateToProps = ({ signup: { errorMessage, error }, captcha: { data } }) => ({
  statusError: error,
  errorMessage,
  captcha: getData(data),
});

SignupContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  captcha: PropTypes.object.isRequired,
  errorMessage: PropTypes.string,
  statusError: PropTypes.bool,
  valid: PropTypes.bool,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
};

export default compose(connect(mapStateToProps), loginForm)(SignupContainer);
