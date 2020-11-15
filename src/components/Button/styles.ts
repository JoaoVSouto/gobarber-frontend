import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
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
`;
