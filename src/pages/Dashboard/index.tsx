import React from 'react';
import { FiClock, FiPower } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import UserImage from '../../components/UserImage';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  // const [selectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <UserImage url={user.avatar_url} alt={user.name} />

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

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <UserImage
                url="https://avatars1.githubusercontent.com/u/42191629?v=4"
                alt="João Vítor"
                width={8}
              />

              <strong>João Vítor</strong>
              <span>
                <FiClock size={20} />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock size={17} />
                08:00
              </span>

              <div>
                <UserImage alt="João Vítor" />

                <strong>João Vítor</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock size={17} />
                08:00
              </span>

              <div>
                <UserImage alt="João Vítor" />

                <strong>João Vítor</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock size={17} />
                08:00
              </span>

              <div>
                <UserImage
                  url="https://avatars1.githubusercontent.com/u/42191629?v=4"
                  alt="João Vítor"
                />

                <strong>João Vítor</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
