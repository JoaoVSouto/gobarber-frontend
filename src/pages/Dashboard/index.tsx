import React from 'react';
import { FiPower } from 'react-icons/fi';

import { Container, Header, HeaderContent, Profile } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img
              src="https://avatars1.githubusercontent.com/u/42191629?v=4"
              alt="João Vítor"
            />

            <div>
              <span>Bem vindo,</span>
              <strong>João Vítor</strong>
            </div>
          </Profile>

          <button type="button">
            <FiPower size={20} />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
