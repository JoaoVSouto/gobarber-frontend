import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFilled?: boolean;
  isErrored?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #232129;
  border-radius: 1rem;
  border: 2px solid #232129;
  padding: 1.6rem;
  width: 100%;
  color: #666360;
  transition: border-color 200ms;

  display: flex;
  align-items: center;

  ${({ isFilled }) =>
    isFilled &&
    css`
      color: #ff9000;
    `}

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: #c53030;
    `}

  &:focus-within {
    color: #ff9000;
    border-color: #ff9000;
  }

  + div {
    margin-top: 0.8rem;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #232129 inset !important;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: #f4ede8 !important;
  }

  input {
    flex: 1;
    color: #f4ede8;
    background-color: transparent;
    border: 0;

    &::placeholder {
      font-size: 1.4rem;
      color: #666360;
    }
  }

  svg {
    transition: color 200ms;
    margin-right: 1.6rem;
  }
`;

export const Error = styled(Tooltip)`
  height: 2rem;
  margin-left: 1.6rem;
  cursor: help;
  text-align: center;

  svg {
    margin: 0;
  }

  span {
    background-color: #c53030;
    color: #fff;

    &::after {
      border-color: #c53030 transparent;
    }
  }
`;
