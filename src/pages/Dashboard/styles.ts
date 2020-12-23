import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 3.2rem 0;
  background-color: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 8rem;
  }

  button {
    margin-left: auto;
    background-color: transparent;
    border: 0;

    svg {
      color: #999591;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8rem;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 1.6rem;
    line-height: 2.4rem;

    span {
      color: #f4ede8;
    }

    strong {
      color: #ff9000;
    }
  }
`;

export const Content = styled.main`
  max-width: 112rem;
  margin: 6.4rem auto;
  display: flex;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 12rem;

  h1 {
    font-size: 3.6rem;
  }

  p {
    margin-top: 0.8rem;
    color: #ff9000;
    font-weight: 500;

    span + span {
      &::before {
        content: '|';
        margin: 0 0.8rem;
      }
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 6.4rem;

  > strong {
    color: #999591;
    font-size: 2rem;
    font-weight: 400;
  }

  div {
    background-color: #3e3b47;
    display: flex;
    align-items: center;
    padding: 1.6rem 2.4rem;
    border-radius: 10px;
    margin-top: 2.4rem;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      height: 71%;
      width: 2px;
      background-color: #ff9000;
      border-radius: 0 10px 10px 0;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    strong {
      margin-left: 2.4rem;
      color: #f4ede8;
      font-size: 2.4rem;
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #999591;

      svg {
        color: #ff9000;
        margin-right: 0.8rem;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 4.8rem;

  > strong {
    display: block;
    color: #999591;
    font-size: 2rem;
    line-height: 2.6rem;
    padding-bottom: 1.6rem;
    margin-bottom: 1.6rem;
    border-bottom: 1px solid #3e3b47;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  + div {
    margin-top: 1.6rem;
  }

  span {
    display: flex;
    align-items: center;
    color: #f4ede8;

    svg {
      color: #ff9000;
      margin-right: 0.8rem;
    }
  }

  div {
    flex: 1;
    background-color: #3e3b47;
    border-radius: 10px;
    padding: 1.6rem;
    display: flex;
    align-items: center;
    margin-left: 1.6rem;

    strong {
      margin-left: 1.6rem;
      font-size: 2rem;
    }
  }
`;

export const Calendar = styled.aside`
  width: 38rem;
`;
