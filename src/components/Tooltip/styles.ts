import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    color: #312e38;
    background-color: #ff9000;
    padding: 0.8rem;
    border-radius: 4px;
    font-size: 1.4rem;
    font-weight: 500;
    width: 16rem;
    opacity: 0;
    transition: opacity 400ms;
    pointer-events: none;

    position: absolute;
    bottom: calc(100% + 1.2rem);
    left: 50%;
    transform: translateX(-50%);

    &::after {
      content: '';
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover,
  &:focus {
    span {
      opacity: 1;
    }
  }
`;
