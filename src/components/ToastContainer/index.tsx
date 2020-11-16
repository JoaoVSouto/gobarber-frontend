import React from 'react';
import { useTransition } from 'react-spring';

import { ToastMessage } from '../../hooks/toast';

import Toast from './Toast';

import { Container } from './styles';

interface ToastContainerProps {
  messages: Array<ToastMessage>;
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransition = useTransition(messages, ({ id }) => id, {
    from: { right: '-120%', opacity: 0, transform: 'rotateY(180deg)' },
    enter: { right: '0%', opacity: 1, transform: 'rotateY(0deg)' },
    leave: { right: '-120%', opacity: 0, transform: 'rotateY(180deg)' },
  });

  return (
    <Container>
      {messagesWithTransition.map(({ item: message, key, props }) => (
        <Toast key={key} style={props} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
