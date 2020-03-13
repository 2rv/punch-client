import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';

import { FORM_NAMES } from '../../constants';

import { validate } from '../../validations/signup';
import { signup } from '../../actions/signup';

import SignupForm from './Form';

class SignupContainer extends Component {
  signup = () => {
    const { dispatch } = this.props;

    return dispatch(signup());
  };

  isFormDisabled = () => {
    const { valid, submitting } = this.props;
    return !valid || submitting;
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

const mapStateToProps = ({ signup: { errorMessage, error } }) => ({
  statusError: error,
  errorMessage,
});

SignupContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  statusError: PropTypes.bool,
  valid: PropTypes.bool,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
};

export default compose(connect(mapStateToProps), loginForm)(SignupContainer);
