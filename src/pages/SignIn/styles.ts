import styled from 'styled-components';
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
  align-items: center;

  width: 100%;
  max-width: 70rem;

  form {
    margin: 8rem 0;
    width: 34rem;
    text-align: center;

    h1 {
      margin-bottom: 2.4rem;
    }

    input {
      color: #f4ede8;
      background-color: #232129;
      border-radius: 1rem;
      border: 2px solid #232129;
      padding: 1.6rem;
      width: 100%;

      &::placeholder {
        color: #666360;
      }

      + input {
        margin-top: 0.8rem;
      }
    }

    button {
      font-weight: 500;
      color: #312e38;
      background-color: #ff9000;
      height: 5.6rem;
      border-radius: 1rem;
      border: 0;
      width: 100%;
      margin-top: 2.4rem;
      transition: background-color 200ms;

      &:hover,
      &:focus {
        background-color: ${shade(0.2, '#ff9000')};
      }

      &:active {
        background-color: ${shade(0.3, '#ff9000')};
      }
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
    color: #ff9000;
    display: flex;
    align-items: center;
    transition: color 200ms;

    &:hover,
    &:focus {
      color: ${shade(0.2, '#ff9000')};
    }

    &:active {
      color: ${shade(0.3, '#ff9000')};
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
