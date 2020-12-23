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

  img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    object-fit: cover;
  }

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

export const ProfileImagePlaceholder = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2.4rem;
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
  background-color: #312e38;
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

    img {
      height: 8rem;
      width: 8rem;
      border-radius: 50%;
      object-fit: cover;
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

export const Calendar = styled.aside`
  width: 38rem;
`;
