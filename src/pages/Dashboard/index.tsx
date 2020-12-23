import React from 'react';
import { FiPower } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import getUserInitials from '../../utils/getUserInitials';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  ProfileImagePlaceholder,
} from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            {user.avatar_url ? (
              <img src={user.avatar_url} alt={user.name} />
            ) : (
              <ProfileImagePlaceholder>
                {getUserInitials(user.name)}
              </ProfileImagePlaceholder>
            )}

            <div>
              <span>Bem vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" title="Sair do GoBarber" onClick={signOut}>
            <FiPower size={20} />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
