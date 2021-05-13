import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import logoloading from '../assets/images/logo-future-eats-invert.svg'

const spin = keyframes`
 0% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  25% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  100% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
`;

const LogoImg = styled.img`
  animation: ${spin} 2s linear infinite;
  width: 60vw;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
`;

class Loader extends Component {
  render() {
    return (
      <Wrapper>
        <LogoImg src={logoloading} />
      </Wrapper>
    );
  }
}
export default Loader;
