import React, { ButtonHTMLAttributes } from 'react';
import { FiLoader } from 'react-icons/fi';

import { Container } from './styles';

interface Props {
  loading?: boolean;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & Props;

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {loading ? (
        <>
          <FiLoader size={16} strokeWidth={3} />
          Carregando...
        </>
      ) : (
        children
      )}
    </Container>
  );
};

export default Button;
