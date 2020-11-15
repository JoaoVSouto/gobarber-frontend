import styled from 'styled-components';

export const Container = styled.div`
  background-color: #232129;
  border-radius: 1rem;
  border: 2px solid #232129;
  padding: 1.6rem;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

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
      color: #666360;
    }
  }

  svg {
    margin-right: 1.6rem;
  }
`;
