import styled from 'styled-components';

import backgroundLogin from '../../assets/login.jpg';

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &:before {
    content: '';
    display: block;
    background: url(${backgroundLogin}) no-repeat center center;
    background-size: cover;

    @media (max-width: 40rem) {
      display: none;
    }
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }
`;

export const DivForms = styled.div`
  padding-right: 2rem;
  max-width: 30rem;

  @media (max-width: 40rem) {
    max-width: 100%;
    padding-left: 2rem;
  }
`;
