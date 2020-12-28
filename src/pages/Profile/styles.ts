import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.header`
  height: 14.4rem;
  background-color: #28262e;

  display: flex;
  align-items: center;

  div {
    width: 100%;
    max-width: 114rem;
    margin: 0 auto;

    svg {
      color: #999591;
      width: 2.4rem;
      height: 2.4rem;
      transition: color 200ms;

      &:hover,
      &:focus {
        color: ${shade(0.2, '#999591')};
      }

      &:active {
        color: ${shade(0.3, '#999591')};
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: 0 auto;
  margin-top: -17.6rem;

  form {
    margin: 8rem 0;
    width: 34rem;

    h1 {
      margin-bottom: 2.4rem;
      font-size: 2rem;
    }

    .old-password {
      margin-top: 2.4rem;
    }
  }
`;

export const AvatarInput = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 3.2rem;
  position: relative;

  button {
    position: absolute;
    bottom: 0;
    right: calc(50% - 9.3rem + 3rem);
    transform: translateX(50%);
    height: 4.8rem;
    width: 4.8rem;
    border-radius: 50%;
    border: 0;
    background-color: #ff9000;
    transition: background-color 200ms;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover,
    &:focus {
      background-color: ${shade(0.2, '#ff9000')};
    }

    &:active {
      background-color: ${shade(0.3, '#ff9000')};
    }

    svg {
      color: #312e38;
    }
  }
`;
