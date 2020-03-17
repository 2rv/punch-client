import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';

import ReplayIcon from '@material-ui/icons/Replay';

import { getData, isLoading } from '../../utils/store';
import { generateCaptcha } from '../../actions/captcha';

import { Progress } from '../../components';
import { sizes, colors } from '../../theme';

class CaptchaContainer extends Component {
  componentDidMount() {
    return this.getCaptcha();
  }

  getCaptcha = () => {
    const { dispatch } = this.props;

    return dispatch(generateCaptcha());
  };

  render() {
    const { data, isDataLoading } = this.props;

    return (
      <Container>
        {isDataLoading ? <Progress size={sizes.spacing(5)} /> : <CaptchaImage src={data.image} />}
        <Wrapper onClick={this.getCaptcha}>
          <ReplayIcon />
        </Wrapper>
      </Container>
    );
  }
}

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  padding: ${sizes.spacing(2)};
  align-items: center;
  cursor: pointer;
  transition: opacity ${sizes.transition.sm};
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`;

const CaptchaImage = styled.div`
  background-image: url(${(p) => p.src});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  min-width: 100px;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: ${sizes.spacing(1)};
  overflow: hidden;
  background-color: ${colors.darkLight};
`;

const mapStateToProps = ({ captcha: { data } }) => ({
  data: getData(data),
  isDataLoading: isLoading(data),
});

CaptchaContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  isDataLoading: PropTypes.bool.isRequired,
};

export default compose(connect(mapStateToProps))(CaptchaContainer);
