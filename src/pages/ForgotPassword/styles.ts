import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBgImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 70rem;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 8rem 0;
    width: 34rem;
    text-align: center;

    h1 {
      margin-bottom: 2.4rem;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 2.4rem;
      transition: color 200ms;

      &:hover,
      &:focus {
        color: ${shade(0.2, '#f4ede8')};
      }

      &:active {
        color: ${shade(0.3, '#f4ede8')};
      }
    }
  }

  > a {
    color: #f4ede8;
    display: flex;
    align-items: center;
    transition: color 200ms;

    &:hover,
    &:focus {
      color: ${shade(0.2, '#f4ede8')};
    }

    &:active {
      color: ${shade(0.3, '#f4ede8')};
    }

    svg {
      margin-right: 1.6rem;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBgImg}) no-repeat center;
  background-size: cover;
`;
