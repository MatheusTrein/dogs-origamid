import styled from 'styled-components';

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  position: sticky;
  top: 4rem;
  z-index: 100;
  width: 100%;
  background-color: white;

  .title {
    margin-top: 2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 430px) {
    .title {
      font-size: 1.9rem;
    }
  }
`;
